import Link from 'next/link';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const navigationLinks = [
  {
    label: 'So funktioniert es',
    href: '/#how-it-works',
  },
  {
    label: 'Anwendungen',
    href: '/#use-cases',
  },
  {
    label: 'Warum MailSignal?',
    href: '/#minimal-story',
  },
  {
    label: 'FAQ',
    href: '/#faq',
  },
];

const legalLinks = [
  {
    label: 'Impressum',
    href: '/impressum',
  },
  {
    label: 'Datenschutz',
    href: '/datenschutz',
  },
];

export function SiteFooter() {
  return (
    <footer
      id="kontakt"
      className="relative overflow-hidden border-t border-white/10 bg-[#050504] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[18%] h-80 w-80 rounded-full bg-[#ffc62a]/[0.07] blur-[160px]" />

        <div className="absolute right-[8%] top-[30%] h-72 w-72 rounded-full bg-[#ffc62a]/[0.045] blur-[160px]" />
      </div>

      <div className="section-shell relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.45fr_0.7fr_0.7fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="MailSignal Startseite"
              className="inline-flex items-center gap-3"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/18 bg-white/[0.035]">
                <span className="absolute right-[8px] top-[8px] h-2 w-2 rounded-full bg-[#ffc62a] shadow-[0_0_14px_rgba(255,198,42,0.9)]" />

                <span className="h-px w-5 bg-white/70" />
              </span>

              <span className="text-xl font-semibold tracking-[-0.04em]">
                MailSignal
              </span>
            </Link>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/52">
              MailSignal zeigt direkt am Briefkasten, ob neue
              Post angekommen ist.
            </p>

            <p className="mt-2 text-base leading-7 text-white/52">
              Solarbetrieben, wartungsarm und vollständig
              offline.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#ffc62a]/20 bg-[#ffc62a]/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffc62a]/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc62a]" />

              Privates Entwicklungsprojekt
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col items-start gap-3">
              {navigationLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition duration-300 hover:text-white"
                >
                  <span>{label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Rechtliches
            </p>

            <nav className="mt-6 flex flex-col items-start gap-3">
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-sm text-white/55 transition duration-300 hover:text-white"
                >
                  <span>{label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Kontakt
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:ladansediqi@gmail.com?subject=Anfrage zu MailSignal"
                className="group flex items-start gap-3 text-sm text-white/55 transition duration-300 hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#ffc62a]/80" />

                <span className="break-all">
                  ladansediqi@gmail.com
                </span>
              </a>

              <a
                href="tel:+491773945542"
                className="group flex items-center gap-3 text-sm text-white/55 transition duration-300 hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#ffc62a]/80" />

                <span>0177 3945542</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="h-4 w-4 shrink-0 text-[#ffc62a]/70" />

                <span>Lohmar, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-white/35">
                © 2026 MailSignal
              </p>

              <p className="mt-2 text-xs text-white/25">
                Ein privates, nicht-kommerzielles
                Entwicklungsprojekt von Ladan Seddighi.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/32">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffc62a]" />
                Entwickelt in Deutschland
              </span>

              <span>Offline by design</span>

              <span>Solar powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
