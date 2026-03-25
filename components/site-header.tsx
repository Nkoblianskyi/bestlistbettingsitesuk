"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b-4 ${
        scrolled
          ? "bg-[hsl(140,30%,20%)]/95 backdrop-blur-sm shadow-lg border-[hsl(40,75%,55%)]"
          : "bg-[hsl(140,30%,20%)] border-[hsl(40,75%,55%)]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1000px] items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image src="/favicon.ico" alt="UK Flag Logo" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold text-[hsl(42,25%,96%)] transition-colors duration-300 group-hover:text-[hsl(40,75%,55%)] leading-tight">
              BestListBettingSitesUK
            </span>
          </div>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-semibold text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-semibold text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-semibold text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors duration-300"
          >
            Privacy
          </Link>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(30,25%,25%)] animate-fade-in border-t-2 border-[hsl(40,75%,55%)]">
          <div className="mx-auto max-w-[1000px] px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors duration-300 py-2 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors duration-300 py-2 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/privacy-policy"
              className="block text-[hsl(42,25%,96%)] hover:text-[hsl(40,75%,55%)] transition-colors duration-300 py-2 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
