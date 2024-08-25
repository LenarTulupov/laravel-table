<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import { useState } from "react";
import { useFilterContext } from "@/Contexts/FilterContext";
import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useProductsContext } from "@/Contexts/ProductsContext";
<<<<<<< HEAD
=======
=======
import { useFilterContext } from "@/Contexts/FilterContext";
import { usePaginationContext } from "@/Contexts/PaginationContext";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import Card from "@/Components/Cards/Card/Card";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
import Pagination from "@/Components/Pagination/Pagination";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
import ProductsGridContainer from "@/Components/ProductsGridContainer/ProductsGridContainer";
import styles from "./Index.module.scss";

const Dresses = () => {
  const { ITEMS_PER_PAGE } = usePaginationContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
<<<<<<< HEAD
=======
=======
import styles from "./Index.module.scss";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
import { useProductsContext } from "@/Contexts/ProductsContext";

const Dresses = () => {
  const { currentPage, setCurrentPage, ITEMS_PER_PAGE } = usePaginationContext();
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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
  } = useFilterContext();

  const filtered = filteredProducts.filter((product) => {
    return product.categories.some(category => category.name === 'dresses');
  })

  const { loading } = useProductsContext();


<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  if (loading) {
    return <SpinnerLoader />
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

<<<<<<< HEAD
=======
=======
  if(loading) {
    return <SpinnerLoader/>
  }

>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  return (
    <main className={styles.dresses}>
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
<<<<<<< HEAD
          <ProductsGridContainer>
            {paginatedProducts.map((product) => (
=======
          <div className={styles.dresses__grid}>
            {filtered.map((product) => (
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
              <Card
                key={product.id}
                id={product.id}
                image={product.images}
                title={product.title}
                price_new={product.price_new}
                price_old={product.price_old}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
                colors={product.product_colors}
                sizes={product.sizes}
                isInfoExist={true}
              />
            ))}
          </ProductsGridContainer>
<<<<<<< HEAD
=======
=======
                colors={product.color}
                sizes={product.sizes}
              />
            ))}
          </div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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

export default Dresses;
