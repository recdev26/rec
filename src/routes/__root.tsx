import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotFoundPage from '../components/layout/NotFoundPage'

import appCss from '../styles.css?url'

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'REC — Real Estate Consulting',
      },
      {
        name: 'description',
        content:
          'Consultoria imobiliária em Moçambique: avaliação e consultoria imobiliária, gestão de projectos e peritagens técnicas.',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large',
      },
      {
        property: 'og:site_name',
        content: 'REC — Real Estate Consulting',
      },
      {
        property: 'og:locale',
        content: 'pt_PT',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: turnstileSiteKey
      ? [
          {
            src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
            async: true,
            defer: true,
          },
        ]
      : [],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <HeadContent />
      </head>
      <body className="font-body antialiased [overflow-wrap:anywhere] selection:bg-[var(--color-accent-light)]">
        <Header />
        <div id="main-content">
          {children ?? <Outlet />}
        </div>
        <Footer />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
