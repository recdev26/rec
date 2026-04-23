import { Mail, MapPin, Phone } from 'lucide-react'
import { useLocale } from '../../lib/use-locale'

function getContactItems(locale: 'pt' | 'en') {
  return [
    {
      icon: Phone,
      label: locale === 'en' ? 'Call us 24/7' : 'Ligue-nos 24/7',
      value: '+258 21 505 000 / +258 84 382 2494',
    },
    {
      icon: Mail,
      label: locale === 'en' ? 'Email us' : 'Envie-nos um e-mail',
      value: 'consulting@rec.co.mz',
    },
    {
      icon: MapPin,
      label: locale === 'en' ? 'Office' : 'Escritório',
      value: 'Av. FPLM, nº 857, Maputo',
    },
  ] as const
}

export default function ContactMapSection() {
  const locale = useLocale()
  const contactItems = getContactItems(locale)

  const imageAlt =
    locale === 'en' ? 'Modern buildings viewed from below' : 'Edifícios modernos vistos de baixo'
  const mapTitle = locale === 'en' ? 'REC office location map' : 'Localização da REC no mapa'

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:absolute lg:top-6 lg:right-12 lg:z-10 lg:w-auto lg:max-w-none lg:px-0 xl:right-16">
          <div className="bg-white shadow-[0_24px_54px_rgba(11,46,44,0.16)] lg:w-[24rem]">
            <div className="relative h-36 overflow-hidden">
              <img
                src="/contact.jpg"
                alt={imageAlt}
                width="640"
                height="960"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,107,101,0.12),rgba(26,46,45,0.24))]" />
            </div>

            <div className="border-b border-[var(--color-gray-light)] px-6 py-5 lg:px-7">
              <h2 className="font-heading text-xl font-bold text-[var(--color-text)]">
                REC, Lda.
              </h2>
              <p className="mt-2 text-sm leading-7 text-[var(--color-gray-dark)]">
                Av. FPLM, nº 857, Maputo
              </p>
            </div>

            <div className="px-6 py-2 lg:px-7">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 border-b border-[var(--color-gray-light)] py-4 last:border-b-0"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.08em] text-[var(--color-accent)] uppercase">
                      {label}
                    </p>
                    <p className="mt-1 text-lg leading-7 font-semibold text-[var(--color-text)]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-2 bg-[var(--color-accent)]" />
          </div>
        </div>

        <div className="relative mt-6 h-[26rem] w-full grayscale sm:h-[30rem] lg:mt-0 lg:h-[42rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.2004149011327!2d32.5995922!3d-25.928643400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69ba0abefce05%3A0xbd273432d563db15!2sGrupo%20Meridian32!5e0!3m2!1spt-PT!2smz!4v1773927049927!5m2!1spt-PT!2smz"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={mapTitle}
            className="h-full w-full border-0"
          />

          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_46%,rgba(255,255,255,0.1))] lg:block" />
        </div>
      </div>
    </section>
  )
}
