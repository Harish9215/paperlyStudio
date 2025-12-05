import React from 'react';
import { ShoppingBag, Package, Gift, Truck, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { FadeIn } from './FadeIn';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Fresh Pack',
    description: 'Gourmet Bags — Too good to be just a bag.',
    features: [
      'Food-safe & grease-resistant barriers.',
      'Custom windows to showcase freshness.',
      'Heat-sealable for prolonged shelf life.'
    ],
    icon: <ShoppingBag className="w-8 h-8" />,
  },
  {
    id: '2',
    title: 'Smart-Fold',
    description: 'Retail Cartons — Ready in a snap.',
    features: [
      'Auto-lock bottoms for rapid assembly.',
      'High-impact visual canvas for retail.',
      'Folds completely flat for storage efficiency.'
    ],
    icon: <Package className="w-8 h-8" />,
  },
  {
    id: '3',
    title: 'Keepsake Box',
    description: 'Rigid Luxury — Branding that lasts.',
    features: [
      'Heavyweight rigid board construction.',
      'Magnetic closures & ribbon pulls.',
      'Heirloom quality meant for reuse.'
    ],
    icon: <Gift className="w-8 h-8" />,
  },
  {
    id: '4',
    title: 'The Voyager',
    description: 'Shipping Mailers — Arrive in style.',
    features: [
      'Impact-resistant corrugated fluting.',
      'Branded interior reveal experience.',
      'Tamper-evident self-sealing strips.'
    ],
    icon: <Truck className="w-8 h-8" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-paper-gold/20 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black tracking-[0.2em] uppercase text-paper-gold mb-4">Our Product Lines</h2>
              <h3 className="font-serif text-5xl md:text-6xl font-black text-paper-black">
                Engineered for <br /> <span className="text-paper-secondary">the moment.</span>
              </h3>
            </div>
            <p className="mt-6 md:mt-0 text-paper-charcoal max-w-md font-medium text-lg">
              From fresh bakery treats to luxury keepsakes, our specialized product lines ensure your brand is delivered perfectly, every time.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 150} className="h-full">
              <div className="group p-8 border-2 border-gray-100 hover:border-paper-black transition-all duration-300 bg-paper-cream hover:bg-white hover:shadow-[8px_8px_0px_0px_rgba(255,107,53,0.3)] h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-paper-gold/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-paper-gold/10 transition-colors"></div>
                
                <div className="mb-8 text-paper-secondary group-hover:text-paper-gold transition-colors duration-300 transform group-hover:scale-110 origin-left">
                  {service.icon}
                </div>
                <h4 className="font-serif text-2xl font-black mb-4 text-paper-black uppercase tracking-tight">
                  {service.title}
                </h4>
                <p className="text-paper-secondary text-sm font-bold italic mb-6 border-b-2 border-gray-200 pb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <Check size={16} className="mt-0.5 mr-2 text-paper-gold shrink-0 font-bold" />
                      <span className="leading-tight font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};