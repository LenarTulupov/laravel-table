import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { useProductsContext } from "./ProductsContext";
import { IFilter } from "@/types/filter.interface";

const FilterContext = createContext<IFilter>({} as IFilter);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const { products } = useProductsContext();

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedSort, setSelectedSort] = useState<string>('');

  const sizeArrays = products.flatMap((product) => product.sizes);
  const sizes = sizeArrays.map((size) => size.name);
  const uniqueSizes = [...new Set(sizes)];

  const colorArrays = products.map((product) => product.product_colors);
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
        return product.product_colors.some((color) => {
          return selectedColors.includes(color.color.name);
        });
      });
    }

    if (selectedPrice) {
      const [min, max] = selectedPrice.split(' - ').map((p) => parseFloat(p));
      result = result.filter((product) => {
        return parseFloat(product.price_new) >= min && 
               parseFloat(product.price_new) <= max;
      });
    }

    if (selectedSort === "Price (Low to High)") {
      result.sort((a, b) => parseFloat(a.price_new) - parseFloat(b.price_new));
    } else if (selectedSort === "Price (High to Low)") {
      result.sort((a, b) => parseFloat(b.price_new) - parseFloat(a.price_new));
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
