"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1410]/80 backdrop-blur-sm animate-fade-in p-3">
      <div className="relative w-full max-w-sm bg-[#f5f1e8] rounded-lg shadow-2xl overflow-hidden animate-scale-in border-4 border-[#7a2e2e]">
        <div className="bg-[#7a2e2e] text-[#f5f1e8] py-3 px-4 flex items-center justify-between sticky top-0 z-10 border-b-2 border-[#d4a843] text-center">
          <div className="flex items-center gap-2">
            
            <h2 className="text-base md:text-lg font-bold tracking-wider uppercase text-right">Today&apos;s highlighted offer</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#f5f1e8] hover:text-[#d4a843] transition-all duration-300 hover:rotate-90 transform bg-[#1e3a5f]/30 rounded-full p-1.5"
            aria-label="Close"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>

        <div className="p-5 flex justify-center">
          <Link
            key={topSite.id}
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border-4 border-[#d4a843] relative w-full bg-white rounded-lg"
          >
            <Card className="h-full bg-white border-0">
              
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="flex-grow flex flex-col items-center">
                  <div className="bg-[#f5f1e8] p-3 rounded-md shadow-md mb-4 flex items-center justify-center w-40 h-40 border-2 border-[#7a2e2e]">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={140}
                      height={96}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#d4a843]" fill="currentColor" />
                    ))}
                    <span className="font-bold text-lg text-[#1e1410] ml-2">{topSite.score.toFixed(1)}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-[#1e3a5f] text-[#f5f1e8] mb-3 text-xs border-[#7a2e2e] uppercase tracking-wide"
                  >
                    Welcome Offer
                  </Badge>
                  <h3 className="text-xl font-bold text-[#1e1410] mb-5 tracking-tight">{topSite.bonus}</h3>
                </div>
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full">
                    <Button
                      className="w-full bg-[#7a2e2e] hover:bg-[#5a1e1e] text-[#f5f1e8] transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-base py-5 font-bold uppercase tracking-wider border-2 border-[#d4a843]"
                      asChild
                    >
                      <span className="flex items-center justify-center">Claim Bonus</span>
                    </Button>
                  </div>
                  <p className="text-xs text-center text-[#5a4a3a] mt-3 font-medium">
                    18+. T&Cs Apply. Play Responsibly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
        <div className="h-2 bg-gradient-to-r from-[#7a2e2e] via-[#d4a843] to-[#7a2e2e]"></div>
      </div>
    </div>
  )
}
