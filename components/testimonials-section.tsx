"use client"

import { Heart, MessageCircle } from "lucide-react"
import { useState } from "react"

interface Testimonial {
  id: string
  username: string
  displayName: string
  avatar: string
  comment: string
  likes: number
  replies: number
  timeAgo: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    username: "@studyqueen",
    displayName: "Sarah",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    comment:
      "The AI quiz feature is a game changer! I went from struggling with biology to actually understanding it. My test scores improved by 20%! 🎯",
    likes: 1247,
    replies: 34,
    timeAgo: "2d ago",
  },
  {
    id: "2",
    username: "@mathgenius",
    displayName: "Alex",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    comment:
      "I was skeptical at first but the smart notes feature literally saved my semester. It summarizes everything perfectly and I can actually review faster now",
    likes: 892,
    replies: 21,
    timeAgo: "5d ago",
  },
  {
    id: "3",
    username: "@collegelife",
    displayName: "Emma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    comment:
      "The stress relief feature is honestly so underrated. Between exams and assignments I was burning out but this actually helps me take proper breaks",
    likes: 2103,
    replies: 67,
    timeAgo: "1w ago",
  },
  {
    id: "4",
    username: "@premed_student",
    displayName: "Marcus",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    comment:
      "Used this for my MCAT prep and it's incredible. The quiz generation from my notes is exactly what I needed. Worth every penny of the Genius plan",
    likes: 1567,
    replies: 45,
    timeAgo: "3d ago",
  },
  {
    id: "5",
    username: "@gradschoolbound",
    displayName: "Priya",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    comment:
      "Finally an app that actually understands how students study. The timer keeps me focused and the AI summaries are spot on. My GPA went from 3.2 to 3.8!",
    likes: 3421,
    replies: 89,
    timeAgo: "4d ago",
  },
  {
    id: "6",
    username: "@engineeringmajor",
    displayName: "Jake",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake",
    comment:
      "I've tried so many study apps and this is the only one I actually use daily. The interface is clean and it doesn't try to do too much. Just what I need",
    likes: 756,
    replies: 18,
    timeAgo: "6d ago",
  },
  {
    id: "7",
    username: "@lawschool2025",
    displayName: "Olivia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    comment:
      "The amount of time I save with the AI summaries is insane. I can review a whole week of lectures in like an hour. This app is literally helping me survive law school",
    likes: 1834,
    replies: 52,
    timeAgo: "2d ago",
  },
  {
    id: "8",
    username: "@biologynerdd",
    displayName: "Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen",
    comment:
      "Best $4.99/month I've ever spent. The quiz feature alone is worth it. I used to spend hours making flashcards, now it's automatic",
    likes: 1092,
    replies: 28,
    timeAgo: "1w ago",
  },
]

export function TestimonialsSection() {
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set())

  const toggleLike = (id: string) => {
    setLikedComments((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">What Students Are Saying</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Real reviews from real students who transformed their study habits
          </p>
        </div>

        {/* TikTok-style Comments Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {/* User Info */}
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.displayName}
                  className="w-12 h-12 rounded-full bg-primary/10"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground truncate">{testimonial.displayName}</p>
                    <span className="text-xs text-muted-foreground">{testimonial.timeAgo}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{testimonial.username}</p>
                </div>
              </div>

              {/* Comment */}
              <p className="text-foreground leading-relaxed mb-4">{testimonial.comment}</p>

              {/* Actions */}
              <div className="flex items-center gap-6 text-muted-foreground">
                <button
                  onClick={() => toggleLike(testimonial.id)}
                  className="flex items-center gap-2 hover:text-red-500 transition-colors group"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${
                      likedComments.has(testimonial.id)
                        ? "fill-red-500 text-red-500 scale-110"
                        : "group-hover:scale-110"
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {likedComments.has(testimonial.id) ? testimonial.likes + 1 : testimonial.likes}
                  </span>
                </button>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{testimonial.replies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Join thousands of students improving their grades</p>
          <a
            href="/auth/signup"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
