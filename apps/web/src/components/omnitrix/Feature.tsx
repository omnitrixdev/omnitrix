import { Code, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6 text-green-600" />,
    title: 'Custom Development',
    description: 'Tailored solutions to meet your unique business needs.',
  },
  {
    icon: <Zap className="h-6 w-6 text-green-600" />,
    title: 'Rapid Prototyping',
    description: 'Quick turnaround times to bring your ideas to life faster.',
  },
  {
    icon: <Shield className="h-6 w-6 text-green-600" />,
    title: 'Secure & Scalable',
    description:
      'Built with security and scalability in mind from the ground up.',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-green-800">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="mb-4 inline-block p-3 bg-green-100 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
