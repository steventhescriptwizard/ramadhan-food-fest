
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { STALLS, MENU_ITEMS } from '../constants';
import { Stall, MenuItem, CartItem } from '../types';

const StallDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [stall, setStall] = useState<Stall | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Takjil');

  useEffect(() => {
    const found = STALLS.find(s => s.id === id);
    setStall(found || STALLS.find(s => s.id === 'al-barakah') || null);
  }, [id]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const cartTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  if (!stall) return <div className="p-20 text-center">Loading stall...</div>;

  const filteredMenuItems = MENU_ITEMS.filter(m => m.stallId === stall.id && m.category === activeCategory);
  const chefSpecials = MENU_ITEMS.filter(m => m.stallId === stall.id && m.isChefSpecial);

  return (
    <div className="relative overflow-x-hidden pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:h-[450px] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-transparent to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105" 
          style={{ backgroundImage: `url('${stall.image}')` }}
        ></div>
        <div className="relative z-20 max-w-[1200px] mx-auto w-full pb-8 md:pb-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-2.5 py-0.5 md:py-1 rounded-full">
                <span className="material-symbols-outlined text-primary text-xs">verified</span>
                <span className="text-primary text-[9px] md:text-xs font-bold uppercase tracking-widest">Premium Vendor</span>
              </div>
              <h1 className="text-3xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight">
                {stall.name}
              </h1>
              <p className="text-slate-300 max-w-xl text-sm md:text-lg font-light leading-relaxed">
                {stall.description}
              </p>
            </div>
            {/* Quick Stats */}
            <div className="flex gap-2.5 md:gap-4 overflow-x-auto pb-2 md:pb-0">
              {[
                { label: 'Rating', value: stall.rating, icon: 'star', iconColor: 'text-gold' },
                { label: 'Wait', value: stall.waitTime || '15m', icon: 'timer', iconColor: 'text-primary' },
                { label: 'Halal', value: 'Yes', icon: 'check_circle', iconColor: 'text-green-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-deep-slate/80 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-xl flex flex-col items-center min-w-[80px] md:min-w-[100px] hover:shadow-2xl hover:shadow-primary/10 transition-all">
                  <span className="text-base md:text-2xl font-bold text-white">{stat.value}</span>
                  <div className="flex items-center gap-1">
                    <span className={`material-symbols-outlined ${stat.iconColor} text-[12px] md:text-[16px] fill-[1]`}>{stat.icon}</span>
                    <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-[80px] z-40 bg-background-dark/95 border-b border-white/5 px-4 md:px-6 backdrop-blur-lg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-6 md:gap-12 overflow-x-auto">
            {['Takjil', 'Main Dishes', 'Refreshments', 'Desserts'].map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`relative py-4 md:py-6 text-[10px] md:text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap ${activeCategory === cat ? 'text-primary border-b-2 border-primary' : 'text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-12 islamic-pattern">
        <section className="mb-16 md:mb-20">
          <div className="flex flex-col items-center mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{activeCategory}</h2>
            <div className="h-[2px] w-32 md:w-64 bg-gold opacity-30 rounded-full"></div>
            <p className="text-slate-400 mt-3 text-xs md:text-sm tracking-wide">Delicacies curated for this holy month.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredMenuItems.length > 0 ? filteredMenuItems.map((item) => (
              <div key={item.id} className="group bg-deep-slate/40 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-gold font-bold text-xs md:text-sm">{item.price} {item.currency}</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white font-serif line-clamp-1">{item.name}</h3>
                    <span className="material-symbols-outlined text-primary text-xl cursor-pointer hover:fill-1 transition-all">favorite</span>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">{item.description}</p>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-primary py-3 rounded-lg font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all active:scale-95"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-20 text-center text-slate-500 text-sm italic">
                No items currently available in this category at {stall.name}.
              </div>
            )}
          </div>
        </section>

        {activeCategory === 'Main Dishes' && chefSpecials.length > 0 && (
          <section className="mb-20">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">Signature Specials</h2>
              <div className="h-[2px] w-32 md:w-64 bg-gold opacity-30 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:gap-10">
              {chefSpecials.map((item) => (
                <div key={item.id} className="group flex flex-col md:flex-row bg-deep-slate/60 border border-primary/20 rounded-2xl overflow-hidden transition-all">
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20 bg-purple-600 px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                      Chef's Special
                    </div>
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.image} alt={item.name}/>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gold font-bold tracking-widest text-[10px] md:text-sm uppercase">House Classic</span>
                      <span className="text-primary font-bold text-xl md:text-2xl">{item.price} {item.currency}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 md:mb-6">{item.name}</h3>
                    <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-10">
                      {item.tags?.map(tag => (
                        <span key={tag} className="px-2 md:px-3 py-1 rounded bg-white/5 border border-white/10 text-[8px] md:text-[10px] text-slate-400 font-bold uppercase">{tag}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-primary hover:bg-primary/80 text-white py-3.5 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all shadow-lg shadow-primary/20 active:scale-95"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Floating Order Button */}
      {cartCount > 0 && (
        <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50">
          <button className="flex items-center gap-3 md:gap-4 bg-primary text-white px-5 md:px-8 py-3.5 md:py-4 rounded-full shadow-2xl shadow-primary/50 group transition-transform hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform text-lg md:text-2xl">shopping_bag</span>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-80">View Order</span>
              <span className="text-base md:text-lg font-bold">{cartCount} Items</span>
            </div>
            <div className="h-6 md:h-8 w-px bg-white/20 mx-1 md:mx-2"></div>
            <span className="text-base md:text-lg font-bold">{cartTotal} AED</span>
          </button>
        </div>
      )}

      {/* Footer Decor */}
      <footer className="mt-12 md:mt-20 py-16 md:py-20 border-t border-white/5 bg-deep-slate/20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="flex justify-center mb-8 md:mb-10">
            <span className="material-symbols-outlined text-gold text-4xl md:text-5xl opacity-40">temple_hindu</span>
          </div>
          <h4 className="font-serif italic text-lg md:text-2xl text-white mb-4">"Feeding the soul, one grain at a time."</h4>
          <div className="flex justify-center gap-6 md:gap-8 mt-10 md:mt-12 text-slate-500 text-xs md:text-sm">
            <button className="hover:text-primary transition-colors">Instagram</button>
            <button className="hover:text-primary transition-colors">Facebook</button>
            <button className="hover:text-primary transition-colors">Contact</button>
          </div>
          <p className="mt-10 md:mt-12 text-slate-600 text-[9px] md:text-xs tracking-widest uppercase">© 2024 {stall.name}</p>
        </div>
      </footer>
    </div>
  );
};

export default StallDetails;
