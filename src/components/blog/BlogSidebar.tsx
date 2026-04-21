import { ArrowRight, Clock3, Phone, Search } from 'lucide-react'
import type { BlogCardData, BlogCategory, BlogSidebarImage } from '../../types/wordpress'

interface BlogSidebarProps {
  categories: readonly BlogCategory[]
  recentPosts: readonly BlogCardData[]
  galleryImages?: readonly BlogSidebarImage[]
  tags?: readonly string[]
}

export function SidebarCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="bg-white p-5 shadow-[0_18px_40px_rgba(11,46,44,0.08)] sm:p-8">
      <h2 className="font-heading text-xl font-bold text-[var(--color-text)] sm:text-2xl">{title}</h2>
      <div className="mt-4 h-1 w-12 bg-[var(--color-accent)] sm:mt-5 sm:w-14" />
      <div className="mt-3 h-px w-full bg-[var(--color-gray-light)] sm:mt-4" />
      <div className="mt-5 sm:mt-7">{children}</div>
    </section>
  )
}

export default function BlogSidebar({
  categories,
  recentPosts,
  galleryImages = [],
  tags = [],
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      <SidebarCard title="Pesquisar">
        <form className="flex items-stretch gap-2 sm:gap-3">
          <label className="sr-only" htmlFor="blog-search">
            Procurar artigos
          </label>
          <input
            id="blog-search"
            type="search"
            placeholder="Pesquisar artigo"
            className="min-h-12 flex-1 border border-[var(--color-gray-light)] bg-white px-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
          />
          <button
            type="submit"
            className="inline-flex h-12 w-12 items-center justify-center bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-hover)] sm:h-14 sm:w-14"
            aria-label="Pesquisar"
          >
            <Search size={18} strokeWidth={2.4} />
          </button>
        </form>
      </SidebarCard>

      <SidebarCard title="Categorias">
        <div className="space-y-3">
          {categories.map((category) => (
            <a
               key={category.slug}
               href={`/blog?categoria=${encodeURIComponent(category.slug)}`}
              className="flex items-center justify-between gap-4 border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 py-3 no-underline transition hover:border-[var(--color-accent)] hover:bg-white sm:px-5 sm:py-4"
            >
              <span className="min-w-0 text-sm font-medium text-[var(--color-text)] sm:text-base">{category.label}</span>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm text-[var(--color-accent)] sm:gap-3">
                {category.count}
                <ArrowRight size={17} strokeWidth={2.1} />
              </span>
            </a>
          ))}
        </div>
      </SidebarCard>

      <SidebarCard title="Publicações Recentes">
        <div className="space-y-4 sm:space-y-5">
          {recentPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`${index < recentPosts.length - 1 ? 'border-b border-[var(--color-gray-light)] pb-5' : ''}`}
            >
              <a href={`/blog/${post.slug}`} className="flex gap-3 no-underline sm:gap-4">
                <img
                   src={post.imageSrc}
                   alt={post.imageAlt}
                  width="120"
                  height="120"
                  className="h-16 w-16 shrink-0 object-cover sm:h-20 sm:w-20"
                />
                <span className="min-w-0">
                  {post.fullDate ? (
                    <span className="inline-flex items-center gap-2 text-xs text-[var(--color-gray-dark)] sm:text-sm">
                      <Clock3 size={14} strokeWidth={2} />
                      {post.fullDate}
                    </span>
                  ) : null}
                  <span className="mt-2 block font-heading text-base leading-snug font-semibold text-[var(--color-text)] sm:text-lg">
                    {post.title}
                  </span>
                </span>
              </a>
            </article>
          ))}
        </div>
      </SidebarCard>

      {galleryImages.length > 0 ? (
        <div className="hidden lg:block">
          <SidebarCard title="Galeria">
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image) => (
                <a key={image.href + image.src} href={image.href} className="block no-underline">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="220"
                    height="220"
                    className="h-20 w-full object-cover"
                  />
                </a>
              ))}
            </div>
          </SidebarCard>
        </div>
      ) : null}

      {tags.length > 0 ? (
        <div className="hidden lg:block">
          <SidebarCard title="Temas Populares">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <a
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center justify-center bg-[var(--color-off-white)] px-4 py-2 text-sm font-medium !text-[var(--color-text)] no-underline transition hover:!text-[var(--color-accent)]"
                >
                  {tag}
                </a>
              ))}
            </div>
          </SidebarCard>
        </div>
      ) : null}

      <section className="bg-[var(--color-accent)] p-5 text-white shadow-[0_20px_40px_rgba(11,46,44,0.16)] sm:p-8">
        <p className="text-sm font-semibold tracking-[0.22em] text-white/76 uppercase">
          Precisa de apoio?
        </p>
        <h2 className="mt-4 font-heading text-xl font-bold text-white sm:text-2xl">
          Fale hoje com a REC
        </h2>
        <p className="mt-4 leading-relaxed text-white/82">
          Estamos prontos para apoiar decisões imobiliárias com rigor técnico, clareza e capacidade de resposta.
        </p>

        <div className="mt-8 border-t border-white/18 pt-6">
          <a
            href="tel:+25821505000"
            className="flex items-center gap-3 !text-white no-underline transition hover:!text-white/84 sm:gap-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-accent)] sm:h-12 sm:w-12">
              <Phone size={20} strokeWidth={2.1} />
            </span>
            <span>
              <span className="block text-sm text-white/72">Telefone</span>
              <span className="block text-lg font-bold sm:text-xl">+258 21 505 000</span>
            </span>
          </a>
        </div>

        <a
          href="/contactos"
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-3 bg-white px-5 text-sm font-semibold !text-[var(--color-accent)] no-underline transition hover:bg-[var(--color-accent-light)] sm:min-h-12 sm:px-6 sm:text-base"
        >
          Contacte-nos
          <ArrowRight size={18} strokeWidth={2.1} />
        </a>
      </section>
    </aside>
  )
}
