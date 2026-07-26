import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

const CONTACT_EMAIL = "hello@npquestlabs.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell NPQuest Labs about the problem you'd like to fix.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-widest text-amber-dark uppercase">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Tell us what&apos;s broken.
          </h1>
          <p className="mt-6 max-w-md leading-8 text-muted">
            We&apos;re looking for a small number of customers whose current
            process is broken enough to pay for something better. If that
            sounds like you, we&apos;d like to hear about it.
          </p>
          <p className="mt-8 text-sm text-muted">
            Or email us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-amber-dark hover:text-amber"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-paper-dim p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
