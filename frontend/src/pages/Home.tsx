import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import TrustedBy from '../components/Home/Trustedby'
import Features from '../components/Home/Features'
import HowItWorks from '../components/Home/Howitworks'
import Testimonials from '../components/Home/Testimonials'
import Pricing from '../components/Home/Pricing'
import FAQ from '../components/Home/Faq'
import Footer from '../components/Home/Footer'


const Home = () => {
  return (
  <div className="relative min-h-screen overflow-hidden bg-[#050714]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124, 58, 237, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(29, 78, 216, 0.08), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(124, 58, 237, 0.06), transparent)
          `,
        }}
      />

      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
