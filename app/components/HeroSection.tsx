const HeroSection = () => {
  return (
    <>
      {/* Background */}
<div className="relative w-full min-h-screen">

  {/* Background Iframe */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <iframe 
      src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/" 
      frameBorder="0" 
      className="w-full h-full"
    />
  </div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-32 text-center">
    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-5 blur-[100px] rounded-full"></div>
    
    <span className="px-3 py-1 mb-8 text-xs font-medium text-white bg-white bg-opacity-10 border border-white rounded-full backdrop-blur-sm border-opacity-20">
      Teknologi IBM
    </span>
    
    <h1 className="max-w-4xl text-4xl font-medium tracking-tighter text-white md:text-6xl leading-tight">
      Membentuk Ulang Masa Depan. Teknologi IBM Hari Ini dan Esok.
    </h1>
    
    <p className="max-w-2xl mt-6 text-lg text-neutral-300 md:text-xl">
      Blog ini mengupas tuntas bagaimana terobosan dalam AI, Komputasi Kuantum, 
      dan Hybrid Cloud dari IBM akan mendefinisikan dekade teknologi berikutnya.
    </p>
    
    <div className="flex flex-col gap-4 mt-12 sm:flex-row">
      <a 
        href="#blog-list" 
        className="px-8 py-3 font-medium text-black bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300"
      >
        Jelajahi Artikel Terbaru
      </a>
      <a 
        href="#content-1" 
        className="px-8 py-3 font-medium text-white bg-white border border-white rounded-full bg-opacity-10 backdrop-blur-sm border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
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
