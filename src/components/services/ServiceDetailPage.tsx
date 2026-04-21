import { CheckCircle2 } from 'lucide-react'
import PageBreadcrumb from '../layout/PageBreadcrumb'
import StatsBand from '../sections/StatsBand'
import ContactSidebar from '../ui/ContactSidebar'
import { attachServiceIcons } from '../../lib/services'
import type { ServiceDetailData, ServiceMetric, ServiceNavItem } from '../../lib/services'
import ServiceProcessSteps from './ServiceProcessSteps'

interface ServiceDetailPageProps {
  service: ServiceDetailData
  serviceLinks: readonly ServiceNavItem[]
  metrics: readonly ServiceMetric[]
}

export default function ServiceDetailPage({ service, serviceLinks, metrics }: ServiceDetailPageProps) {
  const hydratedService = attachServiceIcons(service)
  const ServiceIcon = hydratedService.icon

  return (
    <>
      <PageBreadcrumb label="Os Nossos Serviços" title={hydratedService.title} />

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14 lg:px-8">
          <div>
            <div className="overflow-hidden shadow-[0_24px_54px_rgba(11,46,44,0.14)]">
              <img
                src={hydratedService.imageSrc}
                alt={hydratedService.imageAlt}
                width="1600"
                height="960"
                className="h-[19rem] w-full object-cover sm:h-[24rem] lg:h-[32rem]"
              />
            </div>

            <div className="mt-10">
              <h2 className="font-heading text-2xl leading-tight font-bold text-[var(--color-text)]">
                  {hydratedService.lead}
              </h2>
              <p className="mt-6  leading-relaxed text-[var(--color-gray-dark)]">
                  {hydratedService.description}
              </p>
            </div>

            <section className="mt-14">
              <h3 className="font-heading text-3xl font-bold text-[var(--color-text)]">Visão Geral</h3>
              <div className="mt-5 space-y-5 text-[var(--color-gray-dark)]">
                {hydratedService.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {hydratedService.overviewHighlights.map((item) => (
                  <article
                    key={item.title}
                    className="bg-[var(--color-off-white)] p-8 shadow-[0_14px_32px_rgba(11,46,44,0.06)]"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                      <ServiceIcon size={26} strokeWidth={2} />
                    </span>
                    <h4 className="mt-5 font-heading text-xl font-semibold text-[var(--color-text)]">
                      {item.title}
                    </h4>
                    <p className="mt-4 leading-relaxed text-[var(--color-gray-dark)]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-16">
              <h3 className="font-heading text-3xl font-bold text-[var(--color-text)]">
                Os Nossos Serviços
              </h3>
              <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-gray-dark)]">
                Organizamos cada intervenção em frentes de trabalho claras, para que o cliente compreenda exactamente o alcance técnico do acompanhamento prestado.
              </p>

              <div className="mt-8 space-y-6">
                {hydratedService.offers.map((offer) => (
                  <article
                    key={offer.title}
                    className="border border-[var(--color-gray-light)] bg-[var(--color-off-white)] p-8"
                  >
                    <h4 className="font-heading text-2xl font-semibold text-[var(--color-text)]">
                      {offer.title}
                    </h4>
                    <p className="mt-4 leading-relaxed text-[var(--color-gray-dark)]">
                      {offer.description}
                    </p>
                    <ul className="mt-6 grid gap-4 text-[var(--color-text)] md:grid-cols-2">
                      {offer.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 leading-relaxed">
                          <CheckCircle2
                            size={20}
                            strokeWidth={2.2}
                            className="mt-1 shrink-0 text-[var(--color-accent)]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <ServiceProcessSteps
              title={hydratedService.processTitle}
              intro={hydratedService.processIntro}
              steps={hydratedService.processSteps}
            />

            <section className="mt-16">
              <h3 className="font-heading text-3xl font-bold text-[var(--color-text)]">
                Por que escolher a REC?
              </h3>
              <div className="mt-8 space-y-6">
                {hydratedService.reasons.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="border border-[var(--color-gray-light)] bg-white p-8 shadow-[0_16px_36px_rgba(11,46,44,0.06)]"
                  >
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                      <Icon size={28} strokeWidth={2} />
                    </span>
                    <h4 className="mt-6 font-heading text-2xl font-semibold text-[var(--color-text)]">
                      {title}
                    </h4>
                    <p className="mt-4 leading-relaxed text-[var(--color-gray-dark)]">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <ContactSidebar currentService={hydratedService} serviceLinks={serviceLinks} />
        </div>
      </section>

      <StatsBand metrics={metrics} />
    </>
  )
}
