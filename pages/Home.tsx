
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { STALLS } from '../constants';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920", 
  "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1920", 
  "https://images.unsplash.com/photo-1565123409695-7b5ef63a24b5?auto=format&fit=crop&q=80&w=1920", 
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920"  
];

const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentStallIndex, setCurrentStallIndex] = useState(0);
  const [prevStallIndex, setPrevStallIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const sliderStalls = STALLS;
  const stallIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerView = useMemo(() => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  }, [windowWidth]);

  const maxIndex = Math.max(0, sliderStalls.length - itemsPerView);
  const isRewinding = currentStallIndex === 0 && prevStallIndex > 0;

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  const startStallTimer = () => {
    if (stallIntervalRef.current) clearInterval(stallIntervalRef.current);
    stallIntervalRef.current = setInterval(() => {
      setCurrentStallIndex((prev) => {
        setPrevStallIndex(prev);
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
  };

  useEffect(() => {
    startStallTimer();
    return () => {
      if (stallIntervalRef.current) clearInterval(stallIntervalRef.current);
    };
  }, [maxIndex]);

  const handleManualNav = (index: number) => {
    setPrevStallIndex(currentStallIndex);
    setCurrentStallIndex(index);
    startStallTimer(); 
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden py-20 px-4">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
                index === currentHeroIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/40 to-background-dark z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 geometric-pattern z-20 opacity-20"></div>
        </div>
        
        <div className="relative z-40 max-w-[960px] w-full text-center flex flex-col items-center gap-6 md:gap-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full border border-gold/40 bg-gold/10 text-gold text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              The Holy Month Celebration
            </span>
            <h1 className="font-serif text-white text-3xl md:text-8xl font-black leading-tight tracking-tight drop-shadow-2xl">
              A Journey of Flavors <br/> <span className="text-gold">this Holy Month</span>
            </h1>
            <p className="text-slate-200 text-sm md:text-2xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-4">
              Explore authentic Iftar stalls with traditional dishes, artisanal sweets, and festive treats crafted for the soul.
            </p>
          </div>

          <div className="w-full max-w-2xl bg-white/5 p-1.5 md:p-2 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl mx-4">
            <div className="flex gap-1.5 md:gap-2 h-12 md:h-16">
              <div className="flex-1 flex items-center bg-background-dark/60 rounded-xl px-3 md:px-4 gap-2 md:gap-3 focus-within:ring-2 focus-within:ring-gold transition-all">
                <span className="material-symbols-outlined text-gold text-sm md:text-base">search</span>
                <input className="bg-transparent border-none text-white w-full focus:ring-0 placeholder:text-slate-400 text-xs md:text-sm" placeholder="Find biryani or stalls..."/>
              </div>
              <Link to="/directory" className="bg-gold hover:bg-gold/90 text-charcoal px-4 md:px-8 rounded-xl font-black transition-all active:scale-95 shadow-xl flex items-center justify-center uppercase tracking-widest text-[10px] md:text-xs">
                Explore
              </Link>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            {HERO_IMAGES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all duration-500 ${i === currentHeroIndex ? 'w-6 md:w-8 bg-gold' : 'w-1.5 md:w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stalls Slider Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-40 py-24 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Handpicked Selection</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white tracking-tight">Featured Stalls</h2>
            <div className="h-1.5 w-24 bg-gold rounded-full"></div>
          </div>
          <Link to="/directory" className="text-gold text-sm font-bold flex items-center gap-2 group hover:text-white transition-colors">
            View All Stalls
            <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform"
            style={{ 
              transform: `translateX(-${(currentStallIndex * 100) / sliderStalls.length}%)`,
              width: `${(sliderStalls.length * 100) / itemsPerView}%`,
              transitionDuration: isRewinding ? '2500ms' : '1000ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {sliderStalls.map((stall) => (
              <div 
                key={stall.id} 
                className="px-3 md:px-4"
                style={{ width: `${100 / sliderStalls.length}%` }}
              >
                <div className="group bg-deep-slate/50 rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold/10 h-full flex flex-col relative">
                  <div className="relative h-48 md:h-64 overflow-hidden flex-shrink-0">
                    <img 
                      src={stall.image} 
                      alt={stall.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                      <span className="material-symbols-outlined text-gold text-xs fill-1">star</span>
                      <span className="text-white text-[10px] font-black">{stall.rating}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6 md:p-8 space-y-4 md:y-5 flex-grow flex flex-col justify-between relative">
                    <div className="absolute -top-8 md:-top-10 right-6 md:right-8">
                       <div className="size-12 md:size-16 rounded-xl bg-white shadow-2xl p-1 flex items-center justify-center border-4 border-deep-slate transform rotate-3 group-hover:rotate-0 transition-transform">
                          <span className="text-charcoal font-black text-sm md:text-xl uppercase">{stall.shortName}</span>
                       </div>
                    </div>
                    <div>
                      <div className="space-y-1">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-gold transition-colors line-clamp-1">{stall.name}</h3>
                        <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{stall.cuisine}</p>
                      </div>
                      <p className="text-slate-400 text-xs md:text-sm mt-3 md:mt-4 line-clamp-3 font-light leading-relaxed min-h-[50px] md:min-h-[60px]">{stall.description}</p>
                    </div>
                    <Link 
                      to={`/stall/${stall.id}`}
                      className="w-full text-center py-3.5 md:py-4 rounded-xl border border-gold/30 text-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold hover:text-charcoal transition-all shadow-lg hover:shadow-gold/20"
                    >
                      Explore Menu
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 md:gap-3 mt-12 md:mt-16">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button 
                key={i}
                onClick={() => handleManualNav(i)}
                className={`group relative h-1.5 transition-all duration-700 rounded-full overflow-hidden ${i === currentStallIndex ? 'w-8 md:w-12 bg-gold shadow-lg shadow-gold/20' : 'w-3 md:w-4 bg-white/10 hover:bg-white/30'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="w-full py-8 md:py-16 flex items-center justify-center">
        <div className="flex items-center gap-4 md:gap-6 text-gold/20">
          <div className="h-[1px] w-20 md:w-80 bg-gradient-to-r from-transparent to-gold/20"></div>
          <span className="material-symbols-outlined scale-75">flare</span>
          <span className="material-symbols-outlined">flare</span>
          <span className="material-symbols-outlined scale-75">flare</span>
          <div className="h-[1px] w-20 md:w-80 bg-gradient-to-l from-transparent to-gold/20"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
