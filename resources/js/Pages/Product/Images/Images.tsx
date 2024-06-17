import { FC } from 'react'
import styles from './Images.module.scss'

interface IProductImage {
    id: number
    image_path: string
}

interface IProductColor {
    color: {
        name: string
    }
    product_color_images: IProductImage[]
}

interface IProduct {
    imagesArray: IProductImage[]
    firstImage: string
    handleImageChangeOnClick: (imagePath: string) => void
    imageLoaded: boolean
    handleImageLoad: () => void
}

const Images: FC<IProduct> = ({
    imagesArray,
    firstImage,
    handleImageChangeOnClick,
    imageLoaded,
    handleImageLoad
}) => {
    return (
        <section className={styles.images}>
            <div className={styles.images__column}>
                {imagesArray.map((img: IProductImage) => (
                    <img
                        className={img.image_path === firstImage ? styles['images__column_active'] : ''}
                        key={img.id}
                        src={img.image_path}
                        alt=""
                        onClick={() => handleImageChangeOnClick(img.image_path)}
                    />
                ))}
            </div>
            <div className={styles.images__main}>
                <img
                    src={firstImage}
                    alt="" className={imageLoaded ? styles['images__main-img_active'] : styles['images__main-img']}
                    onLoad={handleImageLoad}
                />
            </div>
        </section>
    )
}

export default Images