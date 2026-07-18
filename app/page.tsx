
import { CinematicHero } from '@/components/CinematicHero';
import { Logo } from '@/components/Logo';
import { ProductShowcase } from '@/components/ProductShowcase';
import { TechnologyStory } from '@/components/TechnologyStory';
import { VisualStory } from '@/components/VisualStory';
import { BusinessShowcase } from '@/components/BusinessShowcase';
import { ContactCTA } from '@/components/ContactCTA';


export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-black">
      <CinematicHero />

      <ProductShowcase />

      <TechnologyStory />

      <VisualStory />

     <BusinessShowcase />

     <ContactCTA />

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
