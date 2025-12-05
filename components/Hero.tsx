import React from 'react';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { ParallaxBackground } from './ParallaxBackground';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-paper-cream">
      {/* Parallax Background */}
      <ParallaxBackground 
        imageUrl="https://images.unsplash.com/photo-1586075010925-12dd51556046?q=80&w=2500&auto=format&fit=crop"
        speed={0.4}
        overlayOpacity={0.7} 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn delay={0}>
          <div className="inline-block bg-paper-black text-white px-4 py-1 mb-8 transform -rotate-2">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              EST. 2024
            </h2>
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-paper-black leading-[0.95] mb-8 font-black tracking-tighter">
            UNBOXING <br />
            IS <span className="text-paper-gold">ART.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-paper-charcoal mb-12 leading-relaxed font-bold">
            We craft elevated, minimalist packaging experiences for premium brands.
            <span className="block mt-2 text-paper-secondary">First impressions are everything.</span>
          </p>
        </FadeIn>
        
        <FadeIn delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => onNavigate('portfolio')} className="w-full sm:w-auto shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-paper-black">
              View Our Work
            </Button>
            <Button variant="outline" onClick={() => onNavigate('consultation')} className="w-full sm:w-auto hover:bg-paper-secondary hover:text-white hover:border-paper-secondary">
              Start a Project
            </Button>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-100 z-10 text-paper-black">
        <ArrowDown size={32} strokeWidth={3} />
      </div>
    </section>
  );
};