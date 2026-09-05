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
      className="relative overflow-hidden border-t border-[#F97316]/15 bg-white text-[#171717]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[16%] h-80 w-80 rounded-full bg-[#F97316]/[0.05] blur-[160px]" />

        <div className="absolute right-[7%] top-[28%] h-72 w-72 rounded-full bg-[#FFB783]/[0.055] blur-[160px]" />

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FFF5EE]/60 to-transparent" />
      </div>

      <div className="section-shell relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_0.7fr_0.7fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-xl">
            <Link
              href="/"
              aria-label="MailSignal Startseite"
              className="inline-flex items-center gap-3"
            >
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#F97316]/25 bg-[#FFF5EE] shadow-[0_8px_24px_rgba(249,115,22,0.08)]">
                <span className="absolute right-[8px] top-[8px] h-2 w-2 rounded-full bg-[#F97316] shadow-[0_0_14px_rgba(249,115,22,0.65)]" />

                <span className="h-px w-5 bg-[#171717]/55" />
              </span>

              <span className="text-xl font-semibold tracking-[-0.04em]">
                MailSignal
              </span>
            </Link>

            <p className="mt-6 max-w-lg text-base leading-7 text-black/55">
              MailSignal zeigt direkt am Briefkasten, ob neue
              Post angekommen ist.
            </p>

            <p className="mt-2 text-base leading-7 text-black/55">
              Solarbetrieben, wartungsarm und vollständig
              offline.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#F97316]/20 bg-[#FFF5EE] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

              Privates Entwicklungsprojekt
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigationLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-sm text-black/55 transition duration-300 hover:text-[#F97316]"
                >
                  <span>{label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-80" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Rechtliches */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
              Rechtliches
            </p>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 text-sm text-black/55 transition duration-300 hover:text-[#F97316]"
                >
                  <span>{label}</span>

                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-80" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/30">
              Kontakt
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:mailsignal71@gmail.com?subject=Anfrage zu MailSignal"
                className="group flex items-start gap-3 text-sm text-black/55 transition duration-300 hover:text-[#171717]"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />

                <span className="break-all">
                  mailsignal71@gmail.com
                </span>
              </a>

              <a
                href="tel:+491773945542"
                className="group flex items-center gap-3 text-sm text-black/55 transition duration-300 hover:text-[#171717]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#F97316]" />

                <span>0177 3945542</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-black/45">
                <MapPin className="h-4 w-4 shrink-0 text-[#F97316]" />

                <span>Lohmar, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-black/[0.07] pt-7 sm:mt-14">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-black/40">
                © 2026 MailSignal
              </p>

              <p className="mt-2 text-xs text-black/30">
                Ein privates, nicht-kommerzielles
                Entwicklungsprojekt von Ladan Seddighi.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/35">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
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
