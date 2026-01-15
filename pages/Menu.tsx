
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, STALLS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  
  const itemsPerPage = 6;
  const categories = ['All', 'Takjil', 'Main Dishes', 'Refreshments', 'Desserts'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getStallName = (stallId: string) => {
    return STALLS.find(s => s.id === stallId)?.name || 'Unknown Stall';
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-12 pb-32">
      {/* Header Section */}
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="space-y-4">
            <nav className="flex items-center justify-center md:justify-start gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-500">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[10px] md:text-[12px]">chevron_right</span>
              <span className="text-primary">Master Menu</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Curated <span className="text-gold italic">Flavours</span>
            </h1>
            <p className="text-slate-400 max-w-xl text-sm md:text-lg font-light leading-relaxed">
              Explore the collective kitchen of the Grand Bazaar. From heritage recipes to modern artisanal treats.
            </p>
          </div>

          <div className="w-full md:max-w-md bg-white/5 p-3 md:p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
             <div className="relative group">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors text-sm md:text-base">search</span>
               <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  placeholder="What are you craving?" 
                  className="w-full bg-background-dark/50 border-white/5 rounded-xl pl-9 md:pl-10 pr-4 py-2.5 md:py-3 text-xs md:text-sm text-white focus:ring-2 focus:ring-gold/50 transition-all placeholder:text-gray-600"
               />
             </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12 justify-center md:justify-start">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
            className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all border ${activeCategory === cat ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      {paginatedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {paginatedItems.map((item) => (
            <div key={item.id} className="group bg-surface-dark border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-background-dark/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full">
                  <span className="text-gold font-bold text-xs md:text-sm">{item.price} {item.currency}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[8px] md:text-[10px] font-black px-2 py-1 rounded uppercase tracking-[0.2em]">{item.category}</span>
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors line-clamp-1">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[12px] md:text-[14px] text-gray-500">storefront</span>
                    <span className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest line-clamp-1">{getStallName(item.stallId)}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-xs md:text-sm line-clamp-2 font-light leading-relaxed min-h-[35px] md:min-h-[40px]">{item.description}</p>
                
                <div className="flex gap-2 pt-2 md:pt-4">
                  <button 
                    onClick={() => setSelectedMenuItem(item)}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2.5 md:py-3 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
                  >
                    Details
                  </button>
                  <Link 
                    to={`/stall/${item.stallId}`}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-2.5 md:py-3 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all text-center flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    Visit Stall
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 md:py-32 text-center space-y-6">
          <div className="size-16 md:size-20 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-600">
             <span className="material-symbols-outlined text-3xl md:text-4xl">no_meals</span>
          </div>
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold">No delicacies found</h3>
            <p className="text-gray-500 text-xs md:text-sm mt-2">Try adjusting your filters or search query.</p>
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 md:mt-20 flex items-center justify-center gap-3 md:gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="size-10 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
          </button>
          
          <div className="flex items-center gap-1.5 md:gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`size-10 md:size-12 rounded-xl text-xs md:text-sm font-black transition-all ${currentPage === i + 1 ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="size-10 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
          </button>
        </div>
      )}

      {/* Details Modal */}
      {selectedMenuItem && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center px-4 md:px-6 py-6 md:py-10">
          <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-md" onClick={() => setSelectedMenuItem(null)}></div>
          <div className="relative w-full max-w-3xl max-h-full md:max-h-[90vh] bg-surface-dark border border-white/10 rounded-3xl overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="sticky top-0 right-0 z-[60] flex justify-end p-4 md:p-6 pointer-events-none">
              <button 
                onClick={() => setSelectedMenuItem(null)}
                className="pointer-events-auto size-9 md:size-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
              >
                <span className="material-symbols-outlined text-sm md:text-base">close</span>
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row -mt-12 md:-mt-20">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src={selectedMenuItem.image} className="w-full h-full object-cover" alt={selectedMenuItem.name} />
              </div>
              <div className="md:w-1/2 p-6 md:p-12 space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-primary/20 text-primary border border-primary/30 px-2.5 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">{selectedMenuItem.category}</span>
                    <span className="text-gold font-bold text-lg md:text-xl">{selectedMenuItem.price} {selectedMenuItem.currency}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">{selectedMenuItem.name}</h2>
                  <Link 
                    to={`/stall/${selectedMenuItem.stallId}`}
                    className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
                  >
                    <span className="material-symbols-outlined text-[14px] md:text-[16px]">storefront</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Available at {getStallName(selectedMenuItem.stallId)}</span>
                    <span className="material-symbols-outlined text-[12px] md:text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gold">Description</h4>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">{selectedMenuItem.description}</p>
                </div>

                {selectedMenuItem.tags && (
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gold">Good to Know</h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedMenuItem.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 text-[9px] md:text-[10px] text-slate-400 rounded-lg">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
