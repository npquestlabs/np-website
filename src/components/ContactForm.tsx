"use client";

import { useState } from "react";

const CONTACT_EMAIL = "npquestlabs@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n--\n${name}\n${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink-soft">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus:border-graphite"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink-soft">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus:border-graphite"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-soft">
          What&apos;s broken?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-ink outline-none focus:border-graphite"
          placeholder="Tell us about the process or problem you'd like to fix."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
      >
        Send message
      </button>
      <p className="text-xs text-muted">
        This opens your email client addressed to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
