'use client';

import { useEffect } from 'react';

export default function InvertedCursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        '--x',
        (e.clientX + window.scrollX) + 'px'
      );
      document.documentElement.style.setProperty(
        '--y',
        (e.clientY + window.scrollY) + 'px'
      );
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        html, body {
          cursor: none !important;
        }
        
        :root {
          --x: 0px;
          --y: 0px;
        }
      `}</style>
      
      <div
        className="fixed w-10 h-10 bg-white rounded-full pointer-events-none z-50 transition-transform duration-200"
        style={{
          top: 'var(--y)',
          left: 'var(--x)',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
}
