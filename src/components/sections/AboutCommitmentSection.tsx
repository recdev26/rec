const valueItems = [
  'Rigor e transparência em todos os serviços prestados',
  'Compromisso com a qualidade e com a excelência técnica',
  'Ética e profissionalismo como base de todas as relações',
  'Dedicação e responsabilidade em cada projecto desenvolvido',
  'Inovação e melhoria contínua nos métodos e práticas adoptadas',
  'Orientação para o cliente e para resultados assente em confiança e criação de valor',
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
