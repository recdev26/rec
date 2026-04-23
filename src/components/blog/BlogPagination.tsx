import { ChevronRight } from 'lucide-react'
import { localizeInternalHref } from '../../lib/i18n'
import { useLocale } from '../../lib/use-locale'

interface BlogPaginationProps {
  pages: readonly number[]
  currentPage: number
}

export default function BlogPagination({
  pages,
  currentPage,
}: BlogPaginationProps) {
  const locale = useLocale()
  const paginationLabel = locale === 'en' ? 'Blog pagination' : 'Paginação do blog'
  const nextPageLabel = locale === 'en' ? 'Next page' : 'Página seguinte'

  if (pages.length <= 1) {
    return null
  }

  const nextPage = pages.find((page) => page > currentPage)

  return (
    <nav aria-label={paginationLabel} className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
      {pages.map((page) => {
        const isActive = page === currentPage

        return (
          <a
            key={page}
            href={localizeInternalHref(`/blog?page=${page}`, locale)}
            aria-current={isActive ? 'page' : undefined}
            className={`inline-flex h-10 min-w-10 items-center justify-center px-3 text-xs font-semibold no-underline transition sm:h-12 sm:min-w-12 sm:px-4 sm:text-sm ${
              isActive
                ? 'bg-[var(--color-accent)] !text-white'
                : 'border border-[var(--color-gray-light)] bg-white !text-[var(--color-text)] hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]'
            }`}
          >
            {String(page).padStart(2, '0')}
          </a>
        )
      })}

      {nextPage ? (
        <a
          href={localizeInternalHref(`/blog?page=${nextPage}`, locale)}
          aria-label={nextPageLabel}
          className="inline-flex h-10 min-w-10 items-center justify-center border border-[var(--color-gray-light)] bg-white !text-[var(--color-text)] no-underline transition hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)] sm:h-12 sm:min-w-12"
        >
          <ChevronRight size={18} strokeWidth={2.2} />
        </a>
      ) : null}
    </nav>
  )
}
