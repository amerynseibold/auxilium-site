"use client"

import { useState, type FormEvent } from "react"

type ContactFormStatus = "idle" | "submitting" | "success" | "error"

type ContactFormProps = {
  onCancel?: () => void
  onDone?: () => void
}

export default function ContactForm({ onCancel, onDone }: ContactFormProps) {
  const [status, setStatus] = useState<ContactFormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.")
      }

      form.reset()
      setStatus("success")
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
        <h3 className="text-xl font-semibold text-green-100">
          Message sent.
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/65">
          Thanks for reaching out. We&apos;ll review it and follow up with you soon.
        </p>

        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Close
          </button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-white/65">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-blue-400/60"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-white/65">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-blue-400/60"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm text-white/65">Company</span>
        <input
          name="company"
          autoComplete="organization"
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-blue-400/60"
          placeholder="Company name"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-white/65">What&apos;s slowing things down?</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-blue-400/60"
          placeholder="Tell us about the tasks, processes, or daily headaches that are taking up too much time in your business."
        />
      </label>

      {status === "error" && (
        <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-white/10 px-5 py-3 font-medium text-white/70 transition hover:border-white/25 hover:text-white"
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="cta-sheen relative overflow-hidden rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="relative z-10">
            {status === "submitting" ? "Sending..." : "Send Message"}
          </span>
        </button>
      </div>
    </form>
  )
}
