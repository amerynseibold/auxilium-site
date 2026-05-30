import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Contact | Auxilium Business Solutions",
  description:
    "Contact Auxilium Business Solutions to discuss custom internal tools, workflow automation, dashboards, quoting systems, or process modernization.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader activePage="contact" />

      <main className="relative min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
          <div className="absolute top-[35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <section className="site-container relative pt-32 pb-16 md:pt-36 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,560px)] lg:gap-16">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
                Contact Auxilium
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
                Tell us what is making work harder than it needs to be.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
                Send a quick note about the quoting, scheduling, follow-up, reporting,
                or spreadsheet work that is taking too much time. We&apos;ll help you
                figure out what can be simplified, automated, or rebuilt.
              </p>

              <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-300">
                    Good Fit
                  </p>
                  <p className="mt-3 leading-relaxed text-white/58">
                    Small businesses with repeated admin work, messy handoffs, or
                    operations that have outgrown spreadsheets.
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-300">
                    First Step
                  </p>
                  <p className="mt-3 leading-relaxed text-white/58">
                    Tell us what is slowing the team down. You do not need a technical
                    plan before reaching out.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-panel rounded-2xl p-5 md:p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
