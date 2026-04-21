import type {
  AboutPageData,
  BlogArticleData,
  BlogCardData,
  BlogCategory,
  HomePageData,
  ServicePageData,
  WPDownloadPost,
  WPMetricAcf,
  WPMetricPost,
  WPImageField,
  WPPost,
  WPPostAcf,
  WPServiceAcf,
  WPServicePost,
  WordPressBlogData,
  WordPressBlogDetailData,
} from '../types/wordpress'
import {
  getSerializableFallbackServices,
  serviceStats,
  stripServiceIcons,
  getServiceBySlug as getFallbackServiceBySlug,
} from './services'
import type { ServiceDetailData, ServiceMetric, ServiceNavItem } from './services'

const serviceRouteSlugAliases = {
  'avaliacao-e-consultoria': 'avaliacao-e-consultoria',
  'avaliacao-e-consultoria-imobiliaria': 'avaliacao-e-consultoria',
  'gestao-de-projectos': 'gestao-de-projectos',
  'gestao-de-projectos-e-fiscalizacao-de-obras': 'gestao-de-projectos',
  'peritagens-tecnicas': 'peritagens-tecnicas',
} as const

const WP_API_BASE =
  (typeof process !== 'undefined' ? process.env.WP_API_URL : undefined) ??
  'https://admin.rec.co.mz/wp-json/wp/v2'
const SITE_URL =
  import.meta.env.VITE_SITE_URL ??
  (typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined) ??
  'https://rec.co.mz'

const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
] as const

const SHORT_MONTH_NAMES = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'] as const

function decodeHtml(value: string) {
  return value
    .replace(/&hellip;/g, '...')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

function stripHtml(value: string) {
  return decodeHtml(value.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()
}

function sanitizeHtml(html: string) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<(iframe|object|embed|form|input|button|textarea|select|link|meta)[^>]*>/gi, '')
    .replace(/ on[a-z]+="[^"]*"/gi, '')
    .replace(/ on[a-z]+='[^']*'/gi, '')
    .replace(/javascript:/gi, '')
}

function formatFullDate(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return `${date.getUTCDate()} de ${MONTH_NAMES[date.getUTCMonth()]} de ${date.getUTCFullYear()}`
}

function formatDateParts(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return { day: '', month: '' }
  }

  return {
    day: String(date.getUTCDate()).padStart(2, '0'),
    month: SHORT_MONTH_NAMES[date.getUTCMonth()],
  }
}

function estimateReadTime(html: string) {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 220))
  return `${minutes} min de leitura`
}

function getFeaturedMedia(post: WPPost | WPServicePost) {
  return post._embedded?.['wp:featuredmedia']?.[0]
}

function getImageSource(image?: WPImageField | null) {
  return image?.source_url ?? image?.url ?? image?.link ?? ''
}

function getImageAlt(image?: WPImageField | null) {
  if (!image) {
    return ''
  }

  if (typeof image.title === 'string') {
    return image.alt ?? image.alt_text ?? image.title
  }

  return image.alt ?? image.alt_text ?? image.title?.rendered ?? ''
}

function getFileName(image?: WPImageField | string | null) {
  if (!image) {
    return ''
  }

  if (typeof image === 'string') {
    return image.split('/').pop() ?? 'brochura'
  }

  if (image.filename) {
    return image.filename
  }

  const source = getImageSource(image)
  return source.split('/').pop() ?? 'brochura'
}

function normalizeImageUrl(url: string) {
  if (!url) {
    return ''
  }

  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('/')) {
    return url
  }

  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

function getTermsByTaxonomy(post: WPPost, taxonomy: string) {
  return (post._embedded?.['wp:term'] ?? []).flat().filter((term) => term.taxonomy === taxonomy)
}

function mapBlogCard(post: WPPost): BlogCardData {
  const { day, month } = formatDateParts(post.date)
  const featuredMedia = getFeaturedMedia(post)

  return {
    slug: post.slug,
    title: stripHtml(post.title.rendered),
    excerpt: stripHtml(getRenderedExcerpt(post)),
    dateDay: day,
    dateMonth: month,
    fullDate: formatFullDate(post.date),
    imageSrc: normalizeImageUrl(featuredMedia?.source_url ?? ''),
    imageAlt: featuredMedia?.alt_text || stripHtml(post.title.rendered),
    author: 'REC',
    category: getTermsByTaxonomy(post, 'category')[0]?.name ?? 'Notícias',
  }
}

