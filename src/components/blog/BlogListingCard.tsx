import { ArrowRight, Clock3, Tag, UserRound } from 'lucide-react'
import type { BlogMockPost } from '../../lib/blog-mock'

interface BlogListingCardProps {
  post: BlogMockPost
}

export default function BlogListingCard({ post }: BlogListingCardProps) {
  return (
    <article className="min-w-0 overflow-hidden bg-white shadow-[0_20px_48px_rgba(11,46,44,0.1)]">
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[16/11] lg:h-[25rem] lg:aspect-auto">
        <img
          src={post.imageSrc}
          alt={post.imageAlt}
          width="1600"
          height="960"
          className="absolute inset-0 block h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(8,26,26,0.86)_100%)]" />

        <div className="absolute left-4 top-4 flex h-14 w-14 flex-col items-center justify-center bg-[var(--color-accent)] text-white shadow-[0_16px_24px_rgba(18,137,130,0.3)] sm:left-6 sm:top-6 sm:h-16 sm:w-16">
          <span className="font-heading text-xl leading-none font-bold sm:text-2xl">{post.dateDay}</span>
          <span className="mt-1 text-[0.65rem] font-semibold tracking-[0.1em] uppercase sm:text-[0.72rem]">
            {post.dateMonth}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-3 px-4 py-3 text-xs text-white/88 sm:gap-5 sm:px-6 sm:py-4 sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <UserRound size={15} strokeWidth={2} />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Tag size={15} strokeWidth={2} />
            {post.category}
          </span>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <Clock3 size={15} strokeWidth={2} />
            {post.fullDate}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-7 lg:p-10">
        <h2 className="font-heading text-xl leading-snug font-bold text-[var(--color-text)] sm:text-2xl">
          {post.title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-gray-dark)] sm:mt-6 sm:text-base sm:leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-6 border-t border-[var(--color-gray-light)] pt-5 sm:mt-8 sm:pt-7">
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-[var(--color-accent)] px-5 text-sm font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white sm:min-h-12 sm:gap-3 sm:px-7 sm:text-base"
          >
            Ler detalhes
            <ArrowRight size={18} strokeWidth={2.1} />
          </a>
        </div>
      </div>
    </article>
  )
}
