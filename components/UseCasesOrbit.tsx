'use client';

import Image from 'next/image';
import {
  motion,
  type MotionValue,
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
  Sun,
  Warehouse,
  type LucideIcon,
} from 'lucide-react';
import {
  type MouseEvent,
  useRef,
  useState,
} from 'react';

type UseCase = {
  label: string;
  description: string;
  icon: LucideIcon;
  position: string;
  depth: number;
  align?: 'left' | 'center' | 'right';
};

const useCases: UseCase[] = [
  {
    label: 'Ferienhaus',
    description:
      'Praktisch, wenn der Briefkasten nicht direkt vor der Tür steht.',
    icon: Sun,
    position:
      'left-1/2 top-[5%] -translate-x-1/2',
    depth: 0.45,
    align: 'center',
  },
  {
    label: 'Werkstatt',
    description:
      'Weniger Kontrollgänge im laufenden Betrieb.',
    icon: Warehouse,
    position:
      'left-[2%] top-[29%] xl:left-[5%]',
    depth: 0.7,
    align: 'left',
  },
  {
    label: 'Büro',
    description:
      'Posteingang erkennen, ohne ständig nachzusehen.',
    icon: BriefcaseBusiness,
    position:
      'right-[2%] top-[29%] xl:right-[5%]',
    depth: 0.75,
    align: 'right',
  },
  {
    label: 'Zuhause',
    description:
      'Keine unnötigen Wege zum Briefkasten.',
    icon: Home,
    position:
      'left-[1%] bottom-[15%] xl:left-[4%]',
    depth: 0.9,
    align: 'left',
  },
  {
    label: 'Praxis',
    description:
      'Neue Post sichtbar erkennen – auch im laufenden Betrieb.',
    icon: Stethoscope,
    position:
      'right-[1%] bottom-[15%] xl:right-[4%]',
    depth: 0.85,
    align: 'right',
  },
  {
    label: 'Mehrfamilienhaus',
    description:
      'Ein klares Signal direkt an der Briefkastenanlage.',
    icon: Building2,
    position:
      'bottom-[2%] left-1/2 -translate-x-1/2',
    depth: 0.55,
    align: 'center',
  },
];

type OrbitItemProps = {
  item: UseCase;
  index: number;
  activeCase: string | null;
  setActiveCase: (label: string | null) => void;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
  reduceMotion: boolean | null;
};

