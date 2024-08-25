import { IProduct } from "@/types/product.interface";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { useProductsContext } from "./ProductsContext";

interface IFilterContext {
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

const FilterContext = createContext<IFilterContext>({} as IFilterContext);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const { products } = useProductsContext();

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('');

  const sizeArrays = products.flatMap((product) => product.sizes);
  const sizes = sizeArrays.map((size) => size.name);
  const uniqueSizes = [...new Set(sizes)];

  const colorArrays = products.map((product) => product.color);
  const colors = colorArrays.map((color) => color[0].color.name);
  const uniqueColors = [...new Set(colors)];

  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      return prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size];
    });
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prevSelectedColors) => {
      return prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color];
    });
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrice(price);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  const resetFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedPrice('');
    setSelectedSort('');
  }

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedSizes.length > 0) {
      result = result.filter((product) => {
        return product.sizes.some((size) => selectedSizes.includes(size.name));
      });
    }

    if (selectedColors.length > 0) {
      result = result.filter((product) => {
        return product.color.some((color) => {
          return selectedColors.includes(color.color.name);
        });
      });
    }

    if (selectedPrice) {
      const [min, max] = selectedPrice.split(' - ').map((p) => parseFloat(p));
      result = result.filter((product) => {
        return product.price_new >= min && product.price_new <= max;
      });
    }

    if (selectedSort === "Price (Low to High)") {
      result.sort((a, b) => a.price_new - b.price_new);
    } else if (selectedSort === "Price (High to Low)") {
      result.sort((a, b) => b.price_new - a.price_new);
    } else if (selectedSort === 'Newest in') {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [products, selectedSizes, selectedColors, selectedPrice, selectedSort]);

  return (
    <FilterContext.Provider
      value={{
        selectedSizes,
        setSelectedSizes,
        filteredProducts,
        uniqueSizes,
        handleSizeChange,
        uniqueColors,
        selectedColors,
        setSelectedColors,
        handleColorChange,
        selectedPrice,
        setSelectedPrice,
        handlePriceChange,
        selectedSort,
        setSelectedSort,
        handleSortChange,
        resetFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
