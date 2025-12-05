import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = target.tagName === 'BUTTON' || 
                          target.tagName === 'A' || 
                          target.closest('button') || 
                          target.closest('a') ||
                          target.classList.contains('cursor-pointer');
                          
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out flex items-center justify-center ${
        isHovering ? 'scale-[2.5] bg-white' : 'scale-100 bg-white'
      }`}
      style={{ marginTop: '-1rem', marginLeft: '-1rem' }}
    >
        {/* Optional inner dot if needed, but solid circle in difference mode looks coolest */}
    </div>
  );
};