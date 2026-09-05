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
    question: 'Wie lange hält der Akku?',
    answer:
      'Der Akku wird über das integrierte Solarmodul nachgeladen. Ein regelmäßiger Batteriewechsel ist im normalen Betrieb nicht vorgesehen.',
  },
  {
    question: 'Funktioniert MailSignal auch im Winter?',
    answer:
      'Ja. MailSignal ist für den Einsatz im Außenbereich entwickelt und funktioniert auch bei niedrigen Temperaturen und reduziertem Tageslicht.',
  },
  {
    question: 'Wie wird MailSignal befestigt?',
    answer:
      'MailSignal wird magnetisch befestigt. Die Montage erfolgt schnell und ohne Werkzeug.',
  },
  {
    question: 'Muss der Briefkasten angebohrt werden?',
    answer:
      'Nein. Für die Montage sind weder Bohren noch Schrauben erforderlich.',
  },
  {
    question: 'Für welche Briefkästen ist MailSignal geeignet?',
    answer:
      'MailSignal ist für viele gängige Metallbriefkästen geeignet, an denen die magnetische Befestigung sicher hält.',
  },
  {
    question: 'Kann MailSignal bereits gekauft werden?',
    answer:
      'Noch nicht. MailSignal befindet sich aktuell in der Entwicklungsphase und ist derzeit noch nicht erhältlich.',
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
      className="relative overflow-hidden bg-white text-[#171717]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[12%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#F97316]/[0.06] blur-[180px]" />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFF4EC]/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFF7F2]/70 to-transparent" />
      </div>

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
        {/* Header */}
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F97316] sm:text-xs">
            Fragen & Antworten
          </p>

          <div className="mx-auto mt-3 h-px w-12 bg-[#F97316]/70" />

          <h2 className="mt-5 text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[6rem]">
            Alles, was Sie noch

            <span className="block text-[#F97316]">
              wissen möchten.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/50 sm:text-lg sm:leading-8">
            Die wichtigsten Antworten vor dem Start mit MailSignal.
          </p>
        </motion.header>

        {/* FAQ list */}
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
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-[#F97316]/18 bg-white shadow-[0_24px_70px_rgba(249,115,22,0.08)] sm:mt-14"
        >
          {faqItems.map(
            ({ question, answer }, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={question}
                  className={`transition-colors duration-300 ${
                    index !== faqItems.length - 1
                      ? 'border-b border-black/[0.07]'
                      : ''
                  } ${
                    isOpen
                      ? 'bg-[#FFF7F2]'
                      : 'bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:gap-8 sm:px-8 sm:py-7"
                  >
                    <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                      <span
                        className={`mt-1 shrink-0 text-[10px] font-semibold tracking-[0.2em] transition-colors duration-300 sm:text-xs ${
                          isOpen
                            ? 'text-[#F97316]'
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
                            ? 'text-[#171717]'
                            : 'text-black/70 group-hover:text-[#171717]'
                        }`}
                      >
                        {question}
                      </h3>
                    </div>

                    <span
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        isOpen
                          ? 'rotate-45 border-[#F97316] bg-[#F97316] text-white shadow-[0_8px_22px_rgba(249,115,22,0.24)]'
                          : 'border-[#F97316]/25 bg-[#FFF7F2] text-[#F97316] group-hover:border-[#F97316]/50'
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
                        <div className="pb-7 pl-[3.2rem] pr-6 sm:pb-8 sm:pl-[4.4rem] sm:pr-20">
                          <p className="max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
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

        {/* Footer hint */}
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
          className="mx-auto mt-10 flex max-w-4xl items-center justify-center gap-4 text-center sm:mt-12"
        >
          <span className="h-px w-10 bg-[#F97316]/20" />

          <p className="text-xs text-black/35">
            Weitere Kontaktinformationen finden Sie im Footer.
          </p>

          <span className="h-px w-10 bg-[#F97316]/20" />
        </motion.div>
      </div>
    </section>
  );
}
