import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    "STRUCTURAL ENGINEERING",
    "•",
    "SUSTAINABLE MATERIALS",
    "•",
    "UNBOXING EXPERIENCE",
    "•",
    "BRAND STORYTELLING",
    "•",
    "RAPID PROTOTYPING",
    "•",
    "GLOBAL LOGISTICS",
    "•"
  ];

  return (
    <div className="bg-paper-gold py-6 overflow-hidden border-y-4 border-paper-black relative z-20 transform -rotate-1 origin-left scale-105 shadow-xl">
      
      {/* Row 1: Left Scroll, Solid Text */}
      <div className="flex whitespace-nowrap animate-marquee mb-2">
        <div className="flex space-x-12 px-6">
          {items.map((item, index) => (
            <span key={`1-${index}`} className="text-4xl md:text-5xl font-serif font-black text-paper-black uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-12 px-6">
          {items.map((item, index) => (
            <span key={`2-${index}`} className="text-4xl md:text-5xl font-serif font-black text-paper-black uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2: Right Scroll, Outline Text */}
      <div className="flex whitespace-nowrap animate-marquee-reverse">
        <div className="flex space-x-12 px-6">
          {items.map((item, index) => (
            <span 
              key={`rev-1-${index}`} 
              className="text-4xl md:text-5xl font-serif font-black text-transparent uppercase tracking-wider"
              style={{ WebkitTextStroke: '1px #1a1a1a' }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-12 px-6">
          {items.map((item, index) => (
            <span 
              key={`rev-2-${index}`} 
              className="text-4xl md:text-5xl font-serif font-black text-transparent uppercase tracking-wider"
              style={{ WebkitTextStroke: '1px #1a1a1a' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};