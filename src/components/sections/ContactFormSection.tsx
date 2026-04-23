import { useState, type FormEvent } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { submitContactForm, type ContactFormErrors } from '../../server/contact'
import { useLocale } from '../../lib/use-locale'
import SectionLabel from '../ui/SectionLabel'
import TurnstileWidget from '../ui/TurnstileWidget'

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

export default function ContactFormSection() {
  const submitContact = useServerFn(submitContactForm)
  const locale = useLocale()
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({})
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const copy =
    locale === 'en'
      ? {
          label: 'Get in Touch',
          title: 'Need support? Speak with our team',
          intro:
            'At REC, every client receives dedicated attention. Share your brief and we will respond promptly with clear professional guidance.',
          fullName: 'Full name',
          email: 'Email',
          phone: 'Phone',
          company: 'Company',
          companyPlaceholder: 'Company (optional)',
          subject: 'Subject',
          message: 'Message',
          messagePlaceholder: 'Write your message',
          sending: 'Sending...',
          submit: 'Send Message',
        }
      : {
          label: 'Entre em Contacto',
          title: 'Precisa de ajuda? Fale connosco',
          intro:
            'Na REC, acreditamos que cada cliente merece atenção personalizada. Partilhe connosco o seu pedido e responderemos com a máxima rapidez e profissionalismo.',
          fullName: 'Nome completo',
          email: 'E-mail',
          phone: 'Telefone',
          company: 'Empresa',
          companyPlaceholder: 'Empresa (opcional)',
          subject: 'Assunto',
          message: 'Mensagem',
          messagePlaceholder: 'Escreva a sua mensagem',
          sending: 'A enviar...',
          submit: 'Enviar Mensagem',
        }

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
    <section className="bg-[var(--color-off-white)] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionLabel align="center">{copy.label}</SectionLabel>
          <h2 className="font-heading text-2xl md:text-4xl leading-tight font-bold text-[var(--color-text)]">
            {copy.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-[var(--color-gray-dark)]">
            {copy.intro}
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-6xl" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="nome-completo" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                {copy.fullName}
              </label>
              <input
                id="nome-completo"
                name="nomeCompleto"
                type="text"
                placeholder={copy.fullName}
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
                {copy.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={copy.email}
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
                {copy.phone}
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder={copy.phone}
                className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                {copy.company}
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder={copy.companyPlaceholder}
                className="min-h-16 w-full border border-transparent bg-white px-6 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-gray-mid)] focus:border-[var(--color-accent)]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="assunto" className="mb-2 block text-sm font-medium text-[var(--color-text)]">
               {copy.subject}
             </label>
            <input
              id="assunto"
              name="assunto"
              type="text"
               placeholder={copy.subject}
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
               {copy.message}
             </label>
            <textarea
              id="mensagem"
              name="mensagem"
               placeholder={copy.messagePlaceholder}
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

          {turnstileSiteKey ? (
            <div className="mt-6">
              <TurnstileWidget siteKey={turnstileSiteKey} error={fieldErrors.turnstile} />
            </div>
          ) : null}

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
              {isSubmitting ? copy.sending : copy.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