function mapBlogArticle(post: WPPost): BlogArticleData {
  const acf = (post.acf ?? {}) as WPPostAcf
  const category = getTermsByTaxonomy(post, 'category')[0]?.name ?? 'Notícias'
  const tags = getTermsByTaxonomy(post, 'post_tag').map((term) => term.name)
  const featuredMedia = getFeaturedMedia(post)
  const gallery = (acf.galeria ?? [])
    .map((image) => ({
      src: normalizeImageUrl(getImageSource(image)),
      alt: getImageAlt(image) || 'Imagem da publicação da REC',
      href: `/blog/${post.slug}`,
    }))
    .filter((image) => image.src)

  return {
    ...mapBlogCard(post),
    imageSrc: normalizeImageUrl(featuredMedia?.source_url ?? ''),
    imageAlt:
      acf.texto_alt_imagem_destacada || featuredMedia?.alt_text || stripHtml(post.title.rendered),
    author: 'REC',
    category,
    readTime: acf.tempo_de_leitura?.trim() || estimateReadTime(getRenderedContent(post)),
    contentHtml: sanitizeHtml(getRenderedContent(post)),
    quote:
      acf.texto_citacao && acf.autor_citacao
        ? {
            text: acf.texto_citacao,
            author: acf.autor_citacao,
          }
        : undefined,
    gallery,
    tags,
    authorRole: acf.cargo_autor,
    authorBio: acf.bio_autor,
    authorImageSrc: normalizeImageUrl(getImageSource(acf.fotografia_autor)),
    authorImageAlt: getImageAlt(acf.fotografia_autor) || 'Fotografia do autor',
  }
}

function splitParagraphs(html: string) {
  return sanitizeHtml(html)
    .split(/<\/p>/i)
    .map((fragment) => stripHtml(fragment))
    .filter(Boolean)
}

function getRenderedExcerpt(post: WPPost | WPServicePost | WPMetricPost) {
  return post.excerpt?.rendered ?? ''
}

function getRenderedContent(post: WPPost | WPServicePost | WPMetricPost) {
  return post.content?.rendered ?? ''
}

function normalizeServiceRouteSlug(slug: string, title: string) {
  const directMatch = serviceRouteSlugAliases[slug as keyof typeof serviceRouteSlugAliases]

  if (directMatch) {
    return directMatch
  }

  const normalizedTitle = title.toLowerCase()

  if (normalizedTitle.includes('avaliação') || normalizedTitle.includes('avaliacao')) {
    return 'avaliacao-e-consultoria'
  }

  if (normalizedTitle.includes('gestão') || normalizedTitle.includes('gestao')) {
    return 'gestao-de-projectos'
  }

  if (normalizedTitle.includes('peritagens')) {
    return 'peritagens-tecnicas'
  }

  return slug
}

function mapMetric(post: WPMetricPost): ServiceMetric | null {
  const acf = (post.acf ?? {}) as WPMetricAcf
  const value =
    acf.valor?.trim() ?? acf.numero?.trim() ?? acf.valor_metrica?.trim() ?? stripHtml(post.title.rendered)
  const label =
    acf.titulo?.trim() ?? acf.rotulo?.trim() ?? acf.nome?.trim() ?? stripHtml(post.title.rendered)
  const description =
    acf.descricao?.trim() ?? acf.texto?.trim() ?? acf.descricao_curta?.trim() ?? stripHtml(getRenderedExcerpt(post))

  if (!value || !label || !description) {
    return null
  }

  return {
    slug: post.slug,
    value,
    label,
    description,
  }
}

function mapMetricRepeater(post: WPMetricPost): ServiceMetric[] {
  const acf = (post.acf ?? {}) as WPMetricAcf

  return (acf.campos_das_metricas ?? [])
    .map((item, index) => ({
      slug: `${post.slug}-${index + 1}`,
      value: item.numeros?.trim() ?? '',
      label: item.titulo?.trim() ?? '',
      description: item.descricao?.trim() ?? '',
    }))
    .filter((metric) => metric.value && metric.label && metric.description)
}

function getBrochureDownloadId(brochure: WPServiceAcf['brochuras'] extends infer T ? T extends Array<infer U> ? U : never : never) {
  const value = brochure?.brochura?.[0]

  if (typeof value === 'number') {
    return value
  }

  if (value && typeof value === 'object' && 'ID' in value && typeof value.ID === 'number') {
    return value.ID
  }

  return null
}

async function getDownloadsByIds(ids: readonly number[]) {
  if (ids.length === 0) {
    return new Map<number, WPDownloadPost>()
  }

  const downloads = await fetchWordPress<WPDownloadPost[]>('dlm_download', {
    include: ids.join(','),
    per_page: ids.length,
  })

  return new Map((downloads ?? []).map((download) => [download.id, download] as const))
}

