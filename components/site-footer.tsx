import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(220,20%,15%)] text-[hsl(42,25%,96%)] border-t-4 border-[hsl(35,85%,50%)]">
      <div className="mx-auto max-w-[1000px] px-4 pt-12 pb-8">
        <div className="space-y-8 border-b-2 border-[hsl(220,15%,25%)] pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-10 w-10 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Image src="/uk-flag-logo.png" alt="UK Flag Logo" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[hsl(42,25%,96%)] transition-colors duration-300 group-hover:text-[hsl(35,85%,50%)] leading-tight">
                    TopListBettingSitesUK
                  </span>
                </div>
              </Link>
              <p className="text-sm text-[hsl(42,25%,85%)] leading-relaxed">
                TopListBettingSitesUK.com compares UK-licensed bookmakers so you can see welcome offers, features, and
                our editorial verdicts in one place.
              </p>
              <div className="rounded border border-[hsl(220,15%,35%)] bg-[hsl(220,25%,12%)] p-4 text-xs text-[hsl(42,25%,85%)] leading-relaxed">
                <p className="font-semibold text-[hsl(35,85%,50%)] mb-2">Site operator</p>
                <p className="text-[hsl(42,25%,96%)]">Sigmastart04 GmbH</p>
                <p>Zehmeplatz 14</p>
                <p>15230 Frankfurt</p>
                <p>Germany</p>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 className="text-base font-bold mb-4 text-[hsl(35,85%,50%)] uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-[hsl(42,25%,85%)] hover:text-[hsl(35,85%,50%)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-[hsl(35,85%,50%)] rounded-full group-hover:w-2 transition-all duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-[hsl(42,25%,85%)] hover:text-[hsl(35,85%,50%)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-[hsl(35,85%,50%)] rounded-full group-hover:w-2 transition-all duration-300"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-[hsl(42,25%,85%)] hover:text-[hsl(35,85%,50%)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-[hsl(35,85%,50%)] rounded-full group-hover:w-2 transition-all duration-300"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-sm text-[hsl(42,25%,85%)] hover:text-[hsl(35,85%,50%)] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 bg-[hsl(35,85%,50%)] rounded-full group-hover:w-2 transition-all duration-300"></span>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-base font-bold mb-4 text-[hsl(35,85%,50%)] text-center uppercase tracking-wider">
                Responsible Gambling
              </h3>
              <div className="bg-[hsl(0,45%,35%)]/30 p-4 rounded border-2 border-[hsl(0,45%,35%)]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="bg-[hsl(42,25%,96%)] p-1 rounded-full">
                    <span className="text-[hsl(0,45%,35%)] font-bold text-xs">18+</span>
                  </div>
                  <span className="font-bold text-sm text-[hsl(42,25%,96%)]">Age Restriction</span>
                </div>
                <p className="text-xs text-[hsl(42,25%,85%)] text-center leading-relaxed">
                  Gambling is for adults only. It is illegal for anyone under 18 to open an account or bet with a
                  UK-licensed operator.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className=" transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link
                  href="https://www.gambleaware.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image src="/gamble-aware.png" alt="BeGambleAware" width={100} height={35} className="mb-2" />
                </Link>
              </div>

              <div className=" transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link
                  href="https://www.gamcare.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image src="/gamcare.png" alt="GamCare" width={100} height={35} className="mb-2" />
                </Link>
              </div>

              <div className="transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link
                  href="https://www.gamstop.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image src="/gamstop.svg" alt="GAMSTOP" width={100} height={35} className="mb-2" />
                </Link>
              </div>

              <div className=" transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                <Link
                  href="https://www.gamblingcommission.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="/Gambling_Commission_logo.png"
                    alt="UK Gambling Commission"
                    width={100}
                    height={35}
                    className="mb-2"
                  />
                </Link>
              </div>
            </div>

            <p className="text-xs text-[hsl(42,25%,85%)] text-center leading-relaxed">
              Betting should be entertainment, not a way to make money. If it stops feeling fun, pause and talk to
              BeGambleAware or GamCare — or register with GAMSTOP to self-exclude from UK sites.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(220,30%,10%)] py-6 border-y border-[hsl(220,15%,25%)]">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="flex items-start gap-3 text-xs text-[hsl(42,25%,75%)] leading-relaxed">
            <Info className="h-4 w-4 text-[hsl(35,85%,50%)] flex-shrink-0 mt-0.5" />
            <p>
              TopListBettingSitesUK.com is published for information and entertainment. We may earn a commission when you
              sign up via our links; that does not change the price you pay. Content is aimed at adults aged 18+ in the
              United Kingdom. Gambling carries risk — only stake what you can afford to lose. Listed brands hold UK
              Gambling Commission licences unless stated otherwise. If gambling is harming you or someone close to you,
              seek help promptly.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(220,20%,15%)] py-4">
        <div className="mx-auto max-w-[1000px] px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[hsl(42,25%,75%)]">© TopListBettingSitesUK.com. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[hsl(35,85%,50%)]" />
              <span className="text-xs text-[hsl(42,25%,75%)]">Gambling can be addictive. Play responsibly.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
