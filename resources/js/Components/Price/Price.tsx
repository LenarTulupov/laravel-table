import { FC } from 'react'
import styles from './Price.module.scss'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import formatCurrency from '@/utils/formatCurrency'

interface IPrice {
    price: string | number
    currency?: 'EUR' | 'USD'
    className?: string
}

const Price: FC<IPrice> = ({ price, currency = 'EUR', className }) => {
    return (
        <div className={`${styles.price} ${className || ''}`}>
            {formatCurrency(
                { price, currency }
            )}
<<<<<<< HEAD
=======
=======

interface IPrice {
    price_new: string
    price_old: string
}

const Price: FC<IPrice> = ({ price_new, price_old}) => {
    return (
        <div className={styles.price}>
            <div className={styles["price__new"]}>{price_new}</div>
            <div className={styles["price__old"]}>{price_old}</div>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
        </div>
    )
}

export default Price