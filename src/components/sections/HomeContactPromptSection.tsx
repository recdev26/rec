import { Clock3, MessageSquareMore } from 'lucide-react'
import ContactPromptItem from '../ui/ContactPromptItem'
import SectionLabel from '../ui/SectionLabel'

const promptItems = [
  {
    icon: MessageSquareMore,
    title: 'Atenção personalizada',
    description:
      'Na REC, acreditamos que cada cliente merece atenção personalizada, escuta activa e respostas ajustadas aos objectivos concretos do seu projecto.',
  },
  {
    icon: Clock3,
    title: 'Resposta célere e profissional',
    description:
      'Se precisa de esclarecimentos, de uma proposta ou de apoio técnico especializado, estamos preparados para responder com rapidez, rigor e proximidade.',
  },
] as const

export default function HomeContactPromptSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">
      <div className="absolute right-0 top-20 hidden h-96 w-72 bg-[radial-gradient(circle_at_center,rgba(18,137,130,0.09),transparent_68%)] lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:px-8">
        <div>
          <SectionLabel>Fale Connosco</SectionLabel>
          <h2 className="font-heading text-3xl leading-tight font-bold text-[var(--color-text)]">
            Estamos prontos para ouvir o seu desafio e
            <span className="block text-[var(--color-accent)]">
              transformar necessidades em soluções
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-gray-dark)]">
            Partilhe connosco o seu projecto e descubra como podemos
            acrescentar valor ao seu investimento com uma abordagem técnica,
            personalizada e orientada para resultados.
          </p>

          <div className="mt-10 space-y-8">
            {promptItems.map((item) => (
              <ContactPromptItem key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contactos"
              className="inline-flex min-h-14 items-center justify-center bg-[var(--color-accent)] px-8 text-base font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white"
            >
              Contacte-nos
            </a>
            <a
              href="mailto:consulting@rec.co.mz"
              className="inline-flex min-h-14 items-center justify-center border border-[var(--color-gray-light)] px-8 text-base font-semibold !text-[#1c2f35] no-underline transition hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]"
            >
              consulting@rec.co.mz
            </a>
          </div>
        </div>

        <div className="relative min-h-[30rem] lg:min-h-[44rem]">
          <div className="absolute right-0 top-0 h-32 w-20 rounded-bl-[4rem] bg-[var(--color-accent)] lg:h-60 lg:w-28" />
          <div className="absolute left-8 top-0 h-full w-[82%] overflow-hidden bg-[linear-gradient(160deg,#edf2f2_0%,#dfe9e9_42%,#cfdcdd_100%)] [border-top-left-radius:7rem] [border-bottom-right-radius:7rem]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(26,46,45,0.08))]" />
            <div className="absolute left-[10%] top-[12%] h-[70%] w-[55%] rounded-[3rem] bg-[linear-gradient(160deg,#f7ede6_0%,#e8d8cc_100%)] shadow-[0_24px_60px_rgba(26,46,45,0.16)]" />
            <div className="absolute left-[23%] top-[18%] h-[54%] w-[30%] rounded-[3rem] bg-[linear-gradient(180deg,#2f211a_0%,#131313_100%)]" />
            <div className="absolute left-[18%] top-[16%] h-[9%] w-[40%] rounded-full bg-[rgba(255,255,255,0.5)] blur-md" />
            <div className="absolute right-[10%] top-[20%] h-[48%] w-[28%] rounded-[2rem] bg-[linear-gradient(180deg,#f2f2f2_0%,#dbdbdb_100%)] shadow-[0_22px_50px_rgba(26,46,45,0.18)]" />
            <div className="absolute bottom-[10%] right-[16%] h-[10%] w-[32%] rounded-full bg-[rgba(18,137,130,0.14)] blur-xl" />
            <div className="absolute bottom-[6%] left-[10%] bg-[var(--color-accent)] px-10 py-8 text-white [border-top-left-radius:3.5rem] [border-top-right-radius:0.5rem] [border-bottom-right-radius:3.5rem] [border-bottom-left-radius:0.5rem]">
              <p className="font-heading text-6xl leading-none font-bold">+20</p>
              <p className="mt-3 text-sm font-semibold tracking-[0.14em] uppercase text-white/88">
                anos de experiência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
