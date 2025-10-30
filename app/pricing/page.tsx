import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { PLAN_DETAILS } from "@/lib/types/subscription"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - QuillGlow Study App Plans | Free & Premium Options",
  description:
    "Choose the perfect QuillGlow plan for your study needs. Start free with Scholar plan or upgrade to Genius for unlimited AI-powered study tools, quizzes, and features.",
  keywords: [
    "quillglow pricing",
    "study app pricing",
    "student app plans",
    "free study app",
    "premium study tools",
    "student subscription plans",
  ],
  openGraph: {
    title: "Pricing - QuillGlow Study App Plans",
    description: "Start free or upgrade to unlimited features. Choose the perfect plan for your study needs.",
    url: "https://www.quillglow.com/pricing",
    type: "website",
  },
  alternates: {
    canonical: "https://www.quillglow.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with Scholar for free, or upgrade to Genius for unlimited access to all features
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Scholar Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">{PLAN_DETAILS.scholar.name}</CardTitle>
                <CardDescription>{PLAN_DETAILS.scholar.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {PLAN_DETAILS.scholar.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Genius Plan */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{PLAN_DETAILS.genius.name}</CardTitle>
                <CardDescription>{PLAN_DETAILS.genius.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${PLAN_DETAILS.genius.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {PLAN_DETAILS.genius.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/auth/signup">Start Free Trial</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! You can upgrade from Scholar to Genius at any time. Your new features will be available
                  immediately.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What happens when I reach my limits?</h3>
                <p className="text-muted-foreground text-sm">
                  On the Scholar plan, you'll be notified when you approach your monthly limits. You can upgrade to
                  Genius for unlimited access.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground text-sm">
                  The Scholar plan is completely free forever. You can try all basic features without a credit card.
                </p>
              </div>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "QuillGlow Study App",
              description: "AI-powered study app with smart note-taking, quiz generation, and productivity tools",
              offers: [
                {
                  "@type": "Offer",
                  name: "Scholar Plan",
                  price: "0",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  url: "https://www.quillglow.com/pricing",
                },
                {
                  "@type": "Offer",
                  name: "Genius Plan",
                  price: PLAN_DETAILS.genius.price.toString(),
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  url: "https://www.quillglow.com/pricing",
                },
              ],
            }),
          }}
        />
      </main>

      <Footer />
    </div>
  )
}
