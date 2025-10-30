"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 px-8 py-16 text-center shadow-2xl md:px-16 md:py-24"
        >
          {/* Decorative elements */}
          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Start learning smarter</span>
            </div>

            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Ready to Transform
              <br />
              Your Learning?
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-balance text-lg text-white/90 md:text-xl">
              Sign up now and discover how fun and easy learning can be. No credit card required.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/auth/signup">
              <Button size="lg" variant="secondary" className="rounded-full px-8 text-base font-semibold">
                Start Free Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </Button>
              </Link>
              <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white hover:text-blue-600"
              >
                Learn More
              </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/80">✨ 100% free forever • No credit card required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
