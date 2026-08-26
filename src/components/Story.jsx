import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Story() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 md:py-32 border-t border-line">
      <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-violet mb-6"
        >
          {t.story.eyebrow.toUpperCase()}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-2xl md:text-3xl text-paper leading-snug"
        >
          {t.story.text}
        </motion.p>
      </div>
    </section>
  )
}
