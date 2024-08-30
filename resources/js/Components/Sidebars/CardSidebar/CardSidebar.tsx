import { FC } from 'react'
import { IProduct, IProductColor } from '@/types/product.interface'
import { useCartContext } from '@/Contexts/CartContext'
import CloseButton from '@/Components/ui/Buttons/CloseButton/CloseButton'
import Price from '@/Components/Price/Price'
import styles2 from '../../../../css/colors.module.scss'
import styles from './CardSidebar.module.scss'

interface ICardSidebar {
    id: number;
    image: string[];
    title: string;
    price_new: string;
    price_old: string;
    colors: IProductColor[];
    toggleEditSidebar: () => void;
    product: IProduct
}

const CardSidebar: FC<ICardSidebar> = ({
    id,
    image,
    title,
    price_new,
    price_old,
    toggleEditSidebar,
    product
}) => {
    const { removeFromCart, getProductQuantity } = useCartContext();
    const quantity = getProductQuantity(id, product.size.id);
    const totalProductPrice = (quantity * parseFloat(price_new)).toFixed(2);
    const totalProductPriceOld = (quantity * parseFloat(price_old)).toFixed(2);

    const colorName = product.product_colors[0].color.name;

    return (
        <div className={`${styles['card-sidebar']}`}>
            <div className={`${styles['card-sidebar__content']} ${styles.content}`}>
                <img src={image[0]} alt={title} className={styles['content__img']} />
                <div className={`${styles['content__row-1']} ${styles['row-1']}`}>
                    <div className={styles['row-1__title']}>{title}</div>
                    <CloseButton onClick={() => removeFromCart(product)} />
                </div>
                <div className={`${styles['content__row-2']} ${styles['row-2']}`}>
                    <div className={
                        `${styles['row-2__size-color']} 
                         ${styles['size-color']}`
                    }>
                        <div className={styles['size-color__size']}>
                            {product.size.abbreviation}
                        </div>
                        <div className={`${styles['size-color__color']}
                            ${styles2[`color-${colorName}`]}`}
                        />
                    </div>
                    <div className={styles['row-2__quantity']}>
                        <span className={styles['row-2__quantity-text']}>
                            QTY:
                        </span>{quantity}
                    </div>
                    <div className={styles['row-2__available']}>In stock</div>
                </div>
                <div className={`${styles['content__row-3']} ${styles['row-3']}`}>
                    <button
                        onClick={toggleEditSidebar}
                        className={styles['row-3__edit']}>
                        Edit
                    </button>
                    <div className={`${styles['row-3__price']} ${styles.price}`}>
                        <Price
                            price={totalProductPrice}
                            className={styles.price__new}
                        />
                        <Price
                            price={totalProductPriceOld}
                            className={styles.price__prev}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSidebar;
