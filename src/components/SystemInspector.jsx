import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function SystemInspector() {
  const { t } = useLanguage()
  const capabilities = t.inspector.capabilities
  const [activeId, setActiveId] = useState(capabilities[0].id)

  // If the language switches, keep the same tab selected by id rather than
  // resetting to the first tab.
  useEffect(() => {
    if (!capabilities.find((c) => c.id === activeId)) {
      setActiveId(capabilities[0].id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0]

  return (
    <section id="work" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.3em] text-violet mb-3">{t.inspector.eyebrow.toUpperCase()}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-lg mb-4">
          {t.inspector.title}
        </h2>
        <p className="text-muted max-w-xl mb-14 leading-relaxed">{t.inspector.subtitle}</p>

        <div className="grid lg:grid-cols-[220px_1fr] gap-8">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {capabilities.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`text-left shrink-0 lg:shrink px-4 py-3 rounded-lg border transition-colors focus-ring whitespace-nowrap lg:whitespace-normal ${
                  activeId === c.id
                    ? 'border-teal/50 bg-panel text-paper'
                    : 'border-line text-muted hover:text-paper hover:border-line'
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] block mb-1 text-teal">
                  {c.tag}
                </span>
                <span className="text-sm font-medium">{c.title}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative rounded-2xl border border-line bg-inkalt p-8 min-h-[420px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-display text-2xl text-paper mb-2">{active.title}</h3>
                <p className="text-muted mb-8">{active.summary}</p>

                {/* Data-flow visual */}
                <FlowDiagram key={`flow-${active.id}`} stack={active.stack} />

                <div className="mt-8 grid sm:grid-cols-1 gap-3">
                  {active.principles.map((p, i) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <Check size={16} className="text-teal mt-0.5 shrink-0" />
                      <span className="text-sm text-paper/90 leading-relaxed">{p}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlowDiagram({ stack }) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
      {stack.map((label, i) => (
        <div key={label} className="flex items-center flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex-1 rounded-lg border border-line bg-panel px-4 py-3 text-center"
          >
            <span className="font-mono text-[11px] tracking-[0.05em] text-paper/80">{label}</span>
          </motion.div>
          {i < stack.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.1 + 0.15, duration: 0.4 }}
              className="hidden sm:block w-8 h-px bg-gradient-to-r from-teal/60 to-violet/60 origin-left"
            />
          )}
        </div>
      ))}
    </div>
  )
}
