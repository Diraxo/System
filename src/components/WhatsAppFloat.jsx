import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../siteConfig'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-teal text-ink flex items-center justify-center shadow-[0_0_0_0_rgba(0,229,199,0.5)] focus-ring"
      style={{ animation: 'pulseGlow 2.4s ease-in-out infinite' }}
    >
      <MessageCircle size={24} />
      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(0,229,199,0.45); }
          70% { box-shadow: 0 0 0 14px rgba(0,229,199,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,229,199,0); }
        }
      `}</style>
    </motion.a>
  )
}
