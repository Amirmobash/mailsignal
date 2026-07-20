import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export const metadata = {
  title: 'Impressum | MailSignal',
  description:
    'Impressum und Anbieterinformationen für MailSignal.',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f1e5ca] text-[#19130f]">
      <div className="section-shell py-10 sm:py-14 lg:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-black/50 transition hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zu MailSignal
        </Link>

        <header className="mt-16 max-w-4xl sm:mt-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a96f00] sm:text-xs">
            Rechtliches
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">
            Impressum
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/48 sm:text-lg sm:leading-8">
            Angaben zur verantwortlichen Person und zum
            aktuellen Status des Projekts MailSignal.
          </p>
        </header>

        <div className="mt-16 grid gap-16 border-t border-black/12 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <aside>
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
              Verantwortlich
            </h2>

            <div className="mt-6 space-y-2 text-base leading-7">
              <p className="font-semibold">
                Ladan Seddighi
              </p>

              <p className="text-black/58">
                Altelohmarer Straße 11
                <br />
                53797 Lohmar
                <br />
                Deutschland
              </p>
            </div>

            <div className="mt-9 space-y-4">
              <a
                href="mailto:ladansediqi@gmail.com"
                className="flex items-center gap-3 text-sm text-black/58 transition hover:text-black"
              >
                <Mail className="h-4 w-4 text-[#a96f00]" />
                ladansediqi@gmail.com
              </a>

              <a
                href="tel:+491773945542"
                className="flex items-center gap-3 text-sm text-black/58 transition hover:text-black"
              >
                <Phone className="h-4 w-4 text-[#a96f00]" />
                0177 3945542
              </a>

              <div className="flex items-center gap-3 text-sm text-black/48">
                <MapPin className="h-4 w-4 text-[#a96f00]" />
                Lohmar, Deutschland
              </div>
            </div>
          </aside>

          <article className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Projektstatus
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-black/58">
                <p>
                  MailSignal ist ein privates,
                  nicht-kommerzielles Entwicklungsprojekt.
                  Derzeit besteht kein für MailSignal
                  registriertes Unternehmen.
                </p>

                <p>
                  Über diese Website werden keine Produkte
                  verkauft, keine Verträge abgeschlossen und
                  keine Zahlungen entgegengenommen.
                </p>

                <p>
                  Die Website dient ausschließlich der
                  Präsentation eines persönlichen
                  Produktkonzepts, eines Prototyps und dessen
                  Entwicklungsstands.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Verantwortlich für den Inhalt
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Ladan Seddighi
                <br />
                Anschrift wie oben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Urheberrecht
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Die auf dieser Website erstellten Inhalte,
                Texte, Grafiken, Darstellungen und sonstigen
                Werke unterliegen dem deutschen
                Urheberrecht. Jede Vervielfältigung,
                Bearbeitung, Verbreitung oder sonstige
                Verwertung außerhalb der gesetzlichen
                Schranken bedarf der vorherigen Zustimmung
                der jeweiligen Rechteinhaberin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Haftung für Inhalte
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Die Inhalte dieser Website wurden mit
                größtmöglicher Sorgfalt erstellt. Eine Gewähr
                für die Richtigkeit, Vollständigkeit und
                Aktualität der bereitgestellten Informationen
                wird jedoch nicht übernommen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Haftung für externe Links
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Soweit diese Website Links zu externen
                Websites enthält, besteht kein Einfluss auf
                deren Inhalte. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Marken und Kennzeichen
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Die auf dieser Website genannten Marken,
                Produktnamen und Kennzeichen unterliegen den
                Rechten der jeweiligen Eigentümer.
              </p>
            </section>
          </article>
        </div>

        <div className="mt-20 flex flex-wrap gap-5 border-t border-black/12 pt-8 text-sm">
          <Link
            href="/datenschutz"
            className="font-semibold text-black/50 transition hover:text-black"
          >
            Datenschutz
          </Link>

          <Link
            href="/#faq"
            className="font-semibold text-black/50 transition hover:text-black"
          >
            FAQ
          </Link>
        </div>
      </div>
    </main>
  );
}