function OrbitItem({
  item,
  index,
  activeCase,
  setActiveCase,
  smoothMouseX,
  smoothMouseY,
  reduceMotion,
}: OrbitItemProps) {
  const {
    label,
    description,
    icon: Icon,
    position,
    depth,
    align = 'left',
  } = item;

  const x = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-18 * depth, 18 * depth],
  );

  const y = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion
      ? [0, 0]
      : [-13 * depth, 13 * depth],
  );

  const isActive = activeCase === label;

  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  const rowClasses = {
    left: 'flex-row',
    center: 'flex-col',
    right: 'flex-row-reverse',
  };

  return (
    <motion.button
      type="button"
      style={{ x, y }}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.82,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.55,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setActiveCase(label)}
      onMouseLeave={() => setActiveCase(null)}
      onFocus={() => setActiveCase(label)}
      onBlur={() => setActiveCase(null)}
      className={`absolute ${position} z-40 flex max-w-[230px] flex-col ${alignmentClasses[align]}`}
    >
      <div
        className={`flex items-center gap-3 ${rowClasses[align]}`}
      >
        <motion.span
          animate={{
            scale: isActive ? 1.08 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition duration-300 ${
            isActive
              ? 'border-[#ffc62a]/65 bg-[#ffc62a]/12 text-[#ffc62a] shadow-[0_0_35px_rgba(255,198,42,0.2)]'
              : 'border-white/14 bg-black/35 text-white/65'
          }`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </motion.span>

        <span
          className={`text-sm font-semibold tracking-[-0.02em] transition duration-300 ${
            isActive
              ? 'text-[#ffc62a]'
              : 'text-white/78'
          }`}
        >
          {label}
        </span>
      </div>

      <p
        className={`mt-3 text-[13px] leading-5 transition duration-300 ${
          isActive
            ? 'text-white/72'
            : 'text-white/38'
        }`}
      >
        {description}
      </p>
    </motion.button>
  );
}

export function UseCasesOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const [activeCase, setActiveCase] =
    useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 85,
    damping: 24,
    mass: 0.75,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 85,
    damping: 24,
    mass: 0.75,
  });

  const rotateY = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-7, 7],
  );

  const rotateX = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [6, -6],
  );

  const deviceX = useTransform(
    smoothMouseX,
    [-1, 1],
    reduceMotion ? [0, 0] : [-16, 16],
  );

  const deviceY = useTransform(
    smoothMouseY,
    [-1, 1],
    reduceMotion ? [0, 0] : [-11, 11],
  );

  const glowX = useTransform(
    smoothMouseX,
    [-1, 1],
    ['42%', '58%'],
  );

  const glowY = useTransform(
    smoothMouseY,
    [-1, 1],
    ['45%', '58%'],
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.2],
    [0, 1, 1],
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduceMotion ? [0, 0] : [28, 0],
  );

  const stageOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.3, 0.48],
    [0, 0.65, 1],
  );

  const deviceScale = useTransform(
    scrollYProgress,
    [0.1, 0.38, 1],
    reduceMotion
      ? [1, 1, 1]
      : [0.78, 1, 0.97],
  );

  const orbitScale = useTransform(
    scrollYProgress,
    [0.18, 0.52],
    reduceMotion
      ? [1, 1]
      : [0.9, 1],
  );

  function handleMouseMove(
    event: MouseEvent<HTMLElement>,
  ) {
    if (reduceMotion) {
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const normalizedX =
      ((event.clientX - bounds.left) /
        bounds.width) *
        2 -
      1;

    const normalizedY =
      ((event.clientY - bounds.top) /
        bounds.height) *
        2 -
      1;

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
      className="relative h-[190vh] bg-[#050504] text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            left: glowX,
            top: glowY,
          }}
          className="pointer-events-none absolute h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a]/10 blur-[190px]"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,198,42,0.055),transparent_35%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_28%,transparent_80%,rgba(0,0,0,0.35))]" />

        <div className="section-shell relative z-10 flex h-full flex-col">
          <motion.header
            style={{
              opacity: headingOpacity,
              y: headingY,
            }}
            className="relative z-40 mx-auto w-full max-w-[1050px] shrink-0 pt-10 text-center sm:pt-12 lg:pt-10"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#ffc62a] sm:text-xs">
              Für jeden Alltag
            </p>

            <div className="mx-auto mt-3 h-px w-14 bg-[#ffc62a]/70" />

            <h2 className="mt-5 text-balance text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.055em] sm:text-[3.8rem] lg:text-[4.65rem] xl:text-[5rem]">
              Für jeden Briefkasten.
              <span className="mt-1 block text-white/38">
                Für alle, die nicht umsonst
                nachsehen wollen.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/43 sm:text-base sm:leading-7">
              Ob Haus, Büro oder Mehrfamilienhaus –
              MailSignal macht neue Post sofort sichtbar.
            </p>
          </motion.header>

          <motion.div
            style={{
              opacity: stageOpacity,
              scale: orbitScale,
            }}
            className="relative min-h-0 flex-1"
          >
            {/* مدار افقی بزرگ */}
            <div className="pointer-events-none absolute left-1/2 top-[52%] hidden h-[61%] w-[91%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ffc62a]/12 lg:block" />

            {/* مدار عمودی */}
            <div className="pointer-events-none absolute left-1/2 top-[52%] hidden h-[83%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#ffc62a]/[0.075] lg:block" />

            {/* مدار داخلی نقطه‌ای */}
            <div className="pointer-events-none absolute left-1/2 top-[52%] hidden h-[44%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-white/[0.055] lg:block" />

            {/* نقاط ظریف روی مدار */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.35, 1, 0.35],
                      scale: [0.8, 1.15, 0.8],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute left-[11%] top-[51%] hidden h-1.5 w-1.5 rounded-full bg-[#ffc62a] shadow-[0_0_14px_rgba(255,198,42,0.9)] lg:block"
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [1, 0.35, 1],
                      scale: [1.15, 0.8, 1.15],
                    }
              }
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute right-[11%] top-[51%] hidden h-1.5 w-1.5 rounded-full bg-[#ffc62a] shadow-[0_0_14px_rgba(255,198,42,0.9)] lg:block"
            />

            {/* دستگاه */}
            <div className="absolute inset-0 z-20 flex items-center justify-center [perspective:1800px]">
              <motion.div
                style={{
                  scale: deviceScale,
                  rotateX,
                  rotateY,
                  x: deviceX,
                  y: deviceY,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.025,
                      }
                }
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mt-5 h-[52vh] w-[52vh] min-h-[370px] min-w-[370px] max-h-[690px] max-w-[690px] [transform-style:preserve-3d] sm:h-[58vh] sm:w-[58vh] lg:mt-7 lg:h-[64vh] lg:w-[64vh]"
              >
                <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#ffc62a]/10 blur-[85px]" />

                <div className="pointer-events-none absolute bottom-[6%] left-[17%] right-[13%] h-[12%] rounded-full bg-black/80 blur-2xl" />

                <Image
                  src="/images/how-it-works-03-device.png"
                  alt="MailSignal Gerät"
                  fill
                  priority
                  sizes="(max-width: 640px) 370px, (max-width: 1024px) 560px, 690px"
                  className="select-none object-contain"
                />

                {/* نور LED روی دستگاه */}
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.45, 1, 0.45],
                          scale: [0.85, 1.25, 0.85],
                        }
                  }
                  transition={{
                    duration: 2.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute left-[49.2%] top-[70.4%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc62a] shadow-[0_0_9px_3px_rgba(255,198,42,1),0_0_30px_12px_rgba(255,198,42,0.45)] sm:h-3 sm:w-3"
                />
              </motion.div>
            </div>

            {/* برچسب‌های دسکتاپ */}
            <div className="absolute inset-0 z-30 hidden lg:block">
              {useCases.map((item, index) => (
                <OrbitItem
                  key={item.label}
                  item={item}
                  index={index}
                  activeCase={activeCase}
                  setActiveCase={setActiveCase}
                  smoothMouseX={smoothMouseX}
                  smoothMouseY={smoothMouseY}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            {/* دکمه‌های موبایل */}
            <div className="absolute inset-x-0 bottom-5 z-40 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
              {useCases.map(
                ({
                  label,
                  description,
                  icon: Icon,
                }) => {
                  const isActive =
                    activeCase === label;

                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() =>
                        setActiveCase(
                          isActive
                            ? null
                            : label,
                        )
                      }
                      className={`relative flex min-h-12 items-center justify-center gap-2 rounded-full border px-3 text-xs font-semibold backdrop-blur-md transition ${
                        isActive
                          ? 'border-[#ffc62a]/50 bg-[#ffc62a]/12 text-[#ffc62a]'
                          : 'border-white/12 bg-black/35 text-white/60'
                      }`}
                    >
                      <Icon className="h-4 w-4" />

                      <span>{label}</span>

                      {isActive && (
                        <span className="absolute bottom-full left-1/2 mb-2 w-[210px] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/90 p-3 text-center text-[11px] font-normal leading-5 text-white/65 shadow-2xl">
                          {description}
                        </span>
                      )}
                    </button>
                  );
                },
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
