import BlogCard from '../blog/BlogCard'
import SectionLabel from '../ui/SectionLabel'
import { blogPosts } from '../../lib/blog-mock'

const tones = ['sage', 'mist', 'clay'] as const

export default function HomeBlogSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel align="center">Notícias</SectionLabel>
          <h2 className="font-heading text-2xl md:text-4xl leading-tight font-bold text-[var(--color-text)]">
            Últimas Publicações
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogCard
              key={post.slug}
              dateDay={post.dateDay}
              dateMonth={post.dateMonth}
              title={post.title}
              excerpt={post.excerpt}
              href={`/blog/${post.slug}`}
              tone={tones[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
