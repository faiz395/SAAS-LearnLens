'use client'

import * as React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'md:w-[90%] px-[20px] fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-200 mx-auto',
        isScrolled ? 'border-b' : 'border-b-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">LearnLens</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.header>
  )
}

