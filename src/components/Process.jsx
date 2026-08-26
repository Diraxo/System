import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Process() {
  const { t } = useLanguage()
  const p = t.process

  return (
    <section id="process" className="relative py-28 md:py-36 border-t border-line bg-inkalt">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.3em] text-violet mb-3">{p.eyebrow.toUpperCase()}</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper max-w-lg mb-16">
          {p.title}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {p.items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pt-6 border-t border-line"
            >
              <span className="font-mono text-3xl text-line group-hover:text-teal transition-colors">
                {item.n}
              </span>
              <h3 className="font-display text-lg text-paper mt-4 mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
