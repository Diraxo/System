import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Guarantees() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 border-t border-line bg-inkalt">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <ShieldCheck size={20} className="text-teal mb-3" />
              <h3 className="font-display text-base text-paper mb-1.5">{g.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
