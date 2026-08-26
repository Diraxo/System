import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig, whatsappLink } from '../siteConfig'
import { useLanguage } from '../i18n/LanguageContext'
import CommandMenu from './CommandMenu'
import LanguageToggle from './LanguageToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#work', label: t.nav.work },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 focus-ring rounded">
          <span className="w-2 h-2 rounded-full bg-teal shadow-[0_0_10px_2px_rgba(0,229,199,0.6)]" />
          <span className="font-display font-semibold tracking-tight text-paper">{siteConfig.brand}</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-[0.15em] text-muted hover:text-paper transition-colors focus-ring rounded"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <LanguageToggle />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.1em] px-4 py-2 rounded-full border border-teal/40 text-teal hover:bg-teal hover:text-ink hover:shadow-[0_0_16px_2px_rgba(0,229,199,0.35)] transition-all focus-ring"
          >
            {t.nav.startProject.toUpperCase()}
          </a>
          <CommandMenu />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            className="text-paper focus-ring rounded p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden border-t border-line bg-ink"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs tracking-[0.15em] text-muted hover:text-paper"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-[0.1em] px-4 py-2 rounded-full border border-teal/40 text-teal text-center"
            >
              {t.nav.startProject.toUpperCase()}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
