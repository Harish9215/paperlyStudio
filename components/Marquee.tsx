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
    <div className="bg-paper-gold py-4 overflow-hidden border-y-4 border-paper-black relative z-20 transform -rotate-1 origin-left scale-105">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repeat the list twice to ensure seamless looping */}
        <div className="flex space-x-8 px-4">
          {items.map((item, index) => (
            <span key={`1-${index}`} className="text-3xl md:text-4xl font-serif font-bold text-paper-black uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-8 px-4">
          {items.map((item, index) => (
            <span key={`2-${index}`} className="text-3xl md:text-4xl font-serif font-bold text-paper-black uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-8 px-4">
          {items.map((item, index) => (
            <span key={`3-${index}`} className="text-3xl md:text-4xl font-serif font-bold text-paper-black uppercase tracking-wider">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};