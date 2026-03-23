const valueItems = [
  'Rigor e transparência em todos os serviços prestados',
  'Paixão e dedicação em cada projecto',
  'Inovação e melhoria contínua nas metodologias utilizadas',
  'Compromisso com resultados e satisfação do cliente',
  'Ética e profissionalismo como base das nossas relações comerciais',
] as const

export default function AboutCommitmentSection() {
  return (
    <section className="bg-white pb-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-[var(--color-gray-light)] pt-10">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-[var(--color-text)]">
            O Nosso Compromisso
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
            <article>
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">
                Missão
              </h3>
              <p className="mt-2 text-[var(--color-gray-dark)]">
                Prestar serviços de excelência nas áreas de avaliação,
                consultoria e gestão imobiliária, oferecendo soluções adaptadas
                às necessidades de cada cliente, maximizando o valor dos activos
                e assegurando qualidade, rigor e transparência.
              </p>
            </article>

            <article>
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">
                Visão
              </h3>
              <p className="mt-2 text-[var(--color-gray-dark)]">
                Ser reconhecida como uma referência no mercado nacional e
                internacional, pela competência técnica, ética profissional e
                capacidade de gerar valor acrescentado aos nossos clientes.
              </p>
            </article>

            <article>
              <h3 className="font-heading text-xl font-bold text-[var(--color-text)]">
                Valores
              </h3>
              <div className="mt-2 space-y-2 text-[var(--color-gray-dark)]">
                {valueItems.map((item) => (
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
