import type { Metadata } from "next"
import Image from "next/image"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Demos | Auxilium Business Solutions",
  description:
    "Live demos and examples of custom quoting tools, material estimator systems, dashboards, and operational software built by Auxilium Business Solutions.",
}

const projects = [
  {
    eyebrow: "Operations Dashboard",
    title: "Operations Command Center",
    image: "/operations-dashboard-preview.png",
    href: "/demo/dashboard",
    external: false,
    summary:
      "A dashboard concept for service businesses that brings quote tracking, customer visibility, scheduling, and reporting into one place.",
    details: [
      "High-level visibility into jobs, quotes, and operational activity.",
      "Dashboard layout designed for quick scanning and repeated use.",
      "A practical model for service teams that need cleaner daily oversight.",
    ],
  },
  {
    eyebrow: "Tree Service Tool",
    title: "SnapQuote",
    image: "/snapquote-preview.png",
    href: "https://snapquote.auxiliumbusiness.com/",
    external: true,
    summary:
      "A custom quoting platform for tree service businesses that turns repeat pricing work into a cleaner quote-building workflow.",
    details: [
      "Dynamic pricing for common tree service quote inputs.",
      "PDF-ready quote generation for customer follow-up.",
      "Customer history and mobile-friendly field workflows.",
    ],
  },
  {
    eyebrow: "Material Supplier Tool",
    title: "Bulk Material Estimator",
    image: "/bulk-material-preview.png",
    href: "https://bulkmaterial.auxiliumbusiness.com/",
    external: true,
    summary:
      "A streamlined quote request system for gravel and material suppliers that helps customers estimate delivery pricing and submit requests online.",
    details: [
      "Customer-facing estimator for material and delivery requests.",
      "Cleaner intake flow for supplier teams.",
      "Quote request details captured in a consistent format.",
    ],
  },
]

export default function DemosPage() {
  return (
    <>
      <SiteHeader activePage="demos" />

      <main className="relative min-h-screen bg-[#07090d] text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
          <div className="absolute top-[35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <section className="site-container relative pt-32 pb-16 md:pt-36 md:pb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
            Demos
          </p>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
              Live examples of practical tools built around real business workflows.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
              A few examples of how Auxilium turns quoting, estimating, dashboarding,
              and daily operations work into cleaner digital systems.
            </p>
          </div>
        </section>

        <section className="site-container relative space-y-10 pb-16 md:space-y-12 md:pb-24">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="border-t border-white/10 pt-10 md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(420px,1fr)] md:gap-12 md:pt-12 lg:gap-16"
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
                  {project.eyebrow}
                </p>

                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-white/62">
                  {project.summary}
                </p>

                <div className="mt-8 space-y-4">
                  {project.details.map((detail) => (
                    <div key={detail} className="border-l border-blue-500/50 pl-5">
                      <p className="leading-relaxed text-white/65">{detail}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noreferrer" : undefined}
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium text-white/80 transition md:hover:-translate-y-[1px] md:hover:border-white/25 md:hover:text-white"
                >
                  <span>{project.external ? "View Live Demo" : "View Dashboard Demo"}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>

              <a
                href={project.href}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noreferrer" : undefined}
                className={`premium-panel group mt-8 block overflow-hidden rounded-2xl p-4 md:mt-0 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="relative h-[260px] overflow-hidden rounded-xl border border-white/10 bg-[#0d0f14] sm:h-[320px] md:h-full md:min-h-[360px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`transition duration-700 md:group-hover:scale-[1.015] ${
                      project.title === "Operations Command Center"
                        ? "object-cover object-top bg-[#0d0f14]"
                        : "object-contain bg-white"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
                </div>
              </a>
            </article>
          ))}
        </section>

        <section className="site-container relative pb-16 md:pb-24">
          <div className="border-y border-white/10 py-10 md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:py-14">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-blue-400 md:text-sm">
                Have Something Similar?
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                We can build the tool your workflow keeps asking for.
              </h2>
            </div>

            <a
              href="/contact"
              className="cta-sheen mt-8 inline-flex relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 font-medium transition md:mt-0 md:hover:-translate-y-[1px] md:hover:bg-blue-500 md:hover:shadow-[0_14px_34px_rgba(37,99,235,0.22)]"
            >
              <span className="relative z-10">Start a Project</span>
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
