import { createFileRoute } from '@tanstack/react-router'
import BlogPostArticle from '../../components/blog/BlogPostArticle'
import BlogReplyForm from '../../components/blog/BlogReplyForm'
import BlogSidebar from '../../components/blog/BlogSidebar'
import NotFoundPage from '../../components/layout/NotFoundPage'
import PageBreadcrumb from '../../components/layout/PageBreadcrumb'
import {
  blogCategories,
  blogGalleryImages,
  blogTags,
  getBlogPostBySlug,
  recentBlogPosts,
} from '../../lib/blog-mock'

export const Route = createFileRoute('/blog/$slug')({
  head: ({ params }) => {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
      return {
        meta: [{ title: 'Página não encontrada | REC — Real Estate Consulting' }],
      }
    }

    return {
      meta: [
        {
          title: `${post.title} | REC — Real Estate Consulting`,
        },
        {
          name: 'description',
          content: post.excerpt,
        },
        {
          property: 'og:title',
          content: `${post.title} | REC — Real Estate Consulting`,
        },
        {
          property: 'og:description',
          content: post.excerpt,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: post.imageSrc,
        },
      ],
      links: [{ rel: 'canonical', href: `https://rec.co.mz/blog/${post.slug}` }],
    }
  },
  component: BlogDetailPage,
})

function BlogDetailPage() {
  const { slug } = Route.useParams()
  const post = getBlogPostBySlug(slug)

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
            categories={blogCategories}
            recentPosts={recentBlogPosts}
            galleryImages={blogGalleryImages}
            tags={blogTags}
          />
        </div>
      </section>
    </>
  )
}
