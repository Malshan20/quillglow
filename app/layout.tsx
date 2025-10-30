import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quillglow.com"),
  title: {
    default: "QuillGlow - AI-Powered Study App for Students | Smart Note-Taking & Study Tools",
    template: "%s | QuillGlow",
  },
  icons: {
    icon: "/icon.png",
  },
  description:
    "QuillGlow is an AI-powered study app for students featuring smart note-taking, AI quiz generation, study timer, stress relief tools, and progress tracking. Study smarter with our student productivity platform.",
  keywords: [
    "study app",
    "student productivity tool",
    "AI study assistant",
    "smart note-taking app",
    "quiz generator",
    "study timer app",
    "pomodoro timer for students",
    "stress relief for students",
    "AI-powered learning",
    "student study planner",
    "note-taking app for students",
    "study tools for students",
    "educational productivity app",
    "student organization app",
    "study motivation app",
  ],
  authors: [{ name: "QuillGlow" }],
  creator: "QuillGlow",
  publisher: "QuillGlow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.quillglow.com",
    siteName: "QuillGlow",
    title: "QuillGlow - AI-Powered Study App for Students",
    description:
      "Master your studies with AI-powered tools: smart notes, quiz generation, study timer, and stress relief. The complete student productivity platform.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "QuillGlow - AI-Powered Study App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuillGlow - AI-Powered Study App for Students",
    description:
      "Master your studies with AI-powered tools: smart notes, quiz generation, study timer, and stress relief.",
    images: ["/icon.png"],
    creator: "@quillglow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.quillglow.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z00QYNDBJP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z00QYNDBJP');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QuillGlow",
              url: "https://www.quillglow.com",
              logo: "https://www.quillglow.com/logo.png",
              description:
                "AI-powered study app for students with smart note-taking, quiz generation, and productivity tools",
              sameAs: [
                "https://twitter.com/quillglow",
                "https://facebook.com/quillglow",
                "https://instagram.com/quillglow",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "support@quillglow.com",
                contactType: "Customer Support",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "QuillGlow",
              url: "https://www.quillglow.com",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
