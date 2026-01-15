
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Stall', path: '/directory', icon: 'storefront' },
    { label: 'Menu', path: '/menu', icon: 'restaurant_menu' },
    { label: 'About', path: '/about', icon: 'info' },
    { label: 'Contact', path: '/contact', icon: 'chat_bubble' },
  ];

  const socialIcons = [
    { icon: 'brand_awareness', label: 'Instagram' },
    { icon: 'public', label: 'Facebook' },
    { icon: 'share', label: 'Twitter' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <img src="/icon-web.png" alt="Ramadhan Fest Logo" className="h-10 w-10 object-contain" />
              <h1 className="text-xl font-extrabold tracking-tight dark:text-white hidden sm:block uppercase">
                RAMADHAN<span className="text-accent-gold">FEST</span>
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`text-[13px] font-bold transition-all tracking-widest uppercase ${isActive(item.path) ? 'text-primary' : 'hover:text-primary text-gray-400'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-6 flex-1 justify-end max-w-xl">
            <div className="relative w-full max-w-xs group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="w-full bg-gray-100 dark:bg-surface-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-gray-500" 
                placeholder="Find flavor..." 
                type="text"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-lg">
        <div className="bg-surface-dark/90 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className="relative flex flex-col items-center gap-1 group min-w-[60px]"
              >
                <div className={`size-9 rounded-full flex items-center justify-center transition-all duration-300 ${active ? 'text-primary bg-primary/10' : 'text-gray-400 hover:text-white'}`}>
                  <span className={`material-symbols-outlined text-xl transition-transform ${active ? 'scale-110 fill-1' : 'group-active:scale-90'}`}>
                    {item.icon}
                  </span>
                </div>
                {active && (
                  <div className="absolute -bottom-1 size-1 bg-gold rounded-full shadow-[0_0_8px_#D4AF37]"></div>
                )}
                <span className={`text-[8px] font-black uppercase tracking-tighter transition-colors ${active ? 'text-white' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Enhanced Footer */}
      <footer className="bg-[#0a0c10] relative overflow-hidden mt-12 border-t border-white/5">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 geometric-pattern opacity-[0.05]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 size-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/icon-web.png" alt="Ramadhan Fest Logo" className="h-14 w-14 object-contain" />
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-white uppercase leading-none">
                    Ramadhan<span className="text-accent-gold">Fest</span>
                  </h2>
                  <p className="text-[10px] text-primary font-black tracking-[0.4em] uppercase mt-1.5 opacity-80">The Grand Bazaar</p>
                </div>
              </div>
              <p className="text-base text-gray-400 leading-relaxed font-light max-w-xs">
                Celebrating a decade of culinary heritage, community unity, and the finest flavors of the holy season.
              </p>
              <div className="flex items-center gap-4">
                {socialIcons.map((social) => (
                  <button key={social.label} className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 hover:bg-gold/10 transition-all duration-300 group">
                    <span className="material-symbols-outlined text-xl transition-transform group-hover:scale-110">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="lg:pl-8">
              <h3 className="text-white font-bold mb-10 text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-8 h-px bg-gold/50"></span>
                Navigation
              </h3>
              <ul className="grid grid-cols-1 gap-5 text-[13px] font-medium text-gray-400">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link className="hover:text-gold transition-all flex items-center gap-3 group" to={item.path}>
                      <span className="size-1 bg-gray-700 rounded-full group-hover:bg-gold group-hover:scale-150 transition-all"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Info Column */}
            <div>
              <h3 className="text-white font-bold mb-10 text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-8 h-px bg-gold/50"></span>
                Bazaar Hours
              </h3>
              <div className="space-y-6">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-white/20 transition-all">
                  <div className="size-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <span className="material-symbols-outlined text-xl">schedule</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Iftar to Suhoor</p>
                    <p className="text-white font-bold text-lg leading-none">17:00 - 03:00</p>
                  </div>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-white/20 transition-all">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-0.5">Festival Location</p>
                    <p className="text-white font-bold text-sm">Downtown Grand Arena</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="bg-gradient-to-br from-white/10 to-transparent p-1px rounded-3xl">
              <div className="bg-[#12151a] p-8 rounded-[23px] h-full flex flex-col justify-between border border-white/5">
                <div>
                  <h3 className="text-white font-bold mb-3 text-xl font-serif">Join the Feast</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">Receive exclusive updates on new stalls and special Iftar recipes.</p>
                </div>
                <div className="space-y-3">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg">mail</span>
                    <input 
                      className="w-full bg-black/40 border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-xs text-white focus:ring-1 focus:ring-gold transition-all placeholder:text-gray-700" 
                      placeholder="Enter email address" 
                      type="email" 
                    />
                  </div>
                  <button className="w-full bg-gold hover:bg-gold/90 text-charcoal py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-gold/5 active:scale-95">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
                &copy; 2024 Ramadhan Food Festival. Crafted with passion by <span className="text-primary hover:text-gold transition-colors cursor-pointer font-black">Stevencodelab</span>
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-[10px] text-gray-600 font-bold uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] text-gray-600 font-bold uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
              <div className="flex items-center gap-2 text-[10px] text-gold/40 font-bold uppercase">
                <span className="material-symbols-outlined text-[12px]">verified</span>
                Certified Halal
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
