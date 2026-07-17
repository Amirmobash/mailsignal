import Image from 'next/image';
import {
  Eye,
  Hammer,
  Mail,
  RadioTower,
  ShieldCheck,
  Sun,
  WifiOff,
} from 'lucide-react';

import { CinematicHero } from '@/components/CinematicHero';
import { Logo } from '@/components/Logo';
import { ScrollStory } from '@/components/ScrollStory';

const gallery = [
  '/images/hero.png',
  '/images/product.png',
  '/images/problem.png',
  '/images/market.png',
  '/images/competition.png',
  '/images/prototype.png',
  '/images/team.png',
  '/images/contact.png',
];

const benefits = [
  {
    icon: Eye,
    title: 'Sofort sichtbar',
    text: 'Ein klarer LED-Status direkt am Briefkasten.',
  },
  {
    icon: WifiOff,
    title: '100 % offline',
    text: 'Keine App, kein WLAN und keine Cloud.',
  },
  {
    icon: Sun,
    title: 'Solarbetrieben',
    text: 'Tageslicht genügt – kein regelmäßiges Nachladen.',
  },
  {
    icon: Hammer,
    title: 'Werkzeuglos',
    text: 'In wenigen Sekunden am vorhandenen Briefkasten montiert.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Einwurfklappe bewegt sich',
    text: 'Die Zustellung setzt den Mechanismus in Bewegung.',
  },
  {
    number: '02',
    title: 'Sensor erkennt die Bewegung',
    text: 'Ein robuster Sensor registriert den Briefeinwurf.',
  },
  {
    number: '03',
    title: 'LED wird aktiviert',
    text: 'Das sichtbare Signal zeigt an, dass Post angekommen ist.',
  },
  {
    number: '04',
    title: 'Status bleibt gespeichert',
    text: 'Die Anzeige bleibt aktiv, bis der Briefkasten kontrolliert wird.',
  },
  {
    number: '05',
    title: 'Manueller Reset',
    text: 'Nach der Entnahme wird MailSignal einfach zurückgesetzt.',
  },
];

const technologyPoints = [
  {
    icon: RadioTower,
    title: 'Keine Infrastruktur',
    text: 'Kein Router, kein Benutzerkonto, keine Cloud und keine laufenden Serverkosten.',
  },
  {
    icon: ShieldCheck,
    title: 'Datenschutzfreundlich',
    text: 'Es werden keine persönlichen Daten übertragen oder zentral gespeichert.',
  },
  {
    icon: Sun,
    title: 'Immer einsatzbereit',
    text: 'Solarbetrieb und ein energiearmes Konzept ermöglichen eine zuverlässige Nutzung.',
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-black">
      <CinematicHero />

      <ScrollStory />

      <section
        id="product"
        className="section-shell scroll-mt-24 py-28 sm:py-36"
      >
        <p className="eyebrow">Das Produkt</p>

        <div className="mt-5 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="display-lg max-w-4xl text-balance">
            Ein sichtbares Signal.
            <span className="block text-white/40">
              Mehr braucht es nicht.
            </span>
          </h2>

          <p className="copy-lg max-w-2xl lg:justify-self-end">
            MailSignal reduziert eine alltägliche Unsicherheit auf eine klare
            Information. Keine Benachrichtigungsflut, keine Registrierung und
            keine Abhängigkeit von digitalen Netzwerken.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="glass-panel group rounded-[1.75rem] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#ffc62a]/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Icon className="h-6 w-6 text-[#ffc62a]" />
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-[-0.02em]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] py-28 sm:py-36">
        <div className="section-shell">
          <p className="eyebrow">So funktioniert es</p>

          <h2 className="headline-md mt-5 max-w-5xl text-balance">
            Vom Briefeinwurf bis zum sichtbaren Status.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-5">
            {steps.map(({ number, title, text }) => (
              <article
                key={number}
                className="min-h-[310px] bg-[#090909] p-6 sm:p-8"
              >
                <span className="text-sm font-semibold text-[#ffc62a]">
                  {number}
                </span>

                <div className="mt-24">
                  <h3 className="font-semibold tracking-[-0.02em]">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="technology"
        className="section-shell scroll-mt-24 py-28 sm:py-36"
      >
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <Image
              src="/images/competition.png"
              alt="MailSignal Produkt am Briefkasten"
              width={1600}
              height={1100}
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/60 backdrop-blur-xl">
              Offline by design
            </div>
          </div>

          <div>
            <p className="eyebrow">Technologie</p>

            <h2 className="display-lg mt-5 text-balance">
              Nicht smarter.
              <span className="block text-white/40">
                Einfach sinnvoller.
              </span>
            </h2>

            <div className="mt-12">
              {technologyPoints.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-5 border-t border-white/10 py-7"
                >
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-[#ffc62a]" />

                  <div>
                    <h3 className="font-semibold tracking-[-0.02em]">
                      {title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Einblicke</p>

              <h2 className="headline-md mt-5 max-w-4xl text-balance">
                Produkt, Anwendung und Entwicklung.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/45">
              Ausgewählte Einblicke in den aktuellen Prototyp, das
              Funktionsprinzip und die mögliche Anwendung von MailSignal.
            </p>
          </div>

          <div className="grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((file, index) => (
              <div
                key={file}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] ${
                  index === 0 || index === 5
                    ? 'lg:col-span-2 lg:row-span-2'
                    : ''
                }`}
              >
                <Image
                  src={file}
                  alt={`MailSignal Einblick ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="business"
        className="scroll-mt-24 border-y border-white/10 bg-white/[0.018] py-28 sm:py-36"
      >
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">Business</p>

              <h2 className="display-lg mt-5 max-w-5xl text-balance">
                Eine einfache Lösung für bestehende Infrastruktur.
              </h2>
            </div>

            <div>
              <p className="copy-lg">
                MailSignal kann an bestehenden Briefkästen nachgerüstet und
                perspektivisch auf Paketboxen, Wartungsklappen und weitere
                Gehäuse übertragen werden.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-white/45">
                <span>Privathaushalte</span>
                <span>Hausverwaltungen</span>
                <span>Hersteller</span>
                <span>Pilotpartner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
