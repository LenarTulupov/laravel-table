import BlackButton from '@/Components/Buttons/BlackButton/BlackButton'
import WhiteBgButton from '@/Components/Buttons/WhiteBgButton/WhiteBgButton'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import styles from './Description.module.scss'
import styles2 from '../../../../css/colors.module.scss'
import ProductInfo from './Description/ProductInfo/ProductInfo'
import { useCartContext } from '@/Contexts/CartContext'

const Description = ({
    product,
    colorName,
    handleOpenDescription,
    isDescriptionOpen
}) => {
    // const { getProductQuantity } = useCartContext();
    // const quantity = getProductQuantity(id, product.size.id);
    return (
        <section className={styles['description']}>
            <h1 className={styles.description__title}>{product.title}</h1>
            <div className={`${styles.description__price} ${styles.price}`}>
                <div className={styles.price__old}>{product.price_old}</div>
                <div className={styles.price__new}>{product.price_new}</div>
            </div>
            <div className={`${styles.description__color} ${styles.color}`}>
                <div className={styles.color__text}>Color: 
                    {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                </div>
                <div className={`${styles.color__background} 
                    ${styles2[`color-${colorName}`]}`}>
                </div>
            </div>
            <div className={`${styles.description__sizes} ${styles.sizes}`}>
                {product.sizes.map(size => (
                    <div key={size.id} className={styles.sizes__size}>
                        {size.abbreviation}
                    </div>
                ))}
            </div>
            {/* <div className={`${styles['description__quantity-product']} 
              ${styles['quantity-product']}`}
            >
                <button className={styles['quantity-product__decrement']}>
                    <AiOutlineMinus />
                </button>
                <input
                    className={styles['quantity-product__input']}
                    type="number"
                    value="1"
                />
                <button className={styles['quantity-product__increment']}>
                    <AiOutlinePlus />
                </button>

            </div> */}
            <div className={`${styles.description__buttons} ${styles.buttons}`}>
                <BlackButton text="Add to cart" />
                <WhiteBgButton text="Save for later" />
            </div>
            <ProductInfo
                handleOpenDescription={handleOpenDescription}
                isDescriptionOpen={isDescriptionOpen}
                colorName={colorName}
            />
        </section>
    )
}

export default Description