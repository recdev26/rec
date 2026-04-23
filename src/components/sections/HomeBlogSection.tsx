import BlogCard from '../blog/BlogCard'
import SectionLabel from '../ui/SectionLabel'
import type { BlogCardData } from '../../types/wordpress'
import { useLocale } from '../../lib/use-locale'

const tones = ['sage', 'mist', 'clay'] as const

interface HomeBlogSectionProps {
  posts: readonly BlogCardData[]
}

export default function HomeBlogSection({ posts }: HomeBlogSectionProps) {
  const locale = useLocale()
  const label = locale === 'en' ? 'News' : 'Notícias'
  const title = locale === 'en' ? 'Latest Publications' : 'Últimas Publicações'

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel align="center">{label}</SectionLabel>
          <h2 className="font-heading text-2xl md:text-4xl leading-tight font-bold text-[var(--color-text)]">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <BlogCard
              key={post.slug}
              dateDay={post.dateDay}
              dateMonth={post.dateMonth}
              title={post.title}
              excerpt={post.excerpt}
              href={`/blog/${post.slug}`}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
              tone={tones[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
