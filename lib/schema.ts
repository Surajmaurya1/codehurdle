import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  targetCompany: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
