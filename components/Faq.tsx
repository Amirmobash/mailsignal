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

export function Faq() {
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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[16%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#ffc62a]/10 blur-[180px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/[0.025] to-transparent" />
      </div>

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
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left sm:gap-8 sm:py-8"
                  >
                    <div className="flex min-w-0 items-start gap-4 sm:gap-7">
                      <span
                        className={`mt-1 shrink-0 text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 sm:text-xs ${
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
                        className={`text-lg font-semibold tracking-[-0.035em] transition-colors duration-300 sm:text-2xl ${
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
                          ? 'rotate-45 border-[#a96f00]/40 bg-[#ffc62a]/20 text-[#19130f]'
                          : 'border-black/14 bg-black/[0.025] text-black/70 group-hover:border-black/25'
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
                        <div className="pb-8 pl-[2.2rem] pr-12 sm:pb-10 sm:pl-[3.25rem] sm:pr-20">
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

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 flex max-w-4xl items-center justify-center gap-4 text-center sm:mt-16"
        >
          <span className="h-px w-10 bg-black/12" />

          <p className="text-xs text-black/35">
            Weitere Kontaktinformationen finden Sie im Footer.
          </p>

          <span className="h-px w-10 bg-black/12" />
        </motion.div>
      </div>
    </section>
  );
}
