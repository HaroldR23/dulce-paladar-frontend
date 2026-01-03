'use client';

import { motion } from 'motion/react';
import { menuItems } from '../../contants/data';

const QuickLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="font-['Cormorant'] text-xl mb-6">Enlaces rápidos</h3>
      <ul className="space-y-3">
        {menuItems.map((link) => (
          <li key={link.name}>
            <a
              href={`${link.href.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/70 hover:text-[#FF6B6B] transition-colors duration-200 inline-flex items-center group"
            >
              <span className="mr-2 group-hover:mr-3 transition-all duration-200">→</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default QuickLinks;
