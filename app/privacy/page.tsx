import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: October 16, 2025</p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                At QuillGlow, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground mb-4">
                <li>Email address and password for account creation</li>
                <li>Profile information (name, avatar preferences)</li>
                <li>Study-related data (tasks, notes, flashcards, study sessions)</li>
                <li>Progress and analytics data</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Automatically Collected Information</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                When you use QuillGlow, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground mb-4">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Usage patterns and feature interactions</li>
                <li>Performance and error logs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Generate AI-powered study plans and flashcards</li>
                <li>Track your study progress and provide analytics</li>
                <li>Send you important updates and notifications</li>
                <li>Respond to your requests and provide customer support</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Data Storage and Security</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Your data is stored securely using industry-standard encryption. We use Supabase for database
                management, which provides enterprise-grade security and compliance. We implement appropriate technical
                and organizational measures to protect your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We use third-party services to provide our features:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground mb-4">
                <li>Google Gemini AI for generating study content</li>
                <li>Deepgram for voice-to-text transcription</li>
                <li>Supabase for authentication and data storage</li>
              </ul>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@quillglow.app" className="text-primary hover:underline">
                  privacy@quillglow.app
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
