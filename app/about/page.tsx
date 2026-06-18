import Image from "next/image";
import { Metadata } from "next";
import { Section } from "@/components/section";
import { assets, site, timeline, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title="One of India's biggest student-led NGOs."
        intro="NayePankh Foundation has operations extended in Kanpur, Ghaziabad and various other cities, with a mission to support underprivileged people through local action."
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold">Our purpose</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              “NayePankh Foundation” is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power.
            </p>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              The redesign keeps that original spirit and gives it a cleaner digital home for volunteers, donors, interns and collaborators.
            </p>
          </div>
          <Image src={assets.campaignMoment} alt="NayePankh Foundation outreach moment" width={900} height={1100} className="rounded-[8px] object-cover shadow-soft" />
        </div>
      </Section>

      <Section className="bg-brand-soft dark:bg-slate-900/60" eyebrow="Mission & vision" title="Relief with dignity, growth through youth leadership.">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Mission", "Mobilize students and citizens to provide practical support: food, clothes, education, sanitary pads and community care."],
            ["Vision", "A society where local action is fast, compassionate and powerful enough to help every person live with dignity."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-[8px] border border-white bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
              <h3 className="text-2xl font-semibold text-brand-blue">{title}</h3>
              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Core values" title="Human, accountable and action-oriented.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <value.icon className="mb-5 h-8 w-8 text-brand-green" />
              <h3 className="font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-ink text-white" eyebrow="Team" title="Led by service, powered by students.">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[8px] border border-white/10 bg-white/10 p-6">
            <p className="text-xl font-semibold">{site.founder}</p>
            <p className="mt-2 text-sm text-white/70">{site.founderTitle}</p>
          </div>
          {["Volunteer coordinators", "Program interns"].map((role) => (
            <div key={role} className="rounded-[8px] border border-white/10 bg-white/10 p-6">
              <p className="text-xl font-semibold">{role}</p>
              <p className="mt-2 text-sm text-white/70">Local and remote contributors supporting field work, campaigns and operations.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Timeline" title="From desire to measurable impact.">
        <div className="grid gap-4">
          {timeline.map((item) => (
            <div key={item.title} className="grid gap-4 rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900 md:grid-cols-[140px_1fr]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">{item.year}</p>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
