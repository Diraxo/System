import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  // Load saved preference on mount (this is a real deployed site, not a
  // Claude.ai artifact preview, so localStorage is safe to use here).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('tusmo-lang')
      if (saved === 'en' || saved === 'so') setLang(saved)
    } catch {
      // ignore — falls back to English
    }
  }, [])

  function changeLang(next) {
    setLang(next)
    try {
      window.localStorage.setItem('tusmo-lang', next)
    } catch {
      // ignore — storage may be unavailable, language still switches for this session
    }
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
