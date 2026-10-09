
import { createPolar } from "@polar-sh/sdk/2026-10";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  try {
    const accessToken = process.env.POLAR_ACCESS_TOKEN;
    const productId = process.env.POLAR_PRODUCT_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!accessToken || !productId || !siteUrl) {
      return NextResponse.json(
        { error: "Missing Polar configuration" },
        { status: 500 }
      );
    }

   
const polar = createPolar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
}); 
    const origin = new URL(siteUrl).origin;

    const checkout = await polar.checkouts.create({
      products: [productId],
      success_url: `${origin}/success?checkout_id={CHECKOUT_ID}`,
      embed_origin: origin,
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error("Polar checkout error:", error);

    return NextResponse.json(
      { error: "Could not create checkout" },
      { status: 500 }
    );
  }
}