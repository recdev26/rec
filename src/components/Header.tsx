import { useEffect, useMemo, useState } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { localizeInternalHref, resolveLocale } from '../lib/i18n'
import DesktopNavigation from './header/DesktopNavigation'
import FloatingLanguageButton from './header/FloatingLanguageButton'
import HeaderLogo from './header/HeaderLogo'
import { getNavigationItems, isDropdownItem } from './header/header-data'
import HomeInfoBand from './header/HomeInfoBand'
import MobileMenu from './header/MobileMenu'
import TopBar from './layout/TopBar'

const SCROLL_DOWN_THRESHOLD = 32
const SCROLL_UP_RESET_THRESHOLD = 4

export default function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const search = useRouterState({ select: (state) => state.location.search })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileSectionKey, setOpenMobileSectionKey] = useState<string | null>(null)

  const locale = resolveLocale(pathname, search as Record<string, unknown>)
  const navigationItems = useMemo(() => getNavigationItems(locale), [locale])
  const contactLabel = locale === 'en' ? 'Contact us' : 'Contacte-nos'
  const skipToContentLabel =
    locale === 'en' ? 'Skip to main content' : 'Saltar para o conteúdo principal'
  const openMenuLabel = locale === 'en' ? 'Open menu' : 'Abrir menu'
  const closeMenuLabel = locale === 'en' ? 'Close menu' : 'Fechar menu'

  const isHomePage = pathname === '/'
  const showTopBar = isHomePage

  const activeDropdownKey = useMemo(() => {
    const dropdown = navigationItems.find(
      (item) => isDropdownItem(item) && item.match(pathname),
    )

    return dropdown?.key ?? null
  }, [navigationItems, pathname])

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY

      setIsScrolled((current) =>
        current
          ? scrollY > SCROLL_UP_RESET_THRESHOLD
          : scrollY > SCROLL_DOWN_THRESHOLD,
      )
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
    setOpenMobileSectionKey(activeDropdownKey)
  }, [activeDropdownKey, pathname])

  const toggleMobileSection = (key: string) => {
    setOpenMobileSectionKey((current) => (current === key ? null : key))
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-[0_10px_34px_rgba(11,46,44,0.14)]' : ''}`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--color-accent)] focus:no-underline"
      >
        {skipToContentLabel}
      </a>

      {showTopBar ? (
        <div
          className={`hidden overflow-hidden transition-all duration-300 ease-out lg:block ${
            isScrolled
              ? 'max-h-0 -translate-y-2 opacity-0'
              : 'max-h-24 translate-y-0 opacity-100'
          }`}
        >
          <TopBar locale={locale} />
        </div>
      ) : null}

      <div className="border-b border-[var(--color-gray-light)] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 md:py-5 lg:px-8 lg:py-0">
          <a
            href={localizeInternalHref('/', locale)}
            aria-label="REC - Real Estate Consulting"
            className="shrink-0 no-underline"
          >
            <HeaderLogo />
          </a>

          <DesktopNavigation locale={locale} />

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={localizeInternalHref('/contactos', locale)}
              className="inline-flex min-h-12 items-center justify-center bg-[var(--color-accent)] px-8 text-sm font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              {contactLabel}
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? closeMenuLabel : openMenuLabel}
            className="inline-flex h-12 w-12 items-center justify-center text-[var(--color-text)] transition hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] lg:hidden"
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
          <HomeInfoBand locale={locale} />
        </div>
      ) : null}

      <FloatingLanguageButton locale={locale} pathname={pathname} />

      <MobileMenu
        isMenuOpen={isMenuOpen}
        locale={locale}
        openMobileSectionKey={openMobileSectionKey}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
        onToggleSection={toggleMobileSection}
      />
    </header>
  )
}
