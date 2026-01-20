import { motion } from 'motion/react';

const Header = () => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFE5E5] rounded-full text-sm text-[#E94FA3] mb-4">
        Nuestra historia
      </span>
      <h2 className="font-['Cormorant'] text-4xl lg:text-5xl text-foreground mb-4">
        Sobre Dulce Paladar
      </h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Pasión por la repostería artesanal desde 2016
      </p>
    </motion.div>
  );
};

export default Header;
