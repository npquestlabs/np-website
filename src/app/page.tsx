import Link from "next/link";

const values = [
  {
    title: "Problem First",
    body: "Every product begins with a real, verifiable problem, not technology for its own sake.",
  },
  {
    title: "Engineering Excellence",
    body: "Reliable systems come from quality architecture and careful design, not shortcuts.",
  },
  {
    title: "Long-Term Thinking",
    body: "We build products and relationships that create value over years, not quick wins.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <p className="text-sm font-medium tracking-widest text-amber-light uppercase">
            NPQuest Labs
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Engineering solutions for difficult problems.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-paper/70">
            We look for inefficient systems and turn them into scalable
            technology through software engineering, automation, and
            data-driven systems.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-amber px-6 py-3 text-center text-sm font-semibold text-ink transition-colors hover:bg-amber-light"
            >
              Talk to us about a problem
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-paper/25 px-6 py-3 text-center text-sm font-semibold text-paper transition-colors hover:border-paper/50"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Named after the hardest problems in computer science.
          </h2>
          <p className="mt-4 leading-7 text-muted">
            NPQuest Labs takes its name from NP problems: problems that are
            easy to verify but computationally hard to solve. That is our
            operating philosophy: we go looking for the problems that are
            obviously real and obviously painful, but that nobody has
            properly engineered a solution for yet. We do not build software
            features for their own sake.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <div className="h-1 w-10 bg-amber" />
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="text-sm font-semibold text-amber-dark hover:text-amber"
            >
              Read our full vision, mission &amp; values →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-line bg-paper px-8 py-12 sm:px-12">
          <p className="text-sm font-medium tracking-widest text-amber-dark uppercase">
            Where we start
          </p>
          <p className="mt-4 max-w-2xl text-xl leading-8 text-ink-soft">
            We are not trying to build the biggest technology platform on day
            one. The first goal is narrower and harder to fake: find a small
            number of customers who feel their current process is broken
            enough to pay for something better.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-full bg-graphite px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
            >
              Tell us what&apos;s broken
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
