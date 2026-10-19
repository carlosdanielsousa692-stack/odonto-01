import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/dentalData';

interface FaqPageProps {
  onOpenBooking: () => void;
  onNavigate: (tab: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenBooking, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const categories = ['All', 'General', 'Insurance & Pricing', 'Procedures', 'Emergency'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-cyan-50/60 to-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold text-[#00A8CC] uppercase tracking-wider block mb-2">
            Patient Support & Knowledge
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#004F6E] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            Find clear, honest answers regarding treatments, pain management, insurance coverage, and emergency protocols.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. insurance, pain, whitening, implants)..."
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

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-700">No matching questions found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search terms or ask our friendly reception team directly.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#00A8CC] bg-cyan-50 px-2.5 py-1 rounded-md shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#004F6E]">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-slate-100 mt-2 text-slate-600 text-sm leading-relaxed">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-[#004F6E] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-semibold text-[#FDD835] uppercase tracking-wider block">
              Still Have Specific Questions?
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Speak Directly with Our Dental Team
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Call our reception team at {CLINIC_INFO.receptionPhone} or send us a message anytime.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#00A8CC] hover:bg-[#008cae] text-white text-xs font-semibold rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Book Consultation
            </button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
