import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // format 6380772718 to +91 63807 72718
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

export function getWhatsAppUrl(message?: string): string {
  const phone = "916380772718";
  const defaultText = "Hello Sri Lakshmi Construction, I would like to enquire about a construction project.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
}

export function getTelUrl(phone: string = "6380772718"): string {
  return `tel:+91${phone.replace(/\D/g, "")}`;
}
