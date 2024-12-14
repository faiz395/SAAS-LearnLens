'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does LearnLens personalize content?',
    answer: 'LearnLens uses advanced AI algorithms to analyze your learning style, preferences, and current knowledge level. It then generates tailored educational materials that best suit your individual needs.',
  },
  {
    question: 'Can I use LearnLens for any subject?',
    answer: 'Yes! LearnLens is designed to work with a wide range of subjects, from mathematics and science to literature and history. Our AI can adapt to various fields of study.',
  },
  {
    question: 'Is LearnLens suitable for all age groups?',
    answer: 'Absolutely. LearnLens can generate content for learners of all ages, from elementary school students to adult learners. The difficulty and complexity of the content are adjusted based on the user\'s profile.',
  },
  {
    question: 'How often is the content updated?',
    answer: 'We continuously update our AI models and knowledge base to ensure that the generated content is up-to-date and accurate. You\'ll always have access to the latest information in your field of study.',
  },
  {
    question: 'Can I integrate LearnLens with other learning management systems?',
    answer: 'Yes, LearnLens offers API integrations for enterprise customers. This allows you to seamlessly incorporate our adaptive learning content into your existing LMS or educational platform.',
  },
]

export default function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

