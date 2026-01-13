import { motion } from 'motion/react';

import ProductCard from './ProductCard';
import { productsByCategory } from '../../contants/data';
// old products category grid implementation (unnused)
const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {productsByCategory["tortas"].map((product, index) => (
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
