'use client';

import { useState } from 'react';
import Image from 'next/image';
import ArticleModal from './ArticleModal';

interface Article {
  id: number;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
}

const BlogList = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPosts: Article[] = [
    {
      id: 1,
      tag: "AI",
      title: "Studi Kasus: Bagaimana watsonx Assistant Mengurangi Waktu Tunggu Pelanggan hingga 50%",
      excerpt: "Analisis mendalam tentang implementasi watsonx Assistant di Vodafone dan dampaknya terhadap efisiensi layanan pelanggan.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      readTime: "8 min read",
      category: "AI"
    },
    {
      id: 2,
      tag: "KUANTUM",
      title: "Tutorial Pemula: Menulis & Menjalankan Sirkuit Kuantum Pertama Anda dengan Qiskit",
      excerpt: "Panduan langkah demi langkah untuk memulai perjalanan komputasi kuantum dengan IBM Qiskit SDK.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      readTime: "12 min read",
      category: "KUANTUM"
    },
    {
      id: 3,
      tag: "OPEN SOURCE",
      title: "Granite: Mengapa Model AI Open Source dari IBM Penting bagi Developer Indonesia",
      excerpt: "Eksplorasi mendalam tentang strategi open source IBM dan bagaimana InstructLab mendemokratisasi pengembangan LLM.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      readTime: "10 min read",
      category: "OPEN SOURCE"
    },
    {
      id: 4,
      tag: "HYBRID CLOUD",
      title: "Modernisasi Mainframe: IBM Z dan Power11 di Era AI",
      excerpt: "Bagaimana IBM mengubah mainframe legacy menjadi platform AI yang powerful dengan z17 dan Power11.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      readTime: "15 min read",
      category: "HYBRID CLOUD"
    }
  ];

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
    <section id="blog-section" className="relative py-20 px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="w-full px-30 py-9 relative z-10">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-blue-300/90">
              Analisis & Tutorial Terbaru
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl tracking-tight font-medium text-white">
              Peta Jalan Teknologi IBM untuk Masa Depan
            </h2>
          </div>
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Lihat Semua Artikel
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900/60 to-black hover:border-white/20 transition-all duration-300"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.2}s forwards`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={800}
                  height={192}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getTagColor(post.tag)}`}>
                    {post.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-white">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="text-gray-300 font-medium">Kategori:</span> {post.category}
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedArticle(post);
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
        
        {/* Lihat Semua Artikel Button */}

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
    </section>
  );
};

export default BlogList;
