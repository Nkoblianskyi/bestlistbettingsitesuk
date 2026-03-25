import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-[hsl(35,85%,50%)] bg-gradient-to-b from-[hsl(220,22%,14%)] to-[hsl(220,25%,10%)] text-[hsl(42,25%,96%)]">
      <div className="mx-auto max-w-[1000px] px-4 pt-10 pb-6">
        <div className="flex flex-col gap-10 border-b border-[hsl(220,15%,28%)] pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative flex h-11 w-11 bg-red-600 rounded-full items-center justify-center overflow-hidden  transition-transform duration-300 group-hover:scale-105">
                <Image src="/favicon.ico" alt="" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <span className="block text-lg font-bold leading-tight text-[hsl(42,25%,96%)] transition-colors group-hover:text-[hsl(35,85%,50%)]">
                  BestListBettingSitesUK
                </span>
                <span className="text-xs font-medium text-[hsl(42,25%,70%)]">bestlistbettingsitesuk.com</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[hsl(42,25%,82%)]">
              Independent comparisons of UK-licensed bookmakers — welcome offers, features, and what we think matters on
              match day.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-10">
            <Link href="/" className="text-sm font-medium text-[hsl(42,25%,88%)] hover:text-[hsl(35,85%,50%)]">
              Home
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-[hsl(42,25%,88%)] hover:text-[hsl(35,85%,50%)]">
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-[hsl(42,25%,88%)] hover:text-[hsl(35,85%,50%)]"
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium text-[hsl(42,25%,88%)] hover:text-[hsl(35,85%,50%)]"
            >
              Cookies
            </Link>
          </nav>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[hsl(220,15%,30%)] bg-[hsl(220,25%,11%)] p-5">
            <div className="mb-3 flex items-center gap-2 text-[hsl(35,85%,50%)]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-wider">Operator</span>
            </div>
            <p className="text-sm font-semibold text-[hsl(42,25%,96%)]">Sigmastart04 GmbH</p>
            <p className="mt-1 text-sm text-[hsl(42,25%,78%)]">
              Zehmeplatz 14
              <br />
              15230 Frankfurt
              <br />
              Germany
            </p>
          </div>

          <div className="rounded-lg border-2 border-[hsl(0,45%,38%)] bg-[hsl(0,45%,28%)]/35 p-5">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <span className="rounded-full bg-[hsl(42,25%,96%)] px-2 py-0.5 text-xs font-bold text-[hsl(0,45%,35%)]">
                18+
              </span>
              <span className="text-sm font-bold">Responsible gambling</span>
            </div>
            <p className="text-center text-xs leading-relaxed text-[hsl(42,25%,88%)] md:text-left">
              Only for adults. Under-18 gambling is illegal in the UK. Use deposit limits and take breaks when you need
              them.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-[hsl(220,15%,28%)] bg-[hsl(220,25%,9%)] px-4 py-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-[hsl(42,25%,65%)]">
            Support &amp; regulation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
            >
              <Image src="/gamble-aware.png" alt="BeGambleAware" width={100} height={35} />
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
            >
              <Image src="/gamcare.png" alt="GamCare" width={100} height={35} />
            </Link>
            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
            >
              <Image src="/gamstop.svg" alt="GAMSTOP" width={100} height={35} />
            </Link>
            <Link
              href="https://www.gamblingcommission.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-90"
            >
              <Image src="/Gambling_Commission_logo.png" alt="UK Gambling Commission" width={100} height={35} />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex gap-3 rounded-lg bg-[hsl(220,28%,8%)] p-4 text-xs leading-relaxed text-[hsl(42,25%,72%)]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(35,85%,50%)]" aria-hidden />
          <p>
            BestListBettingSitesUK.com is for information and entertainment. We may receive commission if you register
            via our links. You must be 18+ and located in the UK. Gambling involves risk — never bet more than you can
            afford to lose. Brands listed are UKGC-licensed unless noted. If gambling harms you or others, seek help
            immediately.
          </p>
        </div>
      </div>

      <div className="border-t border-[hsl(220,15%,22%)] bg-[hsl(220,28%,8%)] py-4">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-3 px-4 sm:flex-row">
          <p className="text-center text-xs text-[hsl(42,25%,68%)] sm:text-left">
            © {new Date().getFullYear()} bestlistbettingsitesuk.com · All rights reserved
          </p>
          <div className="flex items-center gap-2 text-[hsl(42,25%,68%)]">
            <AlertTriangle className="h-4 w-4 shrink-0 text-[hsl(35,85%,50%)]" aria-hidden />
            <span className="text-xs">Gambling can be addictive. Play responsibly.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
