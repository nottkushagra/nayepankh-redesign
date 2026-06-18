"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Use a valid email."),
  interest: z.string().min(2, "Choose an area of interest."),
  message: z.string().min(20, "Share at least 20 characters.")
});

type FormValues = z.infer<typeof schema>;

export function ApplicationForm({ type = "volunteer" }: { type?: "volunteer" | "internship" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  function onSubmit() {
    setSubmitted(true);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-slate-900">
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-brand-ink dark:text-white">
          Full name
          <input {...register("name")} className="min-h-11 rounded-md border border-slate-200 px-3 outline-none focus:border-brand-blue dark:border-white/10 dark:bg-slate-950" />
          {errors.name && <span className="text-xs text-red-600">{errors.name.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-ink dark:text-white">
          Email
          <input type="email" {...register("email")} className="min-h-11 rounded-md border border-slate-200 px-3 outline-none focus:border-brand-blue dark:border-white/10 dark:bg-slate-950" />
          {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-ink dark:text-white">
          Interest
          <select {...register("interest")} className="min-h-11 rounded-md border border-slate-200 px-3 outline-none focus:border-brand-blue dark:border-white/10 dark:bg-slate-950">
            <option value="">Select one</option>
            <option>Food relief</option>
            <option>Education</option>
            <option>Health and dignity</option>
            <option>Content and campaigns</option>
            <option>General support</option>
          </select>
          {errors.interest && <span className="text-xs text-red-600">{errors.interest.message}</span>}
        </label>
        <label className="grid gap-2 text-sm font-medium text-brand-ink dark:text-white">
          Message
          <textarea {...register("message")} rows={5} className="rounded-md border border-slate-200 px-3 py-3 outline-none focus:border-brand-blue dark:border-white/10 dark:bg-slate-950" placeholder={`Tell us why you want to ${type === "contact" ? "connect" : `join as a ${type}`}.`} />
          {errors.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
        </label>
        <button type="submit" disabled={isSubmitting} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60">
          <Send className="h-4 w-4" />
          Submit
        </button>
        {submitted && (
          <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
            Thank you. This demo captured your response locally; connect it to a CRM or email action for production.
          </p>
        )}
      </div>
    </form>
  );
}
