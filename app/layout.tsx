import type { Metadata } from "next";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://nayepankh.com"),
  title: {
    default: `${site.name} | Modern NGO Website`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: ["NayePankh Foundation", "NGO", "Volunteer", "Internship", "Donation"],
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/images/hero-community.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans text-brand-ink antialiased dark:text-white">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
