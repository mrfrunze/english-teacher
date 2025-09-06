import { useEffect, useRef, useState } from "react"

const ACCESS_KEY = "01dc17ab-581f-4ad4-93f1-58ffb9aff1c2" // empty for now, insert Web3Forms key later
const MIN_DELAY = 1200 // anti-bot: minimum time to submission (ms)

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [busy, setBusy] = useState(false)
  const [ok, setOk] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [readyAt, setReadyAt] = useState(0)

  useEffect(() => {
    setReadyAt(Date.now() + MIN_DELAY)
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setOk(null)
    setErr(null)

    const form = formRef.current!
    const data = new FormData(form)

    if ((data.get("website") as string)?.trim()) {
      setErr("Blocked by honeypot.")
      return
    }
    if (Date.now() < readyAt) {
      setErr("Form submitted too fast.")
      return
    }

    const name = (data.get("name") as string)?.trim()
    const email = (data.get("email") as string)?.trim()
    const message = (data.get("message") as string)?.trim()

    if (!name || name.length < 3) {
      setErr("Name must be at least 3 characters.")
      return
    }
    if (!email || !isEmail(email)) {
      setErr("Please enter a valid email.")
      return
    }

    // Если ACCESS_KEY empty → just a simulacrum of sending
    if (!ACCESS_KEY) {
      setBusy(true)
      setTimeout(() => {
        setOk("Form submitted (mock). Connect Web3Forms later.")
        setBusy(false)
        form.reset()
        setReadyAt(Date.now() + MIN_DELAY)
      }, 800)
      return
    }

    // Real request
    const payload = {
      access_key: ACCESS_KEY,
      name,
      email,
      message,
      subject: "New message from English teacher site",
      from_name: "English Teacher Contact Form",
    }

    setBusy(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || "Submit failed")

      setOk("Your message has been sent. Thank you!")
      form.reset()
      setReadyAt(Date.now() + MIN_DELAY)
    } catch (e: any) {
      setErr(e?.message || "Something went wrong. Please try again later.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="w-full max-w-xl space-y-4">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label className="block text-sm mb-1">Your Name *</label>
        <input
          name="name"
          required
          minLength={3}
          className="w-full px-3 py-2"
          placeholder="Your Name"
          autoComplete="name"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Your Email *</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-3 py-2"
          placeholder="name@example.com"
          autoComplete="email"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          className="w-full px-3 py-2 resize-none"
          placeholder="Your message (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={busy}
        className="btn btn-secondary block m-auto"
      >
        {busy ? "Sending..." : "Send Message"}
      </button>

      {ok && <p className="text-green-600 text-sm">{ok}</p>}
      {err && <p className="text-red-600 text-sm">{err}</p>}
    </form>
  )
}
