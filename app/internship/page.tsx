import { Metadata } from "next";
import { ApplicationForm } from "@/components/application-form";
import { Section } from "@/components/section";
import { internships } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Internship"
};

export default function InternshipPage() {
  return (
    <>
      <Section
        eyebrow="Internship"
        title="Build real NGO experience with modern workflows."
        intro="A focused internship experience for students interested in social impact, community operations, campaigns and education programs."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {internships.map((item) => (
            <article key={item.title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <item.icon className="mb-5 h-8 w-8 text-brand-green" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-brand-soft dark:bg-slate-900/60" eyebrow="Process" title="Simple, accountable application flow.">
        <div className="grid gap-5 md:grid-cols-4">
          {["Apply", "Screen", "Onboard", "Contribute"].map((step, index) => (
            <div key={step} className="rounded-[8px] border border-white bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
              <p className="text-sm font-semibold text-brand-green">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Clear expectations, practical work and documented outcomes.</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Apply" title="Tell the team where you can help.">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="text-2xl font-semibold">Requirements</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>Reliable communication and weekly availability.</li>
              <li>Interest in underprivileged community upliftment.</li>
              <li>Comfort with documentation, coordination or outreach.</li>
              <li>Willingness to learn with a student-led team.</li>
            </ul>
          </div>
          <ApplicationForm type="internship" />
        </div>
      </Section>
    </>
  );
}
