'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tool', href: '/tool' },
    { name: 'Docs', href: '/docs' },
  ];

  return (
    <nav className="border-b border-[#141414] bg-[#E4E3E0] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#141414] flex items-center justify-center rounded-sm group-hover:scale-105 transition-transform">
            <Shield className="text-[#E4E3E0] w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-tighter italic font-serif block leading-none">Generator Pro</span>
            <span className="text-[8px] uppercase tracking-widest opacity-50 font-mono block">Robots.txt Tool</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-mono transition-colors hover:text-[#141414] py-1 ${
                pathname === link.href ? 'text-[#141414] font-bold border-b-2 border-[#141414]' : 'text-[#141414]/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-[#141414] hover:bg-[#141414]/5 transition-colors rounded-sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#E4E3E0] border-t border-[#141414]/10 mt-4"
          >
            <div className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs uppercase tracking-[0.3em] font-mono transition-colors px-2 py-1 ${
                    pathname === link.href ? 'text-[#141414] font-bold border-l-4 border-[#141414]' : 'text-[#141414]/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
