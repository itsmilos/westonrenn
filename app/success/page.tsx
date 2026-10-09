import Link from "next/link";
import { createPolar } from "@polar-sh/sdk/2026-10";
import { ArrowLeft, Check, LockKeyhole } from "lucide-react";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{
    checkout_id?: string;
  }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const { checkout_id } = await searchParams;

  let paid = false;

  const accessToken = process.env.POLAR_ACCESS_TOKEN;
  const productId = process.env.POLAR_PRODUCT_ID;

  if (checkout_id && accessToken && productId) {
    try {
      const polar = createPolar({ accessToken });

      const checkout = await polar.checkouts.get(checkout_id);

      paid =
        checkout.status === "succeeded" && checkout.product_id === productId;
    } catch (error) {
      console.error("Polar checkout verification failed:", error);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909] px-5 py-20 text-[#e8e0d2]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(168,149,119,0.12),transparent_65%)]"
      />

      <div className="relative w-full max-w-xl text-center">
        <Link
          href="/"
          className="mb-20 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.28em] text-[#9c9589] transition hover:text-[#c8b486]"
        >
          <ArrowLeft size={13} />
          Back to the book
        </Link>

        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[#b9a47d]/40 bg-[#b9a47d]/[0.06]">
          {paid ? (
            <Check size={22} strokeWidth={1.3} className="text-[#c8b486]" />
          ) : (
            <LockKeyhole
              size={20}
              strokeWidth={1.3}
              className="text-[#c8b486]"
            />
          )}
        </div>

        <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#b9a47d]">
          The Silence Behind Reality
        </p>

        <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight sm:text-6xl">
          {paid ? (
            <>
              Your next chapter
              <br />
              <span className="italic text-[#b9a47d]">begins here.</span>
            </>
          ) : (
            <>
              One moment
              <br />
              <span className="italic text-[#b9a47d]">more.</span>
            </>
          )}
        </h1>

        <div className="mx-auto my-8 h-px w-12 bg-[#b9a47d]/60" />

        {paid ? (
          <div className="mx-auto max-w-md">
            <p className="text-sm leading-7 text-[#a7a198]">
              Thank you for purchasing The Silence Behind Reality. Your payment
              has been verified.
            </p>

            <div className="mt-9 border border-[#b9a47d]/20 bg-white/[0.02] p-6 text-left">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8b486]">
                Your digital edition
              </p>
              <p className="mt-3 text-sm leading-7 text-[#a7a198]">
                Check your purchase email for your download instructions. Use
                the same email address you entered during checkout.
              </p>
            </div>

            <p className="mt-6 text-xs leading-6 text-[#777168]">
              If you cannot find your download email, check your spam folder or
              contact support.
            </p>
          </div>
        ) : (
          <p className="mx-auto max-w-md text-sm leading-7 text-[#a7a198]">
            We could not verify this checkout yet. If you have just paid, allow
            a moment for the payment status to update. Keep your order
            confirmation and contact support if the problem persists.
          </p>
        )}

        <p className="mt-16 text-[9px] uppercase tracking-[0.28em] text-[#625d54]">
          Lucian Verren · First Edition · 2026
        </p>
      </div>
    </main>
  );
}
