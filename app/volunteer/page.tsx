import Image from "next/image";
import { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { FAQAccordion } from "@/components/faq";
import { Section } from "@/components/section";
import { assets, volunteerFaqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Volunteer"
};

export default function VolunteerPage() {
  return (
    <>
      <Section
        eyebrow="Volunteer"
        title="Contribute your time, skills and ideas."
        intro="Join a team committed to positive change and empowering communities through education, health, relief and crisis support."
      >
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1fr]">
          <Image src={assets.foodDrive} alt="NayePankh Foundation food relief volunteering" width={1200} height={800} className="rounded-[8px] object-cover shadow-soft" />
          <ApplicationForm type="volunteer" />
        </div>
      </Section>
      <Section className="bg-brand-soft dark:bg-slate-900/60" eyebrow="Benefits" title="Serve with structure.">
        <div className="grid gap-5 md:grid-cols-3">
          {["Field exposure", "Leadership practice", "Purposeful network"].map((benefit) => (
            <div key={benefit} className="rounded-[8px] border border-white bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
              <h3 className="text-xl font-semibold">{benefit}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Work with a student-led NGO model where action, reporting and care move together.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Questions before joining?">
        <FAQAccordion items={volunteerFaqs} />
      </Section>
    </>
  );
}
