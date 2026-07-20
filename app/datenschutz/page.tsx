import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Datenschutz | MailSignal',
  description:
    'Datenschutzerklärung für die Website MailSignal.',
};

export default function DatenschutzPage() {
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
            Datenschutz
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/48 sm:text-lg sm:leading-8">
            Informationen darüber, welche Daten beim Besuch
            dieser Website verarbeitet werden.
          </p>
        </header>

        <div className="mt-16 grid gap-16 border-t border-black/12 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <aside>
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
              Verantwortliche Stelle
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

            <a
              href="mailto:ladansediqi@gmail.com"
              className="mt-6 block text-sm text-black/58 transition hover:text-black"
            >
              ladansediqi@gmail.com
            </a>

            <p className="mt-10 text-xs leading-5 text-black/35">
              Stand: Juli 2026
            </p>
          </aside>

          <article className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Allgemeine Hinweise
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Personenbezogene Daten sind Informationen,
                mit denen eine natürliche Person direkt oder
                indirekt identifiziert werden kann. Diese
                Datenschutzerklärung erläutert, welche Daten
                beim Besuch dieser Website verarbeitet
                werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Hosting
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-black/58">
                <p>
                  Diese Website wird über die Plattform
                  Render bereitgestellt. Anbieter ist Render
                  Services, Inc., Vereinigte Staaten.
                </p>

                <p>
                  Beim Aufruf der Website können technisch
                  erforderliche Daten verarbeitet werden.
                  Dazu können insbesondere die IP-Adresse,
                  Datum und Uhrzeit des Zugriffs, aufgerufene
                  Adresse, Browsertyp, Betriebssystem,
                  Geräteinformationen und technische
                  Anfrageinformationen gehören.
                </p>

                <p>
                  Die Verarbeitung erfolgt, soweit
                  erforderlich, zur sicheren, stabilen und
                  fehlerfreien Bereitstellung der Website
                  sowie zur Abwehr missbräuchlicher Zugriffe.
                </p>

                <p>
                  Bei einer Verarbeitung durch Render kann
                  eine Übermittlung personenbezogener Daten
                  in die Vereinigten Staaten oder andere
                  Drittländer stattfinden.
                </p>

                <a
                  href="https://render.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex font-semibold text-[#8b5d00] underline decoration-[#a96f00]/30 underline-offset-4 transition hover:text-[#5d3e00]"
                >
                  Datenschutzhinweise von Render
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Server- und Zugriffsprotokolle
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Der Hosting-Anbieter kann technische
                Protokolldaten verarbeiten, soweit dies für
                Betrieb, Sicherheit, Fehleranalyse und
                Bereitstellung der Website erforderlich ist.
                Die konkrete Speicherdauer richtet sich nach
                den technischen Einstellungen und
                Bedingungen des Hosting-Anbieters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Kontaktaufnahme per E-Mail oder Telefon
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-black/58">
                <p>
                  Wenn Sie per E-Mail oder telefonisch
                  Kontakt aufnehmen, werden die von Ihnen
                  übermittelten Angaben zur Bearbeitung Ihrer
                  Anfrage und für mögliche Anschlussfragen
                  verwendet.
                </p>

                <p>
                  Die Daten werden nicht ohne Ihre
                  Zustimmung für Werbung verwendet oder an
                  unbeteiligte Dritte weitergegeben.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Keine Kontaktformulare
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Auf dieser Website wird kein Kontaktformular
                eingesetzt. Die Kontaktaufnahme erfolgt über
                das E-Mail-Programm oder Telefon der
                jeweiligen Person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Cookies
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Diese Website setzt nach aktuellem
                Entwicklungsstand keine eigenen Analyse-,
                Marketing- oder Profiling-Cookies ein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Analyse und Tracking
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Es werden keine Dienste wie Google
                Analytics, Meta Pixel oder vergleichbare
                Tracking- und Profiling-Werkzeuge eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Schriftarten
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Die auf dieser Website verwendeten
                Schriftarten werden lokal innerhalb des
                Projekts bereitgestellt. Beim Laden der
                Schriftarten wird keine Verbindung zu Google
                Fonts hergestellt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Keine automatisierte Entscheidungsfindung
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Es findet keine automatisierte
                Entscheidungsfindung und kein Profiling auf
                Grundlage personenbezogener Daten statt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Ihre Rechte
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-black/58">
                <p>
                  Soweit die gesetzlichen Voraussetzungen
                  erfüllt sind, haben betroffene Personen
                  insbesondere das Recht auf Auskunft,
                  Berichtigung, Löschung, Einschränkung der
                  Verarbeitung, Datenübertragbarkeit und
                  Widerspruch.
                </p>

                <p>
                  Eine erteilte Einwilligung kann jederzeit
                  mit Wirkung für die Zukunft widerrufen
                  werden.
                </p>

                <p>
                  Betroffene Personen können sich außerdem
                  bei einer zuständigen
                  Datenschutzaufsichtsbehörde beschweren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Änderung dieser Datenschutzerklärung
              </h2>

              <p className="mt-4 text-base leading-7 text-black/58">
                Diese Datenschutzerklärung kann angepasst
                werden, wenn sich Funktionen, technische
                Dienste oder rechtliche Anforderungen dieser
                Website ändern.
              </p>
            </section>
          </article>
        </div>

        <div className="mt-20 flex flex-wrap gap-5 border-t border-black/12 pt-8 text-sm">
          <Link
            href="/impressum"
            className="font-semibold text-black/50 transition hover:text-black"
          >
            Impressum
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
