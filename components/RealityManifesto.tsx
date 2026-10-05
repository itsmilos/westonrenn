"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Eye } from "lucide-react";

const paragraphs = [
  `I used to believe reality was something we simply inherited. A world already defined for us. Rules already written. Roles already assigned.`,
  `Then I discovered how much of that reality is constructed.`,
  `My journey began with questions most people never think to ask. Who shapes the stories we believe? Why do certain ideas spread while others disappear? How much of what we call truth is actually interpretation?`,
  `The deeper I went, the more uncomfortable the answers became.`,
  `I encountered people who understood something most of us overlook: controlling a person does not always require force. If you can influence what someone notices, what they fear, what they desire, and what they believe is possible, you can influence the decisions that follow.`,
];

const principles = [
  {
    number: "01",
    word: "Attention",
    description: "became currency.",
  },
  {
    number: "02",
    word: "Belief",
    description: "became leverage.",
  },
  {
    number: "03",
    word: "Perception",
    description: "became power.",
  },
];

const closingParagraphs = [
  `What fascinated me most was that these principles were not confined to one institution or one group. They appeared across psychology, human behavior, symbolism, persuasion, wealth, social structures, ancient philosophies, and the modern systems that compete for our attention every day.`,
  `I began studying the patterns. How narratives are built. How beliefs are reinforced. How crowds can be moved. How individuals can be persuaded without realizing they are being persuaded.`,
  `And eventually, I had to confront a difficult possibility:`,
];

const fadeUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function RealityManifesto() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0a] px-6 py-32 text-[#eeeae2] md:px-10 lg:px-16 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[12%] h-[600px] w-[600px] rounded-full bg-[#a89577]/[0.025] blur-[160px]" />
        <div className="absolute right-[-15%] top-[42%] h-[600px] w-[600px] rounded-full bg-[#c8b89a]/[0.02] blur-[160px]" />
        <div className="absolute bottom-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#a89577]/[0.018] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,11,10,0.7)_90%)]" />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between border-b border-[#d8d1c5]/[0.08] pb-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a89577]/20">
              <Eye size={15} strokeWidth={1} className="text-[#a89577]" />
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#a89577]">
                The Beginning
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/25">
                Before The Script
              </p>
            </div>
          </div>

          <span className="hidden text-[8px] uppercase tracking-[0.4em] text-white/20 sm:block">
            Reality
          </span>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="mt-20 max-w-6xl lg:mt-28"
        >
          <p className="mb-8 text-[9px] uppercase tracking-[0.5em] text-[#a89577]">
            A personal investigation
          </p>

          <h2 className="font-serif text-[43px] leading-[1.02] tracking-[-0.035em] text-[#eeeae2] sm:text-[57px] md:text-[72px] lg:text-[88px]">
            Reality is not always
            <br />
            <span className="text-[#a89577]">what we think it is.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-3 lg:mt-28 lg:grid-cols-12">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="border border-white/[0.07] bg-[#10100f] p-7 sm:p-9 lg:col-span-7 lg:p-12"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.45em] text-[#a89577]">
                The beginning
              </span>

              <span className="text-[8px] tracking-[0.3em] text-white/15">
                01
              </span>
            </div>

            <div className="max-w-2xl space-y-9">
              {paragraphs.slice(0, 3).map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.07,
                  }}
                  className={
                    index === 1
                      ? "font-serif text-[25px] leading-[1.4] text-[#c8b89a] md:text-[31px]"
                      : "text-[15px] leading-8 text-white/45 md:text-[16px]"
                  }
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="group relative overflow-hidden border border-white/[0.07] bg-[#11110f] lg:col-span-5"
          >
            <Image
              src="/ebook3.webp"
              alt="Reality Before The Script by Arthur Renn"
              width={1000}
              height={1400}
              priority
              className="h-full min-h-[650px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-[0.45em] text-[#a89577]">
                  Reality Before The Script
                </p>

                <p className="mt-2 font-serif text-xl text-[#eeeae2]">
                  Arthur Renn
                </p>
              </div>

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                01 / Reality
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="border border-white/[0.07] bg-[#0f0f0e] p-7 sm:p-9 lg:col-span-7 lg:p-12"
          >
            <div className="grid gap-10 md:grid-cols-[0.35fr_1fr]">
              <div>
                <div className="h-px w-16 bg-[#a89577]/40" />

                <p className="mt-5 max-w-[170px] text-[8px] uppercase leading-5 tracking-[0.35em] text-white/20">
                  Every reality begins with a story.
                </p>
              </div>

              <div className="space-y-9">
                {paragraphs.slice(3).map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    className="text-[15px] leading-8 text-white/45 md:text-[16px]"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden border border-[#a89577]/15 bg-[#a89577] p-8 text-[#0b0b0a] lg:col-span-5"
          >
            <span className="absolute right-5 top-[-20px] font-serif text-[150px] leading-none text-black/[0.05]">
              ?
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <p className="text-[8px] font-semibold uppercase tracking-[0.45em]">
                The uncomfortable answer
              </p>

              <p className="mt-20 max-w-[360px] font-serif text-[27px] leading-[1.2] sm:text-[32px]">
                The deeper I went, the more uncomfortable the answers became.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 border-y border-[#d8d1c5]/[0.08] py-16 md:mt-44 md:py-24">
          <div className="mb-12">
            <p className="text-[8px] uppercase tracking-[0.5em] text-[#a89577]">
              The Patterns
            </p>

            <p className="mt-3 font-serif text-2xl text-[#eeeae2] md:text-3xl">
              Three things changed everything.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.word}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                className="group relative min-h-[230px] overflow-hidden border border-white/[0.07] bg-[#10100f] p-7 transition-colors duration-500 hover:bg-[#141310] md:p-9"
              >
                <span className="text-[8px] tracking-[0.3em] text-[#a89577]">
                  {principle.number}
                </span>

                <h3 className="mt-12 font-serif text-[40px] tracking-[-0.02em] text-[#ddd5c7] transition-transform duration-500 group-hover:translate-x-1 md:text-[46px]">
                  {principle.word}
                </h3>

                <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-white/25">
                  {principle.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#a89577]/60 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid gap-3 md:mt-44 lg:grid-cols-12">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="border border-white/[0.07] bg-[#10100f] p-8 lg:col-span-4 lg:p-10"
          >
            <p className="text-[8px] uppercase tracking-[0.5em] text-[#a89577]">
              Going deeper
            </p>

            <div className="mt-8 h-px w-20 bg-[#a89577]/40" />

            <p className="mt-8 max-w-[220px] text-[9px] uppercase leading-6 tracking-[0.3em] text-white/20">
              Studying the patterns behind belief, influence, perception, and
              human behavior.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-9 border border-white/[0.07] bg-[#0f0f0e] p-8 lg:col-span-8 lg:p-12"
          >
            {closingParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className={
                  index === 2
                    ? "pt-4 font-serif text-[28px] leading-[1.3] text-[#c8b89a] md:text-[38px]"
                    : "text-[15px] leading-8 text-white/45 md:text-[16px]"
                }
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="mt-32 border border-white/[0.07] bg-[#10100f] p-8 text-center md:mt-52 md:p-16 lg:p-24"
        >
          <p className="mb-8 text-[8px] uppercase tracking-[0.55em] text-[#a89577]">
            The difficult possibility
          </p>

          <h3 className="font-serif text-[38px] leading-[1.05] tracking-[-0.03em] text-[#eeeae2] sm:text-[48px] md:text-[64px] lg:text-[76px]">
            Perhaps the greatest limitation
            <br className="hidden md:block" />
            in most people&apos;s lives
            <br className="hidden md:block" />
            <span className="text-[#a89577]">
              is not the world around them.
            </span>
          </h3>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 1 }}
          className="mx-auto mt-28 max-w-4xl text-center md:mt-40"
        >
          <div className="mx-auto mb-10 h-px w-16 bg-[#a89577]/50" />

          <p className="font-serif text-[28px] leading-[1.35] text-[#c8b89a] md:text-[38px]">
            It is the version of reality
            <br />
            they have accepted.
          </p>

          <p className="mx-auto mt-10 max-w-2xl text-[14px] leading-7 text-white/35 md:text-[15px]">
            Reality Before the Script is an exploration of what exists beneath
            the stories we are given and what happens when you begin questioning
            the script itself.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9 }}
          className="relative mx-auto mt-32 max-w-5xl border-t border-[#d8d1c5]/[0.08] pt-16 md:mt-44 md:pt-20"
        >
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-[8px] uppercase tracking-[0.5em] text-[#a89577]">
                An invitation
              </p>

              <h4 className="mt-5 font-serif text-3xl text-[#eeeae2] md:text-4xl">
                Look closer.
              </h4>
            </div>

            <div>
              <p className="text-[14px] leading-7 text-white/40">
                This is not a book asking you to accept every claim as truth. It
                is an invitation to examine the mechanisms behind belief,
                recognize the forces competing for your attention, question
                assumptions you have carried for years, and decide for yourself
                what is real.
              </p>
            </div>
          </div>
        </motion.div>

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
          className="relative mt-24 flex justify-center"
        >
          <ArrowDown size={16} strokeWidth={1} className="text-[#a89577]" />
        </motion.div>
      </div>
    </section>
  );
}
