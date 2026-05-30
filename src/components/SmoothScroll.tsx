"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "lenis"
import { usePathname } from "next/navigation"

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches

    if (isMobile) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    const getOffset = (hash: string) => (hash === "#work" ? 72 : 0)

    const scrollToHash = (hash: string) => {
      if (!hash) return

      const element = document.querySelector(hash)

      if (element) {
        lenis.scrollTo(element as HTMLElement, {
          offset: getOffset(hash),
          immediate: true,
        })
      }
    }

    const hashScrollFrame = requestAnimationFrame(() => {
      scrollToHash(window.location.hash)
    })

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      if (!href) return

      const url = new URL(href, window.location.href)

      if (url.origin !== window.location.origin || !url.hash) return

      if (url.pathname !== window.location.pathname) return

      event.preventDefault()

      const element = document.querySelector(url.hash)

      if (element) {
        window.history.pushState(null, "", url.hash)
        lenis.scrollTo(element as HTMLElement, {
          offset: getOffset(url.hash),
        })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const frame = requestAnimationFrame(raf)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
      cancelAnimationFrame(hashScrollFrame)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [pathname])

  return <>{children}</>
}
