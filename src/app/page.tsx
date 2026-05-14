import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative">

        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-4">

          {/* =========================
              TOP NAV
          ========================== */}

          <div className="flex items-center justify-between gap-4">

            <Image
              src="/auxilium-logo-tight.png"
              alt="Auxilium Logo"
              width={320}
              height={60}
              priority
              className="w-[240px] md:w-[320px] h-auto"
            />

            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
              <a href="#work" className="hover:text-white transition">
                Work
              </a>

              <a href="#services" className="hover:text-white transition">
                Services
              </a>

              <a href="#process" className="hover:text-white transition">
                Process
              </a>

              <a href="#contact" className="border border-white/10 px-5 py-2 rounded-full text-white hover:border-white/30 transition">
                Contact
              </a>
            </nav>

            <a
              href="#contact"
              className="md:hidden border border-white/10 px-4 py-2 rounded-full text-sm text-white hover:border-white/30 transition"
            >
              Contact
            </a>

          </div>

          {/* =========================
              HERO CONTENT
          ========================== */}

          <div className="pt-12 pb-20 md:pt-20 md:pb-28">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* LEFT: HERO TEXT */}
              <div className="max-w-5xl">

                <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-6">
                  Business Process Modernization
                </p>

                <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl font-bold leading-[1.02] tracking-tight max-w-3xl">
                  Helping businesses modernize outdated systems and workflows.
                </h1>

                <p className="mt-8 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                  We build internal tools, quoting systems, dashboards, and workflow
                  automations that eliminate repetitive admin work for growing businesses.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                  <a
                    href="#work"
                    className="bg-blue-600 hover:bg-blue-500 transition px-7 py-4 rounded-full font-medium text-center shadow-[0_0_30px_rgba(33,168,255,0.25)]"
                  >
                    See the Work
                  </a>

                  <a
                    href="#contact"
                    className="border border-white/10 hover:border-white/30 transition px-7 py-4 rounded-full font-medium text-center"
                  >
                    Start a Conversation
                  </a>

                </div>

              </div>

              {/* RIGHT: HERO VALUE PANEL */}
              <div className="hidden lg:block">

                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_80px_rgba(33,168,255,0.08)]">

                  <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-6">
                    Common Pain Points
                  </p>

                  <div className="space-y-4 mb-8">

                    {[
                      "Manual quote requests",
                      "Repeated data entry",
                      "Disconnected spreadsheets",
                      "Slow reporting",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-zinc-300">
                        <span className="h-2 w-2 rounded-full bg-red-400/80" />
                        <span>{item}</span>
                      </div>
                    ))}

                  </div>

                  <div className="border-t border-white/10 pt-8">

                    <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-6">
                      What We Build
                    </p>

                    <div className="space-y-4">

                      {[
                        "Automated workflows",
                        "Custom quote tools",
                        "Cleaner reporting systems",
                        "Operational dashboards",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3 text-white">
                          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_16px_rgba(74,222,128,0.8)]" />
                          <span>{item}</span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}

      <section id="work" className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 scroll-mt-20">

        <div className="mb-10 md:mb-16">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Real tools for real businesses.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="group h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(33,168,255,0.08)]">

            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Tree Service Tool
            </p>

            <h3 className="text-3xl font-bold mb-4">
              SnapQuote
            </h3>

            <div className="relative w-full h-[230px] md:h-[260px] rounded-2xl overflow-hidden border border-white/10 mb-6">

              <Image
                src="/snapquote-preview.png"
                alt="SnapQuote Preview"
                fill
                className="object-contain bg-white md:object-cover md:object-top transition duration-700 group-hover:scale-[1.03]"
              />

            </div>

            <p className="text-base text-zinc-400 leading-relaxed">
              A custom quoting platform designed for tree service businesses,
              featuring dynamic pricing, PDF quote generation, customer history,
              and mobile-friendly workflows.
            </p>

          </div>

          <div className="group h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(33,168,255,0.08)]">

            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Material Supplier Tool
            </p>

            <h3 className="text-3xl font-bold mb-6">
              Bulk Material Estimator
            </h3>

            <div className="relative w-full h-[230px] md:h-[260px] rounded-2xl overflow-hidden border border-white/10 mb-6">

              <Image
                src="/bulk-material-preview.png"
                alt="Bulk Material Estimator Preview"
                fill
                className="object-contain bg-white md:object-cover md:object-top transition duration-700 group-hover:scale-[1.03]"
              />

            </div>

            <p className="text-base text-zinc-400 leading-relaxed">
              A streamlined quote request system for gravel and material suppliers,
              allowing customers to estimate delivery pricing and submit requests
              directly online.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <section id="services" className="max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32 scroll-mt-20 border-t border-white/5">

        <div className="mb-10 md:mb-16">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            What We Improve
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            Reduce friction across your business operations.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Workflow Automation",
              body: "Streamline repetitive tasks and reduce manual administrative work.",
            },
            {
              title: "Operational Reporting",
              body: "Improve visibility with cleaner reporting systems and centralized data.",
            },
            {
              title: "Custom Tools",
              body: "Build tailored internal tools and customer-facing systems for your business.",
            },
            {
              title: "Process Improvement",
              body: "Identify inefficiencies and modernize outdated operational workflows.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(33,168,255,0.08)]"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-base text-zinc-400 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          HOW WE WORK SECTION
      ===================================================== */}

      <section id="process" className="max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32 scroll-mt-20 border-t border-white/5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div>

            <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
              How We Work
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Practical solutions built around how your business actually operates.
            </h2>

          </div>

          <div className="space-y-6">

            {[
              {
                title: "01. Identify",
                body: "We start by understanding the painful, repetitive, or outdated processes slowing your team down.",
              },
              {
                title: "02. Simplify",
                body: "We map cleaner workflows, remove unnecessary steps, and define what should be automated or improved.",
              },
              {
                title: "03. Build",
                body: "We create custom tools, reporting systems, automations, or digital workflows that fit your business.",
              },
              {
                title: "04. Improve",
                body: "We refine the solution over time so it continues supporting your operations as the business grows.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l border-blue-500/50 pl-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-base text-zinc-400 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE HELP SECTION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32 border-t border-white/5">

        <div className="mb-10 md:mb-16">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            Who We Help
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            Built for businesses that have outgrown manual processes.
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Service Businesses",
              body: "Contractors, field teams, and growing service companies looking to modernize quoting and operations.",
            },
            {
              title: "Operational Teams",
              body: "Teams struggling with disconnected workflows, repetitive reporting, and inefficient administrative processes.",
            },
            {
              title: "Growing Companies",
              body: "Businesses needing scalable systems, automation, and cleaner operational visibility as they grow.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(33,168,255,0.08)]"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-base text-zinc-400 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-16 scroll-mt-20">

        <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 md:p-12 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_60px_rgba(33,168,255,0.06)]">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            Start a Conversation
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight">
            Have a painful process that needs a better system?
          </h2>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Let’s talk through where your business is losing time, duplicating work,
            or relying on outdated workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <a
              href="mailto:hello@auxiliumbusiness.com"
              className="bg-blue-600 hover:bg-blue-500 transition px-7 py-4 rounded-full font-medium text-center shadow-[0_0_30px_rgba(33,168,255,0.25)]"
            >
              Email Auxilium
            </a>

            <a
              href="#work"
              className="border border-white/10 hover:border-white/30 transition px-7 py-4 rounded-full font-medium text-center"
            >
              View Examples
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="max-w-7xl mx-auto px-6 pb-10">

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">

          <p>
            © 2026 Auxilium Business Solutions. All rights reserved.
          </p>

          <p>
            Business process modernization, automation, and custom operational tools.
          </p>

        </div>

      </footer>

    </main>
  )
}