'use client';

import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Building2,
  BriefcaseBusiness,
  Home,
  Stethoscope,
  Warehouse,
  Waves,
} from 'lucide-react';
import {
  type MouseEvent,
  useRef,
  useState,
} from 'react';

const useCases = [
  {
    label: 'Zuhause',
    description: 'Keine unnötigen Wege zum Briefkasten.',
    icon: Home,
    position:
      'left-[5%] top-[38%] xl:left-[9%]',
    depth: 1,
  },
  {
    label: 'Büro',
    description: 'Posteingang erkennen, ohne ständig nachzusehen.',
    icon: BriefcaseBusiness,
    position:
      'right-[5%] top-[34%] xl:right-[9%]',
    depth: 0.85,
  },
  {
    label: 'Mehrfamilienhaus',
    description: 'Ein klares Signal direkt an der Briefkastenanlage.',
    icon: Building2,
    position:
      'left-[10%] bottom-[18%] xl:left-[16%]',
    depth: 0.65,
  },
  {
    label: 'Praxis',
    description: 'Eingehende Post direkt und zuverlässig erkennen.',
    icon: Stethoscope,
    position:
      'right-[12%] bottom-[20%] xl:right-[18%]',
    depth: 0.7,
  },
  {
    label: 'Werkstatt',
    description: 'Weniger Kontrollgänge im laufenden Betrieb.',
    icon: Warehouse,
    position:
      'left-[19%] top-[17%] xl:left-[25%]',
    depth: 0.55,
  },
  {
    label: 'Ferienhaus',
    description: 'Praktisch, wenn der Briefkasten nicht direkt vor der Tür steht.',
    icon: Waves,
    position:
      'right-[18%] top-[15%] xl:right-[24%]',
    depth: 0.5,
  },
];

export function UseCasesOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
    mass: 0.7,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
    mass: 0.7,
  });

  const rotateY = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-8, 8],
  );

  const rotateX = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [7, -7],
  );

  const deviceX = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-14, 14],
  );

  const deviceY = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [-10, 10],
  );

  const glowX = useTransform(
    smoothMouseX,
    [-1, 1],
    ['39%', '61%'],
  );

  const glowY = useTransform(
    smoothMouseY,
    [-1, 1],
    ['40%', '60%'],
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28],
    [0, 1, 1],
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.24],
    reduceMotion ? [0, 0] : [36, 0],
  );

  const deviceOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.24, 0.42],
    [0, 0.55, 1],
  );

  const deviceScale = useTransform(
    scrollYProgress,
    [0.08, 0.42, 1],
    reduceMotion ? [1, 1, 1] : [0.84, 1, 0.96],
  );

  const orbitOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.48, 0.68],
    [0, 0.6, 1],
  );

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const normalizedX =
      ((event.clientX - bounds.left) / bounds.width) * 2 - 1;

    const normalizedY =
      ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setActiveCase(null);
  }

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[170vh] bg-[#050504] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          className="pointer-events-none absolute h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/12 blur-[190px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_42%)]" />

        <div className="section-shell relative z-10 flex h-full flex-col">
          <motion.div
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
            className="relative z-30 mx-auto max-w-5xl pt-20 text-center sm:pt-24 lg:pt-28"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ffc62a]">
              Für jeden Alltag
            </p>

            <h2 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.065em] sm:text-7xl lg:text-[6.8rem] lg:leading-[0.9]">
              Für jeden Briefkasten.
              <span className="block text-white/28">
                Für alle, die nicht umsonst nachsehen wollen.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Ob Haus, Büro oder Mehrfamilienhaus – MailSignal macht neue Post
              direkt sichtbar.
            </p>
          </motion.div>

          <div className="relative flex flex-1 items-center justify-center pb-10">
            <motion.div
              style={{ opacity: orbitOpacity }}
              className="pointer-events-none absolute hidden h-[48%] w-[70%] rounded-[50%] border border-white/[0.07] lg:block"
            />

            <motion.div
              style={{ opacity: orbitOpacity }}
              className="pointer-events-none absolute hidden h-[68%] w-[47%] rounded-[50%] border border-[#ffc62a]/[0.09] lg:block"
            />

            <motion.div
              style={{
                opacity: deviceOpacity,
                scale: deviceScale,
                rotateX,
                rotateY,
                x: deviceX,
                y: deviceY,
              }}
              className="relative z-20 mt-12 h-[300px] w-[300px] [transform-style:preserve-3d] sm:h-[370px] sm:w-[370px] lg:mt-16 lg:h-[440px] lg:w-[440px]"
            >
              <div className="pointer-events-none absolute inset-[19%] rounded-full bg-[#ffc62a]/12 blur-[70px]" />

              <Image
                src="/images/how-it-works-03-device.png"
                alt="MailSignal Gerät"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 370px, 440px"
                className="select-none object-contain"
              />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.4, 1, 0.4],
                        scale: [0.9, 1.14, 0.9],
                      }
                }
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="pointer-events-none absolute left-[48.5%] top-[69%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] shadow-[0_0_8px_3px_rgba(255,198,42,1),0_0_30px_12px_rgba(255,198,42,0.45)]"
              />
            </motion.div>

            <motion.div
              style={{ opacity: orbitOpacity }}
              className="absolute inset-0 hidden lg:block"
            >
              {useCases.map(
                (
                  {
                    label,
                    description,
                    icon: Icon,
                    position,
                    depth,
                  },
                  index,
                ) => {
                  const isActive = activeCase === label;

                  return (
                    <motion.button
                      key={label}
                      type="button"
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              scale: 0.8,
                              y: 22,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.6,
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onMouseEnter={() => setActiveCase(label)}
                      onFocus={() => setActiveCase(label)}
                      onBlur={() => setActiveCase(null)}
                      style={{
                        x: useTransform(
                          smoothMouseX,
                          [-1, 1],
                          [-18 * depth, 18 * depth],
                        ),
                        y: useTransform(
                          smoothMouseY,
                          [-1, 1],
                          [-14 * depth, 14 * depth],
                        ),
                      }}
                      className={`absolute ${position} z-30 text-left`}
                    >
                      <div
                        className={`flex items-center gap-3 transition duration-300 ${
                          isActive
                            ? 'text-[#ffc62a]'
                            : 'text-white/48 hover:text-white'
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
                            isActive
                              ? 'border-[#ffc62a]/45 bg-[#ffc62a]/10 shadow-[0_0_30px_rgba(255,198,42,0.15)]'
                              : 'border-white/10 bg-white/[0.025]'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        <span className="text-sm font-semibold tracking-[-0.02em]">
                          {label}
                        </span>
                      </div>

                      <motion.p
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 8,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="pointer-events-none mt-3 max-w-[230px] pl-[3.25rem] text-sm leading-6 text-white/52"
                      >
                        {description}
                      </motion.p>
                    </motion.button>
                  );
                },
              )}
            </motion.div>

            <motion.div
              style={{ opacity: orbitOpacity }}
              className="absolute inset-x-0 bottom-5 z-30 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden"
            >
              {useCases.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() =>
                    setActiveCase(
                      activeCase === label
                        ? null
                        : label,
                    )
                  }
                  className={`flex min-h-12 items-center justify-center gap-2 rounded-full border px-3 text-xs font-semibold transition ${
                    activeCase === label
                      ? 'border-[#ffc62a]/40 bg-[#ffc62a]/10 text-[#ffc62a]'
                      : 'border-white/10 bg-white/[0.025] text-white/55'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
