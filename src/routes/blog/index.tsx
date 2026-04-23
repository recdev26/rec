import { createFileRoute } from '@tanstack/react-router'
import BlogListingCard from '../../components/blog/BlogListingCard'
import BlogPagination from '../../components/blog/BlogPagination'
import BlogSidebar from '../../components/blog/BlogSidebar'
import PageBreadcrumb from '../../components/layout/PageBreadcrumb'
import { resolveLocaleFromSearch } from '../../lib/i18n'
import { useLocale } from '../../lib/use-locale'
import { buildSeoHead } from '../../lib/seo'
import { getBlogPageData } from '../../lib/wp-api'

export const Route = createFileRoute('/blog/')({
  loader: async ({ location }) => getBlogPageData(resolveLocaleFromSearch(location.search)),
  head: () =>
    buildSeoHead({
      title: 'Blog',
      description:
        'Acompanhe artigos, análises e perspectivas da REC sobre avaliação imobiliária, gestão de projectos, fiscalização de obras e peritagens técnicas.',
      path: '/blog',
    }),
  component: BlogPage,
})

function BlogPage() {
  const { posts, categories, recentPosts } = Route.useLoaderData()
  const locale = useLocale()

  const breadcrumbLabel = locale === 'en' ? 'News' : 'Notícias'

  return (
    <>
      <PageBreadcrumb label={breadcrumbLabel} title="Blog" />

      <section className="overflow-x-hidden bg-[var(--color-off-white)] py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8 lg:px-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="min-w-0">
            <div className="space-y-8 lg:space-y-10">
              {posts.map((post) => (
                <BlogListingCard key={post.slug} post={post} />
              ))}
            </div>

            <BlogPagination pages={[1]} currentPage={1} />
          </div>

          <BlogSidebar categories={categories} recentPosts={recentPosts} />
        </div>
      </section>
    </>
  )
}
