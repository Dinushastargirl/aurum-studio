
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', dark = true }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${dark ? 'bg-[#2E2E2E] text-white' : 'bg-[#FFFFFF] text-[#2E2E2E]'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            {subtitle && (
              <span className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
                {subtitle}
              </span>
            )}
            {title && <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{title}</h2>}
            <div className="w-24 h-[1px] bg-[#D4AF37]/50 mx-auto mt-8"></div>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
