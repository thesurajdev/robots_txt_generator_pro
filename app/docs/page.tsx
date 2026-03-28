'use client';

import React from 'react';
import { Search, Zap, Code, CheckCircle2 } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="bg-[#E4E3E0] text-[#141414] font-sans min-h-screen">
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono opacity-50 mb-6 block">Technical Documentation</span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase italic font-serif mb-16 tracking-tight">Understanding Robots.txt</h1>
          
          <div className="space-y-16">
            <div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <Search size={20} /> What is a Robots.txt file?
              </h4>
              <p className="text-lg opacity-70 leading-relaxed mb-6">
                A robots.txt file is a text file that tells search engine crawlers which pages or files the crawler can or can&apos;t request from your site. This is used mainly to avoid overloading your site with requests; it is not a mechanism for keeping a web page out of Google.
              </p>
              <div className="bg-[#141414] p-6 text-[#E4E3E0] font-mono text-sm border-l-4 border-[#E4E3E0]">
                User-agent: *<br />
                Disallow: /admin/<br />
                Sitemap: https://example.com/sitemap.xml
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <Zap size={20} /> How to use the Architect
              </h4>
              <ul className="space-y-4">
                {[
                  "Define your User-Agents: Use '*' for all crawlers or specify by name.",
                  "Add Directives: Use 'Allow' or 'Disallow' followed by the relative path.",
                  "Include Sitemaps: Add the full absolute URL to your sitemap files.",
                  "Add ASCII Art: Upload your logo to generate a unique header/footer.",
                  "Export: Copy the code or download the file directly to your root directory."
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4 opacity-70">
                    <CheckCircle2 size={18} className="shrink-0 mt-1" />
                    <span className="text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold uppercase tracking-wider mb-6 flex items-center gap-3">
                <Code size={20} /> Best Practices
              </h4>
              <p className="text-lg opacity-70 leading-relaxed">
                Always ensure your robots.txt file is located in the root directory of your site (e.g., example.com/robots.txt). Use relative paths for directives and absolute URLs for sitemaps. Remember that robots.txt is a public file—do not use it to hide sensitive information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
