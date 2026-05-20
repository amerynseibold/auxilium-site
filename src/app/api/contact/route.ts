import { NextResponse } from "next/server"

const resendApiUrl = "https://api.resend.com/emails"
const defaultInbox = "hello@auxiliumbusiness.com"

type ContactPayload = {
  name?: unknown
  email?: unknown
  company?: unknown
  message?: unknown
}

const cleanText = (value: unknown) =>
  typeof value === "string" ? value.trim() : ""

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 })
  }

  const name = cleanText(payload.name)
  const email = cleanText(payload.email)
  const company = cleanText(payload.company)
  const message = cleanText(payload.message)

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }


const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please add RESEND_API_KEY before accepting form submissions." },
      { status: 500 },
    )
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || defaultInbox
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Auxilium Website <hello@auxiliumbusiness.com>"

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New Auxilium contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: "The message could not be sent right now. Please try again later." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
