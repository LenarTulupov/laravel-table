import { Dispatch, FC, SetStateAction } from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import { useCartContext } from '@/Contexts/CartContext';
import Button from '@/Components/Buttons/Button/Button';
import Sizes from '@/Components/Sizes/Sizes';
import styles from './Description.module.scss';
import styles2 from '../../../../css/colors.module.scss';

interface IDescription {
    product: {
        id: number;
        title: string;
        price_new: number;
        price_old: number;
        sizes: ISize[];
        product_colors: IProductColor[];
    } | null;
    colorName: string;
    handleOpenDescription: () => void;
    isDescriptionOpen: boolean;
    selectedSize: ISize | null;
    setSelectedSize: Dispatch<SetStateAction<ISize | null>>;
}

interface ISize {
    id: number;
    abbreviation: string;
}

interface IProductColor {
    color: {
        name: string;
    };
    product_color_images: IProductColorImage[];
}

interface IProductColorImage {
    id: number;
    image_path: string;
}

const Description: FC<IDescription> = ({
    product,
    colorName,
    handleOpenDescription,
    isDescriptionOpen,
    selectedSize,
    setSelectedSize,
}) => {
    const { addToCart } = useCartContext();

    if (!product) {
        return null;
    }

    const { id, title, price_new, price_old, product_colors } = product;
    const color = product_colors.length > 0 ? product_colors[0].color.name : '';

    console.log(color);

    return (
        <section className={styles['description']}>
            <h1 className={styles.description__title}>{title}</h1>
            <div className={`${styles.description__price} ${styles.price}`}>
                <div className={styles.price__old}>{price_old}</div>
                <div className={styles.price__new}>{price_new}</div>
            </div>
            <div className={`${styles.description__color} ${styles.color}`}>
                <div className={styles.color__text}>Color:
                    {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                </div>
                <div className={`${styles.color__background} ${styles2[`color-${colorName}`]}`}>
                </div>
            </div>
            <div className={`${styles.description__sizes} ${styles.sizes}`}>
                <Sizes
                    sizes={product.sizes}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                />
            </div>
            <div className={`${styles.description__buttons} ${styles.buttons}`}>
                <Button
                    variant="black"
                    onClick={() => {
                        if (selectedSize) {
                            addToCart({
                                id,
                                title,
                                price_new,
                                price_old,
                                product_colors,
                                size: selectedSize,
                                quantity: 1,
                            });
                        }
                    }}
                    disabled={!selectedSize}
                >
                    Add To Cart
                </Button>
                <Button variant="white">Save for later</Button>
            </div>
            <ProductInfo
                handleOpenDescription={handleOpenDescription}
                isDescriptionOpen={isDescriptionOpen}
                colorName={colorName}
            />
        </section>
    );
};

export default Description;
