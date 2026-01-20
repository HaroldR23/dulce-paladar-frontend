'use client';

import { motion } from 'motion/react';
import { Instagram, Facebook} from 'lucide-react';
import Image from 'next/image';

const BrandSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Image src="/favicon.ico" alt="Logo" width={150} height={150} />
      <p className="text-white/70 mb-6 w-72">
        Creando momentos dulces desde 2016. Pastelería artesanal premium con amor en cada detalle.
      </p>
      <div className="flex space-x-4">
        <motion.a
          href="https://www.instagram.com/dulcepaladartortasypostres?igsh=MWduNmxmZHhsdHJ0Zw=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E94FA3] transition-colors duration-200"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Instagram className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/share/17xTQcCaWp/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E94FA3] transition-colors duration-200"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Facebook className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );

};

export default BrandSection;
