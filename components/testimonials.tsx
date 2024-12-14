"use client";

import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack";
import { SparklesCore } from "@/components/ui/sparkles";

const testimonials = [
  {
    id: 1,
    name: "Prof. Emily Chen",
    designation: "Computer Science Professor",
    content: "LearnLens has revolutionized how I create course materials. The AI-powered content generation saves hours of preparation time."
  },
  {
    id: 2,
    name: "David Martinez",
    designation: "High School Teacher",
    content: "The multi-level explanations feature helps me cater to students of different abilities in the same class. It's been a game-changer."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    designation: "Education Consultant",
    content: "I've recommended LearnLens to numerous institutions. The personalized learning paths have shown remarkable results in student engagement."
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    designation: "University Researcher",
    content: "The analytics provided by LearnLens offer invaluable insights into student learning patterns and areas needing attention."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black/[0.96] antialiased relative">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesTestimonials"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4">
            What Educators Say
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Join thousands of educators who are transforming their teaching with LearnLens
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <CardStack items={testimonials} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-300 text-lg">
            Join over 10,000+ educators worldwide
          </p>
          <div className="mt-4 flex justify-center space-x-8">
            {["🏆 Education Choice Award 2024", "⭐ 4.9/5 Rating", "📈 98% Success Rate"].map((achievement) => (
              <span key={achievement} className="text-sm text-neutral-400">
                {achievement}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
