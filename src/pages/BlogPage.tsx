import React, { useState } from 'react';
import { Search, ArrowRight, Clock, User, Calendar, BookOpen, X, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/dentalData';
import { BlogPost } from '../types';

interface BlogPageProps {
  activePost: BlogPost | null;
  setActivePost: (post: BlogPost | null) => void;
  onOpenBooking: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  activePost,
  setActivePost,
  onOpenBooking,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Preventive Care',
    'Cosmetic Dentistry',
    'Oral Health Facts',
    'Pediatric Care',
    'General Health',
    'Restorative Dentistry',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-cyan-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block mb-2">
            Oral Health Journal & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004F6E] tracking-tight">
            Evidence-Based Dental Insights
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Expert articles authored by our board-certified dentists to help you make informed decisions about oral health, hygiene, and aesthetics.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dental articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-hidden focus:border-[#00A8CC]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#004F6E] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#004F6E]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#004F6E] group-hover:text-[#00A8CC] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">By {post.author}</span>
                <span className="text-[#00A8CC] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 flex flex-col">
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
              <div>
                <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block">
                  {activePost.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#004F6E] mt-1 leading-snug">
                  {activePost.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                  <span>By {activePost.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePost.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activePost.readTime}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close article reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl overflow-hidden aspect-16/9 bg-slate-100">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Key takeaways callout */}
              <div className="bg-cyan-50/60 border border-cyan-200/80 rounded-xl p-5">
                <h4 className="text-xs font-bold text-[#004F6E] uppercase tracking-wider mb-2.5">
                  Key Medical Takeaways
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {activePost.keyTakeaways.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00A8CC] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body paragraphs */}
              <div className="prose text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                {activePost.content.map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Author & CTA Footer */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Have questions regarding this treatment?</span>
                  <p className="font-semibold text-slate-800">Our dentists offer complimentary consultations.</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActivePost(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