function mergeServicesWithFallback(services: ServiceDetailData[]) {
  const merged = new Map(
    getSerializableFallbackServices().map((service) => [service.slug, service] as const)
  )

  for (const service of services) {
    merged.set(service.slug, service)
  }

  return Array.from(merged.values())
}

function mapService(post: WPServicePost, downloadsById: ReadonlyMap<number, WPDownloadPost>): ServiceDetailData {
  const acf = (post.acf ?? {}) as WPServiceAcf
  const featuredMedia = getFeaturedMedia(post)
  const title = stripHtml(post.title.rendered)
  const routeSlug = normalizeServiceRouteSlug(post.slug, title)
  const processStepsField =
    acf.detalhes_de_servicos ?? acf.detalhes_servicos ?? acf.etapas ?? acf.etapas_processo ?? []
  const reasonsField = acf.porque_rec ?? acf.por_que_rec ?? acf.razoes_para_escolher ?? []
  const overviewHighlights = (acf.conformidades ?? acf.destaques_visao_geral ?? [])
    .map((item) => ({
      title: item.titulo?.trim() ?? item.title?.trim() ?? '',
      description: item.descricao?.trim() ?? item.description?.trim() ?? '',
    }))
    .filter((item) => item.title && item.description)
  const offers = (acf.tipos_de_servicos ?? acf.servicos_prestados ?? [])
    .map((offer) => ({
      title: offer.titulo?.trim() ?? offer.title?.trim() ?? '',
      description: offer.descricao?.trim() ?? offer.description?.trim() ?? '',
      items: (offer.items ?? []).map((item) => item.item?.trim() ?? '').filter(Boolean),
    }))
    .filter((offer) => offer.title && offer.description)

  return {
    slug: routeSlug,
    href: `/servicos/${routeSlug}`,
    navLabel: acf.rotulo_navegacao?.trim() || title,
    title,
    shortTitle: acf.titulo_curto?.trim() || title,
    description: stripHtml(getRenderedExcerpt(post)),
    lead: acf.lead?.trim() || stripHtml(getRenderedExcerpt(post)),
    imageSrc: normalizeImageUrl(featuredMedia?.source_url ?? ''),
    imageAlt:
      acf.texto_alt_imagem_cabecalho || featuredMedia?.alt_text || title,
    overviewParagraphs: splitParagraphs(getRenderedContent(post)),
    overviewHighlights,
    offers,
    processTitle: acf.titulo_processo?.trim() || '3 Etapas do Nosso Acompanhamento',
    processIntro:
      acf.introducao_processo?.trim() ||
      'Estruturamos cada trabalho de forma clara, documentada e verificável para garantir consistência técnica e decisões fundamentadas.',
    processSteps: processStepsField
      .map((step) => ({
        title: step.titulo?.trim() ?? step.title?.trim() ?? '',
        description: step.descricao?.trim() ?? step.description?.trim() ?? '',
      }))
      .filter((step) => step.title && step.description),
    reasons: reasonsField
      .map((reason) => ({
        title: reason.titulo?.trim() ?? reason.title?.trim() ?? '',
        description: reason.descricao?.trim() ?? reason.description?.trim() ?? '',
      }))
      .filter((reason) => reason.title && reason.description),
    brochureDownloads: (acf.brochuras ?? [])
      .map((brochure) => {
        const brochureId = getBrochureDownloadId(brochure)
        const linkedDownload = brochureId ? downloadsById.get(brochureId) : null
        const href =
          linkedDownload?.link ??
          (typeof brochure.file === 'string' ? brochure.file : getImageSource(brochure.file))

        return {
          label:
            brochure.titulo?.trim() ??
            brochure.label?.trim() ??
            (stripHtml(linkedDownload?.title.rendered ?? '') || getFileName(brochure.file)),
          fileName: getFileName(brochure.file) || `${linkedDownload?.slug ?? 'brochura'}.pdf`,
          href: normalizeImageUrl(href),
        }
      })
      .filter((brochure) => brochure.href && brochure.label),
  }
}

function mapServiceNavItems(services: ServiceDetailData[]): ServiceNavItem[] {
  return services.map((service) => ({
    label: service.navLabel,
    href: service.href,
  }))
}

async function fetchWordPress<T>(path: string, searchParams?: Record<string, string | number | undefined>) {
  const url = new URL(path, `${WP_API_BASE.replace(/\/$/, '')}/`)

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined && value !== '') {
        url.searchParams.set(key, String(value))
      }
    }
  }

  try {
    const response = await fetch(url.toString())

    if (!response.ok) {
      return null
    }

    return (await response.json()) as T
  } catch {
    return null
  }
}

