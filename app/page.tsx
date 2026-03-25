"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, Award, Star, TrendingUp } from "lucide-react"
import { AnimatedSportsIcons } from "@/components/animated-sports-icons"
import { LiveUkDate } from "@/components/live-uk-date"

const sectionWrap = "w-full max-w-[1000px] mx-auto px-4"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <div className="pt-16">
        <div className="flex justify-center px-4">
          <section className={`${sectionWrap} relative overflow-hidden rounded-b-lg bg-gradient-to-br from-[hsl(140,30%,20%)] via-[hsl(30,25%,25%)] to-[hsl(140,25%,15%)] border-x border-b-2 border-[hsl(40,75%,55%)]/40 shadow-lg`}>
            <div className="absolute inset-0 z-0 bg-pitch-lines opacity-10"></div>

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(40,75%,55%)] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[hsl(40,75%,55%)] to-transparent"></div>

            <div className="relative z-10 py-6 md:py-8">
              <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[hsl(42,25%,96%)] mb-3 leading-tight text-vintage-shadow animate-fade-in-up">
                  UK BOOKMAKERS
                  <br />
                  <span className="text-[hsl(40,75%,55%)]">RANKED &amp; REVIEWED</span>
                  <br />
                  <span className="mt-2 block text-sm font-semibold uppercase tracking-wider text-[hsl(42,25%,88%)] md:text-base">
                    Ranking last updated
                  </span>
                  <LiveUkDate
                    variant="long"
                    className="mt-1 block text-xl font-bold text-[hsl(40,75%,55%)] md:text-2xl lg:text-3xl"
                  />
                </h1>

                <p
                  className="text-sm md:text-base text-[hsl(42,25%,90%)] max-w-2xl mx-auto mb-4 animate-fade-in-up"
                  style={{ animationDelay: "200ms" }}
                >
                  Straightforward comparisons of licensed UK operators: welcome offers, odds quality, and what matters
                  for everyday punters — no jargon, no hype.
                </p>

                <div
                  className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-4 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[hsl(40,75%,55%)]" />
                    <span className="text-xs font-semibold text-[hsl(42,25%,96%)]">UK Licensed</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-[hsl(40,75%,55%)]" />
                    <span className="text-xs font-semibold text-[hsl(42,25%,96%)]">Offers Checked</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-[hsl(40,75%,55%)]" />
                    <span className="text-xs font-semibold text-[hsl(42,25%,96%)]">Editorial Focus</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-[hsl(40,75%,55%)]" />
                    <span className="text-xs font-semibold text-[hsl(42,25%,96%)]">Fair Odds</span>
                  </div>
                </div>

                <div
                  className="border-t border-[hsl(42,25%,96%)]/20 pt-3 animate-fade-in-up"
                  style={{ animationDelay: "600ms" }}
                >
                  <p className="text-xs text-[hsl(42,25%,85%)]">
                    18+ Only. Gamble Responsibly. BeGambleAware.org •{" "}
                    <button
                      onClick={() => setIsAdvertiserModalOpen(true)}
                      className="text-[hsl(40,75%,55%)] hover:underline font-semibold transition-colors"
                    >
                      Advertiser Disclosure
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="betting-sites" className="flex justify-center px-4 relative">
          <div className={`${sectionWrap} relative overflow-hidden rounded-lg border-2 border-[hsl(0,45%,35%)]/30 shadow-md my-4`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
              <AnimatedSportsIcons />
            </div>
            <BettingSitesList />
          </div>
        </div>

        <div id="faq-section" className="flex justify-center px-4">
          <div className={sectionWrap}>
            <FaqSection />
          </div>
        </div>

        <div className="flex justify-center px-4 pb-8">
          <section className={`${sectionWrap} py-12 md:py-16 relative overflow-hidden rounded-lg bg-gradient-to-b from-[hsl(42,25%,96%)] to-[hsl(42,20%,92%)] border-2 border-[hsl(220,15%,85%)] shadow-lg`}>
            <div className="absolute inset-0 bg-vintage-pattern opacity-30 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-block bg-[hsl(0,45%,35%)] text-[hsl(42,25%,96%)] px-4 py-2 rounded font-bold text-xs uppercase tracking-wider mb-4">
                  How we work
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-[hsl(220,20%,15%)] mb-6">
                  Betting in the UK: clear, practical guidance
                </h2>
                <p className="text-lg md:text-xl text-[hsl(220,15%,45%)] max-w-3xl mx-auto">
                  We test platforms the way real users do — markets, mobile apps, cash-out, and how quickly support
                  responds when something goes wrong.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white rounded-lg p-6 border-2 border-[hsl(220,15%,85%)] shadow-lg hover:shadow-xl hover:border-[hsl(0,45%,35%)] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[hsl(220,20%,15%)] mb-3">Licence &amp; safety</h3>
                  <p className="text-[hsl(220,15%,45%)]">
                    We only list operators licensed by the UK Gambling Commission. That means verified fairness tools,
                    secure payments, and clear routes to help if betting stops feeling fun.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-[hsl(220,15%,85%)] shadow-lg hover:shadow-xl hover:border-[hsl(0,45%,35%)] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[hsl(220,20%,15%)] mb-3">Welcome offers</h3>
                  <p className="text-[hsl(220,15%,45%)]">
                    We summarise what each sign-up deal actually asks you to do — stake, odds, and time limits — so you
                    can compare like-for-like before you join.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-[hsl(220,15%,85%)] shadow-lg hover:shadow-xl hover:border-[hsl(0,45%,35%)] transition-all duration-300">
                  <h3 className="text-xl font-bold text-[hsl(220,20%,15%)] mb-3">Hands-on reviews</h3>
                  <p className="text-[hsl(220,15%,45%)]">
                    Odds, depth of markets, app quality, and payout speed all feed into our rankings. If a site slips
                    behind the competition, we say so.
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-[hsl(0,45%,35%)] rounded-lg p-8 border-2 border-[hsl(220,20%,15%)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[hsl(42,25%,96%)]">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[hsl(35,85%,50%)]">Why readers use BestListBettingSitesUK</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[hsl(35,85%,50%)] mr-2 font-bold">✓</span>
                        <span>Independent write-ups — commercial ties are disclosed upfront</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[hsl(35,85%,50%)] mr-2 font-bold">✓</span>
                        <span>Content refreshed as offers and products change</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[hsl(35,85%,50%)] mr-2 font-bold">✓</span>
                        <span>UK-focused: payment methods and rules that matter here</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[hsl(35,85%,50%)] mr-2 font-bold">✓</span>
                        <span>Responsible gambling signposting on every page</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[hsl(35,85%,50%)]">Getting started</h3>
                    <ol className="space-y-3">
                      <li className="flex">
                        <span className="bg-[hsl(35,85%,50%)] text-[hsl(220,20%,15%)] h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                          1
                        </span>
                        <span>Compare our ranked list and read the offer summary</span>
                      </li>
                      <li className="flex">
                        <span className="bg-[hsl(35,85%,50%)] text-[hsl(220,20%,15%)] h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                          2
                        </span>
                        <span>Open the bookmaker in a new tab and check full T&amp;Cs</span>
                      </li>
                      <li className="flex">
                        <span className="bg-[hsl(35,85%,50%)] text-[hsl(220,20%,15%)] h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                          3
                        </span>
                        <span>Register, verify ID, and set deposit or time limits</span>
                      </li>
                      <li className="flex">
                        <span className="bg-[hsl(35,85%,50%)] text-[hsl(220,20%,15%)] h-6 w-6 rounded-full flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
                          4
                        </span>
                        <span>Bet for fun, within your means — never chase losses</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
