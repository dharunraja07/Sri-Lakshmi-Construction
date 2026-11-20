import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s\-()]{10,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  projectType: z
    .string()
    .min(1, "Please select a project type"),
  location: z
    .string()
    .min(1, "Please select your location"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters long")
    .max(1500, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
