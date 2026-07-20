'use client';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: 'Was ist MailSignal?',
    answer:
      'MailSignal ist ein nachrüstbares Signalgerät für Briefkästen. Es macht direkt am Briefkasten sichtbar, ob neue Post eingeworfen wurde.',
  },
  {
    question: 'Benötigt MailSignal eine App oder WLAN?',
    answer:
      'Nein. MailSignal funktioniert unabhängig von App, WLAN und Cloud. Das Signal wird direkt am Briefkasten angezeigt.',
  },
  {
    question: 'Wie wird MailSignal befestigt?',
    answer:
      'Das aktuelle Konzept sieht eine einfache magnetische Befestigung am bestehenden Briefkasten vor. Die genaue Kompatibilität wird im weiteren Entwicklungsverlauf geprüft.',
  },
  {
    question: 'Wie wird das Signal zurückgesetzt?',
    answer:
      'Nach der Leerung des Briefkastens wird MailSignal über die kleine Taste an der Geräteseite manuell zurückgesetzt.',
  },
  {
    question: 'Für welche Briefkästen ist MailSignal geeignet?',
    answer:
      'MailSignal wird als nachrüstbare Lösung für unterschiedliche bestehende Briefkastentypen entwickelt. Die genaue Eignung kann je nach Form, Material und Einbausituation variieren.',
  },
  {
    question: 'Kann MailSignal bereits gekauft werden?',
    answer:
      'Nein. MailSignal befindet sich aktuell in der Entwicklungsphase und ist noch nicht erhältlich.',
  },
];

/*
 * این ایمیل را با ایمیل واقعی خودت عوض کن.
 */
const contactEmail = 'ladansediqi@gmail.com';

export function FaqContact() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const reduceMotion = useReducedMotion();

  function toggleItem(index: number) {
    setOpenIndex((current) =>
      current === index ? null : index,
    );
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f1e5ca] text-[#19130f]"
    >
      {/* نورهای ظریف پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[16%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#ffc62a]/10 blur-[180px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/20 to-transparent" />
      </div>

      {/* FAQ */}
      <div className="section-shell relative z-10 py-24 sm:py-32 lg:py-40">
        <motion.header
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.55,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a96f00] sm:text-xs">
            Fragen & Antworten
          </p>

          <h2 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">
            Noch Fragen?

            <span className="block text-black/28">
              Hier sind die Antworten.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-black/48 sm:text-lg sm:leading-8">
            Die wichtigsten Informationen zum aktuellen
            Entwicklungsstand von MailSignal.
          </p>
        </motion.header>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: reduceMotion ? 0 : 0.12,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-16 max-w-4xl border-t border-black/12 sm:mt-20"
        >
          {faqItems.map(
            ({ question, answer }, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={question}
                  className="border-b border-black/12"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center justify-between gap-8 py-7 text-left sm:py-8"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span
                        className={`mt-1 text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 sm:text-xs ${
                          isOpen
                            ? 'text-[#a96f00]'
                            : 'text-black/28'
                        }`}
                      >
                        {String(index + 1).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <h3
                        className={`text-xl font-semibold tracking-[-0.035em] transition-colors duration-300 sm:text-2xl ${
                          isOpen
                            ? 'text-[#19130f]'
                            : 'text-black/68 group-hover:text-black'
                        }`}
                      >
                        {question}
                      </h3>
                    </div>

                    <span
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        isOpen
                          ? 'rotate-45 border-[#a96f00]/40 bg-[#ffc62a]/20'
                          : 'border-black/14 bg-black/[0.025] group-hover:border-black/25'
                      }`}
                    >
                      <span className="absolute h-px w-4 bg-current" />

                      <span className="absolute h-4 w-px bg-current" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={
                          reduceMotion
                            ? undefined
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          height: {
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.3,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-[2.45rem] pr-14 sm:pb-10 sm:pl-[3.25rem] sm:pr-20">
                          <p className="max-w-2xl text-base leading-7 text-black/52 sm:text-lg sm:leading-8">
                            {answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            },
          )}
        </motion.div>
      </div>

      {/* Kontakt */}
      <div
        id="kontakt"
        className="relative bg-[#050504] text-white"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/10 blur-[190px]" />

          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f1e5ca]/10 to-transparent" />
        </div>

        <div className="section-shell relative z-10 py-24 sm:py-32 lg:py-40">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-5xl text-center"
          >
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.4, 1, 0.4],
                      scale: [0.75, 1.25, 0.75],
                      boxShadow: [
                        '0 0 0 rgba(255,198,42,0)',
                        '0 0 18px rgba(255,198,42,0.9), 0 0 60px rgba(255,198,42,0.45)',
                        '0 0 0 rgba(255,198,42,0)',
                      ],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto h-4 w-4 rounded-full bg-[#ffc62a]"
            />

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ffc62a] sm:text-xs">
              Kontakt
            </p>

            <h2 className="mt-6 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">
              Fragen oder Feedback?

              <span className="block text-white/28">
                Schreiben Sie uns.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
              MailSignal befindet sich aktuell in der
              Entwicklung. Fragen, Hinweise und Feedback zum
              Konzept sind jederzeit willkommen.
            </p>

            <a
              href={`mailto:${contactEmail}?subject=Anfrage zu MailSignal`}
              className="group mx-auto mt-10 inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-[#ffc62a]/35 bg-[#ffc62a]/10 px-7 text-sm font-semibold text-[#ffc62a] transition duration-300 hover:border-[#ffc62a]/70 hover:bg-[#ffc62a]/16 sm:min-h-16 sm:px-9 sm:text-base"
            >
              <span>E-Mail schreiben</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-6 block text-sm text-white/42 transition duration-300 hover:text-white sm:text-base"
            >
              {contactEmail}
            </a>
          </motion.div>

          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center sm:mt-32 sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-semibold tracking-[-0.035em]">
                MailSignal
              </p>

              <p className="mt-1 text-sm text-white/35">
                Sichtbar wissen, wann Post da ist.
              </p>
            </div>

            <p className="text-xs text-white/28">
              © 2026 MailSignal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
