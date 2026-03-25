import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best List Betting Sites UK | Expert Reviews & Welcome Offers 2025",
  description:
    "Compare trusted UK-licensed bookmakers on BestListBettingSitesUK.com — clear reviews, current welcome offers, and practical guidance for British punters.",
  keywords:
    "UK betting sites, British bookmakers, online betting UK, betting bonuses UK, football betting, sports betting UK",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased min-h-screen relative">
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
          <Image
            src="/vintage-stadium.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[hsl(42,25%,96%)]/75" />
        </div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
