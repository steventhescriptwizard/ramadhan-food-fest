
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { STALLS } from '../constants';

const Directory: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10">
      {/* Breadcrumbs & Heading */}
      <div className="mb-12">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link className="hover:text-primary" to="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-gray-400">Festival Marketplace</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary font-semibold">Directory</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl font-bold mb-4 text-accent-gold">The Grand Bazaar</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">Discover a curated selection of culinary artisans this Ramadhan. From traditional heritage recipes to modern fusion delights.</p>
          </div>
          <div className="flex items-center gap-3 bg-surface-dark p-1 rounded-lg border border-white/5">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Grid
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
          <div className="p-6 rounded-xl bg-surface-dark border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern"></div>
            <div className="relative z-10">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Advanced Filters
              </h3>
              <div className="space-y-4">
                <details className="group bg-background-dark/50 rounded-lg overflow-hidden border border-white/5" open>
                  <summary className="p-4 flex items-center justify-between cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="text-sm font-semibold text-gray-300">Cuisine Categories</span>
                    <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="px-4 pb-4 pt-2 space-y-3">
                    {['Traditional Iftar', 'Middle Eastern', 'Sweet Delicacy', 'Modern Fusion'].map((cat, i) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group/item">
                        <input defaultChecked={i === 0} className="rounded text-primary focus:ring-primary bg-background-dark border-white/10" type="checkbox"/>
                        <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{cat}</span>
                      </label>
                    ))}
                  </div>
                </details>
                <details className="group bg-background-dark/50 rounded-lg overflow-hidden border border-white/5">
                  <summary className="p-4 flex items-center justify-between cursor-pointer list-none hover:bg-white/5 transition-colors">
                    <span className="text-sm font-semibold text-gray-300">Price Range</span>
                    <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="px-4 pb-4 pt-2">
                    <input className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-bold uppercase">
                      <span>Budget</span>
                      <span>Premium</span>
                    </div>
                  </div>
                </details>
              </div>
              <button className="w-full mt-8 bg-primary/20 hover:bg-primary text-primary hover:text-white py-3 rounded-lg text-sm font-bold transition-all border border-primary/30">
                Apply Selection
              </button>
              <button className="w-full mt-2 text-xs text-gray-500 hover:text-white py-2 transition-colors">
                Clear all filters
              </button>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-accent-gold/20 to-purple-900/20 border border-accent-gold/30">
            <span className="material-symbols-outlined text-accent-gold mb-2">auto_awesome</span>
            <h4 className="text-white font-bold text-lg mb-2">Ramadhan Special</h4>
            <p className="text-xs text-gray-400 mb-4">Get 20% off when ordering from 5 different stalls using our official app.</p>
            <button className="text-xs font-bold text-accent-gold flex items-center gap-1 group">
              Learn More <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </aside>

        {/* Main Content Listing */}
        <div className="flex-1">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {STALLS.map((stall) => (
                <div key={stall.id} className="group relative bg-surface-dark rounded-2xl overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="h-56 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10 opacity-60"></div>
                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src={stall.image} alt={stall.name}/>
                    {stall.isMustTry && (
                      <span className="absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Must Try</span>
                    )}
                    {stall.isBestseller && (
                      <span className="absolute top-4 right-4 z-20 bg-background-dark/80 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest border border-white/10">Bestseller</span>
                    )}
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-10 left-6 z-20">
                      <div className="size-16 rounded-xl bg-white p-1 shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                        <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center text-primary font-bold text-xl border border-gray-200 uppercase">
                          {stall.shortName}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-accent-gold transition-colors">{stall.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-primary font-medium">{stall.cuisine}</span>
                        <span className="size-1 bg-gray-600 rounded-full"></span>
                        <div className="flex items-center text-accent-gold">
                          <span className="material-symbols-outlined text-xs fill-1">star</span>
                          <span className="text-xs font-bold ml-1">{stall.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-2 mb-6">{stall.description}</p>
                      <Link 
                        to={`/stall/${stall.id}`}
                        className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all"
                      >
                        View Menu
                        <span className="material-symbols-outlined text-sm">restaurant_menu</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-12 text-center group">
                <div className="size-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-gray-500 text-3xl">add</span>
                </div>
                <p className="text-sm font-bold text-gray-500">More Stalls Arriving Soon</p>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-2">Stage 2 Expansion</p>
              </div>
            </div>
          ) : (
             <div className="space-y-4">
               {STALLS.map((stall) => (
                  <div key={stall.id} className="bg-surface-dark border border-white/5 rounded-xl p-4 flex gap-6 hover:border-primary/50 transition-all items-center">
                    <div className="size-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={stall.image} className="w-full h-full object-cover" alt={stall.name} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-serif text-white">{stall.name}</h3>
                      <p className="text-xs text-primary mb-2">{stall.cuisine}</p>
                      <p className="text-sm text-gray-400 line-clamp-1">{stall.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3 min-w-[120px]">
                       <div className="flex items-center text-accent-gold">
                          <span className="material-symbols-outlined text-sm fill-1">star</span>
                          <span className="text-sm font-bold ml-1">{stall.rating}</span>
                        </div>
                        <Link to={`/stall/${stall.id}`} className="px-4 py-2 bg-primary text-white rounded text-xs font-bold uppercase">View Menu</Link>
                    </div>
                  </div>
               ))}
             </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">3</button>
            <span className="px-2 text-gray-600">...</span>
            <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">8</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
