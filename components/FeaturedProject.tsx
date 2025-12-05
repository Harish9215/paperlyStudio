import React from 'react';
import { FadeIn } from './FadeIn';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section className="bg-paper-cream border-t border-gray-100 relative">
       {/* Mobile Image (visible only on small screens) */}
       <div className="md:hidden h-[60vh] relative">
          <img 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop" 
            alt="Featured Project Packaging" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" 
          />
          <div className="absolute inset-0 bg-paper-black/10"></div>
       </div>

       <div className="flex flex-col md:flex-row">
          {/* Sticky Left Image (Desktop) */}
          <div className="hidden md:block w-1/2 h-screen sticky top-0">
             <div className="relative w-full h-full bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1500&auto=format&fit=crop" 
                  alt="Featured Project Packaging" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" 
                />
                <div className="absolute inset-0 bg-paper-black/5 pointer-events-none"></div>
             </div>
          </div>

          {/* Scrolling Right Content */}
          <div className="w-full md:w-1/2 bg-paper-cream">
             <div className="p-10 md:p-20 lg:p-32 max-w-2xl mx-auto">
                <FadeIn>
                    <div className="mb-20">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-paper-gold mb-6 block">Featured Engineering</span>
                        <h2 className="font-serif text-5xl md:text-6xl text-paper-black leading-none mb-4">
                            Aeris <br/> Botanicals
                        </h2>
                        {/* Explicit Packaging Type Label */}
                        <span className="inline-block text-sm font-bold tracking-[0.2em] text-paper-secondary uppercase border border-paper-secondary px-3 py-1 mb-6">
                           (SUSPENSION INSERT SYSTEM)
                        </span>
                        <div className="w-12 h-1 bg-paper-black"></div>
                    </div>
                </FadeIn>

                <div className="space-y-32 pb-20">
                    <FadeIn delay={100}>
                       <div className="relative pl-8 border-l border-gray-200">
                           <h3 className="font-serif text-2xl text-paper-black mb-4">The Challenge</h3>
                           <p className="text-gray-600 leading-relaxed text-lg font-light">
                             Eliminating plastic components entirely without losing the structural rigidity required to protect a heavy glass vessel during global shipping. The solution needed to pass ISTA 3A drop tests while maintaining a raw, organic aesthetic.
                           </p>
                       </div>
                    </FadeIn>

                    <FadeIn delay={200}>
                       <div className="relative pl-8 border-l border-gray-200">
                           <h3 className="font-serif text-2xl text-paper-black mb-4">The Material</h3>
                           <p className="text-gray-600 leading-relaxed text-lg font-light">
                             Selected 350gsm FSC-certified Neenah folding board paired with a custom-engineered micro-flute corrugated insert. The insert geometry creates a suspension system, absorbing shock without adding bulk or foam.
                           </p>
                       </div>
                    </FadeIn>

                    <FadeIn delay={300}>
                       <div className="relative pl-8 border-l border-gray-200">
                           <h3 className="font-serif text-2xl text-paper-black mb-4">The Finish</h3>
                           <p className="text-gray-600 leading-relaxed text-lg font-light">
                             A minimalist blind deboss for the logo branding allows the texture of the paper to speak for itself. Finished with a water-based protective coating that provides a soft-touch tactile experience without compromising recyclability.
                           </p>
                       </div>
                    </FadeIn>
                </div>
                
                <FadeIn delay={400}>
                    <Button variant="outline" className="mt-8 group">
                        View Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </FadeIn>
             </div>
          </div>
       </div>
    </section>
  );
};