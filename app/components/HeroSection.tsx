'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background with seamless continuation */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        
        {/* Dark vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80"></div>
        
        {/* Animated background elements with scroll effect */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" 
          style={{
            animationDelay: '2s',
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.03}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" 
          style={{
            animationDelay: '4s',
            transform: `translate(${scrollY * 0.06}px, ${-scrollY * 0.04}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* Floating particles with scroll movement */}
        <div 
          className="absolute top-32 left-32 w-2 h-2 bg-white/20 rounded-full animate-ping"
          style={{
            transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-64 right-64 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-ping" 
          style={{
            animationDelay: '1s',
            transform: `translate(${-scrollY * 0.12}px, ${scrollY * 0.08}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-48 left-48 w-1 h-1 bg-purple-300/20 rounded-full animate-ping" 
          style={{
            animationDelay: '3s',
            transform: `translate(${scrollY * 0.09}px, ${-scrollY * 0.06}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* Grid pattern overlay with subtle parallax */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32 text-center">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-3 blur-[120px] rounded-full"></div>
          
          <span className="px-4 py-2 mb-8 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm animate-fade-in">
            Teknologi IBM
          </span>
          
          <h1 className="max-w-5xl text-4xl font-medium tracking-tight text-white md:text-7xl lg:text-8xl leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Membentuk Ulang Masa Depan. Teknologi IBM Hari Ini dan Esok.
          </h1>
          
          <p className="max-w-3xl mt-8 text-lg text-gray-300 md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Blog ini mengupas tuntas bagaimana terobosan dalam AI, Komputasi Kuantum, 
            dan Hybrid Cloud dari IBM akan mendefinisikan dekade teknologi berikutnya.
          </p>
          
          <div className="flex flex-col gap-6 mt-16 sm:flex-row animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <a 
              href="#blog-list" 
              className="px-10 py-4 font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Jelajahi Artikel Terbaru
            </a>
            <a 
              href="#content-1" 
              className="px-10 py-4 font-semibold text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Mengenal Pilar Teknologi IBM
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
