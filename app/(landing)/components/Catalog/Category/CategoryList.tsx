import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { CategoryKey } from "../../props/categoryProps";
import { categoryInfo, productsByCategory } from "../../../contants/data";

const CategoryList = () => {

  const [expandedCategories, setExpandedCategories] = useState<Set<CategoryKey>>(
    new Set(['tortas'])
  );

  const toggleCategory = (category: CategoryKey) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
  <div className="space-y-6">
    {(Object.keys(productsByCategory) as CategoryKey[]).map((category, categoryIndex) => {
      const isExpanded = expandedCategories.has(category);
      const info = categoryInfo[category];
      const products = productsByCategory[category];

      return (
        <CategoryItem 
          key={category} 
          category={category} 
          categoryIndex={categoryIndex} 
          isExpanded={isExpanded} 
          toggleCategory={toggleCategory} 
          products={products} 
          info={info}
         />
      );
    })}
  </div>);
};

export default CategoryList;
