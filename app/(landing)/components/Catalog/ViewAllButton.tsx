
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const ViewAllButton = () => {
  return (
    <motion.div
      className="text-center pt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <motion.a
        href="#catalogo"
        className="inline-flex items-center space-x-2 px-8 py-4 bg-white border-2 border-[#FF6B6B] text-[#FF6B6B] rounded-full hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 shadow-lg group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Ver todo el catálogo</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </motion.a>
    </motion.div>
  );

};

export default ViewAllButton;
