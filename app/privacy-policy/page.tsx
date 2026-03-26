import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveUkDate } from "@/components/live-uk-date"

export const metadata = {
  title: "Privacy Policy | Best List Betting Sites UK",
  description: "How BestListBettingSitesUK.com collects, uses, and protects personal data.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="bg-white rounded border-2 border-[hsl(220,15%,85%)] shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(0,45%,35%)] border-b-4 border-[hsl(35,85%,50%)] pb-4">
              Privacy Policy
            </h1>

            <div className="prose max-w-none space-y-6 text-[hsl(220,20%,15%)]">
              <p className="text-sm text-[hsl(220,15%,45%)]">
                Last updated:{" "}
                <LiveUkDate variant="short" className="font-semibold text-[hsl(0,45%,35%)]" />
              </p>

              <p className="leading-relaxed">
                This Privacy Policy describes how BestListBettingSitesUK.com (&quot;we&quot;, &quot;us&quot;) processes
                personal data when you use our website. The site is operated in connection with{" "}
                <strong>K.C. NTOMATA LIMITED</strong>, Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos,
                Nicosia 2019, Кіпр. We process data in line with applicable law, including the UK GDPR and the Data
                Protection Act 2018 where it applies to visitors from the United Kingdom.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">1. Data we collect</h2>
              <p className="leading-relaxed">Depending on how you use the site, we may process:</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  <div>
                    <strong className="text-[hsl(0,45%,35%)]">Contact details</strong> — if you email us, we keep your
                    address and message content to respond.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  <div>
                    <strong className="text-[hsl(0,45%,35%)]">Technical &amp; usage data</strong> — such as IP address,
                    browser type, approximate location, pages viewed, and referral source, collected via logs, cookies, and
                    similar technologies (see our Cookie Policy).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  <div>
                    <strong className="text-[hsl(0,45%,35%)]">Affiliate identifiers</strong> — when you leave our site
                    via a tracking link, partners may record that you arrived from BestListBettingSitesUK.com.
                  </div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">2. Purposes and legal bases</h2>
              <p className="leading-relaxed">We use data to:</p>
              <ul className="space-y-2 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  Deliver and secure the website (legitimate interests / contract where applicable).
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  Measure audience size and improve content (consent or legitimate interests, depending on the tool).
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  Comply with law and respond to lawful requests from authorities.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">3. Sharing</h2>
              <p className="leading-relaxed">
                We use trusted service providers (e.g. hosting, analytics) under appropriate agreements. We do not sell
                your personal data. Where we use affiliate networks, those partners act under their own privacy policies
                when you land on a bookmaker site.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">4. Retention</h2>
              <p className="leading-relaxed">
                We keep data only as long as needed for the purposes above, then delete or anonymise it unless a longer
                period is required by law.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">5. Your rights</h2>
              <p className="leading-relaxed">
                Subject to applicable law, you may have the right to access, rectify, erase, restrict, or object to
                processing, and to port certain data. You may also lodge a complaint with a supervisory authority.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">6. International transfers</h2>
              <p className="leading-relaxed">
                If we transfer data outside the UK or EEA, we use appropriate safeguards such as standard contractual
                clauses where required.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">7. Contact</h2>
              <p className="leading-relaxed">
                For privacy questions or to exercise your rights, email{" "}
                <a href="mailto:privacy@bestlistbettingsitesuk.com" className="text-[hsl(0,45%,35%)] font-semibold underline">
                  privacy@bestlistbettingsitesuk.com
                </a>{" "}
                or write to: K.C. NTOMATA LIMITED, Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos,
                Nicosia 2019, Кіпр.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
