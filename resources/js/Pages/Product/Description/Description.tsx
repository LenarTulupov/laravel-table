    import BlackButton from '@/Components/Buttons/BlackButton/BlackButton'
    import WhiteBgButton from '@/Components/Buttons/WhiteBgButton/WhiteBgButton'
    import ProductInfo from './ProductInfo/ProductInfo'
    import styles from './Description.module.scss'
    import styles2 from '../../../../css/colors.module.scss'
    import { FC } from 'react'

    interface IDescription {
        product: {
            title: string
            price_new: number
            price_old: number
            sizes: ISize[]
        }
        colorName: string
        handleOpenDescription: () => void
        isDescriptionOpen: boolean
    }

    interface ISize {
        id: number
        abbreviation: string
    }

    const Description: FC<IDescription> = ({
        product,
        colorName,
        handleOpenDescription,
        isDescriptionOpen
    }) => {
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
                    {product.sizes.map(size => {
                        console.log(size);
                        return (

                            <div key={size.id} className={styles.sizes__size}>
                                {size.abbreviation}
                            </div>
                        )
                    })}
                </div>
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