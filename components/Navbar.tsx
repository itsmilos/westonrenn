import Link from "next/link";

export default function Navbar() {
  return (
    <div className="relative z-30 px-6 md:px-10 lg:px-150 bg-[#0b0b0a]">
      <header className="flex h-24 items-center justify-between">
        <Link href="/" className="group">
          <div className="font-serif text-xl tracking-[0.25em] text-[#eeeae2] transition group-hover:text-white">
            Weston Renn
          </div>

          <div className="mt-1 text-[9px] tracking-[0.42em] text-[#a89577]">
            READ BEFORE THE SCRIPT
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/#about"
            className="text-[10px] uppercase tracking-[0.25em] text-white/35 transition hover:text-[#eeeae2]"
          >
            About
          </Link>

          <Link
            href="/#reviews"
            className="text-[10px] uppercase tracking-[0.25em] text-white/35 transition hover:text-[#eeeae2]"
          >
            Reviews
          </Link>
        </nav>

        <Link
          href="/products/reality-before-the-script"
          className="hidden rounded-full border border-[#c8b89a]/15 bg-white/[0.035] px-7 py-3 text-[10px] uppercase tracking-[0.22em] text-[#eeeae2] backdrop-blur-md transition duration-300 hover:border-[#c8b89a]/40 hover:bg-[#c8b89a]/[0.07] md:block"
        >
          Get The Book
        </Link>

        <Link
          href="/products/reality-before-the-script"
          className="rounded-full border border-[#c8b89a]/15 bg-white/[0.035] px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[#eeeae2] md:hidden"
        >
          Buy
        </Link>
      </header>
    </div>
  );
}
