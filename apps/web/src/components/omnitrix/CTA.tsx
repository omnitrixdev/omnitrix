import { Button } from '@omnnitrix/packages/ui/button';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-green-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Transform Your Ideas?
      </h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Let's work together to bring your vision to life. Our team of expert
        developers is ready to start on your project.
      </p>
      <Button
        size="lg"
        variant="outline"
        className="bg-white text-green-800 hover:bg-green-100"
      >
        Contact Us Now
      </Button>
    </section>
  );
}
