import { createFileRoute } from '@tanstack/react-router'
import BlogPostArticle from '../../components/blog/BlogPostArticle'
import BlogReplyForm from '../../components/blog/BlogReplyForm'
import BlogSidebar from '../../components/blog/BlogSidebar'
import NotFoundPage from '../../components/layout/NotFoundPage'
import PageBreadcrumb from '../../components/layout/PageBreadcrumb'
import { buildArticleSchema, buildSeoHead, resolveAbsoluteUrl } from '../../lib/seo'
import { getBlogPostPageData } from '../../lib/wp-api'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => getBlogPostPageData(params.slug),
  head: ({ loaderData }) => {
    const post = loaderData?.post

    if (!post) {
      return buildSeoHead({
        title: 'Página não encontrada',
        description: 'A página solicitada não foi encontrada no website da REC.',
        path: '/blog',
        noIndex: true,
      })
    }

    const canonicalPath = `/blog/${post.slug}`

    return {
      ...buildSeoHead({
        title: post.title,
        description: post.excerpt,
        path: canonicalPath,
        type: 'article',
        publishedTime: post.publishedAt,
        modifiedTime: post.modifiedAt,
      }),
      scripts: [
        buildArticleSchema({
          canonicalUrl: resolveAbsoluteUrl(canonicalPath),
          title: post.title,
          description: post.excerpt,
          imageUrl: resolveAbsoluteUrl('/logo.jpg'),
          datePublished: post.publishedAt,
          dateModified: post.modifiedAt,
          category: post.category,
          readTime: post.readTime,
        }),
      ],
    }
  },
  component: BlogDetailPage,
})

function BlogDetailPage() {
  const { post, categories, recentPosts } = Route.useLoaderData()

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <>
      <PageBreadcrumb label="Notícias" title={post.title} />

      <section className="overflow-x-clip bg-[var(--color-off-white)] py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8 lg:px-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="min-w-0">
            <BlogPostArticle post={post} />
            <BlogReplyForm />
          </div>

          <BlogSidebar
            categories={categories}
            recentPosts={recentPosts}
            galleryImages={post.gallery}
            tags={post.tags}
          />
        </div>
      </section>
    </>
  )
}
