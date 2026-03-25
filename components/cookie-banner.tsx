"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(220,20%,15%)] text-[hsl(42,25%,96%)] shadow-2xl border-t-4 border-[hsl(35,85%,50%)] animate-slide-up">
      <div className="mx-auto max-w-[1000px] px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 flex items-start gap-3">
            <Cookie className="h-6 w-6 text-[hsl(35,85%,50%)] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-2 text-[hsl(42,25%,96%)]">Cookies on BestListBettingSitesUK.com</h3>
              <p className="text-sm text-[hsl(42,25%,85%)] leading-relaxed">
                We use cookies and similar technologies to run the site, remember your choices, measure traffic, and
                (where you agree) support relevant messaging. By choosing &quot;Accept All&quot;, you consent as described
                in our{" "}
                <a href="/cookie-policy" className="text-[hsl(35,85%,50%)] underline font-medium hover:text-[hsl(35,85%,60%)]">
                  Cookie Policy
                </a>
                . You can change your mind later in your browser settings.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              className="border-2 border-[hsl(42,25%,96%)] text-[hsl(42,25%,96%)] hover:bg-[hsl(42,25%,96%)] hover:text-[hsl(220,20%,15%)] transition-all duration-300 bg-transparent font-bold"
              onClick={declineAll}
            >
              Decline
            </Button>
            <Button
              className="bg-[hsl(35,85%,50%)] hover:bg-[hsl(35,85%,45%)] text-[hsl(220,20%,15%)] transition-all duration-300 border-2 border-[hsl(35,85%,50%)] font-bold"
              onClick={acceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
