import { motion } from "motion/react";

import { CategoryContentProps } from "../../props/categoryProps";
import ProductCard from "../ProductCard";
import { ArrowRight } from "lucide-react";

const CategoryContent = ({ isExpanded, products, hasMore, increaseVisible, category }: CategoryContentProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: isExpanded ? 'auto' : 0,
        opacity: isExpanded ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="bsolute inset-0 bg-linear-to-br from-[#f1ddc5] via-[#eedab9] to-[#f3c0a2] overflow-hidden"
      // <div className="absolute inset-0 bg-linear-to-br from-[#f1ddc5] via-[#eedab9] to-[#f3c0a2]">

    >
      <div className="px-6 lg:px-8 pb-8 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              tags={product.tags}
            />
          ))}
        </div>
      </div>
      {
        hasMore && (
        <motion.div
          className="text-center p-5 cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white border-2 border-[#E94FA3] text-[#E94FA3] rounded-full hover:bg-[#E94FA3] hover:text-white transition-all duration-300 shadow-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => increaseVisible(category)}
          >
            <span>Ver más</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CategoryContent;
