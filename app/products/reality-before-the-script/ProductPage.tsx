"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Eye, Lock, Sparkles } from "lucide-react";

const EDITIONS = [
  {
    id: "single",
    name: "Reality Before The Script",
    description: "Digital Edition · Delivered instantly",
    price: 19.99,
    originalPrice: 40,
    checkoutUrl: "https://westonrenn.gumroad.com/l/fctjs",
    image: "/ebook2.webp",
  },
  {
    id: "bundle",
    name: "Complete Collection",
    description: "Book + Hidden Story + Audiobook",
    price: 26.99,
    originalPrice: 50,
    checkoutUrl: "https://westonrenn.gumroad.com/l/mbotl",
    image: "/ebook4.webp",
    badge: "Most Popular",
  },
  {
    id: "audio",
    name: "Reality Before The Script - Audiobook",
    description: "Audio Edition · Listen anytime, anywhere",
    price: 21.99,
    originalPrice: 40,
    checkoutUrl: "AUDIOBOOK_CHECKOUT_URL",
    image: "/audio1.webp",
  },
];

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
  const [selectedEdition, setSelectedEdition] = useState(EDITIONS[0]);

  useEffect(() => {
    EDITIONS.forEach((ed) => {
      const img = new Image();
      img.src = ed.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.min(Math.max(prev + change, 18), 38);
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#0b0b0a] text-[#eeeae2]">
     
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.11, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a89577] blur-[150px] sm:h-[700px] sm:w-[700px] sm:blur-[180px]"
        />

        <motion.div
          animate={{ x: [-40, 40, -40], y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-15%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#a89577]/[0.035] blur-[140px]"
        />

        <motion.div
          animate={{ x: [30, -30, 30], y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            style={{ left: particle.left, top: particle.top }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-28">
       
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center justify-center gap-3 sm:mb-10"
        >
          <span className="h-px w-6 bg-[#a89577]/50 sm:w-8" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-[#a89577] sm:tracking-[0.4em]">
            The Book · Digital Edition
          </span>
          <span className="h-px w-6 bg-[#a89577]/50 sm:w-8" />
        </motion.div>

       
        <div className="relative flex justify-center">
       
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a89577]/[0.08] sm:h-[520px] sm:w-[520px] lg:h-[620px] lg:w-[620px]"
          >
            <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8b89a]" />
          </motion.div>

         
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a89577]/[0.1] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]"
          >
            <span className="absolute right-[7%] top-[17%] h-1 w-1 rounded-full bg-[#a89577]" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a89577]/20 sm:h-[400px] sm:w-[400px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 25, rotateY: -12 }}
            animate={{
              opacity: 1,
              y: [0, -7, 0],
              rotateY: [-3, 3, -3],
            }}
            transition={{
              opacity: { duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1200 }}
            className="relative z-20 flex w-[190px] items-center justify-center sm:w-[300px] lg:w-[350px]"
          >
            
            <div className="relative flex aspect-[4/5] min-h-[240px] w-full items-center justify-center sm:min-h-[350px]">
              <AnimatePresence mode="wait">
                {selectedEdition.id === "bundle" ? (
                  <motion.div
                    key="bundle"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex h-full w-full items-center justify-center"
                  >
                    
                    <motion.img
                      src="/ebook4.webp"
                      alt="Renn Hidden Story"
                      initial={{ x: 0, opacity: 0 }}
                      animate={{ x: -95, rotate: -16, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute z-10 h-[74%] w-[56%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)] sm:h-[80%] sm:w-[60%]"
                    />

                    
                    <motion.img
                      src="/audio1.webp"
                      alt="Audiobook"
                      initial={{ x: 0, opacity: 0 }}
                      animate={{ x: 95, rotate: 16, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="absolute z-10 h-[74%] w-[56%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)] sm:h-[80%] sm:w-[60%]"
                    />

                 
                    <motion.img
                      src="/ebook2.webp"
                      alt="Reality Before The Script"
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative z-20 h-[90%] w-[66%] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] sm:h-[94%] sm:w-[68%]"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={selectedEdition.id}
                    src={selectedEdition.image}
                    alt={selectedEdition.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-8 max-w-4xl text-center sm:mt-16"
        >
          <p className="text-[8px] uppercase tracking-[0.4em] text-[#77736b] sm:text-[9px]">
            Weston Renn
          </p>

          <h1 className="mt-3 font-serif text-[39px] leading-[0.96] tracking-[-0.05em] text-[#eeeae2] sm:mt-4 sm:text-[64px] lg:text-[82px]">
            Reality Before
            <br />
            <span className="text-[#a89577]">The Script</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-serif text-[14px] italic leading-[1.6] text-[#918c82] sm:mt-7 sm:text-[19px] sm:leading-[1.7]">
            A journey through perception, influence, belief, consciousness,
            and the invisible structures shaping the reality we experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-8 max-w-xl sm:mt-12"
        >
          <div className="mb-6 space-y-3 sm:mb-8">
            <div className="mb-4 text-center">
              <span className="text-[8px] uppercase tracking-[0.35em] text-[#a89577]">
                [ Choose Your Edition ]
              </span>
            </div>

            {EDITIONS.map((edition) => {
              const isSelected = selectedEdition.id === edition.id;

              return (
                <div
                  key={edition.id}
                  onClick={() => setSelectedEdition(edition)}
                  className={`group relative cursor-pointer border p-3.5 transition-all duration-300 sm:p-5 ${
                    isSelected
                      ? "border-[#a89577] bg-[#141311] shadow-[0_0_25px_rgba(168,149,119,0.12)]"
                      : "border-white/[0.08] bg-[#11110f] hover:border-white/20 hover:bg-[#131311]"
                  }`}
                >
                  {edition.badge && (
                    <div className="absolute -top-3 right-4 z-20 flex items-center gap-1.5 border border-[#a89577]/60 bg-[#161513] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#c8b89a] sm:right-5 sm:px-3 sm:text-[9px]">
                      <Sparkles size={10} className="text-[#a89577]" />
                      <span>{edition.badge}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2.5 sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <div
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? "border-[#a89577] bg-transparent"
                            : "border-white/30 group-hover:border-white/50"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeRadio"
                            className="h-2 w-2 rounded-full bg-[#c8b89a]"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                            }}
                          />
                        )}
                      </div>

                      <div className="min-w-0">
                        <p
                          className={`font-serif text-[13px] leading-tight transition-colors sm:text-[15px] ${
                            isSelected
                              ? "text-[#eeeae2]"
                              : "text-[#c2bcaf]"
                          }`}
                        >
                          {edition.name}
                        </p>

                        <p className="mt-1 text-[9px] leading-tight text-[#77736b] sm:text-[11px]">
                          {edition.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="font-serif text-[15px] text-[#eeeae2] sm:text-[18px]">
                        ${edition.price.toFixed(2)}
                      </span>

                      <span className="ml-1.5 block text-[9px] text-[#57544f] line-through sm:ml-2 sm:inline sm:text-[11px]">
                        ${edition.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <span className="text-[8px] uppercase tracking-[0.35em] text-[#68645d]">
              Selected Edition Total
            </span>

            <div className="mt-2 flex items-end justify-center gap-2 sm:gap-3">
              <span className="font-serif text-[43px] leading-none text-[#eeeae2] sm:text-[62px]">
                <span className="mr-2 text-[25px] text-[#68645d] line-through sm:mr-3 sm:text-[38px]">
                  ${selectedEdition.originalPrice}
                </span>
                ${selectedEdition.price.toFixed(2)}
              </span>

              <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#68645d] sm:text-[10px]">
                USD
              </span>
            </div>
          </div>

          <div className="mt-5 flex justify-center sm:mt-7">
            <div className="flex items-center gap-3 text-[9px] text-[#77736b] sm:text-[10px]">
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

          <div className="mt-6 flex justify-center sm:mt-8">
            <a
              href={selectedEdition.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center border border-[#c8b89a]/50 bg-[#c8b89a] px-6 py-3.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#0b0b0a] transition-all duration-300 hover:border-[#eeeae2] hover:bg-[#eeeae2] sm:min-h-[56px] sm:w-auto sm:min-w-[280px] sm:px-8 sm:py-4 sm:text-[10px] sm:tracking-[0.25em]"
            >
              Get Instant Access — ${selectedEdition.price.toFixed(2)}
            </a>
          </div>

   
          <div className="mt-5 grid grid-cols-3 border-y border-white/[0.07] sm:mt-7">
            <div className="flex flex-col items-center px-2 py-3.5 text-center sm:py-5">
              <Lock
                size={13}
                strokeWidth={1}
                className="mb-2 text-[#a89577] sm:size-[14px]"
              />
              <span className="text-[7px] uppercase tracking-[0.12em] text-[#77736b] sm:text-[8px] sm:tracking-[0.15em]">
                Secure
                <br />
                Checkout
              </span>
            </div>

            <div className="flex flex-col items-center border-x border-white/[0.07] px-2 py-3.5 text-center sm:py-5">
              <Sparkles
                size={13}
                strokeWidth={1}
                className="mb-2 text-[#a89577] sm:size-[14px]"
              />
              <span className="text-[7px] uppercase tracking-[0.12em] text-[#77736b] sm:text-[8px] sm:tracking-[0.15em]">
                Instant
                <br />
                Access
              </span>
            </div>

            <div className="flex flex-col items-center px-2 py-3.5 text-center sm:py-5">
              <Check
                size={13}
                strokeWidth={1}
                className="mb-2 text-[#a89577] sm:size-[14px]"
              />
              <span className="text-[7px] uppercase tracking-[0.12em] text-[#77736b] sm:text-[8px] sm:tracking-[0.15em]">
                All Tax
                <br />
                Included
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[7px] uppercase tracking-[0.2em] text-[#57544f] sm:mt-6 sm:gap-x-4 sm:text-[8px] sm:tracking-[0.25em]">
            <span>No subscription</span>
            <span className="h-1 w-1 rounded-full bg-[#a89577]/40" />
            <span>Pay once</span>
            <span className="h-1 w-1 rounded-full bg-[#a89577]/40" />
            <span>Read forever</span>
          </div>
        </motion.div>

     
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 sm:mt-28"
        >
          <div className="mb-6 flex items-end justify-between border-b border-white/[0.08] pb-5 sm:mb-8 sm:pb-6">
            <div>
              <p className="text-[8px] uppercase tracking-[0.45em] text-[#a89577]">
                Beyond the cover
              </p>

              <h2 className="mt-3 max-w-3xl font-serif text-[32px] leading-[1.02] tracking-[-0.035em] text-[#eeeae2] sm:mt-4 sm:text-[48px] lg:text-[58px]">
                There is more
                <br />
                <span className="text-[#a89577]">beneath the surface.</span>
              </h2>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <Eye size={15} strokeWidth={1} className="text-[#a89577]" />
              <span className="text-[8px] uppercase tracking-[0.35em] text-[#57544f]">
                Look closer
              </span>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-12">
       
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden border border-[#a89577]/20 bg-[#11110f] lg:col-span-7"
            >
              <img
                src="/ebook3.webp"
                alt="Reality Before The Script by Weston Renn"
                className="block h-full min-h-[350px] w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.025] sm:min-h-[620px]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0a] via-transparent to-black/10" />

              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="border border-white/10 bg-[#0b0b0a]/50 px-3 py-2 text-[7px] uppercase tracking-[0.3em] text-[#c8b89a] backdrop-blur-md">
                  The Book
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]">
                  Weston Renn
                </p>

                <h3 className="mt-3 max-w-xl font-serif text-[25px] leading-[1.1] text-[#eeeae2] sm:text-[36px]">
                  What if the reality you know is only the version you were
                  given?
                </h3>
              </div>
            </motion.div>

      
            <div className="grid gap-3 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-white/[0.07] bg-[#11110f] p-6 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-[#a89577]">
                    The premise
                  </span>
                  <span className="text-[8px] tracking-[0.3em] text-white/15">
                    01
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-[24px] leading-[1.2] text-[#eeeae2] sm:mt-8 sm:text-[31px]">
                  Some truths do not arrive as answers.
                </h3>

                <p className="mt-5 text-[13px] leading-7 text-white/40 sm:mt-6 sm:text-[14px]">
                  They arrive as questions. Questions about perception,
                  influence, consciousness, belief, and the invisible
                  structures shaping the world around us.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-3 border border-[#a89577]/15 bg-[#0f0f0e]"
              >
                <div className="flex min-h-[135px] flex-col justify-between p-4 sm:min-h-[170px] sm:p-7">
                  <span className="text-[8px] tracking-[0.3em] text-white/15">
                    01
                  </span>
                  <div>
                    <p className="font-serif text-[32px] leading-none text-[#c8b89a] sm:text-[38px]">
                      41
                    </p>
                    <p className="mt-2 text-[7px] uppercase leading-4 tracking-[0.15em] text-white/30 sm:mt-3 sm:text-[8px] sm:tracking-[0.18em]">
                      Chapters
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[135px] flex-col justify-between border-x border-white/[0.07] p-4 sm:min-h-[170px] sm:p-7">
                  <span className="text-[8px] tracking-[0.3em] text-white/15">
                    02
                  </span>
                  <div>
                    <p className="font-serif text-[32px] leading-none text-[#c8b89a] sm:text-[38px]">
                      01
                    </p>
                    <p className="mt-2 text-[7px] uppercase leading-4 tracking-[0.15em] text-white/30 sm:mt-3 sm:text-[8px] sm:tracking-[0.18em]">
                      Edition
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[135px] flex-col justify-between p-4 sm:min-h-[170px] sm:p-7">
                  <span className="text-[8px] tracking-[0.3em] text-white/15">
                    03
                  </span>
                  <div>
                    <p className="font-serif text-[32px] leading-none text-[#c8b89a] sm:text-[38px]">
                      ∞
                    </p>
                    <p className="mt-2 text-[7px] uppercase leading-4 tracking-[0.15em] text-white/30 sm:mt-3 sm:text-[8px] sm:tracking-[0.18em]">
                      Questions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

  
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 grid gap-3 md:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Question",
                text: "Begin with the things you have always accepted as obvious.",
              },
              {
                number: "02",
                title: "Explore",
                text: "Follow the ideas, patterns and possibilities hidden beneath the surface.",
              },
              {
                number: "03",
                title: "Decide",
                text: "Come to your own conclusions about what deserves to be believed.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group border border-white/[0.07] bg-[#11110f] p-6 transition-colors duration-500 hover:border-[#a89577]/25 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.3em] text-[#a89577]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1}
                    className="text-white/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>

                <h3 className="mt-8 font-serif text-2xl text-[#eeeae2] sm:mt-12">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35 sm:mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}