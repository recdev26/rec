export default function NotFoundPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.22em] text-[var(--color-accent)] uppercase">
            Erro 404
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight font-bold text-[var(--color-text)] lg:text-6xl">
            A página que procura não foi encontrada.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-gray-dark)]">
            O link pode estar incorrecto, ter sido removido ou ainda não estar disponível. Volte ao início ou siga para a página de contactos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--color-accent)] px-8 text-base font-semibold !text-white no-underline transition hover:bg-[var(--color-accent-hover)] hover:!text-white"
            >
              Voltar ao Início
            </a>
            <a
              href="/contactos"
              className="inline-flex min-h-12 items-center justify-center border border-[var(--color-gray-light)] px-8 text-base font-semibold !text-[var(--color-text)] no-underline transition hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]"
            >
              Contacte-nos
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-xl">
          <img
            src="/error.svg"
            alt="Ilustração de erro 404"
            width="642"
            height="600"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
