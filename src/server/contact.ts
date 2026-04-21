import { createServerFn } from '@tanstack/react-start'

const CONTACT_SUCCESS_MESSAGE =
  'Obrigado. A sua mensagem foi enviada com sucesso. Entraremos em contacto brevemente.'
const CONTACT_ERROR_MESSAGE =
  'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou contacte-nos directamente por e-mail.'

const CONTACT_EMAILS = ['rec.dev26@gmail.com', 'consulting@rec.co.mz']
const DEFAULT_FROM_EMAIL = 'contacto@contacto.rec.co.mz'
const DEFAULT_SITE_URL = 'https://rec.co.mz'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface ContactFormInput {
  nomeCompleto: string
  email: string
  telefone: string
  empresa: string
  assunto: string
  mensagem: string
}

export interface ContactFormErrors {
  nomeCompleto?: string
  email?: string
  assunto?: string
  mensagem?: string
}

export type ContactFormResult =
  | { success: true; message: string }
  | { success: false; message: string; fieldErrors?: ContactFormErrors }

function normaliseInput(data: ContactFormInput): ContactFormInput {
  return {
    nomeCompleto: data.nomeCompleto.trim(),
    email: data.email.trim(),
    telefone: data.telefone.trim(),
    empresa: data.empresa.trim(),
    assunto: data.assunto.trim(),
    mensagem: data.mensagem.trim(),
  }
}

function validateInput(data: ContactFormInput): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.nomeCompleto) {
    errors.nomeCompleto = 'Indique o seu nome completo.'
  }

  if (!data.email) {
    errors.email = 'Indique o seu e-mail.'
  } else if (!emailPattern.test(data.email)) {
    errors.email = 'Indique um e-mail válido.'
  }

  if (!data.assunto) {
    errors.assunto = 'Indique o assunto da mensagem.'
  }

  if (!data.mensagem) {
    errors.mensagem = 'Escreva a sua mensagem.'
  }

  return errors
}

