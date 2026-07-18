'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  Eye,
  Sun,
  WifiOff,
  Wrench,
} from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: Eye,
    title: 'Direkt sichtbar',
    text: 'Das LED-Licht zeigt unmittelbar am Briefkasten, ob neue Post angekommen ist.',
  },
  {
    icon: Sun,
    title: 'Solarbetrieben',
    text: 'Das integrierte Solarpanel versorgt MailSignal tagsüber automatisch mit Energie.',
  },
  {
    icon: WifiOff,
    title: 'Vollständig offline',
    text: 'Keine App, kein WLAN, kein Benutzerkonto und keine Cloud-Verbindung.',
  },
  {
    icon: Wrench,
    title: 'Einfach nachrüstbar',
    text: 'Für bestehende Briefkästen entwickelt und ohne Stromanschluss montierbar.',
  },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.08, 1, 0.94],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [45, -45],
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.16, 0.9, 1],
    [0.45, 1, 1, 0.7],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.38, 0.72, 1],
    [0.08, 0.34, 0.28, 0.1],
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.45],
    reduceMotion ? [0, 0] : [45, 0],
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.5],
    [0, 1, 1],
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] overflow-hidden bg-[#070706] text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />

      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute left-[28%] top-[42%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/12 blur-[180px]"
      />

      <div className="section-shell relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-10rem)]">
            <motion.div
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
              }}
              className="relative h-[62vh] min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black lg:h-full"
            >
              <Image
                src="/images/product-mailbox-night.png"
                alt="MailSignal an einem modernen Briefkasten bei Nacht"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/35" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />
            </motion.div>
          </div>

          <div className="flex min-h-[120vh] flex-col justify-center py-10 lg:py-20">
            <motion.div
              style={{
                opacity: headingOpacity,
                y: headingY,
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffc62a]">
                Das Produkt
              </p>

              <h2 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem] lg:leading-[0.9]">
                Weniger Wege.
                <span className="block text-[#ffc62a]">
                  Mehr Gewissheit.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/48">
                MailSignal zeigt direkt am Briefkasten, ob neue Post angekommen
                ist. Ohne App, ohne WLAN und ohne unnötigen Kontrollgang.
              </p>
            </motion.div>

            <div className="mt-16 border-t border-white/10">
              {features.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 34,
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
                    delay: index * 0.06,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid grid-cols-[auto_1fr] gap-5 border-b border-white/10 py-8 sm:gap-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition duration-500 group-hover:border-[#ffc62a]/35 group-hover:bg-[#ffc62a]/[0.06]">
                    <Icon className="h-5 w-5 text-[#ffc62a]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-lg text-base leading-7 text-white/42">
                      {text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap gap-3"
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
    </section>
  );
}
