import { IProduct } from "./product.interface";

export interface IFilter {
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  filteredProducts: IProduct[];
  uniqueSizes: string[];
  handleSizeChange: (size: string) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  uniqueColors: string[];
  handleColorChange: (color: string) => void;
  selectedPrice: string;
  setSelectedPrice: (price: string) => void;
  handlePriceChange: (price: string) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  handleSortChange: (sort: string) => void;
  resetFilters: () => void;
}