function hasErrors(errors: ContactFormErrors): boolean {
  return Object.values(errors).some(Boolean)
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getSenderEmail(value: string): string {
  return value.includes('<') ? value : `REC - Website <${value}>`
}

function getLogoUrl(): string {
  const siteUrl = (process.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
  return `${siteUrl}/logo.jpg`
}

function renderEmailShell(args: {
  eyebrow: string
  title: string
  intro: string
  content: string
  footer: string
}): string {
  const logoUrl = getLogoUrl()

  return `
    <!DOCTYPE html>
    <html lang="pt-PT">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(args.title)}</title>
      </head>
      <body style="margin:0;padding:0;background-color:#f0f4f4;font-family:Inter,Helvetica Neue,Arial,sans-serif;color:#1a2e2d;">
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:#f0f4f4;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="max-width:680px;background-color:#ffffff;border:1px solid #e2e8e8;overflow:hidden;">
                <tr>
                  <td style="background-color:#0d6b65;padding:28px 32px;">
                    <img src="${logoUrl}" alt="Logótipo da REC" width="198" height="107" style="display:block;width:168px;height:auto;max-width:100%;" />
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 32px 20px;">
                    <div style="color:#128982;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">${escapeHtml(args.eyebrow)}</div>
                    <h1 style="margin:14px 0 0;font-family:Barlow,Inter,Arial,sans-serif;font-size:32px;line-height:1.2;font-weight:700;color:#1a2e2d;">${escapeHtml(args.title)}</h1>
                    <p style="margin:18px 0 0;font-size:16px;line-height:1.75;color:#555555;">${escapeHtml(args.intro)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 32px 20px;">
                    ${args.content}
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 32px;background-color:#e8f5f4;border-top:1px solid #e2e8e8;">
                    <p style="margin:0;font-size:14px;line-height:1.7;color:#555555;">${escapeHtml(args.footer)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}

function renderFieldRows(fields: Array<{ label: string; value: string }>): string {
  return fields
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:14px 18px;border-bottom:1px solid #e2e8e8;background-color:#f0f4f4;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#0d6b65;width:34%;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:14px 18px;border-bottom:1px solid #e2e8e8;font-size:15px;line-height:1.7;color:#1a2e2d;">
            ${escapeHtml(value)}
          </td>
        </tr>
      `,
    )
    .join('')
}

function renderAdminEmail(formData: ContactFormInput): string {
  const telefone = formData.telefone || 'N/A'
  const empresa = formData.empresa || 'N/A'
  const fieldsMarkup = renderFieldRows([
    { label: 'Nome completo', value: formData.nomeCompleto },
    { label: 'E-mail', value: formData.email },
    { label: 'Telefone', value: telefone },
    { label: 'Empresa', value: empresa },
    { label: 'Assunto', value: formData.assunto },
  ])
  const messageMarkup = escapeHtml(formData.mensagem).replace(/\n/g, '<br />')

  return renderEmailShell({
    eyebrow: 'Novo Contacto',
    title: formData.assunto,
    intro: 'Recebeu um novo pedido enviado através do formulário do website da REC.',
    content: `
      <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="border:1px solid #e2e8e8;border-collapse:collapse;background-color:#ffffff;">
        ${fieldsMarkup}
      </table>
      <div style="margin-top:24px;padding:24px;border:1px solid #e2e8e8;background-color:#ffffff;">
        <div style="margin:0 0 12px;color:#128982;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">Mensagem</div>
        <p style="margin:0;font-size:16px;line-height:1.8;color:#1a2e2d;">${messageMarkup}</p>
      </div>
    `,
    footer: 'REC, Lda. — Real Estate Consulting | Av. FPLM, nº 857, Maputo | consulting@rec.co.mz',
  })
}

function renderConfirmationEmail(formData: ContactFormInput): string {
  return renderEmailShell({
    eyebrow: 'Confirmação de Recepção',
    title: 'Recebemos o seu contacto',
    intro: `Caro(a) ${formData.nomeCompleto}, confirmamos a recepção da sua mensagem. A nossa equipa irá analisá-la e entrar em contacto consigo brevemente.`,
    content: `
      <div style="padding:24px;border:1px solid #e2e8e8;background-color:#ffffff;">
        <div style="margin:0 0 12px;color:#128982;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">Resumo do seu pedido</div>
        <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="border-collapse:collapse;">
          ${renderFieldRows([
            { label: 'Assunto', value: formData.assunto },
            { label: 'E-mail', value: formData.email },
            { label: 'Telefone', value: formData.telefone || 'N/A' },
          ])}
        </table>
      </div>
      <div style="margin-top:24px;padding:24px;background-color:#e8f5f4;border-left:4px solid #128982;">
        <p style="margin:0;font-size:15px;line-height:1.8;color:#1a2e2d;">Obrigado pela confiança na REC. Se precisar de acrescentar mais alguma informação, pode responder directamente a este e-mail.</p>
      </div>
    `,
    footer: 'A REC, Lda. presta consultoria imobiliária com rigor técnico, proximidade e compromisso com decisões seguras e sustentadas.',
  })
}

function buildAdminText(formData: ContactFormInput): string {
  return [
    `Assunto: ${formData.assunto}`,
    `Nome completo: ${formData.nomeCompleto}`,
    `E-mail: ${formData.email}`,
    `Telefone: ${formData.telefone || 'N/A'}`,
    `Empresa: ${formData.empresa || 'N/A'}`,
    '',
    'Mensagem:',
    formData.mensagem,
  ].join('\n')
}

function buildConfirmationText(formData: ContactFormInput): string {
  return [
    `Caro(a) ${formData.nomeCompleto},`,
    '',
    'Recebemos a sua mensagem enviada através do website da REC e entraremos em contacto consigo brevemente.',
    '',
    `Assunto: ${formData.assunto}`,
    `E-mail: ${formData.email}`,
    `Telefone: ${formData.telefone || 'N/A'}`,
    '',
    'Obrigado pela confiança na REC.',
  ].join('\n')
}

async function sendResendEmail(args: {
  apiKey: string
  from: string
  to: string[]
  replyTo?: string
  subject: string
  text: string
  html: string
}): Promise<boolean> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${args.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: args.from,
      to: args.to,
      reply_to: args.replyTo,
      subject: args.subject,
      text: args.text,
      html: args.html,
    }),
  })

  return response.ok
}

export const submitContactForm = createServerFn({ method: 'POST' })
  .inputValidator((data: ContactFormInput) => data)
  .handler(async ({ data }): Promise<ContactFormResult> => {
    const formData = normaliseInput(data)
    const fieldErrors = validateInput(formData)

    if (hasErrors(fieldErrors)) {
      return {
        success: false,
        message: 'Verifique os campos assinalados e tente novamente.',
        fieldErrors,
      }
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return {
        success: false,
        message: CONTACT_ERROR_MESSAGE,
      }
    }

    const fromEmail = getSenderEmail(process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL)

    try {
      const adminSent = await sendResendEmail({
        apiKey,
        from: fromEmail,
        to: CONTACT_EMAILS,
        replyTo: formData.email,
        subject: formData.assunto,
        text: buildAdminText(formData),
        html: renderAdminEmail(formData),
      })

      if (!adminSent) {
        return {
          success: false,
          message: CONTACT_ERROR_MESSAGE,
        }
      }

      const confirmationSent = await sendResendEmail({
        apiKey,
        from: fromEmail,
        to: [formData.email],
        subject: 'Recebemos o seu contacto',
        text: buildConfirmationText(formData),
        html: renderConfirmationEmail(formData),
      })

      if (!confirmationSent) {
        return {
          success: false,
          message: CONTACT_ERROR_MESSAGE,
        }
      }

      return {
        success: true,
        message: CONTACT_SUCCESS_MESSAGE,
      }
    } catch {
      return {
        success: false,
        message: CONTACT_ERROR_MESSAGE,
      }
    }
  })
