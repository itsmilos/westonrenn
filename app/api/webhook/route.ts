import { Webhooks } from "@polar-sh/nextjs";

export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!,

  onPayload: async (payload) => {
    if (payload.type === "order.paid") {
      console.log("Payment successful:", payload.data.id);
    }
  },
});