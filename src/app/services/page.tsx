import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software engineering, automation, and AI-driven systems built around real, verifiable business problems.",
};

const services = [
  {
    title: "Custom Software Engineering",
    body: "Bespoke web and backend systems designed around how your business actually operates, built on solid architecture rather than shortcuts.",
  },
  {
    title: "Business Process Automation",
    body: "We find the manual, repetitive, error-prone parts of your operation and replace them with reliable, automated systems.",
  },
  {
    title: "AI & Data-Driven Systems",
    body: "Practical applications of artificial intelligence and data engineering that help you make better decisions, not AI for its own sake.",
  },
  {
    title: "Digital Transformation Consulting",
    body: "For organizations moving from manual or legacy processes to modern digital infrastructure, without disrupting what already works.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-medium tracking-widest text-amber-light uppercase">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            We build around your problem, not a fixed product line.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-paper/70">
            These are the areas we typically work in. If what you need
            doesn&apos;t fit neatly into one of them, tell us about the
            problem anyway.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-xl border border-line p-8">
              <div className="h-1 w-10 bg-amber" />
              <h2 className="mt-4 text-lg font-semibold text-ink">
                {service.title}
              </h2>
              <p className="mt-3 leading-7 text-muted">{service.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-line bg-paper-dim px-8 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">
            Have a broken process in mind?
          </h2>
          <p className="mt-3 text-muted">
            We start with a small number of customers whose problem is real
            enough to pay for something better. Yours might be next.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
