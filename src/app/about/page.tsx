import type { Metadata } from "next"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "About | Auxilium Business Solutions",
  description:
    "Auxilium Business Solutions builds practical workflow tools and automation for small businesses that have outgrown manual processes.",
}

const values = [
  {
    title: "Plain-language process first",
    body: "We start with how the work actually happens, not with software buzzwords or oversized systems.",
  },
  {
    title: "Tools that fit the business",
    body: "The goal is not to make your team change everything. The goal is to make the work easier to repeat, track, and improve.",
  },
  {
    title: "Built for real operators",
    body: "Owners and teams need systems they can understand, trust, and use every day without feeling buried in complexity.",
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePage="about" />

      <main className="relative min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[430px] w-[430px] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <section className="site-container relative pt-32 pb-16 md:pt-36 md:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
            About Auxilium
          </p>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
              We help small businesses turn daily friction into cleaner systems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
              Auxilium Business Solutions builds internal tools, workflow automation,
              dashboards, and quoting systems for growing businesses that are tired of
              running important work through manual steps and scattered spreadsheets.
            </p>
          </div>
        </section>

        <section className="site-container relative border-y border-white/10 py-12 md:grid md:grid-cols-[minmax(0,0.8fr)_minmax(360px,1fr)] md:gap-16 md:py-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
              Why We Exist
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Most business bottlenecks are not dramatic. They are just repeated every day.
            </h2>
          </div>

          <div className="mt-8 space-y-5 text-white/62 md:mt-0">
            <p className="leading-relaxed">
              A quote gets rebuilt by hand. A customer follow-up gets missed. A manager
              updates the same spreadsheet for the third time that week. A team member
              has to ask where a job stands because the answer lives in somebody else&apos;s inbox.
            </p>
            <p className="leading-relaxed">
              We focus on those practical problems. The work is part consulting, part
              software, and part cleanup: understand the process, simplify what does not
              need to be there, and build the system that makes the better version easier
              to use.
            </p>
          </div>
        </section>

        <section className="site-container relative py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-14">
            {values.map((value) => (
              <article key={value.title} className="border-t border-white/10 pt-6">
                <div className="mb-5 h-px w-12 bg-blue-400/60" />
                <h2 className="text-2xl font-semibold">{value.title}</h2>
                <p className="mt-4 leading-relaxed text-white/60">{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-container relative pb-16 md:pb-24">
          <div className="border-y border-white/10 py-10 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:py-14">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
                Next Step
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Have a workflow your team complains about every week?
              </h2>
            </div>

            <a
              href="/contact"
              className="cta-sheen mt-8 inline-flex relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 font-medium transition md:mt-0 md:hover:-translate-y-[1px] md:hover:bg-blue-500 md:hover:shadow-[0_14px_34px_rgba(37,99,235,0.22)]"
            >
              <span className="relative z-10">Contact Auxilium</span>
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
