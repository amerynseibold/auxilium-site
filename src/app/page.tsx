"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

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

const mobileScrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "none",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "none",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const heroButtonGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const gentleRise: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
}

const cardGridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const processListReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardSpotlight =
  "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.08),transparent_35%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"

export default function Home() {

  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")

    const handleViewportChange = () => {
      setIsMobile(mediaQuery.matches)
    }

    handleViewportChange()
    mediaQuery.addEventListener("change", handleViewportChange)

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange)
    }
  }, [])

  const revealVariant = isMobile ? mobileScrollReveal : scrollReveal
  const revealInitial = shouldReduceMotion ? false : "hidden"
  const revealWhileInView = shouldReduceMotion ? undefined : "visible"

  return (
    <>
      <SiteHeader activePage="home" />

      <main className="relative min-h-screen bg-[#07090d] text-white">
      <div id="top" />

      {/* Ambient Background Depth */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

        <div className="absolute top-[35%] right-[-15%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] rounded-full bg-blue-400/[0.03] blur-[120px]" />

      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative">

        <div className="site-container relative pt-8 pb-4">

          {/* =========================
              HERO CONTENT
          ========================== */}

          <div className="pt-20 pb-14 md:pt-16 md:pb-20 lg:pb-24">

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(500px,1fr)] gap-8 xl:gap-10 items-center">

              {/* LEFT: HERO TEXT */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >

                <motion.p
                  variants={fadeUp}
                  className="uppercase tracking-[0.28em] text-xs md:text-sm text-blue-400 mb-7 md:mb-6"
                >
                  Business Process Modernization
                </motion.p>

                <motion.h1
                  className="text-[2rem] sm:text-6xl md:text-6xl font-bold leading-[1.02] tracking-tight max-w-3xl"
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

                <p className="mt-7 md:mt-6 text-[1rem] md:text-xl text-white/60 leading-relaxed max-w-2xl">
                  We build internal tools, quoting systems, dashboards, and workflow
                  automations that eliminate repetitive admin work for growing businesses.
                </p>

                <motion.div
                  variants={heroButtonGroup}
                  className="flex flex-col sm:flex-row gap-3 mt-10 md:mt-8"
                >

                    <motion.a
                      variants={gentleRise}
                      href="/demos"
                      className="cta-sheen group relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3 sm:py-3.5 font-medium text-center transition-colors duration-300 md:transition-all md:hover:-translate-y-[1px] md:hover:bg-blue-500 md:hover:shadow-[0_14px_34px_rgba(37,99,235,0.22)] active:translate-y-0"
                    >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>See the Demos</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </span>
                  </motion.a>  

                  <motion.a
                    href="/contact"
                    variants={gentleRise}
                    className="group rounded-xl border border-white/10 px-6 py-3 sm:py-3.5 font-medium text-center text-white/80 transition-colors duration-300 md:transition-all md:hover:-translate-y-[1px] md:hover:border-white/25 md:hover:text-white active:translate-y-0"
                  >
                    Start a Conversation
                  </motion.a>

                </motion.div>

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

                  <div className="premium-panel relative overflow-hidden rounded-2xl p-4 backdrop-blur-sm">
                    <div className="panel-scanline pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />

                    {/* Dashboard Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-zinc-400">Operations Command Center</p>
                        <h3 className="mt-1 text-2xl font-semibold">Quote Workflow System</h3>
                      </div>

                      <span className="live-pulse rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs text-green-300">
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
                                  className={`progress-glow h-2 rounded-full ${
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
                      <div className="rounded-xl border border-amber-300/20 bg-amber-300/10 p-4">
                        <p className="mb-3 text-xs text-amber-100">Bottlenecks Removed</p>

                        <div className="space-y-2 text-xs text-white/55">
                          <p>Manual scheduling</p>
                          <p>Duplicate data entry</p>
                          <p>Missed follow-ups</p>
                        </div>
                      </div>

                      <div className="rounded-xl border border-green-300/20 bg-green-300/10 p-4">
                        <p className="mb-3 text-xs text-green-100">Automation Impact</p>

                        <div className="space-y-2 text-xs text-white/55">
                          <p>Response time &darr; 68%</p>
                          <p>Admin workload &darr; 41%</p>
                          <p>Follow-ups &uarr; 92%</p>
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
        className="site-container pt-16 pb-22 md:pt-20 md:pb-28 scroll-mt-22 border-t border-white/5"
      >
        <motion.div
          variants={revealVariant}
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
          className="mb-8 md:mb-10"
        >
          <p className="uppercase tracking-[0.28em] text-xs md:text-sm text-blue-400 mb-4">
            Featured Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.02]">
            Real tools for real businesses.
          </h2>
        </motion.div>

        <motion.div
          variants={cardGridReveal}
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={{ once: true, amount: 0.12, margin: "0px 0px -80px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <motion.a
            variants={gentleRise}
            href="/demo/dashboard"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect()
              event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`)
              event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`)
            }}
            className={`premium-panel group relative self-start overflow-hidden rounded-2xl p-5 md:p-5 touch-pan-y transition-colors duration-300 md:transition-all md:hover:-translate-y-1 md:hover:border-white/20 md:hover:bg-white/[0.045] ${cardSpotlight}`}
          >
            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Operations Dashboard
            </p>

            <div className="min-h-[72px]">
              <h3 className="text-3xl font-bold leading-tight">
                Operations Command Center
              </h3>
            </div>

            <div className="relative w-full h-[190px] md:h-[185px] xl:h-[195px] rounded-2xl overflow-hidden border border-white/10 mb-5 bg-[#0d0f14] p-3">
              <Image
                src="/operations-dashboard-preview.png"
                alt="Operations Dashboard Preview"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain transition duration-700 md:group-hover:scale-[1.015]"
              />

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent" />
            </div>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              A modern operations dashboard concept for service businesses, featuring quote tracking, customer visibility, job scheduling, and reporting.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 md:transition-all md:group-hover:text-white md:group-hover:gap-3">
              <span>View Live Demo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </motion.a>

          <motion.a
            variants={gentleRise}
            href="https://snapquote.auxiliumbusiness.com/"
            target="_blank"
            rel="noreferrer"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect()
              event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`)
              event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`)
            }}
            className={`premium-panel group relative self-start overflow-hidden rounded-2xl p-5 md:p-5 touch-pan-y transition-colors duration-300 md:transition-all md:hover:-translate-y-1 md:hover:border-white/20 md:hover:bg-white/[0.045] ${cardSpotlight}`}
          >
            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Tree Service Tool
            </p>

            <div className="min-h-[72px]">
              <h3 className="text-3xl font-bold leading-tight">
                SnapQuote
              </h3>
            </div>

            <div className="relative w-full h-[190px] md:h-[185px] xl:h-[195px] rounded-2xl overflow-hidden border border-white/10 mb-5 bg-[#0d0f14] p-3">
              <Image
                src="/snapquote-preview.png"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="SnapQuote Preview"
                fill
                className="object-contain transition duration-700 md:group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
            </div>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              A custom quoting platform designed for tree service businesses,
              featuring dynamic pricing, PDF quote generation, customer history,
              and mobile-friendly workflows.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 md:transition-all md:group-hover:text-white md:group-hover:gap-3">
              <span>View Live Demo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </motion.a>

          <motion.a
            variants={gentleRise}
            href="https://bulkmaterial.auxiliumbusiness.com/"
            target="_blank"
            rel="noreferrer"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect()
              event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`)
              event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`)
            }}
            className={`premium-panel group relative self-start overflow-hidden rounded-2xl p-5 md:p-5 touch-pan-y transition-colors duration-300 md:transition-all md:hover:-translate-y-1 md:hover:border-white/20 md:hover:bg-white/[0.045] ${cardSpotlight}`}
          >
            <p className="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase mb-6">
              Material Supplier Tool
            </p>

            <div className="min-h-[72px]">
              <h3 className="text-3xl font-bold leading-tight">
                Bulk Material Estimator
              </h3>
            </div>

            <div className="relative w-full h-[190px] md:h-[185px] xl:h-[195px] rounded-2xl overflow-hidden border border-white/10 mb-5 bg-[#0d0f14] p-3">
              <Image
                src="/bulk-material-preview.png"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Bulk Material Estimator Preview"
                fill
                className="object-contain transition duration-700 md:group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:ring-white/20" />
            </div>

            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              A streamlined quote request system for gravel and material suppliers,
              allowing customers to estimate delivery pricing and submit requests
              directly online.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 md:transition-all md:group-hover:text-white md:group-hover:gap-3">
              <span>View Live Demo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </motion.a>
        </motion.div>
      </section>


      {/* =====================================================
          HOW WE WORK SECTION
      ===================================================== */}

    <section id="approach" className="border-t border-white/5 scroll-mt-24">
      <div className="site-container pt-16 pb-22 md:pt-20 md:pb-28">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] gap-10 lg:gap-12 xl:gap-16 items-start">

          <motion.div
            initial={revealInitial}
            whileInView={revealWhileInView}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
          >

            <motion.p
              variants={revealVariant}
              className="uppercase tracking-[0.28em] text-xs md:text-sm text-blue-400 mb-4"
            >
              How We Work
            </motion.p>

            <motion.h2
              className="max-w-2xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
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

            <motion.div
              variants={processListReveal}
              initial={revealInitial}
              whileInView={revealWhileInView}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
              className="space-y-5 md:space-y-6"
            >

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
                <motion.div key={item.title} variants={gentleRise} className="border-l border-blue-500/50 pl-6">
                  <h3 className="text-2xl font-semibold mb-1 md:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-base text-white/55 leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHO WE HELP SECTION
      ===================================================== */}

      <section id="who-we-help" className="border-t border-white/5 scroll-mt-24">
        <div className="site-container pt-16 pb-22 md:pt-20 md:pb-28">

          <motion.div
            variants={revealVariant}
            initial={revealInitial}
            whileInView={revealWhileInView}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -120px 0px" }}
            className="mb-8 md:mb-10"
          >

            <p className="uppercase tracking-[0.28em] text-xs md:text-sm text-blue-400 mb-4">
              Who We Help
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-[1.02]">
              Built for businesses that have outgrown manual processes.
            </h2>

          </motion.div>

          <motion.div
            variants={cardGridReveal}
            initial={revealInitial}
            whileInView={revealWhileInView}
            viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
            className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-10 lg:gap-14"
          >

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
              <motion.div
                key={item.title}
                variants={gentleRise}
                className="group transition-transform duration-300 md:hover:-translate-y-1"
              >
                <div className="mb-5 h-px w-12 bg-blue-400/60 transition-all duration-300 md:group-hover:w-20" />

                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 md:text-2xl md:group-hover:text-blue-100">
                  {item.title}
                </h3>

                <p className="text-base text-white/60 leading-relaxed transition-colors duration-300 md:group-hover:text-white/72">
                  {item.body}
                </p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section id="contact" className="site-container pt-18 pb-12 md:pb-14 scroll-mt-24">

        <div className="border-y border-white/10 py-10 md:grid md:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] md:items-end md:gap-10 lg:gap-14 md:py-14">

          <div>
            <p className="uppercase tracking-[0.28em] text-xs md:text-sm text-blue-400 mb-4">
              Make Your Workday Easier
            </p>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight"
              initial={revealInitial}
              whileInView={revealWhileInView}
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

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            Tell us what is slowing your team down. We&apos;ll help you turn the repetitive admin work, manual follow-ups, and spreadsheet chaos into a system that saves time every week.
            </p>
          </div>

          <div className="mt-10 max-w-sm border-t border-white/10 pt-6 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="mb-5 text-sm leading-relaxed text-white/55">
              Send a quick note about what is taking too much time. We&apos;ll figure out what can be simplified, automated, or rebuilt.
            </p>

            <div className="flex flex-col sm:flex-row md:flex-col gap-4">

              <a
                href="/contact"
                className="cta-sheen group relative overflow-hidden rounded-xl bg-blue-600 px-6 py-3.5 font-medium text-center transition-colors duration-300 md:transition-all md:hover:-translate-y-[1px] md:hover:bg-blue-500 md:hover:shadow-[0_14px_34px_rgba(37,99,235,0.22)] active:translate-y-0"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Get in Touch</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </a>

              <a
                href="/demos"
                className="group rounded-xl border border-white/10 px-6 py-3.5 font-medium text-center text-white/80 transition-colors duration-300 md:transition-all md:hover:-translate-y-[1px] md:hover:border-white/25 md:hover:text-white active:translate-y-0"
              >
                View Demos
              </a>

            </div>
          </div>

        </div>

      </section>

      <SiteFooter />
      </main>

    </>
  )
}
