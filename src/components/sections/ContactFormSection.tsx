import SectionLabel from '../ui/SectionLabel'

export default function ContactFormSection() {
  return (
    <section className="bg-[var(--color-off-white)] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel align="center">Entre em Contacto</SectionLabel>
          <h2 className="font-heading text-4xl leading-tight font-bold text-[var(--color-text)]">
            Precisa de ajuda? Fale connosco
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-[var(--color-gray-dark)]">
            Na REC, acreditamos que cada cliente merece atenção personalizada.
            Partilhe connosco o seu pedido e responderemos com a máxima rapidez
            e profissionalismo.
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nome-completo" className="sr-only">
                Nome completo
              </label>
              <input
                id="nome-completo"
                name="nomeCompleto"
                type="text"
                placeholder="Nome completo"
                className="min-h-20 w-full border border-transparent bg-white px-8 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className="min-h-20 w-full border border-transparent bg-white px-8 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="empresa" className="sr-only">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Empresa (opcional)"
                className="min-h-20 w-full border border-transparent bg-white px-8 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="assunto" className="sr-only">
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                className="min-h-20 w-full appearance-none border border-transparent bg-white px-8 text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Seleccione o assunto
                </option>
                <option value="avaliacao">Avaliação e Consultoria Imobiliária</option>
                <option value="gestao">Gestão de Projectos e Fiscalização</option>
                <option value="peritagens">Peritagens Técnicas</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="mensagem" className="sr-only">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Escreva a sua mensagem"
              rows={8}
              className="w-full resize-none border border-transparent bg-white px-8 py-7 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="inline-flex min-h-16 items-center justify-center bg-[var(--color-accent)] px-10 text-xl font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
