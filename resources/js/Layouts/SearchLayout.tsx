import Card from '@/Components/Cards/Card/Card'
import { PiEmptyBold } from 'react-icons/pi'
import styles from './SearchLayout.module.scss'
import ProductsGridContainer from '@/Components/ProductsGridContainer/ProductsGridContainer'

const SearchLayout = ({ filteredProducts, inputValue }) => {
    return (
        <div className={styles['search-layout']}>
            {inputValue ? (
                filteredProducts.length > 0 ? (
                    <ProductsGridContainer>
                        {filteredProducts.map(product => (
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
                    </ProductsGridContainer>
                ) : (
                    <div className={`${styles['search-layout__message']} ${styles.message}`}>
                        <h1 className={styles['message__title']}>
                            We have no such product
                        </h1>
                        <PiEmptyBold className={styles['message__icon']} />
                    </div>
                )
            ) : (
                <div className={`${styles['search-layout__message']} ${styles.message}`}>
                    <h1 className={styles['message__title']}>
                        You have not entered anyting yet
                    </h1>
                    <PiEmptyBold className={styles['message__icon']} />
                </div>
            )}
        </div>
    )
}

export default SearchLayout