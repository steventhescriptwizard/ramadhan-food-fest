
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="bg-background-dark py-24 px-6 border-b border-white/5 relative">
        <div className="absolute inset-0 islamic-pattern opacity-30"></div>
        <div className="max-w-[1200px] mx-auto text-center space-y-6 relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">Let's <span className="text-gold">Connect</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Have a question about the festival or want to share your experience? Our team is here to assist you with a spirit of hospitality.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Contact Cards */}
          {[
            { icon: 'support_agent', title: 'Support', subtitle: 'Ticket & Order Help', info: 'support@ramadhanfest.com', color: 'text-primary' },
            { icon: 'business_center', title: 'Partnerships', subtitle: 'Vendor Opportunities', info: 'partners@ramadhanfest.com', color: 'text-gold' },
            { icon: 'campaign', title: 'Media', subtitle: 'Press & Collaborations', info: 'media@ramadhanfest.com', color: 'text-purple-400' }
          ].map((card, i) => (
            <div key={i} className="bg-surface-dark border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all group">
              <div className={`size-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${card.color}`}>
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-white font-bold text-xl mb-1">{card.title}</h3>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-4">{card.subtitle}</p>
              <p className="text-primary font-bold">{card.info}</p>
            </div>
          ))}
        </div>

        {/* Form & Info Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <div className="bg-deep-slate/30 border border-white/5 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input className="w-full bg-background-dark border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-gold transition-all" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input className="w-full bg-background-dark border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-gold transition-all" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                  <select className="w-full bg-background-dark border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-gold transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Vendor Question</option>
                    <option>Lost & Found</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                  <textarea className="w-full bg-background-dark border-white/10 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-gold transition-all h-40 resize-none" placeholder="How can we help you today?"></textarea>
                </div>
                <button className="w-full bg-gold hover:bg-gold/90 text-charcoal py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-gold/10">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-gold">location_on</span>
                Festival Location
              </h3>
              <div className="bg-surface-dark border border-white/10 p-6 rounded-2xl space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Grand Arena East Wing, <br/>Downtown Boulevard, <br/>Plot 402, Financial District.
                </p>
                <div className="h-48 bg-background-dark rounded-xl relative overflow-hidden flex items-center justify-center border border-white/5">
                   <div className="absolute inset-0 geometric-pattern opacity-20"></div>
                   <span className="material-symbols-outlined text-gold/20 text-6xl">map</span>
                   <button className="absolute bottom-4 right-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-4 py-2 rounded-lg transition-all">
                     Open in Google Maps
                   </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 text-sm">Mon - Thu</span>
                  <span className="text-white text-sm font-bold">17:00 - 01:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 text-sm">Fri - Sun</span>
                  <span className="text-white text-sm font-bold">17:00 - 03:00</span>
                </div>
                <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-4 italic">
                  *Special Suhoor hours during last 10 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
