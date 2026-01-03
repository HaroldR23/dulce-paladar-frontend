'use client';

import { motion } from 'motion/react';

const ScrollIndicator = () => {
  return (
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
  );

};

export default ScrollIndicator;
