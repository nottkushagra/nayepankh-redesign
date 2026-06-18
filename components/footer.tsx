import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Youtube } from "lucide-react";
import { assets, navItems, site } from "@/lib/site-data";

const socialIcons = [
  { label: "Instagram", href: site.socials.instagram, icon: Instagram },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "YouTube", href: site.socials.youtube, icon: Youtube },
  { label: "Facebook", href: site.socials.facebook, icon: Facebook },
  { label: "Twitter", href: site.socials.twitter, icon: Twitter }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12 dark:border-white/10 dark:bg-slate-950 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={assets.logo} alt="NayePankh Foundation logo" width={56} height={56} className="rounded-xl" />
            <div>
              <p className="font-semibold text-brand-ink dark:text-white">{site.name}</p>
              <p className="text-sm text-slate-500">{site.registration}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            We do not ask for much, just help us with what you can: money, skill or your time.
          </p>
          <p className="mt-4 text-sm font-medium text-brand-blue">
            All efforts are made possible only because of your support.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Explore</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-brand-blue dark:text-slate-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Get in touch</p>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand-blue">
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <a href="tel:+918318500748" className="flex items-center gap-2 hover:text-brand-blue">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
          <div className="mt-5 flex gap-2">
            {socialIcons.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:text-slate-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-100 pt-6 text-xs text-slate-500 dark:border-white/10">
        <p>Original redesign for internship demonstration. Brand content and local assets sourced from the official NayePankh website.</p>
      </div>
    </footer>
  );
}
