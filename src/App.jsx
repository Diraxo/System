import Nav from './components/Nav'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Services from './components/Services'
import Guarantees from './components/Guarantees'
import Story from './components/Story'
import Process from './components/Process'
import SystemInspector from './components/SystemInspector'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Nav />
      <Hero />
      <DashboardPreview />
      <Services />
      <Guarantees />
      <Story />
      <SystemInspector />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
