"use client"

import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
}

export default function Home() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">

      {/* Ambient Background Depth */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

        <div className="absolute top-[35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full bg-blue-400/[0.03] blur-[120px]" />

      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative">

        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-4">

          {/* =========================
              TOP NAV
          ========================== */}

          <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
              scrolled
                ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
                : "bg-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between gap-4">

           <div className="w-[190px] md:w-[255px]"> 
            <Image
              src="/auxilium-logo-tight.png"
              alt="Auxilium Logo"
              width={300}
              height={40}
              priority
            />
           </div>

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

              <a href="#contact" className="border border-white/10 px-5 py-2 rounded-xl text-white hover:border-white/30 transition">
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
        </div>

          {/* =========================
              HERO CONTENT
          ========================== */}

          <div className="pt-12 pb-20 md:pt-20 md:pb-28">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">

              {/* LEFT: HERO TEXT */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >

                <motion.p
                  variants={fadeUp}
                  className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-6"
                >
                  Business Process Modernization
                </motion.p>

                <motion.h1
                  className="text-[2.25rem] sm:text-6xl md:text-6xl font-bold leading-[1.02] tracking-tight max-w-3xl"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                >
                  {"Helping businesses modernize outdated systems and workflows."
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={`${word}-${index}`}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 28,
                            filter: "blur(8px)",
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                              duration: 0.55,
                              ease: "easeOut",
                            },
                          },
                        }}
                        className="inline-block mr-[0.25em]"
                      >
                        {word}
                      </motion.span>
                    ))}
                </motion.h1>

                <p className="mt-8 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                  We build internal tools, quoting systems, dashboards, and workflow
                  automations that eliminate repetitive admin work for growing businesses.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                  <a
                    href="#work"
                    className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3.5 rounded-xl font-medium text-center shadow-sm"
                  >
                    See the Work
                  </a>

                  <a
                    href="#contact"
                    className="border border-white/10 hover:border-white/30 transition px-6 py-3.5 rounded-xl font-medium text-center"
                  >
                    Start a Conversation
                  </a>

                </div>

              </motion.div>

              {/* RIGHT: HERO OPERATIONS VISUAL */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                className="hidden lg:block lg:pt-4"
              >
                <div className="relative">
                  {/* Soft dashboard glow */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-[120px] opacity-40" />

                  <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                    {/* Dashboard Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-zinc-400">Operations Command Center</p>
                        <h3 className="mt-1 text-2xl font-semibold">Quote Workflow System</h3>
                      </div>

                      <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300">
                        Live
                      </span>
                    </div>

                    {/* Metrics */}
                    <div className="mb-4 grid grid-cols-3 gap-3">
                      {[
                        ["Active Jobs", "18"],
                        ["Time Saved", "12h/wk"],
                        ["Automated", "86%"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                          <p className="text-xs text-zinc-500">{label}</p>
                          <p className="text-2xl font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Workflow */}
                    <div className="mb-4 rounded-2xl border border-white/10 bg-black/20 p-2">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-medium">Customer Request Workflow</p>
                        <p className="text-xs text-blue-300">5 steps</p>
                      </div>

                      <div className="space-y-3">
                        {[
                          ["Request received", "Complete"],
                          ["Quote generated", "Complete"],
                          ["Team assigned", "In progress"],
                          ["Customer follow-up", "Queued"],
                          ["Job scheduled", "Pending"],
                        ].map(([title, status], index) => (
                          <div key={title} className="flex items-center gap-3">
                            <div
                              className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs ${
                                index < 2
                                  ? "border-blue-400/40 bg-blue-400/20 text-blue-200"
                                  : index === 2
                                    ? "border-green-400/40 bg-green-400/20 text-green-200"
                                    : "border-white/10 bg-white/5 text-white/40"
                              }`}
                            >
                              {index + 1}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="mb-2 flex items-center justify-between gap-3">

                                <div className="flex items-center gap-2">

                                  <div
                                    className={`h-2 w-2 rounded-full ${
                                      index < 2
                                        ? "bg-blue-400"
                                        : index === 2
                                          ? "bg-green-400"
                                          : "bg-white/20"
                                    }`}
                                  />

                                  <p className="truncate text-sm text-white/85">
                                    {title}
                                  </p>

                                </div>

                                <p className="shrink-0 text-xs text-white/45">
                                  {status}
                                </p>

                              </div>

                              <div className="h-2 rounded-full bg-white/10">
                                <div
                                  className={`h-2 rounded-full ${
                                    index < 2
                                      ? "w-full bg-blue-400/70"
                                      : index === 2
                                        ? "w-2/3 bg-green-400/70"
                                        : "w-1/4 bg-white/20"
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Operational Impact */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                        <p className="mb-3 text-xs text-amber-100">Bottlenecks Removed</p>

                        <div className="space-y-2 text-xs text-white/55">
                          <p>Manual scheduling</p>
                          <p>Duplicate data entry</p>
                          <p>Missed follow-ups</p>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-green-300/20 bg-green-300/10 p-4">
                        <p className="mb-3 text-xs text-green-100">Automation Impact</p>

                        <div className="space-y-2 text-xs text-white/55">
                          <p>Response time ↓ 68%</p>
                          <p>Admin workload ↓ 41%</p>
                          <p>Follow-ups ↑ 92%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
           </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ====================================================== */}

      <section
        id="work"
        className="max-w-7xl mx-auto px-6 pb-24 md:pb-32 scroll-mt-20"
      >
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
          className="mb-8 md:mb-10"
        >
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Real tools for real businesses.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <a
            href="https://snapquote-gilt.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group self-start bg-white/[0.03] border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
          >
            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Tree Service Tool
            </p>

            <div className="min-h-[72px]">
              <h3 className="text-3xl font-bold leading-tight">
                SnapQuote
              </h3>
            </div>

            <div className="relative w-full h-[190px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image
                src="/snapquote-preview.png"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="SnapQuote Preview"
                fill
                className="object-contain bg-white md:object-contain transition duration-700 group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
            </div>

            <p className="text-base text-zinc-400 leading-relaxed">
              A custom quoting platform designed for tree service businesses,
              featuring dynamic pricing, PDF quote generation, customer history,
              and mobile-friendly workflows.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-all duration-300 group-hover:text-white group-hover:gap-3">
              <span>View Live Demo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>

          <a
            href="https://bulk-material-demo-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group self-start bg-white/[0.03] border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
          >
            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Material Supplier Tool
            </p>

            <div className="min-h-[72px]">
              <h3 className="text-3xl font-bold leading-tight">
                Bulk Material Estimator
              </h3>
            </div>

            <div className="relative w-full h-[190px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image
                src="/bulk-material-preview.png"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Bulk Material Estimator Preview"
                fill
                className="object-contain bg-white md:object-contain transition duration-700 group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
            </div>

            <p className="text-base text-zinc-400 leading-relaxed">
              A streamlined quote request system for gravel and material suppliers,
              allowing customers to estimate delivery pricing and submit requests
              directly online.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-all duration-300 group-hover:text-white group-hover:gap-3">
              <span>View Live Demo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>

          <a
            href="/demo/dashboard"
            className="group self-start bg-white/[0.03] border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
          >
            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Operations Dashboard
            </p>

            <div className="min-h-[72px]">
              <h3 className="text-3xl font-bold leading-tight">
                Operations Command Center
              </h3>
            </div>

            <div className="relative w-full h-[190px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-[#0d0f14]">
              <Image
                src="/operations-dashboard-preview.png"
                alt="Operations Dashboard Preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain bg-[#0d0f14] transition duration-700 group-hover:scale-[1.015]"
              />

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent" />
            </div>

            <p className="text-base text-zinc-400 leading-relaxed">
              A modern operations dashboard concept for service businesses, featuring quote tracking, customer visibility, job scheduling, and reporting.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-all duration-300 group-hover:text-white group-hover:gap-3">
              <span>View Live Demo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        </div>
      </section>


      {/* =====================================================
          HOW WE WORK SECTION
      ===================================================== */}

      <section id="process" className="max-w-7xl mx-auto px-6 pt-18 pb-24 md:pt-24 md:pb-32 scroll-mt-20 border-t border-white/5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
        >

          <motion.p
            variants={scrollReveal}
            className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4"
          >
            How We Work
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {"Practical solutions built around how your business actually operates."
              .split(" ")
              .map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 24,
                      filter: "blur(8px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h2>

        </motion.div>

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

                <p className="text-base text-white/55 leading-relaxed">
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

      <section className="max-w-7xl mx-auto px-6 pt-18 pb-24 md:pt-24 md:pb-32 scroll-mt-20 border-t border-white/5">

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
          className="mb-10 md:mb-16"
        >

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            Who We Help
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl">
            Built for businesses that have outgrown manual processes.
          </h2>

        </motion.div>

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
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"
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

        <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 md:p-12 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-4">
            Let's Improve Your Workflow
          </p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.045,
                },
              },
            }}
          >
            {"Have a painful process that needs a better system?"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      filter: "blur(8px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.45,
                        ease: "easeOut",
                      },
                    },
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h2>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Let’s talk through where your business is losing time, duplicating work,
            or relying on outdated workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <a
              href="mailto:hello@auxiliumbusiness.com"
              className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3.5 rounded-xl font-medium text-center shadow-sm"
            >
              Email Auxilium
            </a>

            <a
              href="#work"
              className="border border-white/10 hover:border-white/30 transition px-6 py-3.5 rounded-xl font-medium text-center"
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
        <div className="border-t border-white/10 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-zinc-500">
          <div>
            <p>
              © 2026 Auxilium Business Solutions. All rights reserved.
            </p>

            <p className="mt-2">
              Business process modernization, automation, and custom operational tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/amerynseibold"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#work"
              className="transition hover:text-white"
            >
              Featured Work
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}