interface ProjectSlideCardProps {
  category: string
  title: string
  location: string
  tone: 'gold' | 'light' | 'amber' | 'steel'
}

const toneClasses = {
  gold:
    'bg-[linear-gradient(145deg,rgba(28,36,39,0.14)_0%,rgba(28,36,39,0.02)_28%,rgba(255,209,163,0.35)_58%,rgba(102,132,155,0.28)_100%)]',
  light:
    'bg-[linear-gradient(145deg,rgba(198,214,224,0.55)_0%,rgba(255,255,255,0.84)_32%,rgba(217,209,200,0.58)_100%)]',
  amber:
    'bg-[linear-gradient(145deg,rgba(69,52,38,0.42)_0%,rgba(214,162,105,0.58)_42%,rgba(102,119,135,0.42)_100%)]',
  steel:
    'bg-[linear-gradient(145deg,rgba(208,220,230,0.64)_0%,rgba(249,242,233,0.8)_38%,rgba(188,205,219,0.58)_100%)]',
} as const

export default function ProjectSlideCard({
  category,
  title,
  location,
  tone,
}: ProjectSlideCardProps) {
  return (
    <article className="group min-w-[82vw] sm:min-w-[28rem] lg:min-w-[31rem]">
      <a
        href="/contactos"
        className="relative block h-[30rem] overflow-hidden rounded-md no-underline"
      >
        <div className={`absolute inset-0 ${toneClasses[tone]}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(255,255,255,0.55),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(21,36,38,0.18))]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(0,0,0,0.14),transparent_28%,transparent_72%,rgba(0,0,0,0.08))]" />

        <div className="absolute inset-0 bg-[rgba(9,24,25,0.18)] opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(10,26,28,0.18))]" />

        <div className="absolute inset-x-6 bottom-6 translate-y-6 bg-[rgba(18,137,130,0.92)] px-7 py-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/82 uppercase">
            {category}
          </p>
          <h3 className="mt-2 font-heading text-xl leading-tight font-bold text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/84">{location}</p>
        </div>
      </a>
    </article>
  )
}
