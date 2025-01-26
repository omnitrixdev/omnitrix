import { Button } from '@omnnitrix/packages/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-6 text-green-800">
        Welcome to Omnitrix Dev Service
      </h1>
      <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
        Transforming your ideas into powerful web applications with cutting-edge
        technology and expert developers.
      </p>
      <Button size="lg" className="bg-green-600 hover:bg-green-700">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
}
