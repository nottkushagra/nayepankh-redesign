import Image from "next/image";
import { ArrowUpRight, CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { assets, impactStats, programs, site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="px-5 pb-16 pt-12 sm:px-8 lg:px-12 lg:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm dark:border-white/10 dark:bg-slate-900">
                <Sparkles className="h-4 w-4" />
                {site.registration}
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-brand-ink dark:text-white sm:text-7xl">
                {site.tagline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                We do not ask for much, just help us with what you can: money, skill or your time. Together, we can uplift underprivileged communities with practical care.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/volunteer">Join the team</ButtonLink>
                <ButtonLink href="/programs" variant="secondary">Explore programs</ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-blue/20 to-brand-green/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[8px] border border-white/70 bg-white shadow-glow dark:border-white/10 dark:bg-slate-900">
                <Image
                  src={assets.hero}
                  alt="NayePankh Foundation community work"
                  width={1440}
                  height={756}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="grid gap-3 p-4 sm:grid-cols-3">
                  {impactStats.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="rounded-[8px] bg-slate-50 p-4 dark:bg-slate-950">
                      <p className="text-2xl font-semibold text-brand-blue">{stat.value}</p>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="Mission"
        title="Think global, act local."
        intro="NayePankh Foundation is a non governmental organisation with a strong desire to help society and make it a better place for all. Service to mankind is the service to god. Let’s revolutionise society together."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {["Money", "Skill", "Time"].map((item) => (
            <Reveal key={item}>
              <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
                <CheckCircle2 className="mb-5 h-7 w-7 text-brand-green" />
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  A clear way to contribute to food, education, dignity and relief work through trusted local action.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-soft dark:bg-slate-900/60" eyebrow="Impact" title="Built by students, backed by community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="rounded-[8px] border border-white bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950">
                <p className="text-4xl font-semibold text-brand-blue">{stat.value}</p>
                <p className="mt-2 font-semibold text-brand-ink dark:text-white">{stat.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured programs" title="Practical help for real needs." intro="Authentic focus areas based on the foundation's public impact work.">
        <div className="grid gap-5 md:grid-cols-3">
          {programs.slice(0, 3).map((program, index) => (
            <Reveal key={program.title} delay={index * 0.05}>
              <article className="group overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={program.image} alt={program.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <program.icon className="mb-4 h-7 w-7 text-brand-green" />
                  <h3 className="text-xl font-semibold">{program.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{program.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-ink text-white" eyebrow="Success story" title="If we all do something, there is no problem we cannot solve.">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1fr]">
          <Image src={assets.volunteerDrive} alt="NayePankh volunteers during a drive" width={1200} height={800} className="rounded-[8px] object-cover shadow-soft" />
          <div>
            <HeartHandshake className="mb-5 h-10 w-10 text-brand-gold" />
            <p className="text-xl leading-9 text-white/85">
              “Join our team and make a difference in the lives of those in need. At NayePankh Foundation, we are committed to creating positive change and empowering communities.”
            </p>
            <p className="mt-6 font-semibold">{site.founder}</p>
            <p className="text-sm text-white/60">{site.founderTitle}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Next steps" title="Volunteer, donate, or ask the AI assistant.">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Volunteer", "Contribute your time and skills through a local or remote role.", "/volunteer"],
            ["Internship", "Build real NGO experience in outreach, education, content or operations.", "/internship"],
            ["Contact", "Confirm donation, chapter and collaboration details directly.", "/contact"]
          ].map(([title, text, href]) => (
            <a key={title} href={href} className="group rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-slate-900">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
