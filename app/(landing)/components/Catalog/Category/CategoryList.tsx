import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { CategoryKey } from "../../props/categoryProps";
import { categoryInfo, productsByCategory } from "../../../contants/data";
import useIsMobile from "@/app/(landing)/hooks/useIsMobile";
import { ProductCardProps } from "../../props/productCardProps";

const CategoryList = () => {

  const [expandedCategories, setExpandedCategories] = useState<Set<CategoryKey>>(
    new Set(['tortas_cumpleaños'])
  );

  const getInitialVisibleCount = (productsByCategory: Record<CategoryKey, ProductCardProps[]>) => {
    const initial: Partial<Record<CategoryKey, number>> = {};
    (Object.keys(productsByCategory) as CategoryKey[]).forEach((key) => {
      initial[key] = 6;
    });
    return initial as Record<CategoryKey, number>;
  };

  const [visibleCount, setVisibleCount] = useState<
    Record<CategoryKey, number>
  >(getInitialVisibleCount(productsByCategory));

  const isMobile = useIsMobile();
  const STEP = isMobile ? 3 : 9;

  const increaseVisible = (category: CategoryKey) => {
    setVisibleCount((prev) => ({
      ...prev,
      [category]: (prev[category] ?? 0) + STEP,
    }));
  };

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
      const currentVisible =
        visibleCount[category] === 0 ? STEP : visibleCount[category];
  
      const visibleProducts = products.slice(0, currentVisible);
      const hasMore = currentVisible < products.length;

      return (
        <CategoryItem
          key={category}
          category={category}
          categoryIndex={categoryIndex}
          isExpanded={isExpanded}
          toggleCategory={toggleCategory}
          products={visibleProducts}
          info={info}
          visibleCount={products.length}
          increaseVisible={increaseVisible}
          hasMore={hasMore}
        />

      );
    })}
  </div>);
};

export default CategoryList;
