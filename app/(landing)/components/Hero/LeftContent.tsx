'use client';

import { motion } from 'motion/react';
import { quickFilters } from '../../contants/data';


const LeftContent = () => {
  return (
  <motion.div
    className="space-y-6 text-center lg:text-left"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <h1 className="font-['Cormorant'] text-[#5A3A22] text-3xl lg:text-5xl text-foreground leading-tight">
    Momentos especiales en la vida,{' '}
    <span className="text-[#8B5E3C] italic">
      endulzados con productos hechos con amor.
    </span> 
    </h1>

    <p className="text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0">
    Tortas personalizadas inspiradas en clásicos de autor, galletas, cupcakes, entre otros.
    </p>

    {/* Quick Filter Chips */}
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
    {quickFilters.map((filter, index) => (
      <motion.button
        key={filter}
        className="px-4 py-2 bg-white border border-border rounded-full hover:bg-secondary hover:border-[#E94FA3] transition-all duration-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {filter}
      </motion.button>
    ))}
    </div>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
    <motion.a
      href="#catalogo"
      className="px-8 py-4 bg-[#E94FA3] text-white rounded-full hover:bg-[#d43c7a] transition-all duration-200 shadow-xl shadow-[#E94FA3]/30"
      whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(212, 60, 122, 0.4)' }}
      whileTap={{ scale: 0.95 }}
    >
      Ver catálogo
    </motion.a>
    <motion.a
      href="#personalizadas"
      className="px-8 py-4 bg-white text-foreground border-2 border-[#E94FA3] rounded-full hover:bg-secondary transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Cotizar torta personalizada
    </motion.a>
    </div>
  </motion.div>
  );
};

export default LeftContent;
