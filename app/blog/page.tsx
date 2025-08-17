'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ArticleModal from '../components/ArticleModal';

interface Article {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  publishedDate: string;
  author: string;
}

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allArticles: Article[] = [
    // AI Category
    {
      id: 1,
      tag: "AI",
      title: "Studi Kasus: Bagaimana watsonx Assistant Mengurangi Waktu Tunggu Pelanggan hingga 50%",
      excerpt: "Analisis mendalam tentang implementasi watsonx Assistant di Vodafone dan dampaknya terhadap efisiensi layanan pelanggan.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      readTime: "8 min read",
      category: "AI",
      publishedDate: "15 Agustus 2025",
      author: "Dr. Sarah Johnson"
    },
    {
      id: 5,
      tag: "AI",
      title: "IBM Watson Studio: Platform All-in-One untuk Data Science Enterprise",
      excerpt: "Eksplorasi fitur-fitur canggih Watson Studio untuk membangun, melatih, dan deploy model machine learning dalam skala enterprise.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      readTime: "12 min read",
      category: "AI",
      publishedDate: "12 Agustus 2025",
      author: "Prof. Michael Chen"
    },
    {
      id: 6,
      tag: "AI",
      title: "Perbandingan Comprehensive: IBM watsonx vs Azure OpenAI vs AWS Bedrock",
      excerpt: "Analisis mendalam perbandingan platform AI enterprise dari tiga cloud provider terbesar untuk membantu decision making.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      readTime: "15 min read",
      category: "AI",
      publishedDate: "10 Agustus 2025",
      author: "Tim Research TechaBlog"
    },

    // Quantum Category
    {
      id: 2,
      tag: "KUANTUM",
      title: "Tutorial Pemula: Menulis & Menjalankan Sirkuit Kuantum Pertama Anda dengan Qiskit",
      excerpt: "Panduan langkah demi langkah untuk memulai perjalanan komputasi kuantum dengan IBM Qiskit SDK.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      readTime: "12 min read",
      category: "KUANTUM",
      publishedDate: "8 Agustus 2025",
      author: "Dr. Quantum Labs"
    },
    {
      id: 7,
      tag: "KUANTUM",
      title: "IBM Quantum Network: Kolaborasi Global untuk Masa Depan Komputasi",
      excerpt: "Bagaimana universitas dan perusahaan di seluruh dunia berkolaborasi dalam IBM Quantum Network untuk penelitian quantum computing.",
      image: "https://images.unsplash.com/photo-1562736872-d7f2c6c24ce2?w=800&q=80",
      readTime: "10 min read",
      category: "KUANTUM",
      publishedDate: "5 Agustus 2025",
      author: "Dr. Alice Quantum"
    },
    {
      id: 8,
      tag: "KUANTUM",
      title: "Quantum Cryptography: Mengatasi Ancaman Keamanan Era Post-Quantum",
      excerpt: "Implementasi quantum-safe cryptography untuk melindungi data dari ancaman quantum computer di masa depan.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      readTime: "14 min read",
      category: "KUANTUM",
      publishedDate: "2 Agustus 2025",
      author: "Security Research Team"
    },

    // Hybrid Cloud Category
    {
      id: 4,
      tag: "HYBRID CLOUD",
      title: "Modernisasi Mainframe: IBM Z dan Power11 di Era AI",
      excerpt: "Bagaimana IBM mengubah mainframe legacy menjadi platform AI yang powerful dengan z17 dan Power11.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      readTime: "15 min read",
      category: "HYBRID CLOUD",
      publishedDate: "1 Agustus 2025",
      author: "Enterprise Architecture Team"
    },
    {
      id: 9,
      tag: "HYBRID CLOUD",
      title: "Red Hat OpenShift: Kubernetes Enterprise untuk Hybrid Cloud",
      excerpt: "Deep dive implementasi Red Hat OpenShift untuk container orchestration dalam lingkungan hybrid cloud enterprise.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      readTime: "13 min read",
      category: "HYBRID CLOUD",
      publishedDate: "28 Juli 2025",
      author: "Cloud Architecture Team"
    },
    {
      id: 10,
      tag: "HYBRID CLOUD",
      title: "Cloud Migration Strategy: Dari On-Premise ke Hybrid Cloud dengan IBM",
      excerpt: "Roadmap komprehensif untuk migrasi aplikasi enterprise dari on-premise ke hybrid cloud menggunakan solusi IBM.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      readTime: "18 min read",
      category: "HYBRID CLOUD",
      publishedDate: "25 Juli 2025",
      author: "Migration Specialists"
    },

    // Open Source Category
    {
      id: 3,
      tag: "OPEN SOURCE",
      title: "Granite: Mengapa Model AI Open Source dari IBM Penting bagi Developer Indonesia",
      excerpt: "Eksplorasi mendalam tentang strategi open source IBM dan bagaimana InstructLab mendemokratisasi pengembangan LLM.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      readTime: "10 min read",
      category: "OPEN SOURCE",
      publishedDate: "22 Juli 2025",
      author: "Open Source Community"
    },
    {
      id: 11,
      tag: "OPEN SOURCE",
      title: "Apache Kafka on IBM Cloud: Event Streaming untuk Real-time Analytics",
      excerpt: "Implementasi Apache Kafka di IBM Cloud untuk membangun real-time data streaming dan analytics platform.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
      readTime: "11 min read",
      category: "OPEN SOURCE",
      publishedDate: "20 Juli 2025",
      author: "Data Engineering Team"
    },
    {
      id: 12,
      tag: "OPEN SOURCE",
      title: "InstructLab: Democratizing Large Language Model Training",
      excerpt: "Bagaimana InstructLab memungkinkan komunitas untuk berkontribusi dalam pengembangan large language model secara kolaboratif.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
      readTime: "16 min read",
      category: "OPEN SOURCE",
      publishedDate: "18 Juli 2025",
      author: "AI Research Community"
    }
  ];

  const categories = [
    { id: 'ALL', name: 'Semua Artikel', count: allArticles.length },
    { id: 'AI', name: 'Artificial Intelligence', count: allArticles.filter(a => a.category === 'AI').length },
    { id: 'KUANTUM', name: 'Quantum Computing', count: allArticles.filter(a => a.category === 'KUANTUM').length },
    { id: 'HYBRID CLOUD', name: 'Hybrid Cloud', count: allArticles.filter(a => a.category === 'HYBRID CLOUD').length },
    { id: 'OPEN SOURCE', name: 'Open Source', count: allArticles.filter(a => a.category === 'OPEN SOURCE').length }
  ];

  const filteredArticles = selectedCategory === 'ALL' 
    ? allArticles 
    : allArticles.filter(article => article.category === selectedCategory);

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'AI':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'KUANTUM':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'OPEN SOURCE':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'HYBRID CLOUD':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Header */}
        <div className="px-30 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Eksplorasi Teknologi <span className="text-blue-400">IBM</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kumpulan artikel mendalam tentang inovasi terdepan dalam AI, Quantum Computing, 
              Hybrid Cloud, dan teknologi open source dari IBM.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border backdrop-blur-sm ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-1 text-xs bg-black/20 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredArticles.map((article) => (
              <article key={article.id} className="group cursor-pointer">
                <div className="bg-gray-900/40 border border-gray-700/50 rounded-3xl overflow-hidden backdrop-blur-md hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <span className={`px-4 py-2 text-sm font-medium border rounded-full backdrop-blur-md ${getTagColor(article.tag)}`}>
                        {article.tag}
                      </span>
                    </div>
                    <div className="absolute top-6 right-6 bg-black/60 px-4 py-2 rounded-full backdrop-blur-md">
                      <span className="text-sm text-white font-medium">{article.readTime}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span className="font-medium">{article.author}</span>
                      <span>{article.publishedDate}</span>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedArticle(article);
                        setIsModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200 transition-colors group"
                    >
                      Baca Selengkapnya
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-xl mb-4">
                Tidak ada artikel ditemukan untuk kategori ini
              </div>
              <button
                onClick={() => setSelectedCategory('ALL')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Lihat Semua Artikel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <ArticleModal 
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedArticle(null);
        }}
      />
    </div>
  );
};

export default BlogPage;
