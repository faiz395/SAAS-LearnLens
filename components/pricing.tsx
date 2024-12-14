"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BackgroundBeams } from "@/components/ui/background-beams";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out LearnLens",
    price: { monthly: 0, annual: 0 },
    features: [
      "Basic content generation",
      "5 study guides per month",
      "Standard explanations",
      "Basic analytics",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Pro",
    description: "For educators and content creators",
    price: { monthly: 29, annual: 290 },
    features: [
      "Advanced AI content generation",
      "Unlimited study guides",
      "Multi-level explanations",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Team collaboration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For institutions and organizations",
    price: { monthly: "Custom", annual: "Custom" },
    features: [
      "Everything in Pro",
      "Custom AI model training",
      "API access",
      "Dedicated account manager",
      "SLA support",
      "Custom integrations",
      "Advanced security features"
    ],
    popular: false
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-black/[0.96] antialiased relative">
      <div className="container mx-auto px-4 relative z-10 md:w-[90%] md:px-[20px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
          
          <div className="flex items-center justify-center mt-8 gap-2">
            <Label htmlFor="billing-switch" className="text-neutral-300">Monthly</Label>
            <Switch
              id="billing-switch"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-switch" className="text-neutral-300">Annual (Save 20%)</Label>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-2xl border border-neutral-800 bg-black p-8 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-200 mb-2">{plan.name}</h3>
                <p className="text-neutral-400">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-neutral-200">
                    {typeof plan.price[isAnnual ? 'annual' : 'monthly'] === 'number' 
                      ? `$${plan.price[isAnnual ? 'annual' : 'monthly']}`
                      : plan.price[isAnnual ? 'annual' : 'monthly']}
                  </span>
                  {typeof plan.price[isAnnual ? 'annual' : 'monthly'] === 'number' && (
                    <span className="text-neutral-400 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-neutral-300">
                    <svg
                      className="w-4 h-4 mr-3 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
      <BackgroundBeams className="opacity-20" />
    </section>
  );
}
