import React from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';
import { Zap, Sparkles, Globe, Check } from 'lucide-react';

const models = [
  {
    title: 'The "Market Ready" Pack',
    idealFor: 'Startups & MVP Launches',
    description: 'We adapt your logo to our library of pre-engineered, 100% sustainable structural templates.',
    feature: 'Rapid Turnaround (1 Week)',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'The "Brand Builder" Suite',
    idealFor: 'Scaling D2C Brands',
    description: 'A fully custom unboxing experience designed from scratch to tell your unique story.',
    feature: 'Custom Structural Dielines & 3D Prototyping',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Enterprise Partnership',
    idealFor: 'Corporate & Global Retail',
    description: 'A comprehensive partnership managing global supply chain, material auditing, and mass production.',
    feature: 'Supply Chain Audits & Warehousing Solutions',
    icon: <Globe className="w-6 h-6" />
  }
];

export const Partnerships: React.FC = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partnerships" className="py-24 md:py-32 bg-paper-cream border-t border-gray-100">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Our Engagement Models</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-paper-black">
              Tailored design frameworks for <br className="hidden md:block"/> every stage of business growth.
            </h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {models.map((model, idx) => (
                <FadeIn key={idx} delay={idx * 100} className="h-full">
                    <div className="bg-white p-10 h-full flex flex-col border border-transparent transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50">
                        {/* Crop Marks (Technical Aesthetic) */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-paper-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-paper-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-paper-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-paper-black opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Top Accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-paper-gold group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        
                        <div className="mb-8 w-14 h-14 bg-paper-cream rounded-full flex items-center justify-center text-paper-gold group-hover:bg-paper-black group-hover:text-white transition-colors duration-500">
                             {model.icon}
                        </div>

                        <h4 className="font-serif text-2xl text-paper-black mb-3">{model.title}</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-paper-gold mb-6">{model.idealFor}</p>
                        
                        <p className="text-gray-600 leading-relaxed mb-10 flex-grow font-light">
                            {model.description}
                        </p>

                        <div className="pt-6 border-t border-gray-100 mt-auto">
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Key Feature</span>
                            <div className="flex items-center text-paper-charcoal font-medium">
                                <Check size={16} className="text-paper-gold mr-3 shrink-0" />
                                <span>{model.feature}</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>

        <FadeIn delay={400}>
            <div className="text-center">
                <Button variant="outline" onClick={scrollToConsultation} className="border-paper-charcoal text-paper-charcoal hover:bg-paper-charcoal hover:text-white">
                    Compare Engagement Models
                </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};