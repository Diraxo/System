import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-violet mb-3">{s.eyebrow.toUpperCase()}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-lg">
              {s.title}
            </h2>
          </div>
          <p className="text-muted max-w-xs text-sm">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {s.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-inkalt p-7 hover:bg-panel hover:shadow-[inset_0_0_0_1px_rgba(0,229,199,0.3)] transition-all group"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-teal">{item.tag}</span>
              <h3 className="font-display text-xl text-paper mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
