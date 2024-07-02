import Filter from "@/Components/Filter/Filter"
import styles from './Filters.module.scss'
import { ChangeEvent, FC } from "react";
import { IProduct } from "@/types/product.interface";

interface IFilters {
  products: IProduct[]
  setFilterProducts: () => void
  className?: string
}

const Filters: FC<IFilters[]> = ({ products, setFilterProducts, className }) => {
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === 'all') {
      setFilterProducts(products);
    } else if (value === 'low') {
      setFilterProducts([...products].sort((a, b) => a.price_new - b.price_old));
    } else if (value === 'high') {
      setFilterProducts([...products].sort((a, b) => b.price_new - a.price_new))
    }
  }

  const sortOptions = [
    { value: 'all', label: 'All Products' },
    { value: 'recommend', label: 'We Recommend' },
    { value: 'new', label: 'Newest In' },
    { value: 'low', label: 'Price(Low to High)' },
    { value: 'high', label: 'Price(High to Low)' }
  ];

  const sizeOptions = [
    { value: 'all', label: 'All Sizes' },
    { value: 'xs', label: 'Extra Small' },
    { value: 's', label: 'Small' },
    { value: 'm', label: 'Medium' },
    { value: 'l', label: 'Large' },
    { value: 'xl', label: 'Extra Large' },
    { value: 'xxl', label: 'Extra Extra Large' }
  ];

  const colorOptions = [
    { value: 'all', label: 'All Colors' },
    { value: 'black', label: 'Black' },
    { value: 'beige', label: 'Beige' },
    { value: 'blue', label: 'Blue' },
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-5', label: '$0 - $5' },
    { value: '5-10', label: '$5 - $10' },
    { value: '10-20', label: '$10 - $20' },
    { value: '20-30', label: '$20 - $30' },
    { value: '30-50', label: '$30 - $50' },
    { value: '50-250', label: '$50 - $250' },
  ];

  return (
    <div className={`${styles.filters} ${className}`}>
      <Filter
        id="size"
        label="Size"
        options={sizeOptions}
        handleChange={handleFilterChange}
      />
      <Filter
        id="color"
        label="Color"
        options={colorOptions}
        handleChange={handleFilterChange}
      />
      <Filter
        id="price"
        label="Price"
        options={priceOptions}
        handleChange={handleFilterChange}
      />
      <div className={styles.filters__side}>
        <Filter
          id="sort"
          label="Sort"
          options={sortOptions}
          handleChange={handleFilterChange}
        />
      </div>
    </div>
  )
}

export default Filters