import { FC } from 'react'
import styles from './CardSidebar.module.scss'
import CloseButton from '@/Components/Buttons/CloseButton/CloseButton'
import { useCartContext } from '@/Contexts/CartContext'
import styles2 from '../../../../css/colors.module.scss'

interface ICardSidebar {
    id: number;
    image: string[];
    title: string;
    price_new: number;
    price_old: number;
    colors: any[];
    toggleEditSidebar: () => void;
    product: any
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
    const totalProductPrice = (quantity * price_new).toFixed(2);
    const totalProductPriceOld = (quantity * price_old).toFixed(2);

    const colorName = product.product_colors[0].color.name;

    return (
        <article className={`${styles['card-sidebar']}`}>
            <div className={`${styles['card-sidebar__content']} ${styles.content}`}>
                <img src={image[0]} alt="" className={styles['content__img']} />
                <div className={`${styles['content__row-1']} ${styles['row-1']}`}>
                    <div className={styles['row-1__title']}>{title}</div>
                        <CloseButton onClick={() => removeFromCart({id})}/>
                </div>
                <div className={`${styles['content__row-2']} ${styles['row-2']}`}>
                    <div className={`${styles['row-2__size-color']} ${styles['size-color']}`}>
                        <div className={styles['size-color__size']}>
                            {product.size.abbreviation}
                        </div>
                        <div className={`${styles['size-color__color']}
                            ${styles2[`color-${colorName}`]}`}
                        />
                    </div>
                    <div className={styles['row-2__quantity']}>
                        <span className={styles['row-2__quantity-text']}>QTY:</span>{quantity}
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
                        <div className={styles.price__prev}>{totalProductPriceOld}</div>
                        <div className={styles.price__new}>{totalProductPrice}</div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardSidebar;
