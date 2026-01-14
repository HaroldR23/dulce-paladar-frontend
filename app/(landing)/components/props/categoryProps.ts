import { ProductCardProps } from "./productCardProps";

export interface CategoryItemProps extends CategoryHeaderProps {
  categoryIndex: number;
  visibleCount: number;
  increaseVisible: (category: CategoryKey) => void;
  hasMore: boolean;
  products: ProductCardProps[];
};

export interface CategoryHeaderProps {
  category: CategoryKey;
  isExpanded: boolean;
  toggleCategory: (category: CategoryKey) => void;
  visibleCount: number;
  info: {
    title: string;
    description: string;
    color: string;
  };
};

export type CategoryContentProps = {
  isExpanded: boolean;
  products: ProductCardProps[];
  hasMore: boolean;
  increaseVisible: (category: CategoryKey) => void;
  category: CategoryKey;
};

export type CategoryKey = "tortas" | "cupcakes" | "galletas" | "merengues";
