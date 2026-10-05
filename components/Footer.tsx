"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MoveUp } from "lucide-react";

const footerLinks = [
  { label: "The Book", href: "/#truth" },
  { label: "Chapters", href: "/#chapters" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About Weston", href: "/#about" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b0b0a] text-[#eeeae2]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#a89577]/[0.035] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
        <div className="grid gap-14 border-b border-white/[0.08] py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:gap-20 lg:py-24">
          <div>
            <div className="mb-6">
              <p className="font-serif text-[30px] tracking-[-0.04em]">
                Weston Renn
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-[#706c65]">
                Author · Reality Before The Script
              </p>
            </div>

            <p className="max-w-sm text-[13px] leading-[1.85] text-[#77736b]">
              A book about perception, influence, belief, consciousness, and the
              invisible structures shaping the reality we experience.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.35em] text-[#a89577]">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-2 text-[12px] text-[#858078] transition-colors hover:text-[#eeeae2]"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1}
                    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-[8px] uppercase tracking-[0.35em] text-[#a89577]">
              The Book
            </p>

            <p className="font-serif text-[21px] leading-[1.1] text-[#d8d1c4]">
              Reality
              <br />
              Before The Script
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#68645d]">
              Weston Renn
            </p>

            <a
              href="#truth"
              className="mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-[#a89577] transition-colors hover:text-[#c8b89a]"
            >
              Get the book
              <ArrowUpRight size={12} strokeWidth={1.2} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <span className="text-[8px] uppercase tracking-[0.28em] text-[#57544f]">
              © {new Date().getFullYear()} Weston Renn
            </span>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="text-[8px] uppercase tracking-[0.28em] text-[#57544f]">
              All rights reserved
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 self-start text-[8px] uppercase tracking-[0.3em] text-[#68645d] transition-colors hover:text-[#a89577] sm:self-auto"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center border border-white/[0.08] transition-colors group-hover:border-[#a89577]/40">
              <MoveUp
                size={12}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </span>
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-30px] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[100px] leading-none tracking-[-0.08em] text-white/[0.018] sm:text-[180px] lg:text-[260px]">
        REALITY
      </div>
    </footer>
  );
}
