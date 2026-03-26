import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | Best List Betting Sites UK",
  description: "Who we are, how BestListBettingSitesUK.com reviews UK bookmakers, and how the site is funded.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="bg-white rounded border-2 border-[hsl(220,15%,85%)] shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(0,45%,35%)] border-b-4 border-[hsl(35,85%,50%)] pb-4">
              About BestListBettingSitesUK.com
            </h1>

            <div className="prose max-w-none space-y-6 text-[hsl(220,20%,15%)]">
              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">What we do</h2>
              <p className="leading-relaxed">
                BestListBettingSitesUK.com helps British adults compare licensed online bookmakers in one place. We focus
                on clarity: what the welcome offer really requires, how the app feels on match day, and whether cash-out
                and support hold up when you need them.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">How we review</h2>
              <p className="leading-relaxed">
                Each brand is checked against a consistent checklist — UK Gambling Commission licence, security basics,
                market depth, mobile usability, payments, and how transparent the operator is about limits and safer
                gambling tools. Rankings and scores reflect that review work, not who pays the highest commission.
              </p>
              <p className="leading-relaxed">
                Offers and odds move quickly. We refresh pages regularly but you should always confirm stake rules,
                minimum odds, and expiry dates on the bookmaker&apos;s website before you play.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">Who operates this site</h2>
              <p className="leading-relaxed">
                The website is published on behalf of{" "}
                <strong className="text-[hsl(0,45%,35%)]">K.C. NTOMATA LIMITED</strong>, Stylianou Lena, 24 Christiana
                Court, Flat/Office 202, Strovolos, Nicosia 2019, Кіпр. For privacy-related requests, please use the
                contact details in our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">Funding &amp; independence</h2>
              <p className="leading-relaxed">
                The service is free for readers. We may receive affiliate commission when you open an account through
                our links. Those partnerships help pay for hosting and editorial time; they do not give operators a
                blank cheque — if a product is weak, we say so.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">Responsible gambling</h2>
              <p className="leading-relaxed">
                We promote safer gambling throughout the site. Only bet what you can afford, use deposit limits, and use
                GAMSTOP if you need a break from all UK-licensed operators. If gambling is affecting your health or
                relationships, contact BeGambleAware or GamCare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
