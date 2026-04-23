import { createFileRoute } from '@tanstack/react-router'
import PageBreadcrumb from '../components/layout/PageBreadcrumb'
import ContactFormSection from '../components/sections/ContactFormSection'
import ContactMapSection from '../components/sections/ContactMapSection'
import { useLocale } from '../lib/use-locale'
import { buildSeoHead } from '../lib/seo'

export const Route = createFileRoute('/contactos')({
  head: () =>
    buildSeoHead({
      title: 'Contactos',
      description:
        'Entre em contacto com a REC em Maputo para serviços de avaliação imobiliária, gestão de projectos e peritagens técnicas.',
      path: '/contactos',
    }),
  component: ContactosPage,
})

function ContactosPage() {
  const locale = useLocale()

  const breadcrumbLabel = locale === 'en' ? 'Contact Us' : 'Contacte-nos'
  const breadcrumbTitle = locale === 'en' ? 'Contacts' : 'Contactos'

  return (
    <>
      <PageBreadcrumb label={breadcrumbLabel} title={breadcrumbTitle} />
      <ContactFormSection />
      <ContactMapSection />
    </>
  )
}
