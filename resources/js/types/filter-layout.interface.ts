import { ReactNode } from "react";

export interface IFilterLayout {
  uniqueSizes: string[];
  uniqueColors: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  selectedColors: string[];
  onColorChange: (color: string) => void;
  selectedPrice: string;
  onPriceChange: (price: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  children: ReactNode;
}

export type OpenSection = "sizes" | "colors" | "prices" | "sort" | null;