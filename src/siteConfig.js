// Brand identity and contact details — non-translatable config only.
// All page copy (EN + SO) now lives in src/i18n/translations.js.

export const siteConfig = {
  brand: 'Tusmo Systems',
  tagline: 'Structured software for real businesses.',
  whatsappNumber: '251777012633', // digits only, country code first, no + or leading 0
  whatsappMessage: "Hi Tusmo Systems, I'd like to talk about a project.",
  email: '', // add if you want an email link too
}

export const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`
