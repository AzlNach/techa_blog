const ContentSections = () => {
  return (
    <div className="bg-white">
      {/* Content 1: AI & watsonx */}
      <section id="content-1" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-[800px] lg:h-[600px] p-8">
        {/* AI Card - Large */}
        <div className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group h-full bg-gradient-to-br from-blue-900 to-blue-800">
            {/* AI Visual Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300/20 rounded-full blur-lg"></div>
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-md">
              <div className="glass-effect p-4 lg:p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white mb-3">
                      AI yang Terpercaya dan Terbuka: Era Baru dengan IBM watsonx
                    </h3>
                    <p className="text-sm text-blue-100 leading-relaxed mb-4">
                      Platform AI enterprise-grade dari IBM untuk membangun, menjalankan, dan mengelola model AI dengan transparan. 
                      Mendukung AI Generatif, Tata Kelola AI, dan model open-source Granite.
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="font-semibold text-blue-200 text-sm">3 Pilar</div>
                        <div className="text-xs text-blue-300">watsonx</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-blue-200 text-sm">Open Source</div>
                        <div className="text-xs text-blue-300">Granite</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* watsonx Features Card */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 opacity-0 animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
          <div className="h-full rounded-3xl bg-gradient-to-br from-emerald-800 to-emerald-900 text-white p-6 lg:p-8 relative overflow-hidden shadow-2xl group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/10"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/5"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur">
                    <svg className="w-5 h-5 text-emerald-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur">
                    Platform Terintegrasi
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-4">
                  Tiga Pilar
                  <span className="italic font-light"> watsonx</span>
                </h3>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-emerald-300 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>watsonx.ai - Studio AI untuk pengembangan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-emerald-300 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>watsonx.data - Open Data Lakehouse</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-emerald-300 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                    <span>watsonx.governance - Manajemen Risiko</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-between mt-6">
                <div className="text-xs text-emerald-200">
                  Enterprise-Ready • Trusted AI
                </div>
                <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-2 rounded-full text-sm font-medium transition-colors">
                  Pelajari Lebih Lanjut →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Computing Card */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 opacity-0 animate-slide-left" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <div className="h-full rounded-3xl bg-gradient-to-br from-purple-900 to-indigo-900 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-700/30 group text-white">
            <div>
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-3">
                Komputasi Kuantum
              </h3>
              <p className="text-sm text-purple-100 leading-relaxed mb-4">
                Mencapai keunggulan kuantum pada 2026 dengan IBM Quantum System Two.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-purple-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Qiskit SDK
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Quantum Details */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 opacity-0 animate-slide-up" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
          <div className="h-full rounded-3xl bg-gradient-to-br from-stone-100 to-stone-50 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div>
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg lg:text-xl font-semibold leading-tight mb-3 text-gray-900">
                Lompatan Berikutnya:
                <span className="italic font-light text-purple-700"> Perlombaan IBM Menuju Keunggulan Kuantum</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Komputasi kuantum memungkinkan pemecahan masalah yang mustahil bagi komputer biasa - 
                penemuan obat, material baru, dan optimisasi kompleks. Qiskit memungkinkan developer 
                bereksperimen dengan teknologi masa depan hari ini.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-purple-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                156-qubit Heron Processor
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                Mulai Petualangan Kuantum Anda →
              </a>
              <div className="w-16 h-16 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSections;
