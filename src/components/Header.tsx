import { useEffect, useMemo, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import DesktopNavigation from './header/DesktopNavigation'
import HeaderLogo from './header/HeaderLogo'
import { isDropdownItem, navigationItems } from './header/header-data'
import HomeInfoBand from './header/HomeInfoBand'
import MobileMenu from './header/MobileMenu'
import TopBar from './layout/TopBar'

export default function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about' || pathname === '/sobre-nos'
  const showTopBar = pathname !== '/contactos' && !isAboutPage
  const topBarVariant = isHomePage ? 'home' : 'inner'

  const activeDropdownLabel = useMemo(() => {
    const dropdown = navigationItems.find(
      (item) => isDropdownItem(item) && item.match(pathname),
    )

    return dropdown?.label ?? null
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenMobileSection(activeDropdownLabel)
  }, [activeDropdownLabel, pathname])

  const toggleMobileSection = (label: string) => {
    setOpenMobileSection((current) => (current === label ? null : label))
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-[0_10px_34px_rgba(11,46,44,0.14)]' : ''}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--color-accent)] focus:no-underline"
      >
        Saltar para o conteúdo principal
      </a>

      {showTopBar ? (
        <div
          className={`hidden overflow-hidden transition-all duration-300 ease-out lg:block ${
            isScrolled
              ? 'max-h-0 -translate-y-2 opacity-0'
              : 'max-h-24 translate-y-0 opacity-100'
          }`}
        >
          <TopBar variant={topBarVariant} />
        </div>
      ) : null}

      <div className="border-b border-[var(--color-gray-light)] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 md:py-5 lg:px-8 lg:py-0">
          <Link to="/" aria-label="REC - Real Estate Consulting" className="shrink-0 no-underline">
            <HeaderLogo />
          </Link>

          <DesktopNavigation />

          <div className="hidden lg:block">
            <a
              href="/contactos"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--color-accent)] px-8 text-sm font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              Contacte-nos
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-gray-light)] text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {isHomePage ? (
        <div
          className={`hidden overflow-hidden transition-all duration-300 ease-out lg:block ${
            isScrolled
              ? 'max-h-0 -translate-y-3 opacity-0'
              : 'max-h-32 translate-y-0 opacity-100'
          }`}
        >
          <HomeInfoBand />
        </div>
      ) : null}

      <MobileMenu
        isMenuOpen={isMenuOpen}
        openMobileSection={openMobileSection}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
        onToggleSection={toggleMobileSection}
      />
    </header>
  )
}
