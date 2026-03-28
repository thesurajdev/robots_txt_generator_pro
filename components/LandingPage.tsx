'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Shield, ArrowRight, FileText, User, Globe, Image as ImageIcon } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#E4E3E0] text-[#141414] font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 border-b border-[#141414]">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono opacity-50 mb-6 block">Professional Robots.txt Generator</span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl lg:text-[120px] font-bold leading-[0.85] tracking-tighter mb-12 uppercase italic font-serif break-words">
              Robots.txt <br />
              <span className="text-stroke-1 text-transparent">Generator Pro</span>
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl opacity-70 mb-12 leading-relaxed">
              The professional-grade tool to generate, manage, and optimize your robots.txt files with precision and style.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/tool"
                className="bg-[#141414] text-[#E4E3E0] px-8 py-4 text-sm uppercase tracking-widest font-bold flex items-center gap-3 hover:bg-[#333] transition-all group"
              >
                Launch Generator <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="border border-[#141414] px-8 py-4 text-sm uppercase tracking-widest font-bold flex items-center gap-3 hover:bg-[#141414] hover:text-[#E4E3E0] transition-all"
              >
                Read Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[#141414]">
        {[
          {
            icon: <User size={32} />,
            title: "Multi-Agent Control",
            desc: "Define specific rules for Googlebot, Baiduspider, and more with a single interface."
          },
          {
            icon: <ImageIcon size={32} />,
            title: "ASCII Art Generator",
            desc: "Convert your logo into ASCII comments to add a professional touch to your file."
          },
          {
            icon: <Globe size={32} />,
            title: "Sitemap Integration",
            desc: "Easily manage multiple sitemaps to ensure crawlers find your content efficiently."
          }
        ].map((feature, i) => (
          <div key={i} className={`p-12 border-b md:border-b-0 ${i !== 2 ? 'md:border-r border-[#141414]' : ''} hover:bg-[#141414] hover:text-[#E4E3E0] transition-colors group`}>
            <div className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{feature.icon}</div>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 italic font-serif">{feature.title}</h3>
            <p className="opacity-70 group-hover:opacity-90 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 lg:px-24 bg-[#141414] text-[#E4E3E0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-bold uppercase italic font-serif mb-8 tracking-tight">Why SEO Specialists Choose Us</h2>
            <p className="text-lg opacity-70 leading-relaxed mb-8">
              Proper crawler management is the foundation of technical SEO. By using Robots.txt Generator Pro, you ensure that search engines focus their crawl budget on your most important pages, improving indexation speed and overall search visibility.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Standard Compliant</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0.5s</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Generation Speed</div>
              </div>
            </div>
          </div>
          <div className="border border-[#E4E3E0]/20 p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold uppercase italic font-serif mb-6 tracking-tight">Ready to optimize?</h3>
            <p className="opacity-70 mb-8 leading-relaxed">
              Join thousands of developers and SEO experts who use our tool to maintain perfect crawler control.
            </p>
            <Link
              href="/tool"
              className="bg-[#E4E3E0] text-[#141414] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-all w-fit"
            >
              Start Building Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
