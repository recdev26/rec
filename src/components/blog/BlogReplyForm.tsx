import { useState, type FormEvent } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { submitContactForm, type ContactFormErrors } from '../../server/contact'
import TurnstileWidget from '../ui/TurnstileWidget'

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

export default function BlogReplyForm() {
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
        telefone: '',
        empresa: '',
        assunto: String(formData.get('assunto') ?? ''),
        mensagem: String(formData.get('mensagem') ?? ''),
        turnstileToken: String(formData.get('cf-turnstile-response') ?? ''),
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
    <section className="mt-8 bg-white p-5 shadow-[0_18px_40px_rgba(11,46,44,0.08)] sm:mt-10 sm:p-8 lg:p-10">
      <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
        Deixe a Sua Mensagem
      </h2>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="reply-name" className="sr-only">
              O seu nome
            </label>
            <input
              id="reply-name"
              name="nomeCompleto"
              type="text"
              placeholder="O seu nome"
              aria-invalid={Boolean(fieldErrors.nomeCompleto)}
              aria-describedby={fieldErrors.nomeCompleto ? 'reply-name-error' : undefined}
              className="min-h-12 w-full border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
            />
            {fieldErrors.nomeCompleto ? (
              <p id="reply-name-error" className="mt-2 text-sm text-red-700">
                {fieldErrors.nomeCompleto}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="reply-email" className="sr-only">
              Endereço de e-mail
            </label>
            <input
              id="reply-email"
              name="email"
              type="email"
              placeholder="Endereço de e-mail"
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'reply-email-error' : undefined}
              className="min-h-12 w-full border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
            />
            {fieldErrors.email ? (
              <p id="reply-email-error" className="mt-2 text-sm text-red-700">
                {fieldErrors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="reply-topic" className="sr-only">
            Seleccione um tema
          </label>
          <select
            id="reply-topic"
            name="assunto"
            aria-invalid={Boolean(fieldErrors.assunto)}
            aria-describedby={fieldErrors.assunto ? 'reply-topic-error' : undefined}
            className="min-h-12 w-full appearance-none border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 text-sm text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] sm:min-h-14 sm:px-5 sm:text-base"
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione um tema
            </option>
            <option value="Avaliação">Avaliação</option>
            <option value="Consultoria">Consultoria</option>
            <option value="Gestão de Projectos">Gestão de Projectos</option>
            <option value="Peritagens">Peritagens</option>
          </select>
          {fieldErrors.assunto ? (
            <p id="reply-topic-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.assunto}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="reply-message" className="sr-only">
            Mensagem
          </label>
          <textarea
            id="reply-message"
            name="mensagem"
            placeholder="Mensagem"
            rows={7}
            aria-invalid={Boolean(fieldErrors.mensagem)}
            aria-describedby={fieldErrors.mensagem ? 'reply-message-error' : undefined}
            className="w-full resize-none border border-[var(--color-gray-light)] bg-[var(--color-off-white)] px-4 py-4 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)] sm:px-5 sm:text-base"
          />
          {fieldErrors.mensagem ? (
            <p id="reply-message-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.mensagem}
            </p>
          ) : null}
        </div>

        {turnstileSiteKey ? (
          <div>
            <TurnstileWidget siteKey={turnstileSiteKey} error={fieldErrors.turnstile} />
          </div>
        ) : null}

        {feedback ? (
          <p
            className={`text-sm font-medium ${
              feedback.type === 'success' ? 'text-[var(--color-primary)]' : 'text-red-700'
            }`}
          >
            {feedback.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center justify-center bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-70 sm:min-h-12 sm:px-8 sm:text-base"
        >
          {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
        </button>
      </form>
    </section>
  )
}
