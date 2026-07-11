import Image from 'next/image';
import {
  ArrowRight,
  Check,
  Eye,
  Hammer,
  Mail,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Sun,
  WifiOff,
} from 'lucide-react';
import { Logo } from '@/components/Logo';

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
  [Eye, 'Sofort sichtbar', 'Ein klarer LED-Status direkt am Briefkasten.'],
  [WifiOff, '100 % offline', 'Keine App, kein WLAN, keine Cloud.'],
  [Sun, 'Solarbetrieben', 'Tageslicht genügt – kein Nachladen.'],
  [Hammer, 'Werkzeuglos', 'In Sekunden am vorhandenen Briefkasten montiert.'],
];

const steps = [
  ['01', 'Einwurfklappe bewegt sich', 'Die Zustellung setzt den Mechanismus in Bewegung.'],
  ['02', 'Sensor erkennt die Bewegung', 'Ein einfacher, robuster Sensor registriert den Einwurf.'],
  ['03', 'LED wird aktiviert', 'Das Signal zeigt sichtbar an, dass Post angekommen ist.'],
  ['04', 'Status bleibt gespeichert', 'Die Anzeige bleibt aktiv, bis der Briefkasten kontrolliert wird.'],
  ['05', 'Manueller Reset', 'Nach der Entnahme wird MailSignal mit einem Klick zurückgesetzt.'],
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-hero-radial">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a href="#produkt" className="transition hover:text-white">Produkt</a>
            <a href="#funktion" className="transition hover:text-white">Funktion</a>
            <a href="#vorteile" className="transition hover:text-white">Vorteile</a>
            <a href="#kontakt" className="rounded-full bg-white px-5 py-2.5 font-medium text-black transition hover:bg-signal">Pilotprojekt</a>
          </nav>
        </div>
      </header>

      <section className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[.92fr_1.08fr]">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/10 px-4 py-2 text-sm text-signal">
            <Sparkles className="h-4 w-4" /> Entwickelt in Deutschland. Für Europa gebaut.
          </div>
          <h1 className="headline leading-[.95]">
            Nie wieder umsonst zum <span className="text-signal">Briefkasten.</span>
          </h1>
          <p className="copy mt-7 max-w-xl">
            MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen ist — sichtbar, solarbetrieben und vollständig offline.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]">
              Pilotprojekt anfragen <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#funktion" className="rounded-full border border-white/15 px-6 py-3.5 font-medium text-white/85 transition hover:bg-white/10">
              So funktioniert es
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-white/55 sm:grid-cols-4">
            {['Keine App', 'Kein WLAN', 'Solar', 'Werkzeuglos'].map((item) => (
              <div key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-signal" />{item}</div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 rounded-full bg-signal/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] shadow-glow">
            <Image
              src="/images/hero.png"
              alt="MailSignal am Briefkasten"
              width={1600}
              height={1000}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-signal shadow-[0_0_22px_#f4b400]" />
                <div><p className="font-medium">Signal aktiv</p><p className="text-xs text-white/50">Post seit letzter Kontrolle</p></div>
              </div>
              <span className="text-xs text-white/40">Offline by design</span>
            </div>
          </div>
        </div>
      </section>

      <section id="produkt" className="section-shell py-28">
        <p className="eyebrow">Das Produkt</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Ein sichtbares Signal. Mehr braucht es nicht.</h2>
          <p className="copy max-w-2xl lg:justify-self-end">MailSignal reduziert eine alltägliche Unsicherheit auf eine klare Information. Keine Benachrichtigungsflut, keine Registrierung und keine Abhängigkeit von Netzwerken.</p>
        </div>
        <div id="vorteile" className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(([Icon, title, text]) => (
            <article key={title as string} className="glass rounded-3xl p-7 transition hover:-translate-y-1 hover:border-signal/30">
              <Icon className="h-7 w-7 text-signal" />
              <h3 className="mt-8 text-xl font-semibold">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{text as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="funktion" className="border-y border-white/10 bg-white/[0.025] py-28">
        <div className="section-shell">
          <p className="eyebrow">Funktion</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">Vom Briefeinwurf bis zum sichtbaren Status in fünf einfachen Schritten.</h2>
          <div className="mt-16 grid gap-4 lg:grid-cols-5">
            {steps.map(([n, title, text]) => (
              <article key={n} className="glass rounded-3xl p-6">
                <span className="text-sm font-semibold text-signal">{n}</span>
                <h3 className="mt-12 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <Image src="/images/competition.png" alt="MailSignal Produktpräsentation" width={1600} height={1000} className="w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Warum MailSignal?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Nicht smarter. Einfach sinnvoller.</h2>
            <div className="mt-9 space-y-6">
              {[
                [RadioTower, 'Keine Infrastruktur', 'Kein Router, kein Konto, keine Cloud und keine laufenden Serverkosten.'],
                [ShieldCheck, 'Datenschutzfreundlich', 'Es werden keine persönlichen Daten übertragen oder gespeichert.'],
                [Sun, 'Immer bereit', 'Solarbetrieb und ein energiearmes Konzept sorgen für zuverlässige Nutzung.'],
              ].map(([Icon, title, text]) => (
                <div key={title as string} className="flex gap-4 border-t border-white/10 pt-6">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-signal" />
                  <div><h3 className="font-semibold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-white/55">{text as string}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-28">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Einblicke</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Produkt, Anwendung und Markt.</h2></div>
          <p className="max-w-md text-sm leading-6 text-white/50">Ausgewählte Visualisierungen aus dem aktuellen MailSignal Pitch Deck.</p>
        </div>
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((file, i) => (
            <div key={file} className={`group relative overflow-hidden rounded-3xl border border-white/10 ${i === 0 || i === 5 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <Image src={file} alt={`MailSignal Präsentation ${i + 1}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="section-shell pb-28 pt-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-signal/20 bg-signal p-8 text-black sm:p-12 lg:p-16">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[.22em]">Pilotprojekte</p><h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">Bereit, den Briefkasten sichtbar intelligenter zu machen?</h2><p className="mt-6 max-w-2xl text-black/65">Wir suchen Pilotkunden, Hausverwaltungen, Partner und Investoren für die nächste Produktphase.</p></div>
            <a href="mailto:ladansediqi@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 font-semibold text-white transition hover:scale-[1.02]">Kontakt aufnehmen <Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="section-shell flex flex-col gap-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-6"><a href="mailto:ladansediqi@gmail.com">ladansediqi@gmail.com</a><a href="https://mailsignal.de">mailsignal.de</a><span>© 2026 MailSignal</span></div>
        </div>
      </footer>
    </main>
  );
}
