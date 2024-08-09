import { useEffect, useMemo, useState } from "react";
import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useProductsContext } from "@/Contexts/ProductsContext";
import Card from "@/Components/Cards/Card/Card";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
import Pagination from "@/Components/Pagination/Pagination";
import styles from './Index.module.scss';
import { useFilterContext } from "@/Contexts/FilterContext";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";

const New = () => {
  const {
    filteredProducts,
    uniqueSizes,
    selectedSizes,
    handleSizeChange,
    uniqueColors,
    selectedColors,
    handleColorChange,
    selectedPrice,
    handlePriceChange,
    selectedSort,
    handleSortChange,
    resetFilters
  } = useFilterContext();
  const { currentPage, setCurrentPage, ITEMS_PER_PAGE } = usePaginationContext();

  useEffect(() => {
    resetFilters();
  }, []);

  const filtered = filteredProducts.reverse();

  const { loading } = useProductsContext();


  if(loading) {
    return <SpinnerLoader/>
  }

  return (
    <div>
      <GuestLayout>
        <FilterLayout
          uniqueSizes={uniqueSizes}
          selectedSizes={selectedSizes}
          onSizeChange={handleSizeChange}
          uniqueColors={uniqueColors}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
          selectedPrice={selectedPrice}
          onPriceChange={handlePriceChange}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        >
          <div className={styles.new__grid}>
            {filtered.map(product => (
              <Card
                key={product.id}
                id={product.id}
                image={product.images}
                title={product.title}
                price_new={product.price_new}
                price_old={product.price_old}
                colors={product.color}
                sizes={product.sizes}
              />
            ))}
          </div>
          <Pagination
            totalItems={filtered.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </FilterLayout>
      </GuestLayout>
    </div>
  );
};

export default New;
