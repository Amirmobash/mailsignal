
import { CinematicHero } from '@/components/CinematicHero';
import { ProductShowcase } from '@/components/ProductShowcase';
import { VisualStory } from '@/components/VisualStory';
import { KeyBenefits } from '@/components/KeyBenefits';
import { HowItWorks } from '@/components/HowItWorks';
import { UseCasesOrbit } from '@/components/UseCasesOrbit';
import { MinimalStory } from '@/components/MinimalStory';
import { Faq } from '@/components/Faq';
import { SiteFooter } from '@/components/SiteFooter';

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-black">
      <CinematicHero />

      <ProductShowcase />

      <KeyBenefits />

      <HowItWorks />

      <UseCasesOrbit />

      <MinimalStory />

      <Faq />

      <SiteFooter />

    </main>
  );
}
