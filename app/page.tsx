'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import Features from '@/components/features'
import HowItWorks from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import Faq from '@/components/faq'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <motion.main 
        className="flex-grow bg-black/[0.96] antialiased bg-grid-white/[0.02]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
