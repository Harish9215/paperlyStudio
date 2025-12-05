import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const scrollToConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-paper-cream border-t-2 border-gray-100 relative overflow-hidden">
      
      {/* Massive Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 pointer-events-none select-none w-full text-center">
         <span className="text-[15vw] md:text-[200px] font-serif font-black text-paper-black opacity-[0.03] leading-none tracking-tighter uppercase whitespace-nowrap">
            PAPERLY STUDIO
         </span>
      </div>

      {/* Main Footer CTA */}
      <div className="container mx-auto px-6 py-16 md:py-24 border-b border-gray-200 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
             <h3 className="font-serif text-3xl md:text-5xl font-bold text-paper-black mb-4">
              Ready to redefine your product's <br className="hidden md:block" /> first impression?
            </h3>
            <p className="text-gray-500 font-medium text-lg">
              Elevating brands through the art of unboxing.
            </p>
          </div>
          <Button onClick={scrollToConsultation}>
            Start A Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <a href="#" className="font-serif text-2xl font-black tracking-tight text-paper-black block mb-2">
            Paperly Studio
          </a>
          <p className="text-sm text-gray-500 font-medium">
            Est. 2024 • San Francisco, CA
          </p>
        </div>

        <div className="flex space-x-6 text-paper-black mb-8 md:mb-0">
          <a href="#" className="hover:text-paper-secondary transition-colors transform hover:-translate-y-1 duration-300"><Instagram size={24} /></a>
          <a href="#" className="hover:text-paper-secondary transition-colors transform hover:-translate-y-1 duration-300"><Twitter size={24} /></a>
          <a href="#" className="hover:text-paper-secondary transition-colors transform hover:-translate-y-1 duration-300"><Linkedin size={24} /></a>
        </div>

        <div className="text-xs text-gray-400 font-bold tracking-wide uppercase">
          © {new Date().getFullYear()} Paperly Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};