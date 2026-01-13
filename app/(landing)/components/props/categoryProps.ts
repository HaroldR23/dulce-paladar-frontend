import { ProductCardProps } from "./productCardProps";

export interface CategoryItemProps extends CategoryHeaderProps {
  categoryIndex: number;
};

export interface CategoryHeaderProps {
  category: string;
  isExpanded: boolean;
  toggleCategory: (category: CategoryKey) => void;
  products: ProductCardProps[];
  info: {
    title: string;
    description: string;
    color: string;
  };
};

export type CategoryContentProps = {
  isExpanded: boolean;
  products: ProductCardProps[];
};

export type CategoryKey = "tortas" | "cupcakes" | "galletas" | "merengues";
