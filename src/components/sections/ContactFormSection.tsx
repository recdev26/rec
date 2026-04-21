import { useState, type FormEvent } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { submitContactForm, type ContactFormErrors } from '../../server/contact'
import SectionLabel from '../ui/SectionLabel'

export default function ContactFormSection() {
  const submitContact = useServerFn(submitContactForm)
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({})
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setFeedback(null)
    setFieldErrors({})

    const result = await submitContact({
      data: {
        nomeCompleto: String(formData.get('nomeCompleto') ?? ''),
        email: String(formData.get('email') ?? ''),
        telefone: String(formData.get('telefone') ?? ''),
        empresa: String(formData.get('empresa') ?? ''),
        assunto: String(formData.get('assunto') ?? ''),
        mensagem: String(formData.get('mensagem') ?? ''),
      },
    })

    setIsSubmitting(false)

    if (!result.success) {
      setFieldErrors(result.fieldErrors ?? {})
      setFeedback({ type: 'error', message: result.message })
      return
    }

    form.reset()
    setFieldErrors({})
    setFeedback({ type: 'success', message: result.message })
  }

  return (
    <section className="bg-[var(--color-off-white)] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel align="center">Entre em Contacto</SectionLabel>
          <h2 className="font-heading text-2xl md:text-4xl leading-tight font-bold text-[var(--color-text)]">
            Precisa de ajuda? Fale connosco
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-[var(--color-gray-dark)]">
            Na REC, acreditamos que cada cliente merece atenção personalizada.
            Partilhe connosco o seu pedido e responderemos com a máxima rapidez
            e profissionalismo.
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-6xl" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nome-completo" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Nome completo
              </label>
              <input
                id="nome-completo"
                name="nomeCompleto"
                type="text"
                placeholder="Nome completo"
                aria-invalid={Boolean(fieldErrors.nomeCompleto)}
                aria-describedby={fieldErrors.nomeCompleto ? 'nome-completo-error' : undefined}
                className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
              {fieldErrors.nomeCompleto ? (
                <p id="nome-completo-error" className="mt-2 text-sm text-red-700">
                  {fieldErrors.nomeCompleto}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
              {fieldErrors.email ? (
                <p id="email-error" className="mt-2 text-sm text-red-700">
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="telefone" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Telefone
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="Telefone"
                className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Empresa (opcional)"
                className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="assunto" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Assunto
            </label>
            <input
              id="assunto"
              name="assunto"
              type="text"
              placeholder="Assunto"
              aria-invalid={Boolean(fieldErrors.assunto)}
              aria-describedby={fieldErrors.assunto ? 'assunto-error' : undefined}
              className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
            />
            {fieldErrors.assunto ? (
              <p id="assunto-error" className="mt-2 text-sm text-red-700">
                {fieldErrors.assunto}
              </p>
            ) : null}
          </div>

          <div className="mt-6">
            <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Escreva a sua mensagem"
              rows={8}
              aria-invalid={Boolean(fieldErrors.mensagem)}
              aria-describedby={fieldErrors.mensagem ? 'mensagem-error' : undefined}
              className="w-full resize-none border border-transparent bg-white px-6 py-5 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
            />
            {fieldErrors.mensagem ? (
              <p id="mensagem-error" className="mt-2 text-sm text-red-700">
                {fieldErrors.mensagem}
              </p>
            ) : null}
          </div>

          {feedback ? (
            <p
              className={`mt-6 text-center text-sm font-medium ${
                feedback.type === 'success' ? 'text-[var(--color-primary)]' : 'text-red-700'
              }`}
            >
              {feedback.message}
            </p>
          ) : null}

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-14 items-center justify-center bg-[var(--color-accent)] px-6 font-semibold text-white transition hover:bg-[var(--color-accent-hover)]"
            >
              {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
