"use client";

import { motion } from "framer-motion";
import { Eye, ArrowDown, ArrowUpRight } from "lucide-react";

export default function TruthBehindScript() {
  return (
    <section
      id="truth"
      className="relative overflow-hidden bg-[#0b0b0a] px-6 py-32 text-[#eeeae2] md:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#a89577]/[0.025] blur-[170px]" />

        <div className="absolute right-[-15%] top-[35%] h-[550px] w-[550px] rounded-full bg-[#c8b89a]/[0.02] blur-[160px]" />

        <div className="absolute bottom-[10%] left-[-15%] h-[450px] w-[450px] rounded-full bg-[#a89577]/[0.015] blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(11,11,10,0.75)_90%)]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-[#d8d1c5]/[0.08] pb-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a89577]/20">
              <Eye size={15} strokeWidth={1} className="text-[#a89577]" />
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#a89577]">
                The Truth Behind The Script
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Reality Before The Script
              </p>
            </div>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.4em] text-white/20 sm:block">
            01 / Reality
          </span>
        </motion.div>

        <div className="grid items-center gap-20 pt-24 lg:grid-cols-[1.1fr_0.8fr] lg:gap-16 lg:pt-32">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="mb-8 hidden lg:block"
            >
              <div className="h-px w-20 bg-[#a89577]/40" />

              <p className="mt-5 max-w-[210px] text-[9px] uppercase leading-5 tracking-[0.3em] text-white/25">
                The beginning of the investigation.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-[9px] uppercase tracking-[0.5em] text-[#a89577]"
            >
              The truth behind the script
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-[47px] leading-[0.98] tracking-[-0.04em] text-[#eeeae2] sm:text-[60px] md:text-[76px] lg:text-[82px]"
            >
              What If The Reality
              <br />
              <span className="text-white/35">You Know Was Never</span>
              <br />
              <span className="text-[#a89577]">The Whole Story?</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 90, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              className="mt-12 h-px bg-[#a89577]/50"
            />

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-[15px] leading-8 text-white/45 md:text-[17px] md:leading-9">
                Weston Renn spent years questioning the systems, beliefs, and
                invisible forces that shape the way we see the world.
              </p>

              <p className="mt-7 text-[15px] leading-8 text-white/45 md:text-[17px] md:leading-9">
                Now, he reveals what he discovered—and challenges you to look
                beyond the reality you were taught to accept.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="mt-12"
            >
              <div className="relative inline-flex">
                <motion.span
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.25, 0, 0.25],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-[-10px] border border-[#a89577]/40"
                />

                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.18, 0, 0.18],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute inset-[-18px] border border-[#a89577]/20"
                />

                <a
                  href="/products/reality-before-the-script"
                  className="group relative z-10 flex items-center gap-5 border border-[#c8b89a]/60 bg-[#a89577] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#0b0b0a] transition-all duration-500 hover:-translate-y-1 hover:bg-[#c8b89a] hover:shadow-[0_18px_50px_rgba(168,149,119,0.18)]"
                >
                  Read The Book
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="h-px w-10 bg-white/10" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-white/20">
                Arthur Renn
              </span>

              <span className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]/60">
                Chapter 01
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-[500px] items-center justify-center lg:min-h-[620px]"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.18, 0.3, 0.18],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[300px] w-[300px] rounded-full bg-[#a89577]/20 blur-[100px] sm:h-[400px] sm:w-[400px]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-[#a89577]/10 sm:h-[500px] sm:w-[500px]"
            >
              <span className="absolute left-1/2 top-[-2px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#a89577] shadow-[0_0_12px_#a89577]" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#a89577]/10 sm:h-[410px] sm:w-[410px]"
            >
              <span className="absolute right-[5%] top-[25%] h-1 w-1 rounded-full bg-[#c8b89a]" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateY: [-3, 3, -3],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
              }}
              className="relative z-10 w-[220px] sm:w-[270px] lg:w-[300px]"
            >
              <motion.div
                animate={{
                  scale: [1, 0.9, 1],
                  opacity: [0.5, 0.25, 0.5],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 left-1/2 h-14 w-[75%] -translate-x-1/2 rounded-full bg-black blur-2xl"
              />

              <div className="absolute inset-[-15px] rounded-full bg-[#a89577]/10 blur-[35px]" />

              <div className="relative overflow-hidden bg-[#11110f] p-1 shadow-[0_35px_90px_rgba(0,0,0,0.75)]">
                <div className="relative overflow-hidden">
                  <img
                    src="/ebook2.webp"
                    alt="Reality Before The Script by Weston Renn"
                    className="block h-auto w-full"
                  />

                  <motion.div
                    animate={{
                      x: ["-130%", "150%"],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-[30%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8b89a]/10 via-transparent to-black/20" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[8%] right-[3%] z-20 hidden border border-white/[0.08] bg-[#0b0b0a]/80 px-4 py-3 backdrop-blur-md sm:block"
            >
              <p className="text-[7px] uppercase tracking-[0.3em] text-[#77736b]">
                Digital Edition
              </p>

              <p className="mt-1 font-serif text-sm text-[#c8b89a]">$17 USD</p>
            </motion.div>

            <div className="absolute left-[4%] top-[10%] font-serif text-[90px] leading-none text-white/[0.025] sm:text-[130px]">
              01
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 flex justify-center md:mt-28"
        >
          <motion.div
            animate={{
              y: [0, 6, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} strokeWidth={1} className="text-[#a89577]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
