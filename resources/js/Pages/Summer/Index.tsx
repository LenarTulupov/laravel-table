<<<<<<< HEAD
=======
import { useEffect } from "react";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useFilterContext } from "@/Contexts/FilterContext";
import Card from "@/Components/Cards/Card/Card";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
<<<<<<< HEAD
import { useState } from "react";
import Pagination from "@/Components/Pagination/Pagination";
import ProductsGridContainer from "@/Components/ProductsGridContainer/ProductsGridContainer";
import styles from "./Index.module.scss";

const Summer = () => {
  const { ITEMS_PER_PAGE } = usePaginationContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
=======
import Pagination from "@/Components/Pagination/Pagination";
import styles from "./Index.module.scss";

const Summer = () => {
  const { currentPage, setCurrentPage, ITEMS_PER_PAGE } =
    usePaginationContext();
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
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
=======
    handleSortChange,
    resetFilters
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  } = useFilterContext();

  const filtered = filteredProducts.filter(
    (product) => product.categories.some(category => category.name === 'summer'),
  );

<<<<<<< HEAD
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

=======
   useEffect(() => resetFilters(),[]);
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  return (
    <main className={styles.summer}>
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
            {paginatedProducts.map((product) => (
=======
          <div className={styles.summer__grid}>
            {filtered.map((product) => (
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
    </main>
  );
};

export default Summer;
