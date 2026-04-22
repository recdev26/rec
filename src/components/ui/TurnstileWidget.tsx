import { useEffect, useId, useRef, useState } from 'react'

interface TurnstileWidgetProps {
  siteKey: string
  error?: string
}

type TurnstileInstance = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      theme?: 'light' | 'dark' | 'auto'
      language?: string
      callback?: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
    },
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileInstance
  }
}

export default function TurnstileWidget({ siteKey, error }: TurnstileWidgetProps) {
  const fieldId = useId()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [token, setToken] = useState('')

  useEffect(() => {
    const container = containerRef.current

    if (!container) {
      return
    }

    let isActive = true
    let retryTimer: ReturnType<typeof window.setTimeout> | null = null
    let retries = 0
    const MAX_RETRIES = 30

    const renderWidget = () => {
      const turnstile = window.turnstile

      if (!isActive) {
        return
      }

      if (!turnstile) {
        retries += 1

        if (retries >= MAX_RETRIES) {
          return
        }

        retryTimer = window.setTimeout(renderWidget, 250)
        return
      }

      if (widgetIdRef.current) {
        turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }

      widgetIdRef.current = turnstile.render(container, {
        sitekey: siteKey,
        theme: 'light',
        language: 'pt',
        callback: (nextToken) => {
          setToken(nextToken)
        },
        'expired-callback': () => {
          setToken('')
        },
        'error-callback': () => {
          setToken('')
        },
      })
    }

    renderWidget()

    return () => {
      isActive = false

      if (retryTimer) {
        window.clearTimeout(retryTimer)
      }

      const turnstile = window.turnstile

      if (turnstile && widgetIdRef.current) {
        turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey])

  return (
    <div>
      <div ref={containerRef} className="min-h-16" />
      <input id={fieldId} type="hidden" name="cf-turnstile-response" value={token} readOnly />
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
    </div>
  )
}
