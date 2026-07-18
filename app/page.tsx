
import { Mail } from 'lucide-react';

import { CinematicHero } from '@/components/CinematicHero';
import { Logo } from '@/components/Logo';
import { ProductShowcase } from '@/components/ProductShowcase';
import { TechnologyStory } from '@/components/TechnologyStory';
import { VisualStory } from '@/components/VisualStory';
import { BusinessShowcase } from '@/components/BusinessShowcase';



export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-black">
      <CinematicHero />

      <ProductShowcase />

      <TechnologyStory />

      <VisualStory />

     <BusinessShowcase />

      <section
        id="contact"
        className="section-shell scroll-mt-24 pb-28 pt-28 sm:pb-36 sm:pt-36"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ffc62a]/20 bg-[#ffc62a] p-8 text-black sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-white/35 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Pilotprojekte
              </p>

              <h2 className="mt-5 max-w-5xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Gemeinsam den nächsten Schritt für MailSignal gehen.
              </h2>

              <p className="mt-6 max-w-2xl text-black/65">
                Wir suchen Pilotkunden, Hausverwaltungen, Partner und
                Investoren für die nächste Produktphase.
              </p>
            </div>

            <a
              href="mailto:ladansediqi@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1"
            >
              Kontakt aufnehmen
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <Logo />

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="mailto:ladansediqi@gmail.com"
              className="transition hover:text-white"
            >
              ladansediqi@gmail.com
            </a>

            <a
              href="https://mailsignal.de"
              className="transition hover:text-white"
            >
              mailsignal.de
            </a>

            <span>© 2026 MailSignal</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
