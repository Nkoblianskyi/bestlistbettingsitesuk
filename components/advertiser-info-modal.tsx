"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in p-4">
      <div className="relative w-full max-w-md bg-[hsl(42,25%,96%)] rounded border-4 border-[hsl(0,45%,35%)] shadow-2xl p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-4 border-b-2 border-[hsl(220,15%,85%)] pb-3">
          <div className="flex items-center gap-2">
            <div className="bg-[hsl(0,45%,35%)] p-2 rounded">
              <Info className="h-5 w-5 text-[hsl(42,25%,96%)]" />
            </div>
            <h2 className="text-xl font-bold text-[hsl(220,20%,15%)]">Advertiser disclosure</h2>
          </div>
          <button
            onClick={onClose}
            className="text-[hsl(220,15%,45%)] hover:text-[hsl(0,45%,35%)] transition-colors duration-300"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="text-sm text-[hsl(220,20%,15%)] space-y-3 leading-relaxed">
          <p>
            BestListBettingSitesUK.com is a free comparison resource. We may receive commission from operators when you
            register or bet via outbound links. Commercial relationships can affect where and how brands appear, so we
            always label advertising clearly and keep editorial standards separate from sales messaging where possible.
          </p>
          <p>
            We aim to list UK-licensed bookmakers and accurate offer text, but operators change promotions and terms
            often. Please verify every detail on the bookmaker&apos;s own site before you deposit or place a bet.
          </p>
          <p>
            Nothing on this site is financial or legal advice. If you are unsure about an offer, read the full terms or
            speak to the operator&apos;s support team.
          </p>
        </div>
        <div className="mt-6 flex justify-end border-t-2 border-[hsl(220,15%,85%)] pt-4">
          <Button
            onClick={onClose}
            className="bg-[hsl(0,45%,35%)] hover:bg-[hsl(0,50%,40%)] text-[hsl(42,25%,96%)] transition-all duration-300 border-2 border-[hsl(0,45%,35%)] font-bold px-6"
          >
            Understood
          </Button>
        </div>
      </div>
    </div>
  )
}
