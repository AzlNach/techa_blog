'use client';

const ContentSections = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Content 1: AI & watsonx */}
      <div className="w-full px-30 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual (Kiri) - Enhanced watsonx Ecosystem */}
          <div className="order-2 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-lg h-96">
              
              {/* Background glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
              
              {/* Central IBM Watson Logo/Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-blue-300/30 animate-pulse">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
              </div>
              
              {/* watsonx.ai - Top Left */}
              <div className="absolute top-4 left-4 group hover:scale-110 transition-all duration-500">
                <div className="relative">
                  <div className="w-36 h-36 bg-gradient-to-br from-purple-500/25 to-purple-700/25 border-2 border-purple-400/40 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
                    <div className="text-center space-y-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-sm text-white font-semibold">watsonx.ai</span>
                      <span className="text-xs text-purple-200 block">AI Models</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* watsonx.data - Top Right */}
              <div className="absolute top-4 right-4 group hover:scale-110 transition-all duration-500">
                <div className="relative">
                  <div className="w-36 h-36 bg-gradient-to-br from-green-500/25 to-green-700/25 border-2 border-green-400/40 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-xl hover:shadow-green-500/25 transition-all duration-300">
                    <div className="text-center space-y-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <span className="text-sm text-white font-semibold">watsonx.data</span>
                      <span className="text-xs text-green-200 block">Data Platform</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* watsonx.governance - Bottom Center - Moved further down */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 group hover:scale-110 transition-all duration-500">
                <div className="relative">
                  <div className="w-36 h-36 bg-gradient-to-br from-orange-500/25 to-orange-700/25 border-2 border-orange-400/40 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-xl hover:shadow-orange-500/25 transition-all duration-300">
                    <div className="text-center space-y-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-sm text-white font-semibold">watsonx.governance</span>
                      <span className="text-xs text-orange-200 block">AI Governance</span>
                    </div>
                  </div>
                  {/* Enhanced Connection Line */}
                </div>
              </div>
              
              {/* Enhanced Orbital Rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-72 h-72 border border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-400/20 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/40 rounded-full animate-pulse"></div>
              </div>
              
              {/* Data Flow Particles */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          
          {/* Konten Teks (Kanan) */}
          <div className="order-1 lg:order-2 text-white">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm">
                  AI & watsonx
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                AI yang Terpercaya dan Terbuka: Era Baru dengan IBM watsonx
              </h2>
              
              <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  watsonx adalah platform AI enterprise-grade dari IBM yang dirancang untuk membangun, 
                  menjalankan, dan mengelola model AI dengan transparansi penuh. Platform ini mengintegrasikan 
                  kemampuan <span className="text-blue-300 font-semibold">AI Generatif</span> terdepan dengan 
                  <span className="text-green-300 font-semibold"> Tata Kelola AI</span> yang ketat.
                </p>
                
                <p>
                  Dengan dukungan penuh untuk model open-source seperti 
                  <span className="text-purple-300 font-semibold"> Granite</span>, watsonx memungkinkan 
                  organisasi untuk mengembangkan solusi AI yang dapat dipercaya, skalabel, dan sesuai 
                  dengan kebutuhan bisnis spesifik mereka.
                </p>
              </div>
              
              {/* CTA */}
              <div className="pt-8">
                <a 
                  href="#watsonx-detail" 
                  className="inline-flex items-center px-8 py-4 font-semibold text-black bg-white rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Pelajari Lebih Lanjut tentang watsonx
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
