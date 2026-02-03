'use client';

import { useEffect, useRef, useState } from 'react';

export const NewsTicker = () => {
  const [tickerPosition, setTickerPosition] = useState(0);
  const tickerContentRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [tickerWidth, setTickerWidth] = useState(0);

  useEffect(() => {
    const updateTickerWidth = () => {
      if (tickerRef.current && tickerContentRef.current) {
        setTickerWidth(tickerContentRef.current.offsetWidth);
      }
    };

    updateTickerWidth();
    window.addEventListener('resize', updateTickerWidth);

    return () => {
      window.removeEventListener('resize', updateTickerWidth);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (tickerRef.current && tickerContentRef.current) {
      const ticker = tickerRef.current;
      const contentWidth = tickerContentRef.current.offsetWidth / 2; // Since we have two identical spans
      let position = 0;
      const speed = 1; // Pixels per frame

      const animate = () => {
        position -= speed;
        
        // When the first instance is completely off-screen to the left
        if (position <= -contentWidth) {
          position = 0; // Reset position to create seamless loop
        }
        
        setTickerPosition(position);
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [tickerWidth]);

  return (
    <div className="bg-gradient-to-r from-amber-50 to-amber-100 py-2 overflow-hidden w-full shadow-sm border-b border-amber-200">
      <div 
        ref={tickerRef}
        className="relative h-10 flex items-center overflow-hidden"
      >
        <div className="absolute left-0 h-full w-8 bg-gradient-to-r from-amber-50 to-transparent z-10"></div>
        <div className="absolute right-0 h-full w-8 bg-gradient-to-l from-amber-100 to-transparent z-10"></div>
        <div
          ref={tickerContentRef}
          className="absolute whitespace-nowrap flex items-center"
          style={{
            left: 0,
            transform: `translateX(${tickerPosition}px)`,
            willChange: 'transform',
            padding: '0 2rem'
          }}
        >
          <span className="text-sm font-medium text-amber-900 pr-12 flex items-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-600 text-white mr-2 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 11.586V7z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="bg-white/60 px-4 py-1 rounded-full border border-amber-200">
              🚚 Free Shipping PAN India & <span className="font-semibold text-amber-700">Price inclusive of all taxes</span>
            </span>
          </span>
          <span className="text-sm font-medium text-amber-900 pr-12 flex items-center">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-600 text-white mr-2 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 11.586V7z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="bg-white/60 px-4 py-1 rounded-full border border-amber-200">
              🚚 Free Shipping PAN India & <span className="font-semibold text-amber-700">Price inclusive of all taxes</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
