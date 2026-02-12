
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 px-6 bg-[#1E7A8A]/10 border border-[#D4AF37]/20"
      >
        <h3 className="text-2xl font-serif text-[#D4AF37] mb-4">Your Journey Awaits</h3>
        <p className="text-neutral-400 mb-8 max-w-sm mx-auto">We've received your appointment request. Our beauty concierge will reach out within 2 hours to confirm your golden hour.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-10 py-3 bg-[#D4AF37] text-white uppercase tracking-widest text-xs font-bold hover:bg-[#1E7A8A] transition-colors"
        >
          New Reservation
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-2 font-bold text-[#D4AF37]">Full Name</label>
          <input 
            required
            type="text"
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:border-[#1E7A8A] outline-none transition-all placeholder:text-neutral-600"
            placeholder="Alexandra Vance"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-2 font-bold text-[#D4AF37]">Email Address</label>
          <input 
            required
            type="email"
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:border-[#1E7A8A] outline-none transition-all placeholder:text-neutral-600"
            placeholder="alexandra@aurum.ltd"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-2 font-bold text-[#D4AF37]">Desired Service</label>
          <select 
            required
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:border-[#1E7A8A] outline-none transition-all appearance-none"
            value={formData.service}
            onChange={e => setFormData({...formData, service: e.target.value})}
          >
            <option value="" className="bg-[#2E2E2E]">Select Experience</option>
            <option value="hair" className="bg-[#2E2E2E]">Master Hair Coloring</option>
            <option value="style" className="bg-[#2E2E2E]">Precision Styling</option>
            <option value="skin" className="bg-[#2E2E2E]">Facial Rejuvenation</option>
            <option value="bridal" className="bg-[#2E2E2E]">Bridal Package</option>
          </select>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] mb-2 font-bold text-[#D4AF37]">Message / Requests</label>
          <textarea 
            rows={5}
            className="w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:border-[#1E7A8A] outline-none transition-all resize-none placeholder:text-neutral-600"
            placeholder="Tell us about your hair goals..."
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>
        <div className="flex flex-col gap-4">
          <button 
            disabled={status === 'loading'}
            className="w-full py-5 bg-[#1E7A8A] text-white uppercase tracking-[0.3em] text-xs font-black hover:bg-[#D4AF37] transition-all duration-500 shadow-lg shadow-[#1E7A8A]/20"
          >
            {status === 'loading' ? 'Processing...' : 'Secure Appointment'}
          </button>
          <p className="text-[9px] text-neutral-500 text-center italic">* Cancellations within 24h are subject to terms.</p>
        </div>
      </div>
    </form>
  );
};
