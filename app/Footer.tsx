import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    
    <footer className="relative bg-gradient-to-br from-amber-900 to-amber-800 overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Repeating "n" pattern */}
        <div className="absolute top-4 right-8 text-6xl font-bold text-amber-200 transform rotate-12">h</div>
        <div className="absolute top-16 right-32 w-4 h-4 bg-amber-200 rounded-full"></div>
        <div className="absolute top-8 right-64 text-6xl font-bold text-amber-200 transform rotate-12">h</div>
        
        <div className="absolute top-32 right-16 text-6xl font-bold text-amber-200 transform rotate-12">h</div>
        <div className="absolute top-44 right-40 w-4 h-4 bg-amber-200 rounded-full"></div>
        <div className="absolute top-36 right-72 text-6xl font-bold text-amber-200 transform rotate-12">h</div>
        
        <div className="absolute bottom-16 right-24 text-6xl font-bold text-amber-200 transform rotate-12">h</div>
        <div className="absolute bottom-28 right-48 w-4 h-4 bg-amber-200 rounded-full"></div>
        <div className="absolute bottom-20 right-80 text-6xl font-bold text-amber-200 transform rotate-12">h</div>
        
        {/* Additional pattern elements for larger screens */}
        <div className="absolute top-20 left-1/3 text-6xl font-bold text-amber-200 transform rotate-12 opacity-50">h</div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-amber-200 rounded-full opacity-50"></div>
        <div className="absolute top-48 left-1/2 text-6xl font-bold text-amber-200 transform rotate-12 opacity-30"></div>
      </div>

      {/* Footer content */}
      <div className="relative z-10 px-6 py-12 lg:px-8">
        <div className="flex flex-col space-y-6">
          {/* Social links */}
          <div className="flex flex-col space-y-3">
            <Link 
              href="#" 
              className="text-white text-lg font-medium hover:text-amber-200 transition-colors duration-200 underline decoration-1 underline-offset-4"
            >
              instagram
            </Link>
            <Link 
              href="#" 
              className="text-white text-lg font-medium hover:text-amber-200 transition-colors duration-200 underline decoration-1 underline-offset-4"
            >
              linkedin
            </Link>
            <Link 
              href="#" 
              className="text-white text-lg font-medium hover:text-amber-200 transition-colors duration-200 underline decoration-1 underline-offset-4"
            >
              mail
            </Link>
          </div>

          {/* Brand section */}
          <div className="mt-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400 mb-4">
              HackClub
            </h1>
            <p className="text-white text-sm md:text-base">
              made with{' '}
              <span className="text-red-400 text-lg">♥</span>
              {' '}by Nitheesh, Web Dev department
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

