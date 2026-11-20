"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/lib/validation";

interface Props {
  initialProjectType?: string;
  initialLocation?: string;
}

export function ContactForm({ initialProjectType, initialLocation }: Props) {
  const [serverState, setServerState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
    referenceId?: string;
  }>({
    status: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: initialProjectType || "",
      location: initialLocation || "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormData) => {
    setServerState({ status: "submitting", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setServerState({
        status: "success",
        message: data.message,
        referenceId: data.referenceId,
      });

      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please call 6380772718.";
      setServerState({
        status: "error",
        message,
      });
    }
  };

  return (
    <div className="rounded-3xl bg-warm-card dark:bg-darkSurface-card border border-warm dark:border-darkSurface-border p-6 sm:p-10 shadow-card">
      <div className="space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-warm-primary dark:text-darkSurface-text">
          Send an Construction Enquiry
        </h2>
        <p className="text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted">
          Fill out this form and our civil engineer will review your requirements and call you.
        </p>
      </div>

      {/* Success Notification Banner */}
      {serverState.status === "success" && (
        <div className="mb-6 p-5 rounded-2xl bg-olive/10 border border-olive/30 text-warm-primary dark:text-darkSurface-text space-y-2">
          <div className="flex items-center gap-2 text-olive dark:text-olive-400 font-bold text-sm sm:text-base">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Enquiry Received Successfully!</span>
          </div>
          <p className="text-xs sm:text-sm text-warm-secondary dark:text-darkSurface-muted leading-relaxed">
            {serverState.message}
          </p>
          {serverState.referenceId && (
            <p className="text-xs font-mono font-bold text-olive dark:text-olive-400 pt-1">
              Reference ID: {serverState.referenceId}
            </p>
          )}
          <button
            type="button"
            onClick={() => setServerState({ status: "idle", message: "" })}
            className="text-xs font-bold text-olive underline pt-2"
          >
            Send another enquiry
          </button>
        </div>
      )}

      {/* Error Notification Banner */}
      {serverState.status === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 flex items-start gap-3 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Notice</p>
            <p>{serverState.message}</p>
          </div>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Ramanathan S"
              {...register("name")}
              aria-invalid={!!errors.name}
              className={`w-full px-4 py-3 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border text-warm-primary dark:text-darkSurface-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                errors.name
                  ? "border-red-500"
                  : "border-warm dark:border-darkSurface-border"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 98765 43210"
              {...register("phone")}
              aria-invalid={!!errors.phone}
              className={`w-full px-4 py-3 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border text-warm-primary dark:text-darkSurface-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                errors.phone
                  ? "border-red-500"
                  : "border-warm dark:border-darkSurface-border"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email & Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email (Optional) */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text"
            >
              Email Address <span className="text-warm-muted font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. raman@example.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              className={`w-full px-4 py-3 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border text-warm-primary dark:text-darkSurface-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                errors.email
                  ? "border-red-500"
                  : "border-warm dark:border-darkSurface-border"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <label
              htmlFor="location"
              className="block text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text"
            >
              Project Location <span className="text-red-500">*</span>
            </label>
            <select
              id="location"
              {...register("location")}
              aria-invalid={!!errors.location}
              className={`w-full px-4 py-3 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border text-warm-primary dark:text-darkSurface-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
                errors.location
                  ? "border-red-500"
                  : "border-warm dark:border-darkSurface-border"
              }`}
            >
              <option value="">Select City / Town</option>
              <option value="Pudukkottai">Pudukkottai</option>
              <option value="Karaikudi">Karaikudi</option>
              <option value="Trichy">Trichy</option>
              <option value="Other Tamil Nadu">Other Nearby Area</option>
            </select>
            {errors.location && (
              <p className="text-xs text-red-500 mt-1">{errors.location.message}</p>
            )}
          </div>
        </div>

        {/* Project Type */}
        <div className="space-y-1.5">
          <label
            htmlFor="projectType"
            className="block text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text"
          >
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            {...register("projectType")}
            aria-invalid={!!errors.projectType}
            className={`w-full px-4 py-3 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border text-warm-primary dark:text-darkSurface-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
              errors.projectType
                ? "border-red-500"
                : "border-warm dark:border-darkSurface-border"
            }`}
          >
            <option value="">Select Construction Service</option>
            <option value="New House Construction">New House Construction (Turnkey)</option>
            <option value="Villas and Duplex Houses">Villas &amp; Duplex Residences</option>
            <option value="Commercial Buildings">Commercial Building Complex</option>
            <option value="Renovation and Interiors">House Renovation &amp; Interiors</option>
            <option value="Architectural Design and 3D Elevation">Architectural Design &amp; 3D Elevation</option>
            <option value="Drawings and Plan Approval">Drawings &amp; Plan Approval (DTCP/Corporation)</option>
            <option value="NRI Home Construction">NRI Remote Home Construction</option>
          </select>
          {errors.projectType && (
            <p className="text-xs text-red-500 mt-1">{errors.projectType.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-warm-primary dark:text-darkSurface-text"
          >
            Message / Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your plot size, preferred number of bedrooms (BHK), target timeline, or any specific requirements..."
            {...register("message")}
            aria-invalid={!!errors.message}
            className={`w-full px-4 py-3 rounded-xl bg-warm-bg dark:bg-darkSurface-cardElevated border text-warm-primary dark:text-darkSurface-text text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive ${
              errors.message
                ? "border-red-500"
                : "border-warm dark:border-darkSurface-border"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-olive hover:bg-olive-hover disabled:bg-olive/60 text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-hover transition-all duration-200 active:scale-95"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Construction Enquiry</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-warm-muted dark:text-darkSurface-muted">
          Your details are protected under our privacy policy. We will never share your contact information with third parties.
        </p>
      </form>
    </div>
  );
}
