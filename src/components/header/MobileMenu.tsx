import { Link } from '@tanstack/react-router'
import { ChevronDown, X } from 'lucide-react'
import HeaderLogo from './HeaderLogo'
import { isDropdownItem, navigationItems } from './header-data'

interface MobileMenuProps {
  isMenuOpen: boolean
  openMobileSection: string | null
  pathname: string
  onClose: () => void
  onToggleSection: (label: string) => void
}

export default function MobileMenu({
  isMenuOpen,
  openMobileSection,
  pathname,
  onClose,
  onToggleSection,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isMenuOpen}
    >
      <button
        type="button"
        tabIndex={isMenuOpen ? 0 : -1}
        aria-label="Fechar menu"
        className={`absolute inset-0 bg-[rgba(6,22,22,0.55)] transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div
        id="mobile-navigation"
        className={`absolute left-0 top-0 flex h-full w-[min(90vw,420px)] flex-col bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-gray-light)] px-6 py-5">
          <Link to="/" aria-label="REC - Real Estate Consulting" className="no-underline" onClick={onClose}>
            <HeaderLogo />
          </Link>
          <button
            type="button"
            aria-label="Fechar menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--color-accent)] transition hover:bg-[var(--color-accent-light)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            onClick={onClose}
          >
            <X size={28} strokeWidth={2.3} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = item.match(pathname)

            if (isDropdownItem(item)) {
              const isOpen = openMobileSection === item.label

              return (
                <div key={item.label} className="border-b border-[var(--color-gray-light)]">
                  <div className="flex items-center justify-between px-7 py-6">
                    <a
                      href={item.href}
                      className="text-base leading-none font-medium text-[var(--color-accent)] no-underline transition hover:text-[var(--color-accent-hover)]"
                      onClick={onClose}
                    >
                      {item.label}
                    </a>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-label={`Expandir ${item.label}`}
                      className="inline-flex items-center justify-center text-[var(--color-accent)] transition hover:text-[var(--color-accent-hover)]"
                      onClick={() => onToggleSection(item.label)}
                    >
                      <span
                        className={`inline-flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      >
                        <ChevronDown size={22} strokeWidth={2.1} />
                      </span>
                    </button>
                  </div>

                  {isOpen ? (
                    <div className="space-y-1 bg-[var(--color-off-white)] px-7 py-4">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-text)] no-underline transition hover:bg-white hover:text-[var(--color-accent)]"
                          onClick={onClose}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            }

            return (
              <a
                key={item.href}
                href={item.href}
                className={`block border-b border-[var(--color-gray-light)] px-7 py-6 text-base leading-none font-medium no-underline transition ${isActive ? 'border-l-4 border-[var(--color-accent)] text-[var(--color-accent)]' : 'text-[var(--color-text)]'}`}
                onClick={onClose}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="border-t border-[var(--color-gray-light)] px-6 py-5">
          <a
            href="/contactos"
            className="inline-flex min-h-14 w-full items-center justify-center bg-[var(--color-accent)] px-6 text-base font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white"
            onClick={onClose}
          >
            Contacte-nos
          </a>
        </div>
      </div>
    </div>
  )
}
