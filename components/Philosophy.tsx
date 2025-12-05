import React from 'react';
import { FadeIn } from './FadeIn';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="pt-32 pb-24 bg-paper-black text-paper-cream text-center min-h-screen flex flex-col justify-center">
       <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <span className="block text-paper-gold text-4xl mb-6">“</span>
            <p className="font-serif text-3xl md:text-4xl leading-relaxed italic mb-8">
              Minimalism is not about taking things away. It’s about adding the right amount of nothing.
            </p>
            <div className="w-12 h-px bg-paper-gold mx-auto mb-10"></div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="text-left space-y-6 text-gray-400 font-light text-lg">
               <p>
                  At Paperly Studio, "Elevated Minimalism" is our guiding principle. It represents the intersection of luxury and restraint. We believe that packaging should whisper, not shout.
               </p>
               <p>
                  Every fold, texture, and typeface is chosen with intention. We strip away the unnecessary to reveal the essential beauty of the product within. In a world of noise, we design silence.
               </p>
            </div>
          </FadeIn>
       </div>
    </section>
  );
};