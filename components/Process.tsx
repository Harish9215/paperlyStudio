import React from 'react';
import { FadeIn } from './FadeIn';
import { Scissors } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We begin by immersing ourselves in your brand ethos and market positioning to define a strategic roadmap. This foundational phase ensures every design decision is rooted in your business objectives and appeals directly to your target demographic.'
  },
  {
    number: '02',
    title: 'Conceptual Design & Engineering',
    description: 'Our designers translate strategy into tangible forms, exploring structural innovation alongside visual identity. We rigorously engineer every dieline and fold to ensure structural integrity matches aesthetic elegance.'
  },
  {
    number: '03',
    title: 'Prototyping & Material Finalization',
    description: 'We produce physical prototypes using production-grade materials to verify fit, finish, and unboxing functionality. This hands-on refinement stage guarantees that the final output feels as premium as it looks.'
  },
  {
    number: '04',
    title: 'Production Management & Launch',
    description: 'We oversee the full transition from digital file to physical product, managing trusted vendors globally to ensure seamless execution. Our rigorous quality control checks and logistics oversight guarantee that the premium materials and intricate designs are produced perfectly and delivered on time, ready for your market launch.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Die-cut Dashed Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-200 hidden md:flex flex-col items-center">
         <div className="bg-white p-2 absolute top-0 -translate-x-1/2 z-10 text-gray-300">
            <Scissors size={20} className="rotate-180" />
         </div>
      </div>

      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="mb-20 text-center relative z-10">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">The Journey</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-paper-black">
              From abstraction to reality.
            </h3>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 100}>
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 mb-20 md:mb-32 last:mb-0 relative z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                
                {/* Step Number - Mobile: Top, Desktop: Center aligned */}
                <div className="md:w-1/2 flex md:justify-end text-8xl font-serif text-paper-cream font-bold leading-none select-none absolute md:relative -z-10 -top-8 left-0 opacity-50 md:opacity-100 md:text-gray-100">
                  <div className={`${index % 2 !== 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 pt-6 md:pt-0">
                  <h4 className="font-serif text-2xl md:text-3xl text-paper-black mb-4">
                    {step.title}
                  </h4>
                  <div className={`h-1 w-12 bg-paper-gold mb-6 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}></div>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};