
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Section } from './components/Section';
import { BookingForm } from './components/BookingForm';
import { CustomCursor } from './components/CustomCursor';
import { SERVICES, PACKAGES, TESTIMONIALS, GALLERY_IMAGES } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#about' },
    { name: 'Curations', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#book' },
  ];

  return (
    <div className="min-h-screen bg-[#2E2E2E]">
      <CustomCursor />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-[#2E2E2E]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="hidden lg:flex gap-10 flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-[#D4AF37] transition-all">
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex-shrink-0 flex items-center gap-4">
            <img 
              src="https://i.ibb.co/7Tz8WwT/logo.png" 
              alt="AURUM Studio" 
              className={`h-12 w-auto transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-110'}`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <h1 className="hidden text-3xl font-serif tracking-[0.2em] uppercase font-black text-white">AURUM</h1>
          </div>

          <div className="hidden lg:flex justify-end gap-10 flex-1 items-center">
            {navLinks.slice(3).map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-[#D4AF37] transition-all">
                {link.name}
              </a>
            ))}
            <a href="#book" className="px-8 py-2 bg-[#1E7A8A] text-white text-[10px] uppercase tracking-[0.2em] font-black hover:bg-[#D4AF37] transition-all duration-300">
              Book Appointment
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-white hover:text-[#D4AF37] transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#2E2E2E] flex flex-col items-center justify-center p-6"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white hover:text-[#D4AF37]">
              <X size={36} />
            </button>
            <div className="flex flex-col gap-12 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-serif text-white hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#book" onClick={() => setIsMenuOpen(false)} className="mt-8 px-12 py-5 bg-[#1E7A8A] text-white uppercase tracking-[0.3em] text-sm font-black">
                Start Reservation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
            alt="AURUM Luxury Salon" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E] via-transparent to-[#2E2E2E]/50"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.6em] text-sm font-black mb-8 block">
              AURUM LTD • EXCLUSIVE BEAUTY
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif mb-10 leading-none text-white">
              Bespoke <span className="italic text-[#1E7A8A]">Indulgence</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-white/60 mb-12 tracking-wide">
              Step into a realm where high-end artistry meets personalized luxury. Your journey to the golden standard starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="#book" className="px-12 py-5 bg-[#1E7A8A] text-white uppercase tracking-[0.3em] text-[10px] font-black hover:bg-[#D4AF37] transition-all duration-500 shadow-2xl shadow-[#1E7A8A]/20">
                Book Appointment
              </a>
              <a href="#services" className="group flex items-center gap-4 text-white uppercase tracking-[0.3em] text-[10px] font-black hover:text-[#D4AF37] transition-all duration-300">
                Our Services <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative group"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800" alt="Master Stylist" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#D4AF37]/30 -z-0"></div>
            <div className="absolute -top-8 -left-8 w-full h-full bg-[#1E7A8A]/10 -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Heritage</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Refining The <span className="italic text-[#1E7A8A]">Aura</span> of Beauty</h2>
            <div className="space-y-8 text-white/50 font-light leading-relaxed text-lg italic">
              <p>At AURUM LTD, we believe that beauty is not merely a service, but a ritual. Our sanctuary was founded on the principle that every guest deserves an encounter with the extraordinary.</p>
              <p>Our team of master artisans combines decades of global expertise with a modern, analytical approach to hair and skin health. Here, your aesthetic transformation is treated with the gravity of high art.</p>
            </div>
            
            <button className="mt-12 px-12 py-5 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-black hover:bg-[#D4AF37] hover:text-white transition-all duration-500">
              The Philosophy
            </button>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" title="Golden Curations" subtitle="The Mastery" dark={true} className="bg-[#1A1A1A]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-none"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-8 bg-[#2E2E2E]">
                <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#1E7A8A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#D4AF37] mb-3 block font-black">{service.category}</span>
              <h3 className="text-2xl font-serif mb-3 text-white group-hover:text-[#1E7A8A] transition-colors">{service.title}</h3>
              <p className="text-sm text-white/40 font-light mb-6 leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center border-t border-white/5 pt-6">
                <span className="font-serif text-[#D4AF37] text-xl">{service.price}</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all">
                  <ChevronRight size={14} className="group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" title="The Gallery" subtitle="Aura & Light">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group h-96 ${idx === 1 ? 'md:col-span-1 md:h-full' : ''} ${idx === 4 ? 'md:row-span-1' : ''}`}
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E7A8A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <span className="text-white text-[10px] uppercase tracking-[0.4em] font-black">AURUM Couture</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-black mb-16 block italic">Guest Narratives</span>
          <div className="relative">
             <div className="text-[12rem] text-[#1E7A8A]/5 absolute -top-40 left-1/2 -translate-x-1/2 font-serif pointer-events-none">"</div>
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
               className="py-12 relative z-10"
             >
                <div className="flex justify-center gap-1.5 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-2xl md:text-4xl font-serif text-white mb-10 leading-relaxed italic font-light">
                  "{TESTIMONIALS[0].text}"
                </p>
                <div className="text-[10px] uppercase tracking-[0.5em] font-black text-[#D4AF37]">— {TESTIMONIALS[0].name}</div>
             </motion.div>
          </div>
        </div>
      </Section>

      {/* Booking Section */}
      <Section id="book" title="The Reservation" subtitle="Begin Transformation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif text-white mb-6 underline underline-offset-[12px] decoration-[#1E7A8A]">Concierge Services</h3>
              <p className="text-white/40 font-light text-lg leading-relaxed">
                Allow us to curate your visit. Our concierge team is dedicated to orchestrating a seamless experience from the moment you reserve.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                  <MapPin className="text-[#1E7A8A]" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] mb-2">Location</h4>
                  <p className="text-sm text-white/50 font-light">742 Royal Blue Dr<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                  <Clock className="text-[#1E7A8A]" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] mb-2">Hours</h4>
                  <p className="text-sm text-white/50 font-light">Tue - Sat: 9:00 - 20:00<br />Sun: 10:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                  <Phone className="text-[#1E7A8A]" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-black text-[#D4AF37] mb-2">Connect</h4>
                  <p className="text-sm text-white/50 font-light">+1 (212) 555-0100<br />concierge@aurum.ltd</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-6 pt-10 border-t border-white/5">
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#1E7A8A] hover:text-[#1E7A8A] text-white/60 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#1E7A8A] hover:text-[#1E7A8A] text-white/60 transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-[#1E7A8A]/5 -z-10 blur-xl"></div>
            <div className="bg-[#1A1A1A] p-10 md:p-16 border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 translate-x-16 -translate-y-16 rotate-45"></div>
               <BookingForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-md">
            <img src="https://i.ibb.co/7Tz8WwT/logo.png" alt="AURUM LTD" className="h-16 w-auto mb-10" />
            <p className="text-white/30 font-light text-sm leading-relaxed mb-8">
              AURUM LTD is a sanctuary for those who seek the pinnacle of beauty and well-being. We merge global artistry with bespoke care to define a new standard in high-end aesthetic rituals.
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-[#D4AF37]">
              <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
              The Golden Standard
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#1E7A8A] mb-8">Journal</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}><a href={link.href} className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#1E7A8A] mb-8">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">Privacy</a></li>
                <li><a href="#" className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">Terms</a></li>
                <li><a href="#" className="text-xs text-white/40 hover:text-[#D4AF37] transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.5em] text-white/20 font-black">
          <div>© 2024 AURUM LTD. ALL RIGHTS RESERVED.</div>
          <div className="mt-4 md:mt-0 flex gap-8">
            <span className="hover:text-white transition-colors cursor-none">Bespoke Design</span>
            <span className="hover:text-white transition-colors cursor-none">Global Concierge</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
