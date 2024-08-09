import { FC } from 'react'
import styles from './Price.module.scss'

interface IPrice {
    price_new: string
    price_old: string
}

const Price: FC<IPrice> = ({ price_new, price_old}) => {
    return (
        <div className={styles.price}>
            <div className={styles["price__new"]}>{price_new}</div>
            <div className={styles["price__old"]}>{price_old}</div>
        </div>
    )
}

export default Price