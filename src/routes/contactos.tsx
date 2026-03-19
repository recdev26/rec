import { createFileRoute } from '@tanstack/react-router'
import PageBreadcrumb from '../components/layout/PageBreadcrumb'
import ContactFormSection from '../components/sections/ContactFormSection'
import ContactMapSection from '../components/sections/ContactMapSection'

export const Route = createFileRoute('/contactos')({
  component: ContactosPage,
})

function ContactosPage() {
  return (
    <>
      <PageBreadcrumb label="Contacte-nos" title="Contactos" />
      <ContactFormSection />
      <ContactMapSection />
    </>
  )
}
