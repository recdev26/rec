import { Facebook, Instagram, Quote, Tag, Twitter, UserRound } from 'lucide-react'
import type { BlogMockPost } from '../../lib/blog-mock'

interface BlogPostArticleProps {
  post: BlogMockPost
}

export default function BlogPostArticle({ post }: BlogPostArticleProps) {
  return (
    <article className="min-w-0 w-full max-w-full overflow-hidden bg-white shadow-[0_20px_48px_rgba(11,46,44,0.1)]">
      <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden sm:aspect-[16/11] lg:h-[26rem] lg:aspect-auto">
        <img
          src={post.imageSrc}
          alt={post.imageAlt}
          width="1600"
          height="960"
          className="absolute inset-0 block h-full w-full max-w-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 max-w-full bg-[linear-gradient(180deg,transparent_0%,rgba(8,26,26,0.86)_100%)]" />

        {post.dateDay && post.dateMonth ? (
          <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center bg-[var(--color-accent)] text-white shadow-[0_16px_24px_rgba(18,137,130,0.3)] sm:left-6 sm:top-6">
            <span className="font-heading text-2xl leading-none font-bold">{post.dateDay}</span>
            <span className="mt-1 text-[0.72rem] font-semibold tracking-[0.1em] uppercase">
              {post.dateMonth}
            </span>
          </div>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 flex max-w-full flex-wrap items-center gap-4 px-4 py-4 text-sm text-white/88 sm:px-6">
          <span className="inline-flex items-center gap-2">
            <UserRound size={15} strokeWidth={2} />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Tag size={15} strokeWidth={2} />
            {post.category}
          </span>
        </div>
      </div>

      <div className="w-full max-w-full p-5 sm:p-8 lg:p-10">
        {post.fullDate || post.readTime ? (
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-[var(--color-gray-dark)] sm:mb-6 sm:text-sm">
            {post.fullDate ? <span>{post.fullDate}</span> : null}
            {post.fullDate && post.readTime ? (
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            ) : null}
            {post.readTime ? <span>{post.readTime}</span> : null}
          </div>
        ) : null}

        <h1 className="max-w-full break-words font-heading text-2xl leading-tight font-bold text-[var(--color-text)] sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--color-gray-dark)] sm:mt-6 sm:text-base sm:leading-relaxed">{post.excerpt}</p>

        <div className="prose prose-sm mt-6 max-w-none prose-p:text-[var(--color-gray-dark)] prose-p:leading-7 sm:prose-base sm:mt-8 sm:prose-p:leading-relaxed">
          {post.bodyIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {post.quote ? (
          <blockquote className="mt-8 flex flex-col gap-4 bg-[var(--color-off-white)] p-5 not-italic shadow-[0_12px_30px_rgba(11,46,44,0.06)] sm:mt-10 sm:gap-6 sm:p-8 lg:flex-row">
            <div className="inline-flex h-24 w-24 shrink-0 items-center justify-center bg-[var(--color-accent)] text-white">
              <Quote size={38} strokeWidth={2.2} />
            </div>
            <div>
              <p className="font-heading text-xl leading-tight font-semibold text-[var(--color-text)] sm:text-2xl">
                {post.quote.text}
              </p>
              <p className="mt-4 text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
                {post.quote.author}
              </p>
            </div>
          </blockquote>
        ) : null}

        <div className="prose prose-sm mt-6 max-w-none prose-p:text-[var(--color-gray-dark)] prose-p:leading-7 sm:prose-lg sm:mt-8 sm:prose-p:leading-8">
          {post.bodyMiddle.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {post.gallery.map((image) => (
            <img
              key={image.src + image.alt}
              src={image.src}
              alt={image.alt}
              width="900"
              height="620"
              className="block h-52 w-full max-w-full object-cover sm:h-64"
            />
          ))}
        </div>

        <div className="prose prose-sm mt-6 max-w-none prose-p:text-[var(--color-gray-dark)] prose-p:leading-7 sm:prose-lg sm:mt-8 sm:prose-p:leading-8">
          {post.bodyConclusion.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {post.closingTitle ? (
          <>
            <img
              src={post.gallery[0]?.src ?? post.imageSrc}
              alt={post.gallery[0]?.alt ?? post.imageAlt}
              width="1600"
              height="900"
              className="mt-8 block h-52 w-full max-w-full object-cover sm:mt-10 sm:h-[22rem]"
            />

            <h2 className="mt-6 font-heading text-2xl font-bold text-[var(--color-text)] sm:mt-8 sm:text-3xl">
              {post.closingTitle}
            </h2>

            <div className="prose prose-sm mt-4 max-w-none prose-p:text-[var(--color-gray-dark)] prose-p:leading-7 sm:mt-6 sm:prose-lg sm:prose-p:leading-8">
              {post.bodyConclusion.map((paragraph) => (
                <p key={`${paragraph}-closing`}>{paragraph}</p>
              ))}
            </div>
          </>
        ) : null}

        <div className="mt-8 flex flex-col gap-5 border-t border-[var(--color-gray-light)] pt-6 sm:mt-10 sm:gap-6 sm:pt-8 lg:flex-row lg:items-center lg:justify-between">
          {post.tags?.length ? (
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold text-[var(--color-text)]">Tags:</span>
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="inline-flex items-center justify-center bg-[var(--color-off-white)] px-4 py-2 text-sm font-medium !text-[var(--color-text)] no-underline transition hover:!text-[var(--color-accent)]"
                >
                  {tag}
                </a>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-[var(--color-text)]">Partilhar:</span>
            {[
              { label: 'Facebook', href: 'https://www.facebook.com', icon: Facebook },
              { label: 'X', href: 'https://www.x.com', icon: Twitter },
              { label: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-off-white)] !text-[var(--color-text)] no-underline transition hover:!text-[var(--color-accent)]"
              >
                <Icon size={17} strokeWidth={2.1} />
              </a>
            ))}
          </div>
        </div>

        {post.authorBio && post.authorImageSrc && post.authorImageAlt && post.authorRole ? (
          <section className="mt-8 border-t border-[var(--color-gray-light)] pt-6 sm:mt-10 sm:pt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <img
                src={post.authorImageSrc}
                alt={post.authorImageAlt}
                width="120"
                height="120"
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
                  {post.authorRole}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                  {post.author}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-gray-dark)]">{post.authorBio}</p>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </article>
  )
}
