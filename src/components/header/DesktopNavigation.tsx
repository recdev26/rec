import { ChevronDown, ChevronRight } from 'lucide-react'
import { isDropdownItem, navigationItems } from './header-data'

export default function DesktopNavigation() {
  return (
    <ul className="hidden items-center gap-10 lg:flex">
      {navigationItems.map((item) => {
        if (isDropdownItem(item)) {
          return (
            <li key={item.label} className="group relative list-none">
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 py-8 font-semibold !text-[#1c2f35] no-underline transition hover:!text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
              >
                {item.label}
                <ChevronDown size={18} strokeWidth={2.2} />
              </a>
              <div className="pointer-events-none absolute left-0 top-full z-40 min-w-72 translate-y-2 border border-[var(--color-gray-light)] bg-white p-3 opacity-0 shadow-[0_18px_54px_rgba(11,46,44,0.16)] transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium !text-[#1c2f35] no-underline transition hover:bg-[var(--color-accent-light)] hover:!text-[var(--color-accent)]"
                  >
                    <span>{subItem.label}</span>
                    <ChevronRight size={16} strokeWidth={2.2} />
                  </a>
                ))}
              </div>
            </li>
          )
        }

        return (
          <li key={item.href} className="list-none">
            <a
              href={item.href}
              className="inline-flex items-center py-8 font-semibold !text-[#1c2f35] no-underline transition hover:!text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              {item.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
