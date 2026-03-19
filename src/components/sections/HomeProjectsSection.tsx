import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ProjectSlideCard from '../ui/ProjectSlideCard'

const projects = [
  {
    category: 'Avaliação',
    title: 'Projectos de valorização patrimonial',
    location: 'Maputo e principais centros urbanos',
    tone: 'gold',
  },
  {
    category: 'Gestão',
    title: 'Coordenação técnica de empreendimentos',
    location: 'Planeamento, execução e controlo',
    tone: 'light',
  },
  {
    category: 'Peritagens',
    title: 'Análises técnicas para decisões seguras',
    location: 'Relatórios com rigor e clareza',
    tone: 'amber',
  },
  {
    category: 'Consultoria',
    title: 'Estudos e apoio estratégico ao investimento',
    location: 'Soluções ajustadas ao mercado moçambicano',
    tone: 'steel',
  },
  {
    category: 'Fiscalização',
    title: 'Acompanhamento técnico de obras e activos',
    location: 'Controlo de qualidade, prazo e conformidade',
    tone: 'gold',
  },
  {
    category: 'Mercado',
    title: 'Leituras estratégicas para decisões de investimento',
    location: 'Análise local com visão de longo prazo',
    tone: 'light',
  },
] as const

export default function HomeProjectsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scrollSlider = (direction: 'prev' | 'next') => {
    const slider = sliderRef.current

    if (!slider) {
      return
    }

    const amount = slider.clientWidth * 0.72
    const left = direction === 'next' ? amount : -amount

    slider.scrollBy({ left, behavior: 'smooth' })
  }

  return (
    <section className="overflow-hidden bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Os Nossos Projectos</SectionLabel>
            <h2 className="font-heading text-4xl leading-tight font-bold text-[var(--color-text)]">
              Projectos conduzidos com visão,
              <span className="block text-[var(--color-accent)]">
                método e confiança técnica
              </span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => scrollSlider('prev')}
              className="inline-flex min-h-16 items-center gap-3 bg-[var(--color-off-white)] px-8 text-lg font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent-light)]"
            >
              <ArrowLeft size={22} strokeWidth={2.2} />
              Prev
            </button>
            <button
              type="button"
              onClick={() => scrollSlider('next')}
              className="inline-flex min-h-16 items-center gap-3 bg-[var(--color-off-white)] px-8 text-lg font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent-light)]"
            >
              Next
              <ArrowRight size={22} strokeWidth={2.2} />
            </button>
          </div>
        </div>

      </div>

      <div
        ref={sliderRef}
        className="mt-12 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div key={project.title} className="snap-start first:pl-0 last:pr-0">
            <ProjectSlideCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}
