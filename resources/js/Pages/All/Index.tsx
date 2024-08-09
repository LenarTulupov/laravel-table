import { usePaginationContext } from "@/Contexts/PaginationContext";
import { useFilterContext } from "@/Contexts/FilterContext";
import Card from "@/Components/Cards/Card/Card";
import Pagination from "@/Components/Pagination/Pagination";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
import styles from "./Index.module.scss";
import { useProductsContext } from "@/Contexts/ProductsContext";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
import useResetFilters from "@/hooks/useResetFilters";

const All = () => {
  const { currentPage, setCurrentPage, ITEMS_PER_PAGE } = usePaginationContext();
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

  const { loading } = useProductsContext();

  if(loading) {
    return <SpinnerLoader/>
  }

  return (
    <main className={styles.all}>
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
          <div className={styles.all__grid}>
            {filteredProducts.map((product) => (
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
            totalItems={filteredProducts.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </FilterLayout>
      </GuestLayout>
    </main>
  );
};

export default All;
