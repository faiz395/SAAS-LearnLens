'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus, BookOpen, Zap, CheckCircle } from 'lucide-react'

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your LearnLens account and set up your profile.',
    icon: UserPlus,
  },
  {
    title: 'Choose Your Topic',
    description: 'Select the subject or topic you want to learn or teach.',
    icon: BookOpen,
  },
  {
    title: 'Generate Content',
    description: 'Let our AI create personalized learning materials for you.',
    icon: Zap,
  },
  {
    title: 'Learn and Improve',
    description: 'Study the materials and track your progress over time.',
    icon: CheckCircle,
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 md:w-[90%] md:px-[20px] mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Step {index + 1}: {step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

