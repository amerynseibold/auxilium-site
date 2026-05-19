"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      if (!href || !href.startsWith("#")) return

      event.preventDefault()

      const element = document.querySelector(href)

      if (element) {
        lenis.scrollTo(element as HTMLElement, {
          offset: 0,
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
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}