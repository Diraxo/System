import { siteConfig, whatsappLink } from '../siteConfig'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          <span className="font-mono text-xs tracking-[0.15em] text-muted">
            {siteConfig.brand.toUpperCase()} — © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.1em] text-muted hover:text-teal transition-colors"
          >
            +{siteConfig.whatsappNumber}
          </a>
          <p className="font-mono text-xs tracking-[0.1em] text-muted">
            {t.hero.location.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  )
}
