import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line p-0.5 font-mono text-[11px] tracking-[0.1em] ${className}`}
    >
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full transition-colors focus-ring ${
          lang === 'en' ? 'bg-teal text-ink' : 'text-muted hover:text-paper'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => setLang('so')}
        className={`px-2.5 py-1 rounded-full transition-colors focus-ring ${
          lang === 'so' ? 'bg-teal text-ink' : 'text-muted hover:text-paper'
        }`}
        aria-pressed={lang === 'so'}
      >
        SO
      </button>
    </div>
  )
}
