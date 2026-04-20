import type { ServiceDetailData, ServiceNavItem } from '../lib/services'

export interface WPTerm {
  id: number
  name: string
  slug: string
  taxonomy: string
  count?: number
}

export interface WPFeaturedMedia {
  id: number
  source_url?: string
  alt_text?: string
}

export interface WPEmbedded {
  'wp:featuredmedia'?: WPFeaturedMedia[]
  'wp:term'?: WPTerm[][]
}

export interface WPImageField {
  id?: number
  title?: string | { rendered?: string }
  filename?: string
  url?: string
  link?: string
  alt?: string
  alt_text?: string
  source_url?: string
}

export interface WPRepeaterTextItem {
  item?: string
}

export interface WPServiceHighlightField {
  title?: string
  description?: string
}

export interface WPServiceOfferField {
  title?: string
  description?: string
  items?: WPRepeaterTextItem[]
}

export interface WPServiceProcessStepField {
  title?: string
  description?: string
}

export interface WPServiceReasonField {
  title?: string
  description?: string
}

export interface WPServiceBrochureField {
  label?: string
  file?: WPImageField | string
}

export interface WPPostAcf {
  tempo_de_leitura?: string
  texto_citacao?: string
  autor_citacao?: string
  galeria?: WPImageField[]
  cargo_autor?: string
  bio_autor?: string
  fotografia_autor?: WPImageField | null
  texto_alt_imagem_destacada?: string
}

export interface WPServiceAcf {
  titulo_curto?: string
  rotulo_navegacao?: string
  lead?: string
  texto_alt_imagem_cabecalho?: string
  destaques_visao_geral?: WPServiceHighlightField[]
  servicos_prestados?: WPServiceOfferField[]
  titulo_processo?: string
  introducao_processo?: string
  etapas_processo?: WPServiceProcessStepField[]
  razoes_para_escolher?: WPServiceReasonField[]
  brochuras?: WPServiceBrochureField[]
}

export interface WPPostBase {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media?: number
  acf?: WPPostAcf | WPServiceAcf
  _embedded?: WPEmbedded
}

export interface WPPost extends WPPostBase {
  categories?: number[]
  tags?: number[]
}

export interface WPServicePost extends WPPostBase {
  type: 'servico'
}

export interface BlogCategory {
  label: string
  slug: string
  count: number
}

export interface BlogCardData {
  slug: string
  title: string
  excerpt: string
  dateDay: string
  dateMonth: string
  fullDate: string
  imageSrc: string
  imageAlt: string
  author: string
  category: string
}

export interface BlogSidebarImage {
  src: string
  alt: string
  href: string
}

export interface BlogArticleData extends BlogCardData {
  imageSrc: string
  imageAlt: string
  author: string
  category: string
  readTime: string
  contentHtml: string
  quote?: {
    text: string
    author: string
  }
  gallery: BlogSidebarImage[]
  tags: string[]
  authorRole?: string
  authorBio?: string
  authorImageSrc?: string
  authorImageAlt?: string
}

export interface WordPressBlogData {
  posts: BlogCardData[]
  categories: BlogCategory[]
  recentPosts: BlogCardData[]
}

export interface WordPressBlogDetailData {
  post: BlogArticleData | null
  categories: BlogCategory[]
  recentPosts: BlogCardData[]
}

export interface HomePageData {
  posts: BlogCardData[]
  services: ServiceDetailData[]
}

export interface ServicePageData {
  service: ServiceDetailData | null
  serviceLinks: ServiceNavItem[]
}
