interface SectionLabelProps {
  children: string
  align?: 'left' | 'center'
}

export default function SectionLabel({
  children,
  align = 'left',
}: SectionLabelProps) {
  return (
    <p
      className={`mb-3 text-sm font-semibold tracking-[0.24em] text-[var(--color-accent)] uppercase ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      {children}
    </p>
  )
}
