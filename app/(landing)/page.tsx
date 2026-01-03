'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const quickFilters = ['Hoy', 'Cumpleaños', 'Regalo', 'Sin TACC', 'Vegano'];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FAF7F2] to-[#FFE5E5]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sprinkles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#FF6B6B" />
                <circle cx="60" cy="40" r="2" fill="#E6E6FA" />
                <circle cx="40" cy="80" r="2" fill="#FFDAB9" />
                <circle cx="80" cy="60" r="2" fill="#FFE5E5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sprinkles)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
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

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/hero-torta.jpg"
                fill
                alt="Dulce Paladar - Tortas Artesanales"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-foreground/60">+500 clientes felices</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Shapes */}
            <motion.div
              className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-[#E6E6FA] rounded-full blur-3xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-[#FFDAB9] rounded-full blur-3xl opacity-50"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div className="w-1 h-2 bg-foreground/30 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Hero;