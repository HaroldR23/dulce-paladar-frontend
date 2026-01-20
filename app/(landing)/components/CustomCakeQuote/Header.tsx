import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

const Header = () => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FFE5E5] rounded-full text-sm text-[#E94FA3] mb-4">
        <Cake className="w-4 h-4" />
        <span>100% Personalizable</span>
      </span>
      <h2 className="font-['Cormorant'] text-4xl lg:text-5xl text-foreground mb-4">
        Tortas personalizadas
      </h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        Diseñamos la torta perfecta para tu evento especial. Cada detalle pensado para ti.
      </p>
    </motion.div>
  );
};

export default Header;
