import React, { useState, useEffect } from 'react';
import { PortfolioItem } from '../types';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, Zap, X } from 'lucide-react';

const portfolioItems: (PortfolioItem & { aspect: string })[] = [
  {
    id: '1',
    title: 'Fresh Pack',
    category: 'Gourmet Bags',
    imageUrl: 'https://i.pinimg.com/1200x/28/bc/8d/28bc8d934603b732ed155682f67528c0.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Too good to be just a gourmet bag.',
    solution: 'Food-safe, grease-resistant barriers with high-clarity windows designed for artisanal presentation.',
    aspect: 'aspect-[4/5]',
    galleryImages: [
      'https://i.pinimg.com/736x/cb/4f/ef/cb4fef2e378f38c7ebbb1843ca4a32c2.jpg?q=80&w=800&auto=format&fit=crop', 
      'https://i.pinimg.com/1200x/b0/07/50/b00750469f5653ee596274dc4fae2bb1.jpg?q=80&w=800&auto=format&fit=crop', 
      'https://i.pinimg.com/736x/2b/31/17/2b31179c3f8d98a08e5e4274a4a4049b.jpg?q=80&w=800&auto=format&fit=crop',
      'https://i.pinimg.com/736x/09/cf/bb/09cfbbe09f4561438721c9cc46d11ed3.jpg?q=80&w=800&auto=format&fit=crop',
      'https://i.pinimg.com/1200x/36/97/21/369721efa7a7f6bb67b61dc9b6f87e55.jpg?q=80&w=800&auto=format&fit=crop'

    ]
  },
  {
    id: '2',
    title: 'Smart-Fold',
    category: 'Retail Cartons',
    imageUrl: 'https://i.pinimg.com/736x/da/cd/5d/dacd5de80857e8020a8d2999028d22c5.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Ready in a snap.',
    solution: 'Auto-lock bottom construction providing high-impact retail presence with zero assembly time.',
    aspect: 'aspect-[1/1]',
    galleryImages: [
      'https://images.unsplash.com/photo-1606166325695-cc651cb9652a?q=80&w=800&auto=format&fit=crop', // Flat lay
      'https://images.unsplash.com/photo-1621258663863-705d9c2235c5?q=80&w=800&auto=format&fit=crop', // Shelf view
      'https://images.unsplash.com/photo-1605648916379-bb744da2f7c9?q=80&w=800&auto=format&fit=crop', // Detail
    ]
  },
  {
    id: '3',
    title: 'Keepsake Box',
    category: 'Rigid Luxury',
    imageUrl: 'https://i.pinimg.com/1200x/59/5f/79/595f79b4489c2a8eb9996f32e4388e62.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Branding that lasts.',
    solution: 'Heavyweight rigid board architecture with magnetic closures, engineered to be repurposed.',
    aspect: 'aspect-[3/4]',
    galleryImages: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop', // Open box
      'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=800&auto=format&fit=crop', // Texture zoom
      'https://images.unsplash.com/photo-1523362628745-0c2009805963?q=80&w=800&auto=format&fit=crop', // Gift giving
    ]
  },
  {
    id: '4',
    title: 'The Voyager',
    category: 'Shipping Mailer',
    imageUrl: 'https://i.pinimg.com/736x/68/51/5b/68515b8071bee897b2d4cf9974a67119.jpg?q=80&w=800&auto=format&fit=crop',
    challenge: 'Arrive in style.',
    solution: 'Impact-resistant corrugated fluting with a branded interior reveal for a memorable unboxing experience.',
    aspect: 'aspect-[16/10]',
    galleryImages: [
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop', // Inside print
      'https://images.unsplash.com/photo-1586075010925-12dd51556046?q=80&w=800&auto=format&fit=crop', // Stack of mailers
      'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=800&auto=format&fit=crop', // Transit
    ]
  },
];

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

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
        <div className="columns-1 md:columns-2 gap-12 space-y-24">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative"
            >
              <FadeIn delay={index * 100} className="h-full">
                {/* Image Wrapper - Clickable to open modal */}
                <div 
                  onClick={() => setSelectedItem(item)}
                  className={`relative mb-8 bg-paper-charcoal ${item.aspect} w-full cursor-pointer overflow-hidden border-2 border-transparent group-hover:border-paper-gold transition-all duration-300 shadow-sm group-hover:shadow-2xl`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:brightness-90"
                  />
                  
                  {/* Subtle Dim Overlay instead of full cover */}
                  <div className="absolute inset-0 bg-paper-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Corner Badge */}
                  <div className="absolute top-0 left-0 bg-paper-black text-white px-4 py-2 font-serif font-bold text-xl z-10">
                    0{index + 1}
                  </div>
                  
                  {/* View Gallery Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                     <div className="bg-white/90 text-paper-black px-6 py-3 font-bold uppercase tracking-widest backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Family
                     </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative pointer-events-none">
                  {/* Title Area */}
                  <div className="flex flex-col items-start mb-4">
                    <h4 className="font-serif text-5xl md:text-6xl font-black text-paper-black leading-none group-hover:text-paper-gold transition-colors uppercase">
                      {item.title}
                    </h4>
                    <span className="inline-block mt-2 text-sm md:text-base font-bold tracking-[0.2em] text-paper-secondary uppercase border border-paper-secondary px-2 py-1">
                      ({item.category})
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-2 right-0 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                     <ArrowUpRight className="text-paper-gold w-10 h-10" strokeWidth={3} />
                  </div>
                  
                  <p className="text-gray-600 font-medium leading-relaxed max-w-md text-lg">
                     {item.challenge}
                  </p>
                </div>
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

      {/* Full Screen Gallery Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] bg-paper-cream animate-modal-enter overflow-y-auto">
          {/* Sticky Header */}
          <div className="sticky top-0 left-0 right-0 bg-paper-cream/95 backdrop-blur-md border-b-2 border-paper-black px-6 py-3 flex justify-between items-center z-[101]">
             <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="font-serif text-3xl md:text-5xl font-black text-paper-black uppercase leading-none">
                  {selectedItem.title}
                </h2>
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-paper-secondary uppercase bg-paper-secondary/10 px-2 py-1">
                  The Full Family
                </span>
             </div>
             
             <button 
                onClick={() => setSelectedItem(null)} 
                className="group flex items-center gap-3 hover:text-paper-gold transition-colors opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
             >
                <span className="hidden md:block font-bold tracking-widest uppercase text-sm">Back to Portfolio</span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-paper-black text-white flex items-center justify-center rounded-full group-hover:bg-paper-gold group-hover:rotate-90 transition-all duration-300">
                   <X size={20} strokeWidth={3} />
                </div>
             </button>
          </div>

          {/* Gallery Content */}
          <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                
                {/* Main Hero Image */}
                <div className="md:col-span-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                   <div className="w-full h-[50vh] md:h-[65vh] bg-gray-200 overflow-hidden relative group">
                      <img 
                        src={selectedItem.imageUrl} 
                        alt={selectedItem.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-6 left-6 bg-white px-4 py-2 font-serif font-bold text-xl uppercase tracking-wider">
                         Primary View
                      </div>
                   </div>
                </div>

                {/* Secondary Gallery Grid */}
                {selectedItem.galleryImages.map((img, idx) => (
                   <div 
                      key={idx} 
                      className="aspect-[4/5] md:aspect-square bg-gray-100 overflow-hidden relative group cursor-pointer opacity-0 animate-fade-in-up"
                      style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}
                   >
                      <img 
                        src={img} 
                        alt={`${selectedItem.title} detail ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 right-4 bg-paper-black text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                         {idx + 1}
                      </div>
                   </div>
                ))}
             </div>
             
             {/* Bottom Navigation / Close */}
             <div className="mt-16 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center justify-center px-12 py-4 border-2 border-paper-black font-bold uppercase tracking-widest hover:bg-paper-black hover:text-white transition-colors duration-300"
                >
                   Close Gallery
                </button>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};