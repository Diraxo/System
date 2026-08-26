import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLanguage()
  const f = t.faq

  return (
    <section id="faq" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.3em] text-violet mb-3 text-center">{f.eyebrow.toUpperCase()}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper text-center mb-14">
          {f.title}
        </h2>

        <div className="flex flex-col gap-3">
          {f.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="rounded-xl border border-line bg-inkalt overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus-ring"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-paper text-base">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-teal"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
