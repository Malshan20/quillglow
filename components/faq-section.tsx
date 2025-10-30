"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How to make studying more fun?",
    answer:
      "QuillGlow makes studying engaging by providing AI-powered tools that simplify complex topics, generate interactive quizzes, and offer stress relief features. Our smart note-taking system helps you organize information better, while the study timer keeps you focused with structured breaks.",
  },
  {
    question: "What is the best AI study app for students?",
    answer:
      "QuillGlow is an AI-powered study app designed specifically for students. It features smart note-taking with AI summaries, automated quiz generation, a Pomodoro study timer, stress relief tools with an AI coach, and comprehensive progress tracking—all in one platform.",
  },
  {
    question: "How can I improve my study productivity?",
    answer:
      "Use QuillGlow's integrated study tools: take smart notes that automatically generate summaries, create quizzes to test your knowledge, use the Pomodoro timer to maintain focus, and track your progress over time. Our AI-powered features help you study more efficiently and retain information better.",
  },
  {
    question: "What features does QuillGlow offer?",
    answer:
      "QuillGlow offers smart note-taking with AI summaries, automated quiz generation from your notes, a Pomodoro study timer, an AI-powered stress relief coach with calming backgrounds and breathing exercises, progress tracking, and a blog with study tips. All features are designed to help students study smarter.",
  },
  {
    question: "Is QuillGlow free to use?",
    answer:
      "Yes! QuillGlow offers a free plan with access to core features including note-taking, quiz generation, and the study timer. We also offer a Genius plan with unlimited features and advanced AI capabilities for students who want the complete experience.",
  },
  {
    question: "How does the AI quiz generator work?",
    answer:
      "QuillGlow's AI analyzes your notes and automatically generates relevant quiz questions to test your understanding. You can choose between multiple-choice and true/false formats, making it easy to practice and reinforce what you've learned.",
  },
  {
    question: "What is the stress relief feature?",
    answer:
      "Our stress relief feature provides a calming environment with changeable backgrounds, an AI-powered stress relief coach for journaling and support, guided breathing exercises, and a customizable timer to help you take mindful breaks during study sessions.",
  },
  {
    question: "Can I use QuillGlow on mobile devices?",
    answer:
      "Yes! QuillGlow is fully responsive and works seamlessly on mobile devices, tablets, and desktop computers. Access your notes, quizzes, and study tools from any device with an internet connection.",
  },
]

export function FAQSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about QuillGlow and how it can help you study better
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* JSON-LD structured data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
