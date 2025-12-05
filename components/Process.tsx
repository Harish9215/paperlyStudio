import React from 'react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Strategy & Insight',
    duration: '1–2 Weeks',
    description: 'We decode your brand DNA. Through market analysis and aesthetic auditing, we define a strategic roadmap that aligns form with function.',
    specs: ['Audit', 'Market Analysis', 'Concept Roadmap']
  },
  {
    number: '02',
    phase: 'Engineering',
    title: 'Structure Design',
    duration: '2–3 Weeks',
    description: 'Form follows physics. Our engineers develop custom CAD dielines, focusing on material efficiency, folding mechanics, and ergonomics.',
    specs: ['CAD Dielines', '3D Rendering', 'Fit Testing']
  },
  {
    number: '03',
    phase: 'Prototyping',
    title: 'Material Proofing',
    duration: '2–4 Weeks',
    description: 'Tangible verification. We produce physical samples using production-grade stocks to test weight, texture, and structural integrity.',
    specs: ['White Samples', 'Material Sourcing', 'Finish Proofing']
  },
  {
    number: '04',
    phase: 'Production',
    title: 'Global Logistics',
    duration: 'Ongoing',
    description: 'Global execution. From press checks to final assembly, we manage the entire supply chain ensuring your packaging arrives pristine.',
    specs: ['QC/QA', 'Assembly', 'Global Freight']
  }
];

export const Process: React.FC = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="process" className="py-32 bg-paper-black text-white relative min-h-screen flex flex-col justify-center">
      
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-24 text-center max-w-4xl mx-auto">
               <span className="text-paper-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">The Methodology</span>
               <h2 className="font-serif text-5xl md:text-7xl font-medium text-white mb-8">
                 From Abstract to <span className="text-gray-500 italic font-serif">Concrete.</span>
               </h2>
               <p className="text-gray-300 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                 A refined workflow designed for clarity, precision, and excellence.
               </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div className="group relative h-full flex flex-col border-t border-gray-800 pt-8 hover:border-paper-gold transition-colors duration-500">
                 
                 {/* Header */}
                 <div className="flex justify-between items-baseline mb-6">
                    <span className="text-5xl font-serif font-medium text-paper-gold/80">{step.number}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{step.phase}</span>
                 </div>

                 {/* Title */}
                 <h3 className="font-serif text-3xl text-white mb-6 leading-none group-hover:text-paper-gold transition-colors duration-300">
                    {step.title}
                 </h3>

                 {/* Description - Increased Contrast & Size */}
                 <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 flex-grow">
                    {step.description}
                 </p>

                 {/* Specs - Simplified List */}
                 <div className="space-y-3 border-t border-gray-800 pt-6">
                    {step.specs.map((spec, i) => (
                      <div key={i} className="flex items-center text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                          <span className="w-1.5 h-1.5 bg-paper-gold rounded-full mr-3"></span>
                          {spec}
                      </div>
                    ))}
                 </div>
                 
                 <div className="mt-6 pt-4 text-xs font-mono text-gray-600 uppercase tracking-widest">
                    Est. {step.duration}
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
            <div className="mt-24 flex justify-center">
                <Button 
                    onClick={scrollToConsultation} 
                    variant="primary" 
                    className="bg-white hover:bg-white border-none px-12 py-4 text-lg min-w-[200px]"
                    fillClassName="bg-paper-gold"
                >
                    <span className="relative z-10 text-paper-black font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                        Initiate Project
                    </span>
                </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};