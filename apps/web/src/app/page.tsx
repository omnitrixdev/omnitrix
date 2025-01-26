import Hero from '../components/omnitrix/Hero';
import Features from '../components/omnitrix/Feature';
import Pricing from '../components/omnitrix/Pricing';
import CTA from '../components/omnitrix/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-600">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </div>
  );
}
