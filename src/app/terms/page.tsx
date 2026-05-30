import type { Metadata } from "next"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Terms of Use | Auxilium Business Solutions",
  description:
    "Terms of use for the Auxilium Business Solutions website.",
}

const sections = [
  {
    title: "Website Use",
    body: "This website is provided for general information about Auxilium Business Solutions, our services, and example demos. By using the site, you agree to use it lawfully and not interfere with its operation.",
  },
  {
    title: "Informational Content",
    body: "Content on this website is provided for general business information only. It does not create a client relationship, project agreement, or guarantee of results.",
  },
  {
    title: "Demos and Examples",
    body: "Demos, previews, screenshots, and example projects are provided to show the type of work Auxilium can build. They may not represent a final production system for every business use case.",
  },
  {
    title: "Intellectual Property",
    body: "Website content, branding, copy, layouts, and demo materials are owned by Auxilium Business Solutions or used with permission. You may not copy, resell, or reuse them as your own without permission.",
  },
  {
    title: "Third-Party Links",
    body: "This website may link to third-party websites or hosted demos. Auxilium is not responsible for the content, policies, or practices of third-party sites.",
  },
  {
    title: "Limitation of Liability",
    body: "Auxilium is not liable for damages arising from use of this website, reliance on website content, or temporary unavailability of the site, to the extent permitted by law.",
  },
]

export default function TermsPage() {
  return (
    <>
      <SiteHeader />

      <main className="relative min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
          <div className="absolute top-[35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <section className="site-container relative pt-32 pb-16 md:pt-36 md:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
            Terms of Use
          </p>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
              Simple terms for using this website.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
              These terms apply to use of the Auxilium Business Solutions website.
              Last updated May 30, 2026.
            </p>
          </div>
        </section>

        <section className="site-container relative pb-16 md:pb-24">
          <div className="max-w-4xl border-t border-white/10">
            {sections.map((section) => (
              <article key={section.title} className="border-b border-white/10 py-8">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="mt-4 leading-relaxed text-white/62">{section.body}</p>
              </article>
            ))}

            <article className="py-8">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-4 leading-relaxed text-white/62">
                Questions about these terms can be sent to{" "}
                <a className="text-blue-300 transition hover:text-blue-200" href="mailto:hello@auxiliumbusiness.com">
                  hello@auxiliumbusiness.com
                </a>
                .
              </p>
            </article>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
