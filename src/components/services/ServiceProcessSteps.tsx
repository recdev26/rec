import type { ServiceProcessStep } from '../../lib/services'

interface ServiceProcessStepsProps {
  title: string
  intro: string
  steps: readonly ServiceProcessStep[]
}

export default function ServiceProcessSteps({
  title,
  intro,
  steps,
}: ServiceProcessStepsProps) {
  return (
    <section className="mt-16">
      <h3 className="font-heading text-3xl font-bold text-[var(--color-text)]">{title}</h3>
      <p className="mt-5 max-w-3xl leading-relaxed text-[var(--color-gray-dark)]">{intro}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="border border-[var(--color-gray-light)] bg-white p-8 shadow-[0_18px_42px_rgba(11,46,44,0.08)]"
          >
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent-light)]">
              <span className="font-heading text-2xl font-bold text-[var(--color-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h4 className="mt-6 font-heading text-2xl font-semibold text-[var(--color-text)]">
              {step.title}
            </h4>
            <p className="mt-4 leading-relaxed text-[var(--color-gray-dark)]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
