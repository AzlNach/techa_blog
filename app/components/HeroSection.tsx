'use client';

const HeroSection = () => {
  return (
    <>
      {/* Hero Content - Background moved to main layout */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-30 py-32 text-center">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-3 blur-[120px] rounded-full"></div>
          
          <span className="px-4 py-2 mb-8 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm animate-fade-in">
            Platform AI Enterprise
          </span>
          
          <h1 className="max-w-8xl text-4xl font-medium tracking-tight text-white md:text-7xl lg:text-8xl leading-tight" style={{animationDelay: '0.2s'}}>
            <div className="typing-line-1">
              Membentuk Ulang Masa Depan.
            </div>
            <div className="typing-line-2">
              <span className="text-blue-400">Teknologi IBM</span> Hari Ini dan Esok.
            </div>
          </h1>
          
          <p className="max-w-4xl mt-8 text-lg text-gray-300 md:text-xl lg:text-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
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
