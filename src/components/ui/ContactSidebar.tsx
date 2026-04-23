import { ArrowRight, Download, Mail, Phone } from 'lucide-react'
import { localizeInternalHref } from '../../lib/i18n'
import { useLocale } from '../../lib/use-locale'
import type { ServiceDetail, ServiceNavItem } from '../../lib/services'

interface ContactSidebarProps {
  currentService: ServiceDetail
  serviceLinks: readonly ServiceNavItem[]
}

function SidebarHeading({ title }: { title: string }) {
  return (
    <div>
      <h3 className="font-heading text-2xl font-bold text-[var(--color-text)]">{title}</h3>
      <div className="mt-5 h-1 w-14 bg-[var(--color-accent)]" />
      <div className="mt-4 h-px w-full bg-[var(--color-gray-light)]" />
    </div>
  )
}

export default function ContactSidebar({
  currentService,
  serviceLinks,
}: ContactSidebarProps) {
  const locale = useLocale()
  const hasBrochures = currentService.brochureDownloads.length > 0

  const copy =
    locale === 'en'
      ? {
          servicesTitle: 'Our Services',
          brochureTitle: 'Download Brochure',
          downloadFile: 'Download file',
          hasQuestion: 'Need assistance?',
          speakWithRec: 'Speak with REC',
          supportText:
            'We provide technical support with clear communication and responsive delivery at every stage of the assignment.',
          phone: 'Phone',
          email: 'Email',
          contact: 'Contact us',
        }
      : {
          servicesTitle: 'Os Nossos Serviços',
          brochureTitle: 'Download Brochura',
          downloadFile: 'Descarregar ficheiro',
          hasQuestion: 'Tem alguma questão?',
          speakWithRec: 'Fale com a REC',
          supportText:
            'Prestamos apoio técnico com proximidade, clareza e capacidade de resposta em todas as fases do processo.',
          phone: 'Telefone',
          email: 'E-mail',
          contact: 'Contacte-nos',
        }

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      <section className="hidden border border-[var(--color-gray-light)] bg-[var(--color-off-white)] p-8 lg:block">
        <SidebarHeading title={copy.servicesTitle} />
        <div className="mt-8 space-y-4">
          {serviceLinks.map((serviceLink) => {
            const isActive = serviceLink.href === currentService.href

            return (
              <a
                key={serviceLink.href}
                href={localizeInternalHref(serviceLink.href, locale)}
                className={`flex items-center justify-between border px-5 py-4 text-base font-medium no-underline transition ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-white !text-[var(--color-accent)] shadow-[0_12px_26px_rgba(11,46,44,0.08)]'
                    : 'border-[var(--color-gray-light)] bg-white !text-[var(--color-text)] hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]'
                }`}
              >
                <span>{serviceLink.label}</span>
                <ArrowRight size={18} strokeWidth={2.1} />
              </a>
            )
          })}
        </div>
      </section>

      {hasBrochures ? (
        <section className="border border-[var(--color-gray-light)] bg-[var(--color-off-white)] p-8">
          <SidebarHeading title={copy.brochureTitle} />
          <div className="mt-8 space-y-4">
            {currentService.brochureDownloads.map((downloadItem) => (
              <a
                key={downloadItem.href}
                href={downloadItem.href}
                download={downloadItem.fileName}
                className="flex items-center justify-between gap-4 border border-[var(--color-gray-light)] bg-white px-5 py-4 no-underline transition hover:border-[var(--color-accent)]"
              >
                <span className="flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <Download size={20} strokeWidth={2.1} />
                  </span>
                  <span>
                    <span className="block font-semibold text-[var(--color-text)]">
                      {downloadItem.label}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--color-gray-dark)]">
                      {copy.downloadFile}
                    </span>
                  </span>
                </span>
                <ArrowRight size={18} strokeWidth={2.1} className="text-[var(--color-accent)]" />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-[var(--color-accent)] p-8 text-white shadow-[0_18px_36px_rgba(11,46,44,0.16)]">
        <p className="text-sm font-semibold tracking-[0.2em] text-white/76 uppercase">
          {copy.hasQuestion}
        </p>
        <h3 className="mt-4 font-heading text-2xl font-bold text-white">
          {copy.speakWithRec}
        </h3>
        <p className="mt-4 leading-relaxed text-white/82">
          {copy.supportText}
        </p>

        <div className="mt-8 space-y-4 border-t border-white/18 pt-6">
          <a
            href="tel:+25821505000"
            className="flex items-center gap-4 !text-white no-underline transition hover:!text-white/80"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
              <Phone size={20} strokeWidth={2.1} />
            </span>
            <span>
              <span className="block text-sm text-white/72">{copy.phone}</span>
              <span className="block text-xl font-bold">+258 21 505 000</span>
            </span>
          </a>

          <a
            href="mailto:consulting@rec.co.mz"
            className="flex items-center gap-4 !text-white no-underline transition hover:!text-white/80"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-accent)]">
              <Mail size={20} strokeWidth={2.1} />
            </span>
            <span>
              <span className="block text-sm text-white/72">{copy.email}</span>
              <span className="block text-lg font-semibold">consulting@rec.co.mz</span>
            </span>
          </a>
        </div>

        <a
          href={localizeInternalHref('/contactos', locale)}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-white px-6 text-base font-semibold !text-[var(--color-accent)] no-underline transition hover:bg-[var(--color-accent-light)]"
        >
          {copy.contact}
          <ArrowRight size={18} strokeWidth={2.1} />
        </a>
      </section>
    </aside>
  )
}
