import { FC, ReactNode } from "react"
import styles from './ProductsGridContainer.module.scss'

interface IProductsGridContainer {
  children: ReactNode
}

const ProductsGridContainer: FC<IProductsGridContainer> = ({ children }) => {
  return (
    <div className={styles['products-grid-container']}>
      { children }
    </div>
  )
}

export default ProductsGridContainer