'use client';

import Topbar from '@/components/Topbar';
import React, { useState, ReactElement, useEffect } from 'react';
import { Search, Calendar, Clock, ArrowUpRight, X, ChevronRight } from 'lucide-react';

// TypeScript Interfaces
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  isFeatured?: boolean;
  content: string;
  author: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'featured-1',
    title: 'How I Built My Portfolio Website Using Next.js and Tailwind CSS',
    excerpt: 'A complete guide on how I built my personal portfolio website from scratch using modern technologies and best practices.',
    date: 'May 12, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    category: 'Web Development',
    isFeatured: true,
    content: 'Building a portfolio website requires planning, design thinking, and technical expertise. In this article, I share my journey of creating a modern portfolio using Next.js 14, Tailwind CSS, and TypeScript.',
    author: 'Your Name',
    tags: ['Next.js', 'Tailwind CSS', 'React', 'Web Design']
  },
  {
    id: '2',
    title: 'Understanding React Server Components',
    excerpt: 'A deep dive into React Server Components and how they improve performance and reduce bundle size in modern applications.',
    date: 'May 05, 2024',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    category: 'React',
    content: 'React Server Components represent a paradigm shift in how we build web applications. They allow developers to run component logic on the server side.',
    author: 'Your Name',
    tags: ['React', 'Performance', 'Server Components']
  },
  {
    id: '3',
    title: 'Top 10 VS Code Extensions for Developers',
    excerpt: 'Boost your productivity with these must-have VS Code extensions that will make your development workflow faster and more efficient.',
    date: 'Apr 28, 2024',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop',
    category: 'Tools',
    content: 'VS Code has become the go-to editor for developers worldwide. With the right extensions, you can significantly boost your productivity.',
    author: 'Your Name',
    tags: ['VS Code', 'Tools', 'Productivity']
  },
  {
    id: '4',
    title: 'Mastering TypeScript for Large Projects',
    excerpt: 'Learn how to leverage TypeScript to build more maintainable, scalable, and error-free applications in production environments.',
    date: 'Apr 15, 2024',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    category: 'TypeScript',
    content: 'TypeScript provides compile-time type checking that helps catch errors before they reach production. This guide covers advanced patterns.',
    author: 'Your Name',
    tags: ['TypeScript', 'Best Practices', 'JavaScript']
  },
  {
    id: '5',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Discover best practices for designing and implementing RESTful APIs that can handle thousands of concurrent requests efficiently.',
    date: 'Apr 08, 2024',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=800&h=400&fit=crop',
    category: 'Backend',
    content: 'Building APIs that scale requires careful architecture planning, proper database design, and efficient error handling mechanisms.',
    author: 'Your Name',
    tags: ['Node.js', 'Backend', 'API Design']
  },
  {
    id: '6',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox with real-world examples showing when and how to use each layout system.',
    date: 'Mar 30, 2024',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    category: 'CSS',
    content: 'Understanding the differences between CSS Grid and Flexbox is crucial for modern web layout. Both have their strengths and use cases.',
    author: 'Your Name',
    tags: ['CSS', 'Layout', 'Web Design']
  },
];

