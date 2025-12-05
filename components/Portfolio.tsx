import React from 'react';
import { PortfolioItem } from '../types';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, Zap } from 'lucide-react';

const portfolioItems: (PortfolioItem & { aspect: string })[] = [
  {
    id: '1',
    title: 'Fresh Pack',
    category: 'Gourmet Bags',
    // Keeping strict Pinterest link
    imageUrl: 'https://i.pinimg.com/1200x/28/bc/8d/28bc8d934603b732ed155682f67528c0.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Too good to be just a gourmet bag.',
    solution: 'Food-safe, grease-resistant barriers with high-clarity windows designed for artisanal presentation.',
    aspect: 'aspect-[4/5]'
  },
  {
    id: '2',
    title: 'Smart-Fold',
    category: 'Retail Cartons',
    // Keeping strict Pinterest link
    imageUrl: 'https://i.pinimg.com/736x/da/cd/5d/dacd5de80857e8020a8d2999028d22c5.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Ready in a snap.',
    solution: 'Auto-lock bottom construction providing high-impact retail presence with zero assembly time.',
    aspect: 'aspect-[1/1]'
  },
  {
    id: '3',
    title: 'Keepsake Box',
    category: 'Rigid Luxury',
    // Keeping strict Pinterest link
    imageUrl: 'https://i.pinimg.com/1200x/59/5f/79/595f79b4489c2a8eb9996f32e4388e62.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Branding that lasts.',
    solution: 'Heavyweight rigid board architecture with magnetic closures, engineered to be repurposed.',
    aspect: 'aspect-[3/4]'
  },
  {
    id: '4',
    title: 'The Voyager',
    category: 'Shipping Mailer',
    // Keeping strict Pinterest link
    imageUrl: 'https://i.pinimg.com/736x/68/51/5b/68515b8071bee897b2d4cf9974a67119.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Arrive in style.',
    solution: 'Impact-resistant corrugated fluting with a branded interior reveal for a memorable unboxing experience.',
    aspect: 'aspect-[16/10]'
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="relative pt-32 pb-32 bg-paper-cream overflow-hidden">
       {/* Funky Background Element */}
       <div className="absolute top-20 right-0 w-64 h-64 bg-paper-gold/10 rounded-full blur-3xl -z-0 pointer-events-none mix-blend-multiply"></div>
       <div className="absolute bottom-40 left-0 w-96 h-96 bg-paper-secondary/10 rounded-full blur-3xl -z-0 pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b-4 border-paper-black">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                 <Zap size={20} className="text-paper-gold fill-current" />
                 <h2 className="text-sm font-black tracking-[0.2em] uppercase text-paper-secondary">Our Collections</h2>
              </div>
              <h3 className="font-serif text-6xl md:text-8xl font-black text-paper-black tracking-tighter leading-[0.9]">
                Signature <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-paper-gold to-paper-gold/60">Drops.</span>
              </h3>
            </div>
            <p className="mt-8 md:mt-0 text-paper-charcoal max-w-sm text-right hidden md:block font-bold text-lg leading-tight">
              Curated packaging systems designed for <br />scalability, sustainability, and <span className="bg-paper-gold text-white px-2 italic transform -skew-x-12 inline-block">impact</span>.
            </p>
          </div>
        </FadeIn>

        {/* Masonry Layout via CSS Columns */}
        <div className="columns-1 md:columns-2 gap-12 space-y-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative"
            >
              <FadeIn delay={index * 100} className="h-full">
                {/* Image Wrapper */}
                <div className={`relative mb-6 bg-paper-charcoal ${item.aspect} w-full cursor-pointer overflow-hidden border-2 border-transparent group-hover:border-paper-gold transition-all duration-300`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-paper-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white text-paper-black px-6 py-2 font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                      </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-0 left-0 bg-paper-black text-white px-4 py-2 font-serif font-bold text-xl z-10">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-serif text-4xl font-black text-paper-black mb-1 leading-none group-hover:text-paper-gold transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-bold tracking-widest text-paper-secondary uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="hidden md:block">
                     <ArrowUpRight className="text-gray-300 group-hover:text-paper-gold transition-colors w-8 h-8" />
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 font-medium leading-relaxed max-w-md">
                   {item.challenge}
                </p>
              </FadeIn>
            </div>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-32 flex justify-center">
            <a href="#" className="relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-bold text-white transition-all duration-300 bg-paper-black group hover:bg-paper-secondary">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-paper-gold rounded-full group-hover:w-80 group-hover:h-80 opacity-20"></span>
              <span className="relative text-lg tracking-widest uppercase">View All Works</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};