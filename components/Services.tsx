import React from 'react';
import { FadeIn } from './FadeIn';
import { Box, Palette, Leaf, Layers, Printer, Globe } from 'lucide-react';

const capabilities = [
  { 
    icon: Box, 
    title: "Structural Engineering", 
    desc: "Custom CAD dielines and ergonomic form-factor development designed for protection and unboxing theatre." 
  },
  { 
    icon: Palette, 
    title: "Visual Identity", 
    desc: "Comprehensive brand systems, typography, and art direction that translate seamlessly onto physical packaging." 
  },
  { 
    icon: Leaf, 
    title: "Material Innovation", 
    desc: "Sourcing pioneering plastic-free, biodegradable, and post-consumer substrates without compromising luxury." 
  },
  { 
    icon: Layers, 
    title: "Rapid Prototyping", 
    desc: "In-house physical sampling and white-mockups produced within 48 hours for immediate tactile validation." 
  },
  { 
    icon: Printer, 
    title: "Print Production", 
    desc: " rigorous color management, special finishes (foil, deboss, spot UV), and on-site press checks." 
  },
  { 
    icon: Globe, 
    title: "Global Logistics", 
    desc: "End-to-end supply chain handling, including freight forwarding, warehousing, and distribution management." 
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative bg-paper-cream text-paper-black py-16 md:py-32 px-6 border-b border-gray-200 overflow-hidden">
      
      {/* Giant Watermark Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-20%] w-full text-center pointer-events-none select-none z-0">
         <span className="font-serif font-black text-[12vw] leading-none text-paper-black opacity-[0.03] uppercase tracking-tighter">
            Elevated
         </span>
         <br/>
         <span className="font-serif font-black text-[12vw] leading-none text-transparent opacity-[0.05] uppercase tracking-tighter" style={{ WebkitTextStroke: '2px #1a1a1a' }}>
            Minimalism
         </span>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Philosophy Quote */}
        <FadeIn>
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32">
                <div className="mb-8 flex justify-center">
                <div className="w-px h-16 bg-paper-gold"></div>
                </div>
                
                <p className="font-serif text-2xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-paper-black mb-10">
                "Minimalism is not about taking things away. It’s about adding the <span className="italic text-paper-secondary font-serif">right amount</span> of nothing."
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                <div className="h-px w-8 bg-paper-charcoal"></div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-paper-charcoal">The Paperly Philosophy</span>
                <div className="h-px w-8 bg-paper-charcoal"></div>
                </div>
            </div>
        </FadeIn>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {capabilities.map((cap, i) => (
                <FadeIn key={i} delay={i * 100}>
                    <div className="group p-6 border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-500 rounded-sm h-full">
                        <div className="w-12 h-12 bg-paper-black text-white flex items-center justify-center mb-6 group-hover:bg-paper-gold transition-colors duration-300">
                            <cap.icon size={24} strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-2xl uppercase mb-4 text-paper-black">{cap.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm font-medium">{cap.desc}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};