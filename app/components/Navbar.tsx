'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-opacity-5 border-opacity-10 bg-white border-white border rounded-full pt-3 pr-4 pb-3 pl-4 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"></circle>
            <circle cx="12" cy="12" r="3" fill="white"></circle>
          </svg>
          <span className="ml-2 text-sm font-medium text-white">IBM Tech Blog</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs text-gray-300 ml-8">
          <Link href="#" className="hover:text-white transition-colors">Beranda</Link>
          <div className="relative group">
            <button className="hover:text-white transition-colors">Kategori</button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="#" className="block px-4 py-2 text-sm hover:bg-white/20 rounded-t-lg">AI & watsonx</Link>
              <Link href="#" className="block px-4 py-2 text-sm hover:bg-white/20">Komputasi Kuantum</Link>
              <Link href="#" className="block px-4 py-2 text-sm hover:bg-white/20 rounded-b-lg">Hybrid Cloud</Link>
            </div>
          </div>
          <Link href="#" className="hover:text-white transition-colors">Tentang Saya</Link>
          <Link href="#" className="hover:text-white transition-colors">Kontak</Link>
        </div>
        <div className="flex items-center space-x-3 ml-8">
          <Link href="#" className="hidden md:inline-block text-xs font-medium hover:text-white transition-colors">Login</Link>
          <Link href="#" className="hover:bg-gray-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Subscribe</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
