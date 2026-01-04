import { motion } from 'motion/react';

import { products } from "../../contants/data";
import ProductCard from './ProductCard';

const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              tags={product.tags}
              id={product.id}
            />
          </motion.div>
        ))}
      </div>
  );
};

export default ProductsGrid;
