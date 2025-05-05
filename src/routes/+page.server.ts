import type { Actions } from "@sveltejs/kit";
import { z } from "zod";

const emailSchema = z.string().email();
// Default action for contact form
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const validEmail = emailSchema.safeParse(email);
    if(validEmail.error) return { code: "error", message: validEmail.error.errors}
    // Logic to send an email from resend here
  }
} satisfies Actions