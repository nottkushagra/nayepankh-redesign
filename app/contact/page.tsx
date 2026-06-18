import Image from "next/image";
import { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { FAQAccordion } from "@/components/faq";
import { Section } from "@/components/section";
import { assets, contactCards, site, volunteerFaqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Start a conversation with NayePankh."
        intro="Reach out for volunteering, internships, donations, chapter details, collaborations or program questions."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <a key={card.label} href={card.href} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
              <card.icon className="mb-5 h-7 w-7 text-brand-green" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{card.label}</p>
              <p className="mt-3 font-semibold text-brand-ink dark:text-white">{card.value}</p>
            </a>
          ))}
        </div>
      </Section>
      <Section className="bg-brand-soft dark:bg-slate-900/60" title="Send a message.">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <Image src={assets.contactTeam} alt="NayePankh Foundation contact team" width={900} height={460} className="rounded-[8px] object-cover shadow-soft" />
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Official contact details: {site.email}, {site.phone}. Follow social channels for current updates and public campaign posts.
            </p>
          </div>
          <ApplicationForm type="contact" />
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Common contact questions.">
        <FAQAccordion items={volunteerFaqs} />
      </Section>
    </>
  );
}
