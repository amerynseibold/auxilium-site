import type { Metadata } from "next"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Services | Auxilium Business Solutions",
  description:
    "Workflow automation, custom internal tools, quoting systems, dashboards, and process modernization for growing small businesses.",
}

const services = [
  {
    title: "Custom Internal Tools",
    body: "Simple web-based tools built around the way your team already works, so jobs, customers, quotes, and tasks are easier to manage.",
  },
  {
    title: "Workflow Automation",
    body: "Reduce repetitive admin work like follow-ups, handoffs, status updates, data entry, reminders, and report prep.",
  },
  {
    title: "Quoting Systems",
    body: "Replace spreadsheet pricing and back-and-forth emails with cleaner quote builders, customer intake forms, and PDF-ready workflows.",
  },
  {
    title: "Dashboards & Reporting",
    body: "Bring key numbers into one place so owners and managers can see what is happening without chasing updates across tools.",
  },
  {
    title: "Process Modernization",
    body: "Map the messy parts of daily operations, simplify the workflow, and build the right digital system around it.",
  },
  {
    title: "System Cleanup",
    body: "Connect or replace outdated spreadsheets, forms, and manual processes that are slowing the business down.",
  },
]

const outcomes = [
  "Spend less time entering the same information in multiple places.",
  "Respond to customers faster and miss fewer follow-ups.",
  "Give the team one clear place to see what needs to happen next.",
  "Make quoting, scheduling, and reporting easier to repeat.",
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader activePage="services" />

      <main className="relative min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
          <div className="absolute top-[35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <section className="site-container relative pt-32 pb-16 md:pt-36 md:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
            Services
          </p>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
              Better systems for the work that keeps your business moving.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
              We help small businesses replace manual admin work, scattered spreadsheets,
              and outdated workflows with practical tools that save time every week.
            </p>
          </div>
        </section>

        <section className="site-container relative border-t border-white/10 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="group border-t border-white/10 pt-6 transition-transform duration-300 md:hover:-translate-y-1">
                <div className="mb-5 h-px w-12 bg-blue-400/60 transition-all duration-300 md:group-hover:w-20" />
                <h2 className="text-2xl font-semibold transition-colors duration-300 md:group-hover:text-blue-100">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-white/60 transition-colors duration-300 md:group-hover:text-white/72">
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-container relative py-10 md:py-16">
          <div className="border-y border-white/10 py-10 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(320px,1fr)] md:gap-16 md:py-14">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
                What This Solves
              </p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                Less busywork. More visibility. Cleaner handoffs.
              </h2>
            </div>

            <div className="mt-8 space-y-5 md:mt-0">
              {outcomes.map((outcome) => (
                <div key={outcome} className="border-l border-blue-500/50 pl-5">
                  <p className="leading-relaxed text-white/68">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container relative pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Start with the workflow that frustrates your team most.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              You do not need to know what software you need. Tell us what is taking too
              long, what gets missed, or what still lives in a spreadsheet, and we will
              help shape the right solution.
            </p>
            <a
              href="/contact"
              className="cta-sheen mt-8 inline-flex relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 font-medium transition md:hover:-translate-y-[1px] md:hover:bg-blue-500 md:hover:shadow-[0_14px_34px_rgba(37,99,235,0.22)]"
            >
              <span className="relative z-10">Talk Through a Project</span>
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
