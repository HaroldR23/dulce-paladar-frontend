import { motion } from 'motion/react';
import Image from 'next/image';

const ImageComponent = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/flowers_cake.jpg"
          alt='Proper image'
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Element */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFE5E5] rounded-full blur-3xl opacity-60 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

export default ImageComponent;
