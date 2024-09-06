import { RefObject } from "react";

export interface IFilterSidebar {
  isSectionOpened: "sizes" | "colors" | "prices" | "sort" | null;
  toggleSection: (section: "sizes" | "colors" | "prices" | "sort" | null) => void;
  uniqueSizes: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  uniqueColors: string[];
  selectedColors: string[];
  onColorChange: (color: string) => void;
  prices: string[];
  selectedPrice: string;
  onPriceChange: (price: string) => void;
  isAnyFilterSelected: boolean;
  selectRef: RefObject<HTMLSelectElement>;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  sort: string[];
}