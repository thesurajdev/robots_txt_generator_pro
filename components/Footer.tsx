'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#141414] bg-[#E4E3E0] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-[#141414] flex items-center justify-center rounded-sm">
            <Shield className="text-[#E4E3E0] w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-tighter italic font-serif">Generator Pro</span>
        </div>

        <div className="text-xs sm:text-[10px] uppercase tracking-[0.2em] font-mono text-[#141414]/50">
          Handcrafted by{' '}
          <a 
            href="https://surajdev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#141414] font-bold hover:underline transition-all"
          >
            Suraj Dev
          </a>
        </div>

        <div className="flex gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#141414]/50 hover:text-[#141414] transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#141414]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[8px] uppercase tracking-widest opacity-30 font-mono">
          &copy; {new Date().getFullYear()} Robots.txt Generator Pro. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/docs" className="text-[8px] uppercase tracking-widest opacity-30 font-mono hover:opacity-100 transition-opacity">Documentation</Link>
          <Link href="/tool" className="text-[8px] uppercase tracking-widest opacity-30 font-mono hover:opacity-100 transition-opacity">Tool</Link>
        </div>
      </div>
    </footer>
  );
}
