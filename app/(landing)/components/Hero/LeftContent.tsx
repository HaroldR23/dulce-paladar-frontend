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
    <motion.div
    className="inline-block px-4 py-2 bg-white/80 rounded-full shadow-sm"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    >
    <span className="text-sm text-[#FF6B6B]">✨ Hecho con amor, entregado con cuidado</span>
    </motion.div>

    <h1 className="font-['Cormorant'] text-5xl lg:text-7xl text-foreground leading-tight">
    Momentos dulces,{' '}
    <span className="text-[#FF6B6B]">hechos a tu medida</span>
    </h1>

    <p className="text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0">
    Tortas personalizadas, boxes, cookies y clásicos de autor. Entrega y retiro.
    </p>

    {/* Quick Filter Chips */}
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
    {quickFilters.map((filter, index) => (
      <motion.button
        key={filter}
        className="px-4 py-2 bg-white border border-border rounded-full hover:bg-secondary hover:border-[#FF6B6B] transition-all duration-200"
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
      className="px-8 py-4 bg-[#FF6B6B] text-white rounded-full hover:bg-[#ff5252] transition-all duration-200 shadow-xl shadow-[#FF6B6B]/30"
      whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(255, 107, 107, 0.4)' }}
      whileTap={{ scale: 0.95 }}
    >
      Ver catálogo
    </motion.a>
    <motion.a
      href="#personalizadas"
      className="px-8 py-4 bg-white text-foreground border-2 border-[#FF6B6B] rounded-full hover:bg-secondary transition-all duration-200"
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
