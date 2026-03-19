import BlogCard from '../blog/BlogCard'
import SectionLabel from '../ui/SectionLabel'

const latestPosts = [
  {
    dateDay: '15',
    dateMonth: 'JAN',
    title: 'Como valorizar activos imobiliários com maior segurança',
    excerpt:
      'Análises criteriosas e leitura do mercado ajudam investidores e proprietários a tomar decisões mais informadas e sustentáveis.',
    tone: 'sage',
  },
  {
    dateDay: '20',
    dateMonth: 'FEV',
    title: 'O papel da fiscalização no sucesso de um projecto',
    excerpt:
      'A supervisão técnica contínua reduz desvios, protege orçamentos e assegura qualidade em todas as fases da execução.',
    tone: 'mist',
  },
  {
    dateDay: '05',
    dateMonth: 'JUN',
    title: 'Peritagens técnicas para decisões com mais confiança',
    excerpt:
      'Relatórios claros, diagnósticos precisos e avaliação de risco reforçam a confiança em negócios patrimoniais e operacionais.',
    tone: 'clay',
  },
] as const

export default function HomeBlogSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel align="center">Notícias</SectionLabel>
          <h2 className="font-heading text-4xl leading-tight font-bold text-[var(--color-text)]">
            Últimas Publicações
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
