import SectionLabel from '../ui/SectionLabel'
import { localizeInternalHref } from '../../lib/i18n'
import { useLocale } from '../../lib/use-locale'

interface ClientLogo {
  name: string
  logoSrc?: string
  logoAlt?: string
  context: string
}

const clients: ClientLogo[] = [
  {
    name: 'ABSA',
    logoSrc: '/logos/absa.jpg',
    logoAlt: 'Logótipo do ABSA',
    context: 'Consultoria técnica e avaliação de activos',
  },
  {
    name: 'Access Bank',
    logoSrc: '/logos/access-bank.jpg',
    logoAlt: 'Logótipo do Access Bank',
    context: 'Apoio técnico em projectos imobiliários',
  },
  {
    name: 'FNB',
    logoSrc: '/logos/fnb.jpg',
    logoAlt: 'Logótipo do FNB',
    context: 'Peritagens e análises de investimento',
  },
  {
    name: 'Millennium bim',
    logoSrc: '/logos/Millennium-Bim.png',
    logoAlt: 'Logótipo do Millennium bim',
    context: 'Avaliação e consultoria imobiliária',
  },
  {
    name: 'Nedbank',
    logoSrc: '/logos/nedbank.jpg',
    logoAlt: 'Logótipo do Nedbank',
    context: 'Gestão técnica e valorização patrimonial',
  },
  {
    name: 'Standard Bank',
    logoSrc: '/logos/standard_bank.png',
    logoAlt: 'Logótipo do Standard Bank',
    context: 'Fiscalização e consultoria para novos empreendimentos',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export default function HomeClientsLogoSection() {
  const locale = useLocale()
  const sliderItems = [...clients, ...clients]

  const copy =
    locale === 'en'
      ? {
          label: 'REC Clients',
          titleLine1: 'Institutions and companies that have worked with REC',
          titleLine2: 'Technical solutions for assets and projects',
          clientAria: 'Client',
        }
      : {
          label: 'Clientes REC',
          titleLine1: 'Empresas que já trabalharam com a REC',
          titleLine2: 'Soluções técnicas para activos e projectos',
          clientAria: 'Cliente',
        }

  return (
    <section className="overflow-hidden bg-[var(--bg-off-white)] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionLabel>{copy.label}</SectionLabel>
        <h2 className="font-heading text-2xl leading-tight font-bold text-[var(--color-text)] md:text-4xl">
          {copy.titleLine1}
          <span className="block text-[var(--color-accent)]">
            {copy.titleLine2}
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,var(--bg-off-white),rgba(240,244,244,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,var(--bg-off-white),rgba(240,244,244,0))]" />

        <div className="logo-slider-track flex w-max gap-6">
          {sliderItems.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={localizeInternalHref('/contactos', locale)}
              className="group relative block w-[16.5rem] shrink-0 overflow-hidden rounded-2xl border border-[var(--color-gray-light)] bg-white p-5 no-underline shadow-[0_14px_32px_rgba(11,46,44,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_20px_40px_rgba(11,46,44,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              aria-label={`${copy.clientAria} ${client.name}`}
            >
              <div className="flex h-20 items-center justify-center px-4">
                {client.logoSrc ? (
                  <img
                    src={client.logoSrc}
                    alt={client.logoAlt ?? `Logótipo da ${client.name}`}
                    width={200}
                    height={80}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain"
                  />
                ) : (
                  <p className="font-heading text-2xl font-bold tracking-[0.03em] text-[var(--color-primary)]">
                    {getInitials(client.name)}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
