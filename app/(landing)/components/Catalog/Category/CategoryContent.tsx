import { motion } from "motion/react";

import { CategoryContentProps } from "../../props/categoryProps";
import ProductCard from "../ProductCard";

const CategoryContent = ({ isExpanded, products }: CategoryContentProps) => {
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
      className="overflow-hidden"
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
    </motion.div>
  );
};

export default CategoryContent;
