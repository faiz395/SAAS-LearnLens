'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { ThreeDCardDemo } from '@/components/ui/3d-card'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function Hero() {
  return (
    <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-background relative overflow-hidden">
      <BackgroundBeams />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                LearnLens: Adaptive Learning Content Creation
              </h1>
              <TextGenerateEffect words="Personalized educational materials at your fingertips" className="max-w-[600px] text-muted-foreground md:text-xl" />
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="animate-shimmer">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ThreeDCardDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

