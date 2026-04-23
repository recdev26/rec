import { useLocale } from '../../lib/use-locale'

export default function AboutCommitmentSection() {
  const locale = useLocale()

  const copy =
    locale === 'en'
      ? {
          title: 'Our Commitment',
          mission: 'Mission',
          vision: 'Vision',
          values: 'Values',
          missionText:
            'To deliver best-in-class valuation, advisory and real estate management services, providing solutions tailored to each client requirement while maximising asset value and ensuring quality, rigour and transparency.',
          visionText:
            'To be recognised nationally and internationally as a market reference for technical competence, professional ethics and our ability to create measurable client value.',
          valueItems: [
            'Rigour and transparency across all assignments',
            'Commitment to quality and technical excellence',
            'Ethics and professionalism in every relationship',
            'Diligence and accountability in each commission',
            'Innovation and continuous improvement in methods and practice',
            'Client and outcome focus grounded in trust and value creation',
          ],
        }
      : {
          title: 'O Nosso Compromisso',
          mission: 'Missão',
          vision: 'Visão',
          values: 'Valores',
          missionText:
            'Prestar serviços de excelência nas áreas de avaliação, consultoria e gestão imobiliária, oferecendo soluções adaptadas às necessidades de cada cliente, maximizando o valor dos activos e assegurando qualidade, rigor e transparência.',
          visionText:
            'Ser reconhecida como uma referência no mercado nacional e internacional, pela competência técnica, ética profissional e capacidade de gerar valor acrescentado aos nossos clientes.',
          valueItems: [
            'Rigor e transparência em todos os serviços prestados',
            'Compromisso com a qualidade e com a excelência técnica',
            'Ética e profissionalismo como base de todas as relações',
            'Dedicação e responsabilidade em cada projecto desenvolvido',
            'Inovação e melhoria contínua nos métodos e práticas adoptadas',
            'Orientação para o cliente e para resultados assente em confiança e criação de valor',
          ],
        }

  return (
    <section className="bg-white pb-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-[var(--color-gray-light)] pt-10">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[var(--color-text)]">
            {copy.title}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
            <article>
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">
                {copy.mission}
              </h3>
              <p className="mt-2 text-[var(--color-gray-dark)]">
                {copy.missionText}
              </p>
            </article>

            <article>
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">
                {copy.vision}
              </h3>
              <p className="mt-2 text-[var(--color-gray-dark)]">
                {copy.visionText}
              </p>
            </article>

            <article>
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">
                {copy.values}
              </h3>
              <div className="mt-2 space-y-2 text-[var(--color-gray-dark)]">
                {copy.valueItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
