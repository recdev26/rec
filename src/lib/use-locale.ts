import { useRouterState } from '@tanstack/react-router'
import { resolveLocale } from './i18n'

export function useLocale() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const search = useRouterState({ select: (state) => state.location.search })

  return resolveLocale(pathname, search as Record<string, unknown>)
}
