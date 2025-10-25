"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const words = titleRef.current.querySelectorAll(".word")

    gsap.fromTo(
      words,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      },
    )
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-6 gap-2 rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Study Platform</span>
            </Badge>
          </motion.div>

          <h1
            ref={titleRef}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="word inline-block">Master</span> <span className="word inline-block">Your</span>{" "}
            <span className="word inline-block">Studies</span>
            <br />
            <span className="word inline-block">With</span>{" "}
            <span className="word inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Smart
            </span>{" "}
            <span className="word inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Tools
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl"
          >
            AI-powered study tools including smart note-taking, automated quiz generation, Pomodoro timer, stress relief
            coach, and progress tracking. Everything you need to study smarter and achieve better results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/auth/signup">
              <Button size="lg" className="rounded-full px-8 text-base">
                Get Started Free
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-transparent">
                Sign In
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {[
              { icon: "🤖", value: "AI", label: "Powered" },
              { icon: "📚", value: "5+", label: "Study Tools" },
              { icon: "✨", value: "100%", label: "Free" },
            ].map((stat, index) => (
              <motion.div key={stat.label} whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-2">
                <span className="text-4xl">{stat.icon}</span>
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
