import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | Best List Betting Sites UK",
  description: "How BestListBettingSitesUK.com uses cookies and how you can control them.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="bg-white rounded border-2 border-[hsl(220,15%,85%)] shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(0,45%,35%)] border-b-4 border-[hsl(35,85%,50%)] pb-4">
              Cookie Policy
            </h1>

            <div className="prose max-w-none space-y-6 text-[hsl(220,20%,15%)]">
              <p className="text-sm text-[hsl(220,15%,45%)]">Last updated: March 2025</p>

              <p className="leading-relaxed">
                This Cookie Policy explains how BestListBettingSitesUK.com uses cookies and similar technologies. The
                site is associated with <strong>Sigmastart04 GmbH</strong>, Zehmeplatz 14, 15230 Frankfurt, Germany.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">1. What are cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small files stored on your device when you visit a site. They help pages load correctly,
                remember preferences, and understand how visitors use content.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">2. Types we use</h2>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  <div>
                    <strong className="text-[hsl(0,45%,35%)]">Strictly necessary</strong> — required for core
                    functionality (e.g. cookie consent choice, security). These cannot be switched off via our banner
                    without breaking the site.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  <div>
                    <strong className="text-[hsl(0,45%,35%)]">Analytics</strong> — help us see which pages are popular
                    and fix errors. Where used, we will ask for your consent where required.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(35,85%,50%)] font-bold mr-2">•</span>
                  <div>
                    <strong className="text-[hsl(0,45%,35%)]">Marketing / affiliate</strong> — third parties may set
                    cookies when you click outbound links so that commissions can be attributed fairly. Those partners
                    have their own policies.
                  </div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">3. Managing cookies</h2>
              <p className="leading-relaxed">
                You can block or delete cookies in your browser settings. You can also use our on-site banner to accept
                or decline non-essential cookies on your first visit. Blocking some cookies may limit certain features.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">4. Updates</h2>
              <p className="leading-relaxed">
                We may update this policy when our tools or legal obligations change. The &quot;Last updated&quot; date
                at the top will reflect the latest revision.
              </p>

              <h2 className="text-2xl font-bold text-[hsl(0,45%,35%)] mt-8">5. Contact</h2>
              <p className="leading-relaxed">
                Questions about cookies? Email{" "}
                <a href="mailto:cookies@bestlistbettingsitesuk.com" className="text-[hsl(0,45%,35%)] font-semibold underline">
                  cookies@bestlistbettingsitesuk.com
                </a>{" "}
                or write to Sigmastart04 GmbH at the address above.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
