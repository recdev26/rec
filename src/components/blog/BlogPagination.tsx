import { ChevronRight } from 'lucide-react'

interface BlogPaginationProps {
  pages: readonly number[]
  currentPage: number
}

export default function BlogPagination({
  pages,
  currentPage,
}: BlogPaginationProps) {
  return (
    <nav aria-label="Paginação do blog" className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
      {pages.map((page) => {
        const isActive = page === currentPage

        return (
          <a
            key={page}
            href={`/blog?page=${page}`}
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

      <a
        href="/blog?page=2"
        aria-label="Página seguinte"
        className="inline-flex h-10 min-w-10 items-center justify-center border border-[var(--color-gray-light)] bg-white !text-[var(--color-text)] no-underline transition hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)] sm:h-12 sm:min-w-12"
      >
        <ChevronRight size={18} strokeWidth={2.2} />
      </a>
    </nav>
  )
}
