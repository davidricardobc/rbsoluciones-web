import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";
import { Coverage } from "@/components/sections/Coverage";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <Coverage />
      <ProcessSteps />
      <CTABanner />
    </>
  );
}
