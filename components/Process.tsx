import React from 'react';
import { FadeIn } from './FadeIn';
import { GitCommit, PenTool, Box, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    icon: <GitCommit size={32} />,
    description: 'We decode your brand DNA. Through market analysis and aesthetic auditing, we define a strategic roadmap that aligns structural form with business function.'
  },
  {
    number: '02',
    title: 'Structural Engineering',
    icon: <PenTool size={32} />,
    description: 'Form follows physics. Our engineers develop custom CAD dielines, focusing on material efficiency, folding mechanics, and unboxing ergonomics.'
  },
  {
    number: '03',
    title: 'Material Prototyping',
    icon: <Box size={32} />,
    description: 'Tangible verification. We produce physical samples using production-grade stocks to test weight, texture, and structural integrity before mass manufacturing.'
  },
  {
    number: '04',
    title: 'Production & Logistics',
    icon: <Truck size={32} />,
    description: 'Global execution. From press checks to final assembly, we manage the entire supply chain, ensuring your packaging arrives pristine and on schedule.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-paper-black text-white relative overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-paper-gold rounded-full animate-pulse"></div>
                  <span className="text-paper-gold font-mono text-xs uppercase tracking-widest">Workflow Sequence</span>
               </div>
               <h2 className="font-serif text-5xl md:text-7xl font-black uppercase leading-none">
                 The Production <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Protocol.</span>
               </h2>
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light border-l-2 border-paper-gold pl-6">
               A rigorous, four-stage methodology designed to mitigate risk and maximize impact.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 border-2 border-gray-800">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 100} className="h-full">
              <div className="relative h-full bg-paper-black p-10 md:p-14 group hover:bg-gray-900 transition-colors duration-500 overflow-hidden">
                {/* Hover Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-paper-gold/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="flex justify-between items-start mb-10">
                   <div className="text-paper-gold opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      {step.icon}
                   </div>
                   <span className="font-mono text-4xl md:text-5xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors">
                      {step.number}
                   </span>
                </div>

                <h3 className="font-serif text-3xl text-white mb-6 uppercase tracking-wide group-hover:text-paper-gold transition-colors">
                   {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light">
                   {step.description}
                </p>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-paper-black via-paper-black to-paper-black group-hover:via-paper-gold transition-all duration-700"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};