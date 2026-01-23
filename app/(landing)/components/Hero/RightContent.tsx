'use client';
import Image from "next/image";
import { motion } from 'motion/react';

const RightContent = () => {
  return (
  <motion.div
    className="relative"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <motion.div
      className="relative rounded-3xl shadow-2xl overflow-hidden w-fit h-fit"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/tortas_49.jpeg"
        // fill
        width={400}
        height={400}
        alt="Dulce Paladar - Tortas Artesanales"
        // className="w-full h-full object-cover"
      />
      
      {/* Floating Badge */}
      <motion.div
        className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-xl"
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
          <p className="text-sm text-foreground/60">+100 clientes felices</p>
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
  );

};

export default RightContent;