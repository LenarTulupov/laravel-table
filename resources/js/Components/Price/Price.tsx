import { FC } from 'react'
import styles from './Price.module.scss'
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
        </div>
    )
}

export default Price