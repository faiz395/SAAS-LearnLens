"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSection() {
  const words = [
    {
      text: "Create",
      className: "text-white",
    },
    {
      text: "personalized",
      className: "text-blue-500",
    },
    {
      text: "learning",
      className: "text-blue-500",
    },
    {
      text: "content",
      className: "text-white",
    },
    {
      text: "with",
      className: "text-white",
    },
    {
      text: "LearnLens",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "AI",
      className: "text-white",
    },
  ];

  return (
    <div className="min-h-screen md:w-[90%] md:px-[20px] pt-12 mx-auto w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-8">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-10"
        >
          <TypewriterEffect words={words} className="text-4xl md:text-6xl font-bold" />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-neutral-400 max-w-xl mx-auto px-4 text-lg md:text-xl"
          >
            Transform complex topics into personalized study guides with AI-powered learning assistance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-center"
          >
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-full text-lg"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 px-8 py-6 rounded-full text-lg"
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-neutral-400 mb-4">Trusted by educators worldwide</p>
            <div className="flex justify-center items-center gap-8 grayscale opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[120px] h-[40px] bg-neutral-800 rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
