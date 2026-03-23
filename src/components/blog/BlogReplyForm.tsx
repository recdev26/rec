export default function BlogReplyForm() {
  return (
    <section className="mt-8 bg-white p-5 shadow-[0_18px_40px_rgba(11,46,44,0.08)] sm:mt-10 sm:p-8 lg:p-10">
      <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] sm:text-3xl">Deixe a Sua Mensagem</h2>

      <form className="mt-8 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="reply-name" className="sr-only">
              O seu nome
            </label>
            <input
              id="reply-name"
              type="text"
              placeholder="O seu nome"
            className="min-h-12 w-full border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
            />
          </div>
          <div>
            <label htmlFor="reply-email" className="sr-only">
              Endereço de e-mail
            </label>
            <input
              id="reply-email"
              type="email"
              placeholder="Endereço de e-mail"
            className="min-h-12 w-full border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
            />
          </div>
        </div>

        <div>
          <label htmlFor="reply-topic" className="sr-only">
            Seleccione um tema
          </label>
          <select
            id="reply-topic"
            className="min-h-12 w-full appearance-none border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione um tema
            </option>
            <option value="avaliacao">Avaliação</option>
            <option value="consultoria">Consultoria</option>
            <option value="projectos">Gestão de Projectos</option>
            <option value="peritagens">Peritagens</option>
          </select>
        </div>

        <div>
          <label htmlFor="reply-message" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="reply-message"
            placeholder="Mensagem"
            rows={7}
            className="w-full resize-none border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 py-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:px-5 sm:text-base"
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)] sm:min-h-12 sm:px-8 sm:text-base"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  )
}
