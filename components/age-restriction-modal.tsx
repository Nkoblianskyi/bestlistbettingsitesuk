"use client"

import { useState, useEffect } from "react"
import { Trophy, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-md bg-[#f5f1e8] rounded-none overflow-hidden border-4 border-[#7a2e2e] shadow-2xl">
        {/* Vintage British header */}
        <div className="bg-[#7a2e2e] text-[#f5f1e8] px-6 py-3 flex items-center justify-between border-b-2 border-[#d4a843]">
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-[#d4a843]" />
            <h2 className="text-base font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-heading)" }}>
              Featured Bookmaker
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#f5f1e8] hover:text-[#d4a843] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Main content with vintage styling */}
        <div className="relative bg-[#f5f1e8] p-6">
          {/* Vintage TOP PICK badge */}
          <div className="absolute -top-1 right-4 bg-[#d4a843] text-[#1a1a1a] px-6 py-1 text-xs font-black uppercase tracking-[0.2em] shadow-md border-2 border-[#7a2e2e]">
            Top Pick
          </div>

          {/* Bet365 logo with vintage frame */}
          <div className="flex justify-center mb-4 pt-4">
            <div className="bg-white p-4 border-2 border-[#7a2e2e]">
              <img src="/bet365.webp" alt="Bet365" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Star rating with vintage styling */}
          <div className="flex justify-center items-center gap-2 mb-3 bg-white border-2 border-[#1e3a5f] py-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-[#d4a843] text-[#d4a843]" />
              ))}
            </div>
            <span className="text-2xl font-black text-[#1a1a1a]" style={{ fontFamily: "var(--font-heading)" }}>
              9.8
            </span>
          </div>

          {/* Welcome Offer badge - vintage style */}
          <div className="flex justify-center mb-3">
            <span className="inline-block bg-[#1e3a5f] text-[#f5f1e8] px-4 py-1 text-xs font-bold uppercase tracking-widest border-2 border-[#7a2e2e]">
              Welcome Offer
            </span>
          </div>

          {/* Offer text with British typography */}
          <div className="text-center mb-4 bg-white border-l-4 border-r-4 border-[#7a2e2e] py-3">
            <p
              className="text-lg font-black text-[#1a1a1a] uppercase tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Bet £10 Get £30 in Free Bets
            </p>
          </div>

          {/* Vintage style claim button */}
          <a href="https://www.bet365.com" target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-[#7a2e2e] hover:bg-[#5a1e1e] text-[#f5f1e8] font-black py-5 text-sm uppercase tracking-[0.2em] border-4 border-[#d4a843] shadow-lg transition-all hover:shadow-xl">
              Claim Bonus Now
            </Button>
          </a>

          {/* Disclaimer with vintage styling */}
          <p className="text-center text-xs text-[#1a1a1a] mt-3 font-semibold uppercase tracking-wider">
            18+ · T&Cs Apply · BeGambleAware.org
          </p>
        </div>

        {/* Bottom decorative stripe */}
        <div className="h-2 bg-gradient-to-r from-[#7a2e2e] via-[#d4a843] to-[#7a2e2e]" />
      </div>
    </div>
  )
}
