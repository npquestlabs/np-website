import Image from "next/image";
import Link from "next/link";

const CONTACT_EMAIL = "npquestlabs@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-line/20 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/logo-on-dark.png"
              alt="NPQuest Labs"
              width={600}
              height={202}
              className="h-12 w-auto"
            />
            <p className="mt-3 text-sm text-paper/70">
              Engineering solutions for difficult problems. We turn inefficient
              systems into scalable technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="text-sm font-semibold text-paper/90">Company</h3>
              <ul className="mt-3 space-y-2 text-sm text-paper/70">
                <li>
                  <Link href="/about" className="hover:text-amber-light">About</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-amber-light">Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-light">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-paper/90">Get in touch</h3>
              <ul className="mt-3 space-y-2 text-sm text-paper/70">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-amber-light">
                    {CONTACT_EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NPQuest Labs. All rights reserved.</p>
          <p>Problem first. Engineering always.</p>
        </div>
      </div>
    </footer>
  );
}
