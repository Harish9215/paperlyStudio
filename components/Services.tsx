import React from 'react';
import { FadeIn } from './FadeIn';

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative bg-paper-cream text-paper-black py-32 md:py-48 px-6 min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-gray-200">
      
      {/* Giant Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
         <span className="font-serif font-black text-[12vw] leading-none text-paper-black opacity-[0.03] uppercase tracking-tighter">
            Elevated
         </span>
         <br/>
         <span className="font-serif font-black text-[12vw] leading-none text-transparent opacity-[0.05] uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #1a1a1a' }}>
            Minimalism
         </span>
      </div>

      <FadeIn>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="mb-8 flex justify-center">
               <div className="w-px h-16 bg-paper-gold"></div>
            </div>
            
            <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-paper-black mb-10">
              "Minimalism is not about taking things away. It’s about adding the <span className="italic text-paper-secondary font-serif">right amount</span> of nothing."
            </p>
            
            <div className="flex items-center justify-center space-x-4">
               <div className="h-px w-8 bg-paper-charcoal"></div>
               <span className="text-xs font-bold tracking-[0.3em] uppercase text-paper-charcoal">The Paperly Philosophy</span>
               <div className="h-px w-8 bg-paper-charcoal"></div>
            </div>
        </div>
      </FadeIn>
    </section>
  );
};