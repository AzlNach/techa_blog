'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 border border-white/20 rounded-full px-6 py-3 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="TechaBlog Logo" 
            width={24} 
            height={24}
            className="w-6 h-6"
          />
          <span className="ml-2 text-sm font-semibold text-white">TechaBlog</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs text-gray-200 ml-8">
          <Link href="/" className="hover:text-blue-400 transition-colors font-medium">Beranda</Link>
          <div className="relative group">
            <button className="hover:text-blue-400 transition-colors font-medium" suppressHydrationWarning>Kategori</button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
              <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-blue-500/20 rounded-t-lg text-gray-200 hover:text-blue-400">AI & watsonx</Link>
              <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-blue-500/20 text-gray-200 hover:text-blue-400">Komputasi Kuantum</Link>
              <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-blue-500/20 rounded-b-lg text-gray-200 hover:text-blue-400">Hybrid Cloud</Link>
            </div>
          </div>
          <Link href="https://www.linkedin.com/in/azlnach-si26/" className="hover:text-blue-400 transition-colors font-medium">Tentang Saya</Link>
        </div>
        <div className="flex items-center space-x-3 ml-8">
          <Link href="/blog" className="hover:bg-blue-700 transition-colors text-xs font-medium text-white bg-blue-600 rounded-full px-4 py-2">Semua Artikel</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
