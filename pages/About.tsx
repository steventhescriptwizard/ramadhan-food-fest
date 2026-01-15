
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover scale-105"
            alt="Islamic Architecture Festival"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 via-background-dark/50 to-background-dark z-10"></div>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 geometric-pattern z-20 opacity-20"></div>
        </div>
        
        <div className="relative z-30 text-center space-y-6 px-6 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-md">
            Our Legacy & Vision
          </span>
          <h1 className="font-serif text-white text-5xl md:text-8xl font-bold tracking-tight drop-shadow-2xl">
            Heritage in Every <span className="text-gold italic">Flavour</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-lg">
            Celebrating a decade of tradition, bringing the heartbeat of the city's spiritual and culinary journey to life.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-[1200px] mx-auto px-6 -mt-24 relative z-40">
        <div className="bg-surface-dark border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-gold/5 rotate-12">
            <span className="material-symbols-outlined text-[200px]">history_edu</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">The Grand Bazaar Vision</h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 leading-relaxed text-lg">
                What started as a small community gathering in a local courtyard has blossomed into the region's most anticipated culinary event. We believe that Iftar is more than just a meal; it's a sacred moment of connection.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our mission is to provide a platform for heritage recipes that were once confined to family kitchens, bringing the diverse flavors of the Muslim world to one magnificent marketplace.
              </p>
              <div className="pt-4 flex gap-8">
                <div>
                  <p className="text-3xl font-black text-white">10+</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Years of Tradition</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">500+</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Recipe Debuts</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  alt="Traditional Marketplace Sweets"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-charcoal text-xs font-black uppercase tracking-tighter leading-tight">
                  "Voted #1 Cultural Experience 2023"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Core Pillars Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-32">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Our Core Pillars</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            { icon: 'mosque', title: 'Authenticity', desc: 'Every vendor is vetted for their commitment to traditional preparation methods and heritage spices.' },
            { icon: 'groups', title: 'Unity', desc: 'A space where every culture is celebrated and every guest is welcomed with open hearts.' },
            { icon: 'workspace_premium', title: 'Excellence', desc: 'From safety standards to flavor profiles, we strive for nothing less than a 5-star experience.' }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-8 group relative">
              {/* Icon Container with fixed dimensions to prevent glitching */}
              <div className="relative size-28 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500 scale-100 group-hover:scale-110"></div>
                <span className="material-symbols-outlined text-5xl text-gold relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]">
                  {item.icon}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed px-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="bg-primary/20 border border-primary/30 rounded-3xl p-12 text-center relative overflow-hidden group">
          <div className="absolute inset-0 geometric-pattern opacity-10"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold text-white">Want to join the family?</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-lg">We are always looking for passionate artisans and volunteers to join our growing bazaar.</p>
            <button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-primary/30 hover:-translate-y-1 active:scale-95">
              Apply as Vendor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
