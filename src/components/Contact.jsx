import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../siteConfig'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-line bg-inkalt overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.2] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black,transparent)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.3em] text-violet mb-3"
        >
          {c.eyebrow.toUpperCase()}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-4xl md:text-5xl font-semibold text-paper mb-6"
        >
          {c.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {c.text}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal text-ink font-medium px-7 py-3.5 rounded-full hover:bg-paper hover:shadow-[0_0_24px_4px_rgba(0,229,199,0.4)] transition-all focus-ring"
        >
          <MessageCircle size={18} />
          {c.cta}
        </motion.a>
      </div>
    </section>
  )
}
