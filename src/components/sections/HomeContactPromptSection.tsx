import { Clock3, MessageSquareMore } from 'lucide-react'
import { localizeInternalHref } from '../../lib/i18n'
import { useLocale } from '../../lib/use-locale'
import ContactPromptItem from '../ui/ContactPromptItem'
import SectionLabel from '../ui/SectionLabel'

function getPromptItems(locale: 'pt' | 'en') {
  return [
    {
      icon: MessageSquareMore,
      title: locale === 'en' ? 'Tailored advisory support' : 'Atenção personalizada',
      description:
        locale === 'en'
          ? 'At REC, each instruction receives tailored attention, active listening and responses aligned with the specific objectives of the asset or project.'
          : 'Na REC, acreditamos que cada cliente merece atenção personalizada, escuta activa e respostas ajustadas aos objectivos concretos do seu projecto.',
    },
    {
      icon: Clock3,
      title: locale === 'en' ? 'Prompt professional response' : 'Resposta célere e profissional',
      description:
        locale === 'en'
          ? 'Whether you require clarification, a fee proposal or technical input, we respond promptly with professional rigour and clear communication.'
          : 'Se precisa de esclarecimentos, de uma proposta ou de apoio técnico especializado, estamos preparados para responder com rapidez, rigor e proximidade.',
    },
  ] as const
}

export default function HomeContactPromptSection() {
  const locale = useLocale()
  const promptItems = getPromptItems(locale)

  const copy =
    locale === 'en'
      ? {
          label: 'Contact Us',
          titleLine1: 'We are ready to assess your brief and',
          titleLine2: 'deliver value-focused solutions',
          body:
            'REC combines technical rigour, market knowledge and practical delivery to support investment, development and asset decisions with confidence.',
          cta: 'Contact us',
          imageAlt: 'Modern high-rise buildings viewed from below',
        }
      : {
          label: 'Fale Connosco',
          titleLine1: 'Estamos prontos para conhecer o seu desafio e',
          titleLine2: 'apresentar soluções com valor',
          body:
            'Na REC, colocamos a nossa experiência, rigor técnico e conhecimento do mercado ao serviço dos nossos clientes. Partilhe connosco o seu projecto e descubra como podemos apoiar as suas decisões com uma abordagem profissional, personalizada e orientada para resultados.',
          cta: 'Contacte-nos',
          imageAlt: 'Arranha-céus modernos vistos de baixo',
        }

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">
      <div className="absolute right-0 top-20 hidden h-96 w-72 bg-[radial-gradient(circle_at_center,rgba(18,137,130,0.09),transparent_68%)] lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:px-8">
        <div>
          <SectionLabel>{copy.label}</SectionLabel>
          <h2 className="font-heading text-2xl md:text-3xl leading-tight font-bold text-[var(--color-text)]">
            {copy.titleLine1}
            <span className="block text-[var(--color-accent)]">
              {copy.titleLine2}
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[var(--color-gray-dark)]">
            {copy.body}
          </p>

          <div className="mt-10 space-y-8">
            {promptItems.map((item) => (
              <ContactPromptItem key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={localizeInternalHref('/contactos', locale)}
              className="inline-flex min-h-12 md:min-h-14 items-center justify-center bg-[var(--color-accent)] px-6 md:px-8 text-base font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white"
            >
              {copy.cta}
            </a>
            <a
              href="mailto:consulting@rec.co.mz"
              className="inline-flex min-h-12 md:min-h-14 items-center justify-center border border-[var(--color-gray-light)] px-6 md:px-8 text-base font-semibold !text-[#1c2f35] no-underline transition hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]"
            >
              consulting@rec.co.mz
            </a>
          </div>
        </div>

        <div className="relative min-h-[30rem] lg:min-h-[44rem]">
          <div className="absolute right-0 top-0 h-32 w-20 rounded-bl-[4rem] bg-[var(--color-accent)] lg:h-60 lg:w-28" />
          <div className="absolute left-8 top-0 h-full w-[82%] overflow-hidden bg-[linear-gradient(160deg,#edf2f2_0%,#dfe9e9_42%,#cfdcdd_100%)] [border-top-left-radius:7rem] [border-bottom-right-radius:7rem]">
            <img
              src="/contact_prompt.png"
              alt={copy.imageAlt}
              width="1500"
              height="1000"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(26,46,45,0.08))]" />
          </div>
        </div>
      </div>
    </section>
  )
}
