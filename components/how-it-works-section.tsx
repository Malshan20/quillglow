"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { UserPlus, Calendar, Brain, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up with email to get started. No credit card required, completely free.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Plan Your Studies",
    description:
      "Use AI to generate study plans, add tasks to your calendar, and organize your schedule with the Pomodoro timer.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    number: "03",
    icon: Brain,
    title: "Study & Learn",
    description:
      "Create flashcards with AI, take organized notes, use spaced repetition, and take stress relief breaks when needed.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track Progress",
    description:
      "Monitor your study hours, subject breakdown, mood patterns, and get personalized insights to improve your learning.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            How It{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground"
          >
            Get started in minutes and transform your study routine
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-12 md:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4 inline-block rounded-2xl bg-secondary px-4 py-2">
                  <span className="text-5xl font-bold text-muted-foreground/30">{step.number}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{step.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{step.description}</p>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className={`flex h-32 w-32 items-center justify-center rounded-3xl ${step.bgColor} shadow-lg md:h-40 md:w-40`}
              >
                <step.icon className={`h-16 w-16 ${step.color} md:h-20 md:w-20`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
