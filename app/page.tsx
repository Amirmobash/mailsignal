import { SiteFooter } from '@/components/SiteFooter';
import { CinematicHero } from '@/components/CinematicHero';
import { ProductShowcase } from '@/components/ProductShowcase';
import { TechnologyStory } from '@/components/TechnologyStory';
import { VisualStory } from '@/components/VisualStory';
import { BusinessShowcase } from '@/components/BusinessShowcase';
import { ContactCTA } from '@/components/ContactCTA';
import { KeyBenefits } from '@/components/KeyBenefits';


export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-black">
      <CinematicHero />

      <ProductShowcase />

      <KeyBenefits />

      <TechnologyStory />

      <VisualStory />

     <BusinessShowcase />

     <ContactCTA />

      <SiteFooter />
    </main>
  );
}
