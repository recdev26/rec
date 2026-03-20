import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

interface HeroSlide {
  id: number
  eyebrow: string
  title: string
  description: string
  accent: string
  panelTitle: string
  panelText: string
  imageSrc: string
  imageAlt: string
}

const heroSlides: readonly HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'Bem-vindo à REC',
    title: 'Consultoria Imobiliária de Excelência em Moçambique',
    description:
      'A REC, Lda. é uma empresa de consultoria especializada em avaliação e consultoria imobiliária, gestão de projectos e fiscalização de obras e peritagens técnicas.',
    accent: 'Avaliação, rigor e transparência',
    panelTitle: 'Decisões sustentadas por experiência',
    panelText:
      'Apoiamos investidores, promotores e instituições com análise técnica, visão estratégica e acompanhamento próximo.',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Consultores a analisar documentos de avaliação imobiliária',
  },
  {
    id: 2,
    eyebrow: 'Os nossos serviços',
    title: 'Gerimos activos e projectos com foco em valor e segurança',
    description:
      'Coordenamos processos imobiliários com metodologia, clareza operacional e acompanhamento contínuo para proteger o investimento do cliente.',
    accent: 'Gestão integrada em cada fase',
    panelTitle: 'Planeamento que reduz risco',
    panelText:
      'Da avaliação inicial à execução do projecto, estruturamos cada etapa com critérios técnicos e objectivos mensuráveis.',
    imageSrc: '/gestao_de_projectos.png',
    imageAlt: 'Equipa em reunião de gestão de projectos e fiscalização',
  },
  {
    id: 3,
    eyebrow: 'Compromisso REC',
    title: 'Peritagens técnicas e consultoria para decisões com confiança',
    description:
      'Entregamos pareceres técnicos, estudos e recomendações práticas para apoiar negócios imobiliários com qualidade, rigor e independência.',
    accent: 'Conhecimento local, padrão internacional',
    panelTitle: 'Solidez técnica para cada oportunidade',
    panelText:
      'Trabalhamos com uma abordagem orientada para desempenho, conformidade e maximização do valor dos activos.',
    imageSrc: '/peritagens_tecnicas.png',
    imageAlt: 'Profissionais a realizar peritagens técnicas e análise de obra',
  },
] as const

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-text)] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,20,21,0.92)_0%,rgba(20,42,41,0.96)_48%,rgba(8,20,21,0.92)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_10%_14%,rgba(18,137,130,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(18,137,130,0.1),transparent_20%),linear-gradient(128deg,transparent_0%,transparent_54%,rgba(255,255,255,0.04)_54%,rgba(255,255,255,0.04)_60%,transparent_60%,transparent_100%)]" />
      <div className="absolute -left-14 top-20 h-16 w-16 rounded-full bg-[rgba(18,137,130,0.18)]" />
      <div className="absolute left-8 top-0 h-44 w-36 rounded-b-full bg-[rgba(18,137,130,0.14)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.95fr)] lg:px-8 lg:py-20">
        <div className="relative min-h-[28rem] lg:min-h-[36rem]">
          {heroSlides.map((slide, index) => {
            const isActive = activeSlide === index

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 flex max-w-3xl flex-col justify-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-8 opacity-0'
                }`}
              >
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  {slide.eyebrow}
                </p>
                <h1 className="font-heading max-w-3xl text-3xl md:text-5xl leading-[1.04] font-bold tracking-tight text-white">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base md:text-lg md:leading-9 text-white/84 sm:text-xl">
                  {slide.description}
                </p>
                <p className="mt-6 text-sm md:text-base font-semibold tracking-[0.08em] text-[var(--color-accent-light)] uppercase">
                  {slide.accent}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="/servicos"
                    className="inline-flex min-h-14 items-center justify-center bg-[var(--color-accent)] px-8 text-base font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white"
                  >
                    Os Nossos Serviços
                  </a>
                  <a
                    href="/about"
                    className="inline-flex min-h-14 items-center justify-center border border-white/40 px-8 text-base font-semibold !text-white no-underline transition hover:border-[var(--color-accent)] hover:bg-[rgba(18,137,130,0.12)] hover:!text-white"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative flex min-h-[24rem] items-center justify-center lg:min-h-[38rem]">
          <div className="absolute inset-x-0 top-12 bottom-12 border-2 border-[rgba(18,137,130,0.76)] [border-radius:3.5rem]" />
          <div className="absolute inset-x-8 top-20 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] [clip-path:polygon(18%_0%,100%_0%,82%_100%,0%_100%)]" />

          {heroSlides.map((slide, index) => {
            const isActive = activeSlide === index

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  isActive
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-10 opacity-0'
                }`}
              >
                <div className="absolute left-[12%] right-[8%] top-[12%] bottom-[3%] overflow-hidden bg-[linear-gradient(145deg,#faf7f2_0%,#edf4f4_52%,#dceaea_100%)] shadow-[0_24px_80px_rgba(4,15,16,0.34)] [clip-path:polygon(16%_0%,100%_0%,84%_100%,0%_100%)]">
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    width="1024"
                    height="1024"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_32%,rgba(26,46,45,0.22)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(255,255,255,0.42),transparent_20%)]" />


                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3 lg:bottom-10">
        {heroSlides.map((slide, index) => {
          const isActive = activeSlide === index

          return (
            <button
              key={slide.id}
              type="button"
              aria-label={`Mostrar slide ${slide.id}`}
              onClick={() => setActiveSlide(index)}
              className={`group inline-flex items-center gap-3 border-none bg-transparent px-0 py-0 ${
                isActive ? 'opacity-100' : 'opacity-65'
              }`}
            >
              <span
                className={`block h-1.5 transition-all duration-300 ${
                  isActive ? 'w-12 bg-[var(--color-accent)]' : 'w-6 bg-white/35'
                }`}
              />
              <span className="hidden text-xs font-semibold tracking-[0.18em] text-white/75 uppercase lg:block">
                {slide.id.toString().padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>

      <div className="absolute bottom-14 left-6 hidden items-center gap-3 text-sm font-medium text-white/78 lg:flex lg:left-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/6">
          <ArrowRight size={18} strokeWidth={2} />
        </span>
        <span>Consultoria imobiliária orientada para resultados</span>
      </div>
    </section>
  )
}
