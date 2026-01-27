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

export type CategoryKey = "tortas_cumpleaños" | "tortas_bodas" | "tortas_infantiles" | "otros" | "tortas_postres" | "regalos" | "tortas_grados" | "tortas_bautizos" | "mesas_dulces";
