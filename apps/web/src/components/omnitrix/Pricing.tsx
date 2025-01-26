import { Check } from 'lucide-react';
import { Button } from '@omnnitrix/packages/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@omnnitrix/packages/ui/card';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    features: ['Basic web app', '1 revision', '1 month support', 'Basic SEO'],
  },
  {
    name: 'Pro',
    price: '$2,499',
    features: [
      'Advanced web app',
      '3 revisions',
      '3 months support',
      'Advanced SEO',
      'Performance optimization',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Full-scale solution',
      'Unlimited revisions',
      '1 year support',
      'Full SEO suite',
      '24/7 priority support',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-green-800">
        Pricing Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                {plan.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold text-center mb-6">
                {plan.price}
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
