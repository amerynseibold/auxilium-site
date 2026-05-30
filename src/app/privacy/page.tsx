import type { Metadata } from "next"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export const metadata: Metadata = {
  title: "Privacy Policy | Auxilium Business Solutions",
  description:
    "Privacy policy for Auxilium Business Solutions, including how contact form information is collected and used.",
}

const sections = [
  {
    title: "Information We Collect",
    body: "When you contact Auxilium through this website, we may collect your name, email address, company name, and the message you choose to send. We may also receive basic technical information that browsers and hosting providers normally process, such as device, browser, and usage data.",
  },
  {
    title: "How We Use Information",
    body: "We use contact information to respond to inquiries, discuss potential projects, provide requested information, and improve how we communicate with visitors and prospective clients.",
  },
  {
    title: "How Information Is Shared",
    body: "We do not sell personal information. Information may be processed by trusted service providers that help operate the website, deliver email, host the site, or support normal business operations.",
  },
  {
    title: "Data Retention",
    body: "We keep contact messages and related information for as long as needed to respond, maintain business records, and support ongoing client conversations unless deletion is requested and we are able to comply.",
  },
  {
    title: "Your Choices",
    body: "You can contact us to ask about personal information you have provided, request corrections, or request deletion where applicable.",
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
          </p>

          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">
              How we handle information from this website.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/62 md:text-xl">
              This policy explains what information Auxilium Business Solutions may
              collect through this website and how we use it. Last updated May 30, 2026.
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
                Questions about this policy can be sent to{" "}
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
