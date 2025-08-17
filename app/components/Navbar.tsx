'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 border border-gray-200/50 rounded-full px-6 py-3 shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2"></circle>
            <circle cx="12" cy="12" r="3" fill="#2563eb"></circle>
          </svg>
          <span className="ml-2 text-sm font-semibold text-gray-900">TechaBlog</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-xs text-gray-700 ml-8">
          <Link href="#" className="hover:text-blue-600 transition-colors font-medium">Beranda</Link>
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors font-medium" suppressHydrationWarning>Kategori</button>
            <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg">
              <Link href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-t-lg text-gray-700 hover:text-blue-600">AI & watsonx</Link>
              <Link href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 text-gray-700 hover:text-blue-600">Komputasi Kuantum</Link>
              <Link href="#" className="block px-4 py-2 text-sm hover:bg-blue-50 rounded-b-lg text-gray-700 hover:text-blue-600">Hybrid Cloud</Link>
            </div>
          </div>
          <Link href="#" className="hover:text-blue-600 transition-colors font-medium">Tentang Saya</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors font-medium">Kontak</Link>
        </div>
        <div className="flex items-center space-x-3 ml-8">
          <Link href="#" className="hidden md:inline-block text-xs font-medium hover:text-blue-600 transition-colors text-gray-700">Login</Link>
          <Link href="#" className="hover:bg-blue-700 transition-colors text-xs font-medium text-white bg-blue-600 rounded-full px-4 py-2">Subscribe</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
