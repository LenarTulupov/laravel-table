<<<<<<< HEAD
import { useState } from "react";
import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useProductsContext } from "@/Contexts/ProductsContext";
import { useFilterContext } from "@/Contexts/FilterContext";
=======
import { useEffect, useMemo, useState } from "react";
import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useProductsContext } from "@/Contexts/ProductsContext";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
import Card from "@/Components/Cards/Card/Card";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
import Pagination from "@/Components/Pagination/Pagination";
<<<<<<< HEAD
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
import ProductsGridContainer from "@/Components/ProductsGridContainer/ProductsGridContainer";
import styles from './Index.module.scss';
=======
import styles from './Index.module.scss';
import { useFilterContext } from "@/Contexts/FilterContext";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

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
<<<<<<< HEAD
    handleSortChange
  } = useFilterContext();
  const { ITEMS_PER_PAGE } = usePaginationContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
=======
    handleSortChange,
    resetFilters
  } = useFilterContext();
  const { currentPage, setCurrentPage, ITEMS_PER_PAGE } = usePaginationContext();

  useEffect(() => {
    resetFilters();
  }, []);
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

  const filtered = filteredProducts.reverse();

  const { loading } = useProductsContext();


<<<<<<< HEAD
  if (loading) {
    return <SpinnerLoader />
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  return (
    <main className={styles.new}>
=======
  if(loading) {
    return <SpinnerLoader/>
  }

  return (
    <div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
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
<<<<<<< HEAD
          <ProductsGridContainer>
            {paginatedProducts.map(product => (
=======
          <div className={styles.new__grid}>
            {filtered.map(product => (
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
              <Card
                key={product.id}
                id={product.id}
                image={product.images}
                title={product.title}
                price_new={product.price_new}
                price_old={product.price_old}
<<<<<<< HEAD
                colors={product.product_colors}
                sizes={product.sizes}
                isInfoExist={true}
              />
            ))}
          </ProductsGridContainer>
=======
                colors={product.color}
                sizes={product.sizes}
              />
            ))}
          </div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
          <Pagination
            totalItems={filtered.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </FilterLayout>
      </GuestLayout>
<<<<<<< HEAD
    </main>
=======
    </div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  );
};

export default New;
