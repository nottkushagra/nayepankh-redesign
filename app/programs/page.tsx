import { Metadata } from "next";
import { ProgramFilter } from "@/components/program-filter";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Programs"
};

export default function ProgramsPage() {
  return (
    <Section
      eyebrow="Programs"
      title="Choose the impact area you want to support."
      intro="Filter through NayePankh-aligned workstreams, from food relief and education to health, awareness and volunteer mobilization."
    >
      <ProgramFilter />
    </Section>
  );
}
