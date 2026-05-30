export default function SiteFooter() {
  return (
    <footer className="site-container pb-4 md:pb-10">
      <div className="border-t border-white/10 pt-8 text-sm text-white/55 md:flex md:items-center md:justify-between md:gap-10">
        <div>
          <p className="text-white/55">
            &copy; 2026 Auxilium Business Solutions.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-5 md:mt-0 md:justify-end">
          <a
            href="mailto:hello@auxiliumbusiness.com"
            className="transition hover:text-white"
          >
            Email
          </a>

          <a
            href="https://github.com/amerynseibold"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a href="/privacy" className="transition hover:text-white">
            Privacy
          </a>

          <a href="/terms" className="transition hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
