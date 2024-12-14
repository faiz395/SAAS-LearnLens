'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Book, Brain, Lightbulb, Layers } from 'lucide-react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const features = [
  {
    title: 'Personalized Content',
    description: 'Generate tailored educational materials based on individual learning styles and preferences.',
    icon: Book,
  },
  {
    title: 'Adaptive Difficulty',
    description: 'Automatically adjust content difficulty to match the learner\'s current knowledge level.',
    icon: Brain,
  },
  {
    title: 'Multi-level Explanations',
    description: 'Provide in-depth explanations for complex topics with varying levels of detail.',
    icon: Layers,
  },
  {
    title: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to identify knowledge gaps and suggest targeted learning materials.',
    icon: Lightbulb,
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container md:w-[90%] md:px-[20px] mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Key Features</h2>
          <TextGenerateEffect words="Discover the power of adaptive learning with LearnLens" className="text-center mb-12" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}