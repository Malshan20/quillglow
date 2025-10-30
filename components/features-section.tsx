"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Brain, StickyNote, BarChart3, Sparkles, Clock, Search } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Study Planner",
    description:
      "AI-powered task suggestions, calendar view, and Pomodoro timer to organize your study schedule effectively.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Brain,
    title: "Smart Flashcards",
    description:
      "Create flashcards manually or with AI. Study with spaced repetition algorithm and quiz mode for better retention.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: StickyNote,
    title: "Smart Notes",
    description: "Rich text editor with auto-save, search, tags, and export functionality for organized note-taking.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track study hours, subject breakdown, GPA estimation, burnout risk, and mood patterns with detailed charts.",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    icon: Search,
    title: "AI Smart Search",
    description:
      "Search smarter with AI-powered summaries, YouTube video lessons, and curated web resources. Get instant answers with educational content tailored for students.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Clock,
    title: "Pomodoro Timer",
    description:
      "Built-in focus timer with break tracking to maintain productivity and prevent burnout during study sessions.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    icon: Sparkles,
    title: "Stress Relief",
    description:
      "AI-powered stress relief coach with calming backgrounds, breathing exercises, and timed breaks to help you relax.",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 rounded-full px-4 py-2">
              ✨ Features
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Study Smart
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground"
          >
            Powerful study tools powered by AI to help you learn more effectively and stay organized.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={`rounded-2xl ${feature.bgColor} p-3`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
