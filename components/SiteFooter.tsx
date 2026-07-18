import { ArrowUpRight } from 'lucide-react';

import { Logo } from '@/components/Logo';

const navigation = [
  { label: 'Produkt', href: '#product' },
  { label: 'Technologie', href: '#technology' },
  { label: 'Business', href: '#business' },
  { label: 'Kontakt', href: '#contact' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Logo />

            <p className="mt-7 max-w-md text-sm leading-7 text-white/42">
              MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen
              ist. Solarbetrieben, wartungsarm und vollständig offline.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:justify-self-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                Navigation
              </p>

              <nav className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                Kontakt
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href="mailto:ladansediqi@gmail.com"
                  className="group inline-flex items-center gap-2 text-white/60 transition duration-300 hover:text-white"
                >
                  ladansediqi@gmail.com

                  <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://mailsignal.de"
                  className="group inline-flex items-center gap-2 text-white/60 transition duration-300 hover:text-white"
                >
                  mailsignal.de

                  <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MailSignal</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <span>Entwickelt in Deutschland</span>
            <span>Offline by design</span>
            <span>Solar powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
