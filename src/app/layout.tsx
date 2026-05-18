import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Auxilium Business Solutions",
  description: "Custom operational tools for modern service businesses.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}