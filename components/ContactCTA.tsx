'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export function ContactCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-28 text-white sm:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,198,42,0.12),transparent_35%)]" />

        <div className="absolute -right-40 top-12 h-[34rem] w-[34rem] rounded-full bg-[#ffc62a]/20 blur-[170px]" />
      </div>

      <div className="section-shell relative z-10">
        <div className="overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-16">
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffc62a]"
              >
                Pilotprojekte
              </motion.p>

              <motion.h2
                initial={reduceMotion ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{
                  delay: 0.05,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[7rem] lg:leading-[0.9]"
              >
                Der nächste Schritt
                <span className="block text-white/28">
                  beginnt gemeinsam.
                </span>
              </motion.h2>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{
                  delay: 0.14,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-2xl text-lg leading-8 text-white/48"
              >
                Wir suchen Pilotkunden, Hausverwaltungen, Hersteller und
                Partner für die nächste Entwicklungsphase von MailSignal.
              </motion.p>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                delay: 0.18,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:pb-2"
            >
              <a
                href="mailto:ladansediqi@gmail.com"
                className="group inline-flex min-h-16 items-center gap-4 rounded-full bg-[#ffc62a] px-7 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,198,42,0.22)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  <Mail className="h-4 w-4" />
                </span>

                Kontakt aufnehmen

                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              ['Pilotkunden', 'Praxisnah testen'],
              ['Hausverwaltungen', 'Bestehende Anlagen'],
              ['Hersteller', 'Integration & Skalierung'],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-[#0a0a0a] p-6 sm:p-8"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  0{index + 1}
                </p>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/42">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
