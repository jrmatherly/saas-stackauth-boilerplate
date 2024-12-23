import { HeroSection } from "@/components/marketing/sections/hero-section";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { Testimonials } from "@/components/marketing/testimonials/testimonials";
import { FeatureSection } from "@/components/marketing/sections/feature-section";


export default function MarketingPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <PricingSection />
    </>
  )
}
