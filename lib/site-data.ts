import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export const site = {
  name: "NayePankh Foundation",
  tagline: "It's that easy to bring a smile on their faces",
  description:
    "NayePankh Foundation is a UP Government registered NGO and one of the biggest student organizations in India, working to uplift underprivileged communities through food, education, clothing, sanitary pad distribution and youth-led service.",
  email: "contact@nayepankh.com",
  phone: "+91 8318500748",
  locations: ["Kanpur", "Ghaziabad", "Other Indian cities"],
  registration: "UP Government, 80G & 12A Registered NGO",
  founder: "Prashant Shukla",
  founderTitle: "Founder & President, NayePankh Foundation",
  socials: {
    instagram: "http://www.instagram.com/nayepankhfoundation",
    linkedin: "https://www.linkedin.com/company/nayepankh",
    youtube: "https://www.youtube.com/@nayepankhfoundation",
    facebook: "http://www.facebook.com/nayepankhfoundation",
    twitter: "http://www.twitter.com/nayepankh"
  }
};

// Official assets downloaded from https://nayepankh.com/ and its public Zyro asset CDN.
// They are stored locally to avoid hotlinking and to keep this redesign self-contained.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/nayepankh-redesign" : "";

export const assets = {
  logo: `${basePath}/logos/nayepankh-logo.png`,
  hero: `${basePath}/images/food-drive.jpg`,
  foodDrive: `${basePath}/images/food-drive.jpg`,
  volunteerDrive: `${basePath}/images/volunteer-drive.jpg`,
  fieldWork: `${basePath}/images/field-work.jpg`,
  campaignMoment: `${basePath}/images/campaign-moment.jpg`,
  recognition: `${basePath}/images/recognition-banner.jpg`,
  contactTeam: `${basePath}/images/contact-team.jpg`
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/internship", label: "Internship" },
  { href: "/contact", label: "Contact" }
];

export const impactStats = [
  { value: "2L+", label: "people supported", detail: "Official site states 2 lakh+ underprivileged people helped." },
  { value: "80G", label: "tax exempt", detail: "Eligible donations are tax exempted under 80G." },
  { value: "12A", label: "registered", detail: "Registered nonprofit compliance foundation." },
  { value: "3+", label: "active cities", detail: "Kanpur, Ghaziabad and growing chapters." }
];

export const programs = [
  {
    title: "Food Relief",
    category: "Relief",
    image: assets.foodDrive,
    icon: HeartHandshake,
    description:
      "Community food drives and basic supply distribution for families facing urgent need.",
    details:
      "NayePankh's public mission highlights free food support as a major part of its underprivileged outreach."
  },
  {
    title: "Education Support",
    category: "Education",
    image: assets.fieldWork,
    icon: GraduationCap,
    description:
      "Student-led mentoring, learning support and awareness activities for children and youth.",
    details:
      "Designed around youth participation so volunteers can contribute time, skills and ideas."
  },
  {
    title: "Clothing Drives",
    category: "Relief",
    image: assets.campaignMoment,
    icon: Home,
    description:
      "Collection and distribution campaigns that connect donors with communities who need essentials.",
    details:
      "Authentic to the foundation's stated work providing clothes to underprivileged people."
  },
  {
    title: "Health & Dignity",
    category: "Health",
    image: assets.volunteerDrive,
    icon: ShieldCheck,
    description:
      "Sanitary pad distribution and awareness support for safe, dignified community care.",
    details:
      "The official site describes sanitary pad distribution as part of the foundation's impact."
  },
  {
    title: "Youth Volunteering",
    category: "Volunteer",
    image: assets.recognition,
    icon: UsersRound,
    description:
      "Hands-on opportunities for students and professionals to serve through local chapters.",
    details:
      "Built for people who can help with money, skills or time."
  },
  {
    title: "Awareness Campaigns",
    category: "Awareness",
    image: assets.contactTeam,
    icon: Megaphone,
    description:
      "Public-interest drives, campus outreach and social campaigns that mobilize everyday citizens.",
    details:
      "A modern campaign layer for the foundation's 'Think global, Act local' philosophy."
  }
];

export const values = [
  { icon: HeartHandshake, title: "Service", text: "Service to mankind is the service to god." },
  { icon: UsersRound, title: "Youth leadership", text: "A student-led culture where energy becomes practical help." },
  { icon: MapPin, title: "Local action", text: "Think global, act local across Kanpur, Ghaziabad and beyond." },
  { icon: Sparkles, title: "Dignity", text: "Relief work delivered with respect, care and consistency." }
];

export const timeline = [
  { year: "Founded", title: "A youth-led mission begins", text: "NayePankh starts with a strong desire to make society better for all." },
  { year: "Registered", title: "UP Govt., 80G & 12A recognition", text: "The foundation formalizes its operating and donation compliance." },
  { year: "Expanded", title: "Multi-city operations", text: "Operations grow across Kanpur, Ghaziabad and other cities." },
  { year: "Now", title: "2 lakh+ lives touched", text: "Public impact expands through free food, education, clothes and sanitary pads." }
];

export const volunteerFaqs = [
  { q: "Who can volunteer?", a: "Students, professionals and community members who can contribute time, skills or ideas." },
  { q: "Do I need NGO experience?", a: "No. Local teams can help new volunteers begin with outreach, logistics, creative work or field drives." },
  { q: "Where are opportunities available?", a: "The official site mentions operations in Kanpur, Ghaziabad and several other cities." },
  { q: "Can donations be tax exempt?", a: "The official site notes that donations are tax exempted under Section 80G of the Indian Income Tax Act." }
];

export const internships = [
  {
    title: "Social Impact Intern",
    icon: BriefcaseBusiness,
    skills: ["Field coordination", "Community outreach", "Reporting"],
    description: "Support programs, document outcomes and coordinate local service drives."
  },
  {
    title: "Content & Campaign Intern",
    icon: Megaphone,
    skills: ["Social media", "Storytelling", "Design briefs"],
    description: "Turn impact work into clear campaigns, updates and volunteer calls."
  },
  {
    title: "Education Program Intern",
    icon: BookOpen,
    skills: ["Teaching support", "Mentoring", "Curriculum planning"],
    description: "Help build learning sessions and education-focused volunteer activities."
  }
];

export const contactCards = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replaceAll(" ", "")}` },
  { icon: MapPin, label: "Presence", value: "Kanpur, Ghaziabad and more", href: "/contact" }
];
