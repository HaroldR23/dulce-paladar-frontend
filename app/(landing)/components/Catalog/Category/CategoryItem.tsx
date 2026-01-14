import { motion } from "motion/react";
import CategoryHeader from "./CategoryHeader";
import { CategoryItemProps } from "../../props/categoryProps";
import CategoryContent from "./CategoryContent";

const CategoryItem = ({ 
  category, 
  categoryIndex, 
  isExpanded, 
  toggleCategory, 
  products, 
  info, 
  hasMore, 
  increaseVisible, 
  visibleCount
}: CategoryItemProps) => {

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden border border-foreground/5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: categoryIndex * 0.1 }}
    >
      <CategoryHeader 
        category={category} 
        isExpanded={isExpanded} 
        toggleCategory={toggleCategory} 
        info={info} 
        visibleCount={visibleCount}
      />

      <CategoryContent 
        isExpanded={isExpanded} 
        products={products} 
        hasMore={hasMore}
        increaseVisible={increaseVisible}
        category={category}
      />
    </motion.div>
  );
};

export default CategoryItem;
