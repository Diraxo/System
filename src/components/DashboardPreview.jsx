import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function DashboardPreview() {
  const { t } = useLanguage()
  const d = t.dashboard

  return (
    <section className="relative py-20 md:py-28 border-t border-line bg-inkalt">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-violet mb-3">{d.eyebrow.toUpperCase()}</p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-paper max-w-lg">
              {d.title}
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-[0.15em] text-muted">
            {d.note.toUpperCase()}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {d.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-line bg-panel p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] tracking-[0.2em] text-muted">{item.label}</span>
                <span className="font-mono text-[9px] tracking-[0.15em] px-2 py-0.5 rounded-full border border-line text-teal">
                  {item.tag}
                </span>
              </div>
              <p className="font-display text-xl text-paper">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
