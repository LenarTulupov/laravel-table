import { useFilterContext } from "@/Contexts/FilterContext";
import { usePaginationContext } from "@/Contexts/PaginationContext";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import Card from "@/Components/Cards/Card/Card";
import FilterLayout from "@/Layouts/FilterLayout/FilterLayout";
import Pagination from "@/Components/Pagination/Pagination";
import styles from "./Index.module.scss";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
import { useProductsContext } from "@/Contexts/ProductsContext";

const Dresses = () => {
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
    handleSortChange,
  } = useFilterContext();

  const filtered = filteredProducts.filter((product) => {
    return product.categories.some(category => category.name === 'dresses');
  })

  const { loading } = useProductsContext();


  if(loading) {
    return <SpinnerLoader/>
  }

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
          <div className={styles.dresses__grid}>
            {filtered.map((product) => (
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
    </main>
  );
};

export default Dresses;