export async function getPosts(params?: {
  page?: number
  perPage?: number
  category?: number
}): Promise<BlogCardData[]> {
  const posts = await fetchWordPress<WPPost[]>('posts', {
    _embed: 1,
    page: params?.page ?? 1,
    per_page: params?.perPage ?? 9,
    categories: params?.category,
  })

  return (posts ?? []).map(mapBlogCard)
}

export async function getRawPosts(params?: {
  page?: number
  perPage?: number
  category?: number
}): Promise<WPPost[]> {
  const posts = await fetchWordPress<WPPost[]>('posts', {
    _embed: 1,
    page: params?.page ?? 1,
    per_page: params?.perPage ?? 9,
    categories: params?.category,
  })

  return posts ?? []
}

export async function getPostBySlug(slug: string): Promise<BlogArticleData | null> {
  const posts = await fetchWordPress<WPPost[]>('posts', {
    _embed: 1,
    slug,
    per_page: 1,
  })

  const post = posts?.[0]

  return post ? mapBlogArticle(post) : null
}

export async function getCategories(): Promise<BlogCategory[]> {
  const categories = await fetchWordPress<Array<{ id: number; name: string; slug: string; count: number }>>(
    'categories',
    { per_page: 100 }
  )

  return (categories ?? []).map((category) => ({
    label: category.name,
    slug: category.slug,
    count: category.count,
  }))
}

export async function getServices(): Promise<ServiceDetailData[]> {
  const posts = await fetchWordPress<WPServicePost[]>('servicos', {
    _embed: 1,
    per_page: 100,
  })

  if (!posts || posts.length === 0) {
    return getSerializableFallbackServices()
  }

  const brochureIds = posts.flatMap((post) => {
    const acf = (post.acf ?? {}) as WPServiceAcf

    return (acf.brochuras ?? [])
      .map((brochure) => getBrochureDownloadId(brochure))
      .filter((id): id is number => id !== null)
  })
  const downloadsById = await getDownloadsByIds([...new Set(brochureIds)])

  return mergeServicesWithFallback(posts.map((post) => mapService(post, downloadsById)))
}

export async function getMetrics(): Promise<ServiceMetric[]> {
  const posts = await fetchWordPress<WPMetricPost[]>('metricas', {
    per_page: 100,
    _embed: '1',
  })

  if (!posts || posts.length === 0) {
    return [...serviceStats]
  }

  const repeaterMetrics = posts.flatMap(mapMetricRepeater)

  if (repeaterMetrics.length > 0) {
    return repeaterMetrics
  }

  const metrics = posts
    .slice()
    .sort((left, right) => {
      const orderDiff = (left.menu_order ?? 0) - (right.menu_order ?? 0)

      if (orderDiff !== 0) {
        return orderDiff
      }

      return left.id - right.id
    })
    .map(mapMetric)
    .filter((metric): metric is ServiceMetric => metric !== null)

  return metrics.length > 0 ? metrics : [...serviceStats]
}

export async function getServiceBySlug(slug: string): Promise<ServiceDetailData | null> {
  const services = await getServices()
  const service = services.find((item) => item.slug === slug)

  return service ? service : (() => {
    const fallbackService = getFallbackServiceBySlug(slug)
    return fallbackService ? stripServiceIcons(fallbackService) : null
  })()
}

export async function getBlogPageData(): Promise<WordPressBlogData> {
  const [posts, categories, recentPosts] = await Promise.all([
    getPosts({ perPage: 9, page: 1 }),
    getCategories(),
    getPosts({ perPage: 3, page: 1 }),
  ])

  return {
    posts,
    categories,
    recentPosts,
  }
}

export async function getBlogPostPageData(slug: string): Promise<WordPressBlogDetailData> {
  const [post, categories, recentPosts] = await Promise.all([
    getPostBySlug(slug),
    getCategories(),
    getPosts({ perPage: 3, page: 1 }),
  ])

  return {
    post,
    categories,
    recentPosts,
  }
}

export async function getHomePageData(): Promise<HomePageData> {
  const [posts, services, metrics] = await Promise.all([
    getPosts({ perPage: 3, page: 1 }),
    getServices(),
    getMetrics(),
  ])

  return {
    posts: posts.slice(0, 3),
    services,
    metrics,
  }
}

export async function getAboutPageData(): Promise<AboutPageData> {
  const metrics = await getMetrics()

  return {
    metrics,
  }
}

export async function getServicePageData(slug: string): Promise<ServicePageData> {
  const [service, services, metrics] = await Promise.all([getServiceBySlug(slug), getServices(), getMetrics()])

  return {
    service,
    serviceLinks: mapServiceNavItems(services),
    metrics,
  }
}
