"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Lock, Sparkles } from "lucide-react";

const particles = [
  { left: "8%", top: "20%", delay: 0 },
  { left: "18%", top: "70%", delay: 1.2 },
  { left: "28%", top: "32%", delay: 0.5 },
  { left: "76%", top: "22%", delay: 1.8 },
  { left: "86%", top: "68%", delay: 0.8 },
  { left: "68%", top: "80%", delay: 1.4 },
  { left: "45%", top: "12%", delay: 0.3 },
  { left: "54%", top: "88%", delay: 2 },
];

export default function ProductPage() {
  const [viewers, setViewers] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;

        return Math.min(Math.max(next, 18), 38);
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src="https://gumroad.com/js/gumroad.js"
        strategy="afterInteractive"
      />

      <main className="relative min-h-screen overflow-hidden bg-[#0b0b0a] text-[#eeeae2]">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.06, 0.11, 0.06],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a89577] blur-[180px]"
          />

          <motion.div
            animate={{
              x: [-40, 40, -40],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-15%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#a89577]/[0.035] blur-[140px]"
          />

          <motion.div
            animate={{
              x: [30, -30, 30],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#c8b89a]/[0.025] blur-[150px]"
          />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a89577]/50 to-transparent" />

          {particles.map((particle, index) => (
            <motion.span
              key={index}
              animate={{
                opacity: [0.15, 0.8, 0.15],
                scale: [0.8, 1.4, 0.8],
                y: [0, -18, 0],
              }}
              transition={{
                duration: 4 + index * 0.35,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
              className="absolute h-1 w-1 rounded-full bg-[#c8b89a]"
              style={{
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#a89577]/50" />

            <span className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]">
              The Book · Digital Edition
            </span>

            <span className="h-px w-8 bg-[#a89577]/50" />
          </motion.div>

          <div className="relative flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a89577]/[0.08] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px]"
            >
              <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8b89a] shadow-[0_0_15px_#c8b89a]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a89577]/[0.1] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]"
            >
              <span className="absolute right-[7%] top-[17%] h-1 w-1 rounded-full bg-[#a89577]" />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a89577]/20 sm:h-[400px] sm:w-[400px]"
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotateY: -12,
              }}
              animate={{
                opacity: 1,
                y: [0, -12, 0],
                rotateY: [-3, 3, -3],
              }}
              transition={{
                opacity: {
                  duration: 1,
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
              className="relative z-20 w-[245px] sm:w-[300px] lg:w-[350px]"
            >
              <motion.div
                animate={{
                  scale: [1, 0.92, 1],
                  opacity: [0.45, 0.25, 0.45],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-14 left-1/2 h-16 w-[80%] -translate-x-1/2 rounded-full bg-black blur-2xl"
              />

              <motion.div
                animate={{
                  opacity: [0.2, 0.45, 0.2],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[-25px] rounded-full bg-[#a89577]/20 blur-[45px]"
              />

              <div className="relative overflow-hidden bg-[#11110f] p-[4px] shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                <div className="relative overflow-hidden">
                  <img
                    src="/ebook2.webp"
                    alt="Reality Before The Script by Arthur Renn"
                    className="block h-auto w-full"
                  />

                  <motion.div
                    animate={{
                      x: ["-120%", "150%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.10] to-transparent"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8b89a]/10 via-transparent to-black/20" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-16 max-w-4xl text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#77736b]">
              Weston Renn
            </p>

            <h1 className="mt-4 font-serif text-[48px] leading-[0.92] tracking-[-0.05em] text-[#eeeae2] sm:text-[64px] lg:text-[82px]">
              Reality Before
              <br />
              <span className="text-[#a89577]">The Script</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl font-serif text-[17px] italic leading-[1.7] text-[#918c82] sm:text-[19px]">
              A journey through perception, influence, belief, consciousness,
              and the invisible structures shaping the reality we experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto mt-12 max-w-xl"
          >
            <div className="text-center">
              <span className="text-[8px] uppercase tracking-[0.35em] text-[#68645d]">
                One-time payment
              </span>

              <div className="mt-2 flex items-end justify-center gap-3">
                <span className="font-serif text-[54px] leading-none text-[#eeeae2] sm:text-[62px]">
                  <span className="mr-3 text-[32px] text-[#68645d] line-through sm:text-[38px]">
                    $25
                  </span>
                  $17
                </span>

                <span className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#68645d]">
                  USD
                </span>
              </div>
            </div>

            <div className="mt-7 flex justify-center">
              <div className="flex items-center gap-3 text-[10px] text-[#77736b]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a89577] opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a89577]" />
                </span>

                <span>
                  <strong className="font-medium text-[#c8b89a]">
                    {viewers}
                  </strong>{" "}
                  people are viewing this right now
                </span>
              </div>
            </div>

            <a
              href="https://westonrenn.gumroad.com/l/fctjs"
              className="gumroad-button group relative mt-8 flex w-full items-center justify-center overflow-hidden border border-[#c8b89a]/60 bg-[#a89577] px-7 py-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0b0b0a] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c8b89a] hover:shadow-[0_20px_60px_rgba(168,149,119,0.22)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative flex items-center gap-4">
                Read The Book
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </a>

            <div className="mt-7 grid grid-cols-3 border-y border-white/[0.07]">
              <div className="flex flex-col items-center px-2 py-5 text-center">
                <Lock
                  size={14}
                  strokeWidth={1}
                  className="mb-2 text-[#a89577]"
                />

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#77736b]">
                  Secure
                  <br />
                  Checkout
                </span>
              </div>

              <div className="flex flex-col items-center border-x border-white/[0.07] px-2 py-5 text-center">
                <Sparkles
                  size={14}
                  strokeWidth={1}
                  className="mb-2 text-[#a89577]"
                />

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#77736b]">
                  Instant
                  <br />
                  Access
                </span>
              </div>

              <div className="flex flex-col items-center px-2 py-5 text-center">
                <Check
                  size={14}
                  strokeWidth={1}
                  className="mb-2 text-[#a89577]"
                />

                <span className="text-[8px] uppercase tracking-[0.15em] text-[#77736b]">
                  Lifetime
                  <br />
                  Access
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[8px] uppercase tracking-[0.25em] text-[#57544f]">
              <span>No subscription</span>

              <span className="h-1 w-1 rounded-full bg-[#a89577]/40" />

              <span>Pay once</span>

              <span className="h-1 w-1 rounded-full bg-[#a89577]/40" />

              <span>Read forever</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex flex-col items-center gap-3"
          >
            <span className="text-[7px] uppercase tracking-[0.4em] text-[#57544f]">
              Begin reading
            </span>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={15} strokeWidth={1} className="text-[#a89577]" />
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-[-30px] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[100px] leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[180px] lg:text-[260px]">
          THE SCRIPT
        </div>
      </main>
    </>
  );
}
