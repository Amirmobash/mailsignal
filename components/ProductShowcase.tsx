'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Eye, Sun, WifiOff, Wrench } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: Eye,
    eyebrow: 'Sofort erkennbar',
    title: 'Direkt sichtbar.',
    text: 'Das LED-Licht zeigt unmittelbar am Briefkasten, ob neue Post angekommen ist.',
  },
  {
    number: '02',
    icon: Sun,
    eyebrow: 'Autark versorgt',
    title: 'Solarbetrieben.',
    text: 'Das integrierte Solarpanel versorgt MailSignal tagsüber automatisch mit Energie.',
  },
  {
    number: '03',
    icon: WifiOff,
    eyebrow: 'Offline by design',
    title: 'Vollständig offline.',
    text: 'Keine App, kein WLAN, kein Benutzerkonto und keine Cloud-Verbindung.',
  },
  {
    number: '04',
    icon: Wrench,
    eyebrow: 'Einfach integriert',
    title: 'Schnell nachrüstbar.',
    text: 'Für bestehende Briefkästen entwickelt und ohne Stromanschluss montierbar.',
  },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.04, 0.98],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [20, -20],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 1],
    [0.08, 0.3, 0.24, 0.08],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18],
    [0, 1, 0.25],
  );

  const introY = useTransform(
    scrollYProgress,
    [0, 0.12],
    [30, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="product-story"
      className="relative bg-[#070706] text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030303] via-[#050504] to-transparent" />

      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-[28%] top-[42%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/10 blur-[180px]"
      />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative">
            <div className="sticky top-0 flex h-screen items-center py-16">
              <motion.div
                style={{
                  scale: imageScale,
                  y: imageY,
                }}
                className="relative h-[72vh] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black"
              >
                <Image
                  src="/images/product-mailbox-night.png"
                  alt="MailSignal an einem modernen Briefkasten bei Nacht"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/30" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="min-h-screen flex items-center py-24">
              <motion.div
                style={{
                  opacity: introOpacity,
                  y: introY,
                }}
                className="max-w-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffc62a]">
                  Das Produkt
                </p>

                <h2 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6rem] lg:leading-[0.92]">
                  Weniger Wege.
                  <span className="block text-[#ffc62a]">
                    Mehr Gewissheit.
                  </span>
                </h2>

                <p className="mt-8 text-lg leading-8 text-white/48">
                  MailSignal zeigt direkt am Briefkasten, ob neue Post
                  angekommen ist. Ohne App, ohne WLAN und ohne unnötigen
                  Kontrollgang.
                </p>
              </motion.div>
            </div>

            {steps.map(({ number, icon: Icon, eyebrow, title, text }) => (
              <div
                key={number}
                className="flex min-h-screen items-center py-24"
              >
                <motion.article
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 50,
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
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full max-w-xl"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-semibold tracking-[0.22em] text-white/25">
                      {number}
                    </span>

                    <div className="h-px w-12 bg-white/15" />

                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffc62a]">
                      {eyebrow}
                    </span>
                  </div>

                  <div className="mt-8 flex items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
                      <Icon className="h-6 w-6 text-[#ffc62a]" />
                    </div>

                    <div>
                      <h3 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                        {title}
                      </h3>

                      <p className="mt-5 text-lg leading-8 text-white/45">
                        {text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}

            <div className="flex min-h-[70vh] items-center py-24">
              <motion.div
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
                  amount: 0.65,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-wrap gap-3"
              >
                {[
                  'Solarbetrieben',
                  'Offline',
                  'Sichtbar',
                  'Nachrüstbar',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/42"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
