import Card from "@/Components/Cards/Card/Card";
import { PropsWithChildren } from "react"
import styles from './SearchLayout.module.scss'

const SearchLayout = ({ children, products }: PropsWithChildren) => {
    return (
        <div className={styles['search-layout']}>
            <div className="container">
                <div className={styles['search-layout__flex']}>
                    {products.map((product: IProduct) => {
                        return (
                            product.product_colors.length > 0
                                && product.product_colors[0].product_color_images.length > 0 ? (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    image={product.product_colors[0].product_color_images
                                        .map(img => img.image_path)}
                                    title={product.title}
                                    price_new={product.price_new}
                                    price_old={product.price_old}
                                    colors={product.product_colors}
                                    sizes={product.sizes}
                                />
                            ) : null
                        );
                    })}
                </div>

                {children}
            </div>
        </div>
    )
}

export default SearchLayout