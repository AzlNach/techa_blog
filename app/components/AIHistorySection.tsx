'use client';

import { useState, useEffect } from 'react';

const AIHistorySection = () => {
  const [activeEra, setActiveEra] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const aiHistory = [
    {
      era: "1950s",
      title: "Era Foundational",
      subtitle: "Memulai Revolusi AI",
      color: "blue",
      years: "1952-1959",
      keyEvents: [
        {
          year: "1952",
          event: "Arthur Samuel menciptakan program checkers pertama yang bisa belajar",
          icon: "🎯"
        },
        {
          year: "1956",
          event: "IBM mendukung Dartmouth Conference yang menciptakan term 'Artificial Intelligence'",
          icon: "🧠"
        },
        {
          year: "1959",
          event: "Samuel menciptakan istilah 'Machine Learning'",
          icon: "⚡"
        }
      ]
    },
    {
      era: "1960s-1980s",
      title: "Expert Systems Era",
      subtitle: "Membangun Fondasi Kecerdasan",
      color: "green",
      years: "1965-1985",
      keyEvents: [
        {
          year: "1965",
          event: "IBM System/360 menjadi platform pertama untuk AI applications",
          icon: "💻"
        },
        {
          year: "1970s",
          event: "Pengembangan LISP interpreter untuk AI programming",
          icon: "📝"
        },
        {
          year: "1985",
          event: "IBM memulai Expert System tools development",
          icon: "🔧"
        }
      ]
    },
    {
      era: "1990s-2000s",
      title: "Deep Blue Era",
      subtitle: "AI Mengalahkan Grandmaster",
      color: "purple",
      years: "1989-2005",
      keyEvents: [
        {
          year: "1989",
          event: "Proyek Deep Blue dimulai untuk mengalahkan grandmaster catur",
          icon: "♟️"
        },
        {
          year: "1997",
          event: "Deep Blue mengalahkan Garry Kasparov dalam match bersejarah",
          icon: "👑"
        },
        {
          year: "2005",
          event: "IBM memulai pengembangan Watson project",
          icon: "🚀"
        }
      ]
    },
    {
      era: "2010s",
      title: "Watson Revolution",
      subtitle: "AI Masuk ke Kehidupan Sehari-hari",
      color: "yellow",
      years: "2011-2018",
      keyEvents: [
        {
          year: "2011",
          event: "Watson mengalahkan Ken Jennings di Jeopardy!",
          icon: "🏆"
        },
        {
          year: "2013",
          event: "Watson for Oncology diluncurkan untuk healthcare",
          icon: "🏥"
        },
        {
          year: "2015",
          event: "Watson APIs dibuka untuk developer ecosystem",
          icon: "🌐"
        },
        {
          year: "2018",
          event: "Watson Studio untuk enterprise AI development",
          icon: "🎨"
        }
      ]
    },
    {
      era: "2020s",
      title: "watsonx & Foundation Models",
      subtitle: "Era AI Demokratis dan Open Source",
      color: "orange",
      years: "2021-2025",
      keyEvents: [
        {
          year: "2021",
          event: "IBM mengakuisisi Red Hat untuk hybrid cloud AI",
          icon: "☁️"
        },
        {
          year: "2023",
          event: "Peluncuran watsonx platform untuk enterprise AI",
          icon: "⭐"
        },
        {
          year: "2024",
          event: "Granite foundation models open-sourced",
          icon: "💎"
        },
        {
          year: "2025",
          event: "InstructLab untuk collaborative AI development",
          icon: "🤝"
        }
      ]
    }
  ];

  // Auto-scroll timeline
  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        setActiveEra((prev) => (prev + 1) % aiHistory.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, aiHistory.length]);

  const handleEraClick = (index: number) => {
    setActiveEra(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  return (
    <section className="w-full px-30 py-24 relative z-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
      </div>

      <div className="w-full px-30 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-400/20 rounded-full backdrop-blur-sm">
              Sejarah AI IBM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white mb-8">
            70+ Tahun Inovasi AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dari program checkers pertama hingga foundation models modern, 
            IBM telah memimpin revolusi kecerdasan buatan selama lebih dari tujuh dekade.
          </p>
        </div>

        {/* Horizontal Timeline Series */}
        <div className="relative">


          {/* Era Navigation Pills */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-3 p-3 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-600/40">
              {aiHistory.map((period, index) => (
                <button
                  key={period.era}
                  onClick={() => handleEraClick(index)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 relative overflow-hidden group ${
                    activeEra === index
                      ? 'text-slate-200 bg-slate-700/70 shadow-lg scale-105 border border-slate-600/50'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50 border border-transparent'
                  }`}
                >
                  <span className="relative z-10">{period.era}</span>
                  {activeEra === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/20 to-transparent animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Timeline Line */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 rounded-full opacity-60"></div>
            
            {/* Timeline Nodes */}
            <div className="flex justify-between items-center relative z-10 px-8">
              {aiHistory.map((period, index) => (
                <button
                  key={period.era}
                  onClick={() => handleEraClick(index)}
                  className={`relative w-8 h-8 rounded-full border-4 border-gray-900 transition-all duration-500 hover:scale-125 group ${
                    activeEra === index 
                      ? 'bg-slate-500 scale-125 shadow-xl' 
                      : 'bg-gray-600 hover:bg-slate-600'
                  } ${
                    activeEra === index ? 'animate-pulse' : ''
                  }`}
                >
                  {/* Ripple Effect */}
                  {activeEra === index && (
                    <div className="absolute inset-0 rounded-full bg-slate-500 animate-ping opacity-75"></div>
                  )}
                  
                  {/* Year Label - Always visible with 20% opacity, full opacity on active/hover */}
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-600 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeEra === index 
                      ? 'opacity-100 translate-y-0 text-slate-300 border-slate-600 scale-110' 
                      : 'opacity-20 translate-y-0 text-gray-400 group-hover:opacity-100 group-hover:text-slate-300 group-hover:border-slate-600 group-hover:scale-105'
                  }`}>
                    {period.era}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Era Content */}
          <div className="relative min-h-[600px]">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 opacity-5 transition-all duration-1000 bg-slate-600/20"></div>
              <div 
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 transition-all duration-1000 animate-pulse bg-gradient-radial from-slate-500/30 to-transparent"
              ></div>
            </div>

            {/* Content Card */}
            <div className="relative z-10 transform transition-all duration-700">
              <div 
                key={activeEra}
                className="relative p-8 rounded-3xl border backdrop-blur-sm shadow-2xl border-slate-600/40 animate-fadeIn overflow-hidden"
              >
                {/* Background Image with Blur - Era Specific */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm transition-all duration-1000"
                    style={{
                      backgroundImage: `url('${
                        aiHistory[activeEra].era === "1950s" 
                          ? "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=800&fit=crop" // Vintage computer
                        : aiHistory[activeEra].era === "1960s-1980s"
                          ? "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop" // Circuit board
                        : aiHistory[activeEra].era === "1990s-2000s"
                          ? "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop" // Chess board technology
                        : aiHistory[activeEra].era === "2010s"
                          ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop" // AI Brain
                        : "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&h=800&fit=crop" // Modern AI/ML
                      }')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/70 to-slate-950/90"></div>
                </div>

                {/* Content Layer */}
                <div className="relative z-10">
                  {/* Era Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 text-slate-300 bg-slate-700/50 border border-slate-600/50">
                        <span className="mr-2">{aiHistory[activeEra].era}</span>
                        <span className="text-xs opacity-75">({aiHistory[activeEra].years})</span>
                      </div>
                      <h3 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-100">
                        {aiHistory[activeEra].title}
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed">
                        {aiHistory[activeEra].subtitle}
                      </p>
                    </div>
                    
                    {/* Stats Circle */}
                    <div className="mt-6 lg:mt-0 flex-shrink-0">
                      <div className="w-24 h-24 rounded-full border-4 border-slate-600/50 bg-slate-800/50 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-slate-200">
                            {aiHistory[activeEra].keyEvents.length}
                          </div>
                          <div className="text-xs text-slate-400">Events</div>
                        </div>
                      </div>
                    </div>
                  </div>

                {/* Key Events in Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {aiHistory[activeEra].keyEvents.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className="group relative p-6 rounded-2xl bg-slate-800/30 border border-slate-600/30 hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-500 cursor-pointer transform hover:scale-105 backdrop-blur-sm"
                      style={{
                        animationDelay: `${eventIndex * 0.15}s`,
                        animation: `slideInUp 0.6s ease-out ${eventIndex * 0.15}s both`
                      }}
                    >
                      {/* Icon */}
                      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
                        {event.icon}
                      </div>
                      
                      {/* Year */}
                      <div className="font-bold text-xl mb-3 text-slate-200 group-hover:text-white transition-colors duration-300">
                        {event.year}
                      </div>
                      
                      {/* Event Description */}
                      <div className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors duration-300">
                        {event.event}
                      </div>
                      
                      {/* Hover Indicator */}
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-400"></div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-600/30">
                  <button
                    onClick={() => handleEraClick(activeEra > 0 ? activeEra - 1 : aiHistory.length - 1)}
                    className="flex items-center px-6 py-3 rounded-full border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500/60 transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-slate-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-slate-300 group-hover:text-white">Previous</span>
                  </button>

                  {/* Era Counter */}
                  <div className="text-center">
                    <div className="text-sm text-slate-300 font-semibold">
                      {activeEra + 1} / {aiHistory.length}
                    </div>
                    <div className="text-xs text-slate-400">Era</div>
                  </div>

                  <button
                    onClick={() => handleEraClick(activeEra < aiHistory.length - 1 ? activeEra + 1 : 0)}
                    className="flex items-center px-6 py-3 rounded-full border border-slate-600/50 hover:bg-slate-700/50 hover:border-slate-500/60 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-slate-300 group-hover:text-white">Next</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 text-slate-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AIHistorySection;
