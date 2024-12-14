"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/[0.96] antialiased relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-400"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                className="min-h-[150px] bg-neutral-950 border-neutral-800 text-neutral-100 placeholder:text-neutral-400"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              Send Message
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex justify-center space-x-6">
            {[
              { label: "Email", value: "support@learnlens.com" },
              { label: "Phone", value: "+1 (555) 123-4567" },
              { label: "Location", value: "San Francisco, CA" }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <h3 className="text-neutral-200 font-medium">{item.label}</h3>
                <p className="text-neutral-400">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <BackgroundBeams className="opacity-20" />
    </section>
  );
}
