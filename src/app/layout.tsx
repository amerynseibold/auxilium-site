import type { Metadata, Viewport } from "next"
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07090d",
  viewportFit: "cover",
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
        <div className="mobile-safe-area-shield" aria-hidden="true" />
      </body>
    </html>
  )
}
