import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The meaning behind the NPQuest Labs name, our vision, mission, core values, and where we're starting.",
};

const coreValues = [
  {
    title: "Problem First",
    body: "We do not build technology for the sake of technology. Every product begins with a real, verifiable problem.",
  },
  {
    title: "Engineering Excellence",
    body: "Reliable systems come from quality architecture, careful design, and continuous improvement, not shortcuts.",
  },
  {
    title: "Long-Term Thinking",
    body: "We build products and relationships that create value over years, not quick wins.",
  },
  {
    title: "Ownership",
    body: "We take responsibility for the problems we solve and the systems we build, end to end.",
  },
  {
    title: "Continuous Learning",
    body: "Technology evolves constantly. We evolve with it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="text-sm font-medium tracking-widest text-amber-light uppercase">
            About Us
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Why we exist, and what we won&apos;t compromise on.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Meaning behind the name
        </h2>
        <p className="mt-4 leading-8 text-muted">
          NPQuest Labs takes its name from NP problems in computer science:
          problems that are easy to verify but computationally hard to solve.
          That is the company&apos;s operating philosophy: we go looking for
          the problems that are obviously real and obviously painful, but
          that nobody has properly engineered a solution for yet.
        </p>
        <p className="mt-4 leading-8 text-muted">
          We do not build software features for their own sake. We look for
          inefficient systems and turn them into scalable technology.
        </p>
      </section>

      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-amber-dark uppercase">
                Vision
              </h2>
              <p className="mt-4 text-xl leading-8 text-ink-soft">
                To become one of Africa&apos;s leading technology companies,
                building intelligent software systems and digital
                infrastructure that solve complex business and societal
                challenges.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-widest text-amber-dark uppercase">
                Mission
              </h2>
              <p className="mt-4 text-xl leading-8 text-ink-soft">
                NPQuest Labs builds practical, scalable technology solutions
                that help businesses operate efficiently, make better
                decisions, and embrace digital transformation. Through
                software engineering, automation, artificial intelligence,
                and data-driven systems, we simplify complex processes and
                create lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Core values
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <div key={value.title} className="rounded-xl border border-line p-6">
              <div className="h-1 w-8 bg-amber" />
              <h3 className="mt-4 text-base font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-line bg-paper-dim px-8 py-12 sm:px-12">
          <h2 className="text-sm font-semibold tracking-widest text-amber-dark uppercase">
            Where we start
          </h2>
          <p className="mt-4 max-w-2xl text-xl leading-8 text-ink-soft">
            NPQuest Labs is not trying to build Africa&apos;s biggest
            technology platform on day one. The first goal is narrower and
            harder to fake: find a small number of customers who feel their
            current process is broken enough to pay for something better.
            Everything else (scale, product breadth, reputation) is built
            on top of that proof.
          </p>
        </div>
      </section>
    </>
  );
}
