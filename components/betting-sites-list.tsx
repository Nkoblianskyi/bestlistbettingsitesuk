"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function BettingSitesList() {
  const [sites, setSites] = useState(bettingSites)

  const topBadges = ["Best Bookmaker", "Trending", "Popular"]

  const renderStars = (rating: number, size = "h-3 w-3") => {
    const starRating = rating / 2 // Convert 10-point to 5-star scale
    const stars = []

    for (let i = 0; i < 5; i++) {
      const fillPercentage = Math.min(Math.max((starRating - i) * 100, 0), 100)
      stars.push(
        <div key={i} className="relative inline-block">
          <Star className={`${size} text-[hsl(220,15%,85%)]`} />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className={`${size} text-[hsl(35,85%,50%)] fill-[hsl(35,85%,50%)]`} />
          </div>
        </div>,
      )
    }
    return stars
  }

  return (
    <section className="pt-8 md:pt-12 pb-12 md:pb-20 bg-[hsl(42,25%,96%)] border-t-4 border-b-4 border-[hsl(0,45%,35%)] relative z-10 rounded-lg">
      <div className="px-3 sm:px-4">

        <div className="w-full space-y-4 max-w-[1000px] mx-auto">
          {sites.map((site, index) => {
            return (
              <Link
                key={site.id}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={`block bg-white rounded border-2 hover:shadow-xl transition-shadow duration-300 relative ${
                  index === 0
                    ? "border-[hsl(35,85%,50%)] shadow-lg"
                    : "border-[hsl(220,15%,85%)] shadow-md hover:border-[hsl(0,45%,35%)]"
                }`}
              >
                {index < 3 && topBadges[index] && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[hsl(0,45%,35%)] text-[hsl(42,25%,96%)] text-xs font-bold rounded px-3 py-1 shadow-md border-2 border-[hsl(35,85%,50%)] whitespace-nowrap">
                      {topBadges[index]}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <div className="hidden md:grid">
                  <div className="grid grid-cols-12 gap-4 p-4">
                    {/* Rank & Logo Section */}
                    <div className="col-span-3 flex items-center gap-3">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded font-bold text-xl flex items-center justify-center border-2 ${
                          index === 0
                            ? "bg-[hsl(35,85%,50%)] text-[hsl(220,20%,15%)] border-[hsl(220,20%,15%)]"
                            : "bg-[hsl(0,45%,35%)] text-[hsl(42,25%,96%)] border-[hsl(0,45%,35%)]"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="bg-[hsl(42,25%,96%)] rounded border-2 border-[hsl(220,15%,85%)] p-3 flex-1 flex items-center justify-center">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={140}
                          height={50}
                          className="object-contain h-12 w-auto"
                        />
                      </div>
                    </div>

                    {/* Score & Rating */}
                    <div className="col-span-2 flex flex-col items-center justify-center border-l-2 border-[hsl(220,15%,85%)]">
                      <div className="text-3xl font-bold text-[hsl(0,45%,35%)] mb-1">{site.score.toFixed(1)}</div>
                      <div className="flex items-center gap-0.5 mb-1">{renderStars(site.score, "h-4 w-4")}</div>
                      <div className="text-xs text-[hsl(220,15%,45%)] font-semibold">
                        {site.reviews.toLocaleString()} reviews
                      </div>
                    </div>

                    {/* Bonus Offer */}
                    <div className="col-span-4 flex flex-col justify-center border-l-2 border-[hsl(220,15%,85%)] pl-4">
                      <div className="text-xs font-bold text-[hsl(220,15%,45%)] uppercase mb-1">Welcome Offer</div>
                      <div className="font-bold text-base text-[hsl(220,20%,15%)] mb-2">{site.bonus}</div>
                      <div className="flex flex-wrap gap-1">
                        {site.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[hsl(42,20%,92%)] text-[hsl(220,15%,45%)] px-2 py-0.5 rounded border border-[hsl(220,15%,85%)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="col-span-3 flex flex-col items-center justify-center border-l-2 border-[hsl(220,15%,85%)] pl-4">
                      <Button
                        className={`w-full font-bold py-6 text-base mb-2 border-2 transition-all ${
                          index === 0
                            ? "bg-[hsl(35,85%,50%)] hover:bg-[hsl(35,85%,45%)] text-[hsl(220,20%,15%)] border-[hsl(220,20%,15%)] shadow-lg"
                            : "bg-[hsl(0,45%,35%)] hover:bg-[hsl(0,50%,40%)] text-[hsl(42,25%,96%)] border-[hsl(0,45%,35%)]"
                        }`}
                        asChild
                      >
                        <span>CLAIM OFFER</span>
                      </Button>
                      <div className="text-xs text-center text-[hsl(220,15%,45%)]">18+ T&Cs Apply</div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden p-3">
                  <div className="flex gap-2 mb-3">
                    {/* Logo - 45% width */}
                    <div className="w-[45%] bg-[hsl(42,25%,96%)] rounded border-2 border-[hsl(220,15%,85%)] p-2 flex items-center justify-center">
                      <Image
                        src={site.logo || "/placeholder.svg"}
                        alt={site.name}
                        width={100}
                        height={35}
                        className="object-contain max-h-12 w-full"
                      />
                    </div>

                    <div className="w-[55%] flex flex-col justify-center items-center text-center">
                      <div className="text-[10px] font-bold text-[hsl(220,15%,45%)] uppercase mb-1">Welcome Offer</div>
                      <div className="font-bold text-sm text-[hsl(220,20%,15%)] leading-tight">{site.bonus}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-2 items-center">
                    {/* Column 1: Rating */}
                    <div className="flex justify-center">
                      <div className="text-2xl font-bold text-[hsl(0,45%,35%)]">{site.score.toFixed(1)}</div>
                    </div>

                    {/* Column 2: Stars and Reviews */}
                    <div className="flex flex-col items-center">
                      <div className="flex gap-0.5 mb-1">{renderStars(site.score, "w-3.5 h-3.5")}</div>
                      <div className="text-[9px] text-[hsl(220,15%,45%)] font-medium">
                        {site.reviews.toLocaleString()}
                      </div>
                    </div>

                    {/* Column 3: Button */}
                    <div className="flex justify-center">
                      <Button
                        className={`font-bold py-3 px-3 text-[10px] border-2 ${
                          index === 0
                            ? "bg-[hsl(35,85%,50%)] hover:bg-[hsl(35,85%,45%)] text-[hsl(220,20%,15%)] border-[hsl(220,20%,15%)]"
                            : "bg-[hsl(0,45%,35%)] hover:bg-[hsl(0,50%,40%)] text-[hsl(42,25%,96%)] border-[hsl(0,45%,35%)]"
                        }`}
                        asChild
                      >
                        <span>CLAIM</span>
                      </Button>
                    </div>
                  </div>

                  {/* Third row: Disclaimer */}
                  <div className="text-[10px] text-center text-[hsl(220,15%,45%)] pt-2 border-t border-[hsl(220,15%,85%)]">
                    18+ T&Cs Apply. BeGambleAware.org
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <p className="text-xs text-[hsl(220,15%,45%)] leading-relaxed">
            All bookmakers featured are licensed by the UK Gambling Commission. Gambling can be addictive, please play
            responsibly. BeGambleAware.org • 18+ Only
          </p>
        </div>
      </div>
    </section>
  )
}
