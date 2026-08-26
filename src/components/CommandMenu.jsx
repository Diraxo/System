import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, MessageCircle, ArrowRight } from 'lucide-react'
import { whatsappLink } from '../siteConfig'
import { useLanguage } from '../i18n/LanguageContext'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const commandItems = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    function handleKeyDown(e) {
      const isMod = e.metaKey || e.ctrlKey
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function goTo(href) {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-muted border border-line rounded-full px-3 py-1.5 hover:border-teal/40 hover:text-paper transition-colors focus-ring"
        aria-label="Open command menu"
      >
        <Command size={12} />
        <span>K</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-start justify-center pt-28 px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-xl border border-line bg-inkalt shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-line font-mono text-[10px] tracking-[0.2em] text-muted">
                {t.commandMenu.jumpTo.toUpperCase()}
              </div>
              <div className="p-2">
                {commandItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => goTo(item.href)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-paper hover:bg-panel transition-colors text-left focus-ring"
                  >
                    {item.label}
                    <ArrowRight size={14} className="text-muted" />
                  </button>
                ))}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-teal hover:bg-panel transition-colors text-left focus-ring"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={14} />
                    {t.commandMenu.chat}
                  </span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
