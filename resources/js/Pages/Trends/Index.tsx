import { useState } from "react";
import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useFilterContext } from "@/Contexts/FilterContext";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
import Pagination from "@/Components/Pagination/Pagination";
import Card from "@/Components/Cards/Card/Card";
import ProductsGridContainer from "@/Components/ui/ProductsGridContainer/ProductsGridContainer";
import styles from './Index.module.scss'
import useScrollVisibility from "@/hooks/useScrollVisibility";
import useScrollToTop from "@/hooks/useScrollToTop";
import ScrollToTopButton from "@/Components/ui/Buttons/ScrollToTopButton/ScrollToTopButton";
import scrollToTop from "@/utils/scrollToTop";

const Trends = () => {
  const { ITEMS_PER_PAGE } = usePaginationContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
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
    handleSortChange
  } = useFilterContext();
  const isScrollButtonVisible = useScrollVisibility(1000);
  useScrollToTop();


  const filtered = filteredProducts.filter((product) => {
    return product.categories.some(category => category.name === 'trends');
  });

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIndex, endIndex);


  return (
    <main className={styles.trends}>
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
          <ProductsGridContainer>
            {paginatedProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                image={product.images}
                title={product.title}
                price_new={product.price_new}
                price_old={product.price_old}
                colors={product.product_colors}
                sizes={product.sizes}
                isInfoExist={true}
              />
            ))}
          </ProductsGridContainer>
          <Pagination
            totalItems={filtered.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </FilterLayout>
      </GuestLayout>
      <ScrollToTopButton
        onClick={scrollToTop}
        isVisible={isScrollButtonVisible}
        className={styles.scroll}
      />
    </main>
  );
};

export default Trends;
