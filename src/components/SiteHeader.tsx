"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const navReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
}

type SiteHeaderProps = {
  activePage?: "home" | "demos" | "services" | "about" | "contact"
}

export default function SiteHeader({ activePage }: SiteHeaderProps) {
  const shouldReduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const linkClass = (isActive: boolean) =>
    `transition ${isActive ? "text-white" : "hover:text-white"}`

  const mobileLinkClass = (isActive: boolean) =>
    `block rounded-xl px-4 py-3 transition ${
      isActive
        ? "border border-white/15 bg-white/[0.05] text-white"
        : "border border-transparent text-white/68 hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
    }`

  return (
    <motion.div
      variants={navReveal}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="mobile-fixed-header fixed inset-x-0 top-0 z-50 bg-[#07090d]"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#07090d] border-b border-white/10"
            : "backdrop-blur-xl bg-[#07090d] border-b border-white/5"
        }`}
      >
        <div className="site-container relative z-10 flex min-h-[78px] items-center justify-between gap-4 py-1 md:min-h-[92px] md:py-1.5">
          <a href="/" className="relative -top-1.5 md:top-0 w-[170px] md:w-[220px]">
            <Image
              src="/auxilium-logo-tight.png"
              alt="Auxilium Logo"
              width={300}
              height={40}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="/demos" className={linkClass(activePage === "demos")}>
              Demos
            </a>

            <a href="/services" className={linkClass(activePage === "services")}>
              Services
            </a>

            <a href="/about" className={linkClass(activePage === "about")}>
              About
            </a>

            <a
              href="/contact"
              className={`rounded-xl px-5 py-2 transition-all duration-300 ${
                activePage === "contact"
                  ? "border border-white/20 bg-white/[0.05] text-white"
                  : "border border-white/8 text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="relative -top-1.5 -translate-x-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-white/30 md:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px bg-current transition ${
                  mobileMenuOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px bg-current transition ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px bg-current transition ${
                  mobileMenuOpen ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`site-container overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "max-h-80 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl border border-white/10 bg-[#0b0d12]/95 p-2 shadow-2xl">
            <a href="/demos" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(activePage === "demos")}>
              Demos
            </a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(activePage === "services")}>
              Services
            </a>
            <a href="/about" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(activePage === "about")}>
              About
            </a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileLinkClass(activePage === "contact")}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </motion.div>
  )
}
