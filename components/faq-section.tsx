"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqs = [
    {
      id: "faq-1",
      question: "How do we evaluate the best UK betting sites?",
      answer:
        "Our expert panel rigorously tests each bookmaker across multiple criteria: UK Gambling Commission licensing, security protocols, welcome offers, odds competitiveness, market coverage (football, racing, cricket, etc.), mobile platform quality, payment options, customer service responsiveness, and withdrawal speeds. Only bookmakers meeting our stringent standards receive our recommendation.",
    },
    {
      id: "faq-2",
      question: "Are these bookmakers legal in the United Kingdom?",
      answer:
        "Yes. Every brand we feature holds a UK Gambling Commission licence. That means they meet strict rules on fairness, customer funds, and safer gambling tools — and they are legal for adults aged 18+ in Great Britain.",
    },
    {
      id: "faq-3",
      question: "What types of welcome offers are available?",
      answer:
        "British bookmakers offer various welcome promotions including free bets (e.g., 'Bet £10 Get £30'), enhanced odds on selected events, matched deposit bonuses, and occasionally risk-free first bets. The specific offers vary between operators, but we only feature bonuses with reasonable wagering requirements and transparent conditions.",
    },
    {
      id: "faq-4",
      question: "How do I claim a welcome bonus?",
      answer:
        "Claiming a welcome offer typically involves: registering a new account with the bookmaker, verifying your identity (required by UK law), making a qualifying deposit using an eligible payment method, and placing a qualifying bet at minimum odds. Some offers activate automatically, whilst others require a promo code. Always review the specific terms before claiming.",
    },
    {
      id: "faq-5",
      question: "Which payment methods do UK bookmakers accept?",
      answer:
        "Most British bookmakers accept debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and increasingly Apple Pay and Google Pay. Note that credit cards cannot be used for gambling in the UK. Withdrawal times vary: e-wallets are typically fastest (24 hours), whilst bank transfers may take 3-5 working days.",
    },
    {
      id: "faq-6",
      question: "Can I bet on my mobile device?",
      answer:
        "All our recommended bookmakers offer excellent mobile betting through responsive websites and dedicated iOS/Android apps. Mobile platforms provide the same functionality as desktop: live betting, cash out, account management, and quick deposits/withdrawals. Many operators even offer mobile-exclusive promotions and features.",
    },
    {
      id: "faq-7",
      question: "How can I gamble responsibly?",
      answer:
        "Responsible gambling involves setting deposit limits, establishing time restrictions, never chasing losses, avoiding gambling whilst under the influence, taking regular breaks, and using tools like reality checks and self-exclusion when needed. All UK-licensed operators provide comprehensive responsible gambling features. If you need support, contact BeGambleAware, GamCare, or use GAMSTOP for self-exclusion across all UK sites.",
    },
    {
      id: "faq-8",
      question: "What is the UK Gambling Commission?",
      answer:
        "The UK Gambling Commission is the independent regulatory body responsible for licensing and regulating all commercial gambling in Great Britain. They ensure operators conduct business fairly, protect consumers, prevent gambling-related harm, and maintain the integrity of gambling activities. All our recommended bookmakers operate under their strict oversight.",
    },
  ]

  return (
    <section className="py-12 bg-[hsl(42,25%,96%)] border-2 border-[hsl(220,15%,85%)] rounded-lg shadow-md">
      <div className="px-3 sm:px-4">
        <div className="text-center mb-8">
          <div className="inline-block bg-[hsl(0,45%,35%)] text-[hsl(42,25%,96%)] px-4 py-2 rounded font-bold text-xs uppercase tracking-wider mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl font-bold text-[hsl(220,20%,15%)] mb-4">Frequently asked questions</h2>
          <p className="text-[hsl(220,15%,45%)] max-w-2xl mx-auto">
            Straight answers on licences, bonuses, and safer gambling — from BestListBettingSitesUK.com
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b-2 border-[hsl(220,15%,85%)] bg-white mb-2 rounded px-4"
              >
                <AccordionTrigger className="text-left font-bold py-4 hover:text-[hsl(0,45%,35%)] transition-colors duration-300 text-[hsl(220,20%,15%)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(220,15%,45%)] pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
