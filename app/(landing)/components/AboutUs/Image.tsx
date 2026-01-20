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
          src="/tortas_12.jpeg"
          alt='Proper image'
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default ImageComponent;