export default function BlogSection(): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && selectedPost) {
        setSelectedPost(null);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [selectedPost]);

  const featuredPost = blogPosts.find((p) => p.isFeatured);
  const regularPosts = blogPosts.filter((p) => !p.isFeatured);

  const filteredPosts = regularPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className={`
      
        px-6 py-12
        lg:ml-72
        font-sans
        transition-colors duration-300
        ${
          darkMode
            ? 'bg-[#0F172A] text-white'
            : 'bg-[#F8FAFC] text-[#1E293B]'
        }
      `}
    >
      {/* HEADER */}
      <Topbar
        title="Blog"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* CONTAINER */}
      <div className="">

        {/* HEADER + SEARCH */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Insights, tutorials & development tips
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className={`
                w-full pl-10 pr-4 py-3 rounded-xl
                border transition-all
                ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500'
                }
                outline-none text-sm
              `}
            />
          </div>
        </div>

        {/* FEATURED ARTICLE - PREMIUM */}
     {/* FEATURED ARTICLE - LUXURY EDITORIAL LAYOUT */}
{featuredPost && searchQuery.length === 0 && (
  <div
    onClick={() => setSelectedPost(featuredPost)}
    className={`
      mb-14 rounded-2xl overflow-hidden cursor-pointer
      group border transition-all duration-500 ease-out
      hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)]
      ${
        darkMode
          ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700/80'
          : 'bg-white border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-slate-300'
      }
    `}
  >
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

      {/* IMAGE CONTAINER */}
      <div className="relative lg:col-span-5 h-56 sm:h-64 lg:h-auto min-h-[280px] overflow-hidden bg-slate-950">
        <img
          src={featuredPost.imageUrl}
          alt={featuredPost.title}
          className="w-full h-full object-cover scale-[1.01] group-hover:scale-103 transition-transform duration-700 ease-out brightness-[0.95] dark:brightness-[0.8]"
        />
        {/* Sleek Minimal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/20 via-transparent to-transparent" />
      </div>

      {/* CONTENT BLOCK */}
      <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        
        {/* TOP CONTENT */}
        <div>
          {/* Subtle Tags */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-wider uppercase">
              Featured
            </span>
            <span className="text-slate-300 dark:text-slate-700 text-xs">•</span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-slate-400 dark:text-slate-500">
              {featuredPost.category}
            </span>
          </div>

          {/* DOWNSIZED TYPOGRAPHY: Elegant, smaller and clean */}
          <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-snug mb-3 transition-colors duration-300 ${
            darkMode 
              ? 'text-slate-100 group-hover:text-blue-400' 
              : 'text-slate-900 group-hover:text-blue-600'
          }`}>
            {featuredPost.title}
          </h2>

          {/* EXCERPT: Cleaner line spacing */}
          <p className={`text-xs sm:text-sm leading-relaxed mb-6 max-w-xl ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {featuredPost.excerpt}
          </p>
        </div>

        {/* BOTTOM METADATA & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 dark:text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 opacity-70" />
              <span>{featuredPost.date}</span>
            </div>
            <span className="opacity-40">|</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 opacity-70" />
              <span>{featuredPost.readTime}</span>
            </div>
          </div>

          {/* LINK EFFECT */}
          <div className={`
            inline-flex items-center gap-1 text-xs font-bold transition-all duration-300
            ${darkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-700'}
          `}>
            <span>Read Post</span>
            <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </div>

      </div>

    </div>
  </div>
)}

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post): ReactElement => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`
                group cursor-pointer rounded-2xl overflow-hidden
                border transition-all duration-300
                hover:shadow-2xl hover:-translate-y-2
                ${
                  darkMode
                    ? 'bg-slate-800/60 border-slate-700 backdrop-blur-md'
                    : 'bg-white/70 border-slate-200 backdrop-blur-md'
                }
              `}
            >

              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 lg:p-6">

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition line-clamp-2">
                  {post.title}
                </h3>

                <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">

                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-blue-600 group-hover:scale-125 transition-transform" />

                </div>

              </div>

            </div>
          ))}
        </div>

        {/* NO RESULTS */}
        {filteredPosts.length === 0 && featuredPost?.title.toLowerCase().includes(searchQuery.toLowerCase()) === false && (
          <div className="text-center py-16">
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No articles found. Try a different search.
            </p>
          </div>
        )}

      </div>

      {/* PROFESSIONAL BLOG DETAIL MODAL - LUXURY */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-4 md:p-6"
          onClick={() => setSelectedPost(null)}
        >

          {/* BACKDROP */}
          <div className="absolute inset-0" />

          {/* MODAL */}
       {/* MODAL CONTAINER */}
<div
  className={`
    relative z-10 w-full max-w-4xl
    rounded-3xl overflow-hidden
    shadow-[0_30px_70px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.7)]
    animate-in scale-100 fade-in duration-300 ease-out
    max-h-[90vh] overflow-y-auto scrollbar-thin
    border
    ${
      darkMode
        ? 'bg-slate-950 border-slate-800'
        : 'bg-white border-slate-100'
    }
  `}
  onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
>

  {/* MINIMALIST CLOSE BUTTON */}
  <button
    onClick={() => setSelectedPost(null)}
    className={`
      absolute top-6 right-6 z-20
      p-2.5 rounded-full backdrop-blur-md
      border transition-all duration-200
      flex items-center justify-center
      ${
        darkMode
          ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          : 'bg-white/80 border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50'
      }
    `}
    title="Close modal (ESC)"
  >
    <X className="w-5 h-5 transition-transform duration-200" />
  </button>

  {/* HERO HEADER IMAGE */}
  <div className="relative w-full h-80 md:h-[420px] overflow-hidden bg-slate-950">
    <img
      src={selectedPost.imageUrl}
      alt={selectedPost.title}
      className="w-full h-full object-cover brightness-[0.85] dark:brightness-75"
    />
    
    {/* Clean Vignette & Bottom Text Scrim */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 dark:opacity-100" />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100 dark:hidden" style={{ bottom: '-1px' }} />

    {/* Header Content Overlay */}
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col justify-end h-full">
      <div className="mb-4">
        <span className="inline-flex px-2.5 py-1 rounded bg-blue-500/10 dark:bg-blue-500/20 text-blue-400 text-[11px] font-bold uppercase tracking-wider border border-blue-500/20">
          {selectedPost.category}
        </span>
      </div>

      <h1 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight tracking-tight text-white dark:text-slate-100 max-w-3xl">
        {selectedPost.title}
      </h1>

      <div className="flex items-center gap-4 text-xs font-medium text-slate-300 dark:text-slate-400">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 opacity-70" />
          <span>{selectedPost.date}</span>
        </div>
        <span className="text-slate-500 dark:text-slate-600">|</span>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 opacity-70" />
          <span>{selectedPost.readTime}</span>
        </div>
      </div>
    </div>
  </div>

  {/* MAIN CONTENT REGION */}
  <div className={`p-6 md:p-12 space-y-10 ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>

    {/* INTRO EXCERPT */}
    <p className={`text-xl leading-relaxed font-normal border-l-2 border-blue-500 pl-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
      {selectedPost.excerpt}
    </p>

    {/* RICH TEXT TYPOGRAPHY */}
    <div className={`space-y-6 leading-7 text-base md:text-[17px] ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
      <div>
        <p className="font-semibold text-slate-400 dark:text-slate-500 mb-3 uppercase text-xs tracking-wider">Introduction</p>
        <p className="leading-relaxed">
          {selectedPost.content}
        </p>
      </div>

      <p className="leading-relaxed">
        This is where your full article content would go. You can add multiple paragraphs, 
        code snippets, images, blockquotes, and other rich content elements here. 
        Consider integrating with a CMS like Sanity, Contentful, or using MDX for dynamic content.
      </p>

      <p className="leading-relaxed">
        The layout focuses on readability with generous spacing, large typography, and 
        responsive design similar to popular blogging platforms like Medium and Dev.to. 
        Make sure to maintain good contrast and use proper font sizes for accessibility.
      </p>

      {/* RESTRAINED KEY TAKEAWAY BOX */}
      <div className={`p-6 md:p-8 rounded-xl border ${
        darkMode 
          ? 'bg-slate-900/40 border-slate-800' 
          : 'bg-slate-50 border-slate-100'
      }`}>
        <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-100 text-base flex items-center gap-2">
          <span>💡</span> Key Takeaway
        </h3>
        <p className="leading-relaxed text-sm text-slate-600 dark:text-slate-400">
          Always prioritize user experience, performance, and accessibility when building 
          your applications. These foundations will make your projects stand out in the competitive market.
        </p>
      </div>
    </div>

    {/* METADATA TAGS */}
    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-900">
      {selectedPost.tags.map((tag: string, idx: number): ReactElement => (
        <span
          key={idx}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
            darkMode
              ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
          }`}
        >
          #{tag}
        </span>
      ))}
    </div>

    {/* MODERN COMPACT FOOTER */}
    <div className={`pt-8 border-t ${darkMode ? 'border-slate-900' : 'border-slate-100'}`}>
      <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 rounded-xl border ${
        darkMode
          ? 'bg-slate-900/20 border-slate-900'
          : 'bg-slate-50/60 border-slate-100'
      }`}>
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-0.5">Thanks for reading!</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Published by <span className="font-semibold text-blue-500">{selectedPost.author}</span>
          </p>
        </div>

        <button
          onClick={() => setSelectedPost(null)}
          className={`
            px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 w-full sm:w-auto text-center
            ${
              darkMode 
                ? 'bg-slate-100 text-slate-950 hover:bg-slate-200' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }
          `}
        >
          Close Article
        </button>
      </div>
    </div>

  </div>
</div>

        </div>
      )}

    </section>
  );
}