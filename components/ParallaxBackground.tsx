import React, { useEffect, useRef } from 'react';

interface ParallaxBackgroundProps {
  imageUrl: string;
  speed?: number; // 0.5 means it moves at half speed of scroll
  className?: string;
  overlayOpacity?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl,
  speed = 0.3,
  className = '',
  overlayOpacity = 0.4
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updateParallax = () => {
      if (!containerRef.current || !imageRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only animate if the section is roughly in view
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate offset based on scroll position relative to viewport
        // As we scroll down (rect.top becomes negative), we move image down (positive y)
        // to create a "slower" background movement effect.
        const yOffset = rect.top * speed * -1;
        
        imageRef.current.style.transform = `translate3d(0, ${yOffset}px, 0) scale(1.15)`;
      }
      
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    // Start loop
    updateParallax();
    
    // Bind generic scroll listener to trigger updates (redundant with RAF but good for state updates if needed)
    // We strictly use RAF for the transform to keep it smooth (60fps)
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <img
        ref={imageRef}
        src={imageUrl}
        alt="Background Texture"
        className="absolute top-0 left-0 w-full h-[140%] object-cover object-center will-change-transform"
        style={{ top: '-20%' }} // Center the excess height to allow travel up and down
      />
      {/* Overlay to ensure text readability */}
      <div 
        className="absolute inset-0 bg-paper-cream transition-opacity duration-300" 
        style={{ opacity: overlayOpacity }}
      ></div>
    </div>
  );
};