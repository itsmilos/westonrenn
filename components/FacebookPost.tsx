"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { useRef, useState } from "react";

export default function FacebookPost() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const element = scrollRef.current;

    if (!element) return;

    const maxScroll = element.scrollHeight - element.clientHeight;

    if (maxScroll <= 0) {
      setScrollProgress(0);
      return;
    }

    setScrollProgress(element.scrollTop / maxScroll);
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0b0a] py-20 text-[#eeeae2] lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 select-none font-serif text-[170px] uppercase tracking-[0.18em] text-white/[0.018] lg:block xl:text-[220px]">
          WITNESS
        </div>

        <div className="absolute left-[-15%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#a89577]/[0.055] blur-[180px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#8f7d5f]/[0.04] blur-[180px]" />

        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.025]" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.025]" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-[430px] items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a89577]/10 blur-[110px]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute h-[108%] w-[108%] rounded-full border border-[#a89577]/10"
          >
            <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8b89a]/60" />
          </motion.div>

          <div className="pointer-events-none absolute h-[95%] w-[95%] rounded-full border border-[#a89577]/[0.07]" />

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 w-full"
          >
            <div className="absolute inset-[-8px] bg-[#a89577]/10 blur-2xl" />

            <div className="relative overflow-hidden border border-[#a89577]/50 bg-[#11110f] p-[5px] shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
              <div className="relative overflow-hidden border border-[#c8b89a]/30">
                <Image
                  src="/ebook1.webp"
                  alt="Reality Before the Script by Weston Renn"
                  width={800}
                  height={1200}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#c8b89a]/10 via-transparent to-black/20" />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.3)_100%)]" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative overflow-hidden border border-[#a89577]/20 bg-[#151513]/90 shadow-[0_35px_120px_rgba(0,0,0,0.65)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#a89577]/70 to-transparent" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#a89577]/30 bg-[#a89577]/[0.07]">
                  <Eye size={17} strokeWidth={1} className="text-[#c8b89a]" />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c8b89a]">
                    A Reader&apos;s Account
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#625e55]">
                    Reality Before The Script · Recently Read
                  </p>
                </div>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#625e55] sm:block">
                AR / 01
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 max-w-[850px] font-serif text-4xl font-medium leading-[0.98] tracking-[-0.035em] text-[#eeeae2] sm:text-5xl lg:text-[52px]"
            >
              I finished this book with more questions than answers.
            </motion.h2>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#a89577]" />
              <span className="h-px w-2 bg-[#a89577]/40" />
              <span className="h-px w-2 bg-[#a89577]/20" />
            </div>

            <div className="relative mt-8">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="h-[430px] overflow-y-auto pr-7 font-serif text-[15px] leading-[1.95] text-[#d8d1c4] sm:h-[500px] sm:text-base lg:h-[520px] lg:pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <p>
                  I expected{" "}
                  <em className="text-[#c8b89a]">Reality Before The Script</em>{" "}
                  to be another book telling me what to believe.
                </p>

                <p className="mt-8">It wasn&apos;t.</p>

                <p className="mt-8">
                  Instead, Weston Renn starts somewhere much more uncomfortable:
                  with the possibility that many of the things we consider
                  reality were never entirely our own ideas to begin with.
                </p>

                <p className="mt-8">
                  The stories we inherit. The beliefs we rarely question. The
                  psychological patterns behind our decisions. The invisible
                  forces constantly competing for our attention.
                </p>

                <p className="mt-8">
                  At first, these ideas seem almost too simple. Then you start
                  recognizing them in your own life.
                </p>

                <p className="mt-8">
                  You begin noticing why certain things capture your attention.
                  Why certain opinions feel like facts. Why some ambitions feel
                  completely natural even though you can&apos;t remember
                  choosing them.
                </p>

                <p className="mt-8">
                  That&apos;s what makes the book interesting.
                </p>

                <p className="mt-8">
                  Renn doesn&apos;t simply ask whether reality is constructed.
                  He asks how much of the construction we participate in without
                  ever realizing it.
                </p>

                <p className="mt-8">
                  And the further you go, the more the question changes.
                </p>

                <p className="mt-8 text-[#eeeae2]">
                  What if the limits we experience aren&apos;t always limits of
                  reality—but limits of perception?
                </p>

                <p className="mt-8">
                  I don&apos;t know whether I agree with everything in this
                  book. I&apos;m not sure that I&apos;m supposed to.
                </p>

                <p className="mt-8">Maybe that&apos;s the point.</p>

                <p className="mt-8">
                  <em className="text-[#c8b89a]">Reality Before The Script</em>{" "}
                  doesn&apos;t ask you to accept another version of reality.
                </p>

                <p className="mt-8">
                  It asks you to examine the one you already have.
                </p>

                <p className="mt-8 text-[#eeeae2]">
                  And once you start doing that, some things become very
                  difficult to unsee.
                </p>

                <div className="h-8" />
              </div>

              <div className="pointer-events-none absolute right-0 top-0 h-full w-[3px] rounded-full bg-white/[0.05]">
                <div
                  className="absolute left-0 top-0 w-full rounded-full bg-[#a89577] transition-[height,transform] duration-100"
                  style={{
                    height: "35%",
                    transform: `translateY(calc(${scrollProgress} * 185%))`,
                  }}
                />
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-[105px] left-0 h-36 w-full bg-gradient-to-t from-[#151513] via-[#151513]/90 to-transparent" />

            <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/[0.06] pt-6">
              <div>
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#625e55]">
                  Written by
                </p>

                <p className="mt-1 font-serif text-sm text-[#c8b89a]">
                  Weston Renn
                </p>
              </div>

              <div className="text-right">
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#625e55]">
                  Subject
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#eeeae2]/50">
                  Perception · Belief · Reality
                </p>
              </div>
            </div>

            <Link
              href="/products/reality-before-the-script"
              className="group relative z-10 mt-7 flex w-full items-center justify-center gap-3 overflow-hidden border border-[#a89577]/50 bg-[#a89577] py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0b0b0a] transition-all duration-500 hover:bg-[#c8b89a] hover:shadow-[0_15px_50px_rgba(168,149,119,0.18)] lg:py-5 lg:text-[11px]"
            >
              <span>Read Reality Before The Script</span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-[1280px] items-center justify-between px-5 lg:mt-24 lg:px-8">
        <div className="h-px flex-1 bg-white/[0.06]" />

        <div className="px-6">
          <p className="text-[8px] uppercase tracking-[0.5em] text-[#625e55]">
            Weston Renn · Reality Before The Script
          </p>
        </div>

        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>
    </section>
  );
}
