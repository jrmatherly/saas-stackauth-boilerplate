import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { sendEmail, addContactToNewsletter } from "@/lib/mail";

export const emailRouter = createTRPCRouter({
  // Regular email sending
  send: protectedProcedure
    .input(
      z.object({
        to: z.string().email(),
        subject: z.string(),
        html: z.string(),
        text: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      return sendEmail(input);
    }),

  // Newsletter subscription
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        data: z.record(z.unknown()).optional(),
      }),
    )
    .mutation(async ({ input }) => {
      return addContactToNewsletter(input);
    }),
});
