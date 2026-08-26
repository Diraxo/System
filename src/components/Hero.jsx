import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import BlueprintGrid from './BlueprintGrid'
import { whatsappLink } from '../siteConfig'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <BlueprintGrid labels={t.hero.branchLabels} />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6"
        >
          <span className="font-mono text-xs tracking-[0.3em] text-teal">
            {t.hero.badge.toUpperCase()}
          </span>
          <span className="hidden sm:inline text-line">|</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.15em] text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-violet" />
            {t.hero.location.toUpperCase()} · {t.hero.reach.toUpperCase()}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-paper leading-[1.05] max-w-3xl"
        >
          {t.hero.headline1}
          <br />
          {t.hero.headline2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
        >
          {t.hero.paragraph}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-teal text-ink font-medium px-6 py-3 rounded-full hover:bg-paper transition-colors focus-ring"
          >
            {t.hero.ctaPrimary}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#services"
            className="font-mono text-xs tracking-[0.15em] text-muted hover:text-paper transition-colors focus-ring rounded"
          >
            {t.hero.ctaSecondary.toUpperCase()}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
