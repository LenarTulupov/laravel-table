import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Button from '@/Components/Buttons/Button/Button';
import Card from '@/Components/Cards/Card/Card';
import { IProduct } from '@/types/product.interface';
import { AiOutlineCaretUp } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import './Featured-swiper-buttons.css';
import styles from './Featured.module.scss';

interface IFeatured {
    products: IProduct[]
}

const Featured: FC<IFeatured> = ({ products }) => {
    const [activeFilter, setActiveFilter] = useState('Hot');
    const [isShowAllOpen, setIsShowOpen] = useState<boolean>(false);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
    const goodsRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const handleToggleShow = () => {
        setIsShowOpen(!isShowAllOpen);
    }

    const getActivefilter = (filter) => {
        setActiveFilter(filter);
    }

    const getFilteredProducts = (filter, products) => {
        if (filter === 'Hot') {
            return products.filter(product =>
                product.categories.some(category =>
                    category.name === 'trends'));
        } else if (filter === 'New') {
            return [...products].reverse(); // Создаем новый массив и переворачиваем его
        }
        return products;
    }

    useEffect(() => {
        setFilteredProducts(getFilteredProducts(activeFilter, products));
    }, [activeFilter, products]);

    const displayedProducts = isShowAllOpen ? filteredProducts : filteredProducts.slice(0, 8);

    useEffect(() => {
        if (goodsRef.current) {
            if (isShowAllOpen) {
                goodsRef.current.style.height = `${goodsRef.current.scrollHeight}px`;
            } else {
                goodsRef.current.style.height = 'fit-content';
            }
        }
    }, [isShowAllOpen]);

    useEffect(() => {
        setIsShowOpen(false);
    }, [activeFilter]);

    return (
        <section className={styles.featured}>
            <h1 className={styles.featured__title}>Featured Collection</h1>
            <div className={styles.featured__filters}>
                <div
                    className={
                        `${styles['featured__filters-filter']} 
                         ${activeFilter === 'Hot'
                            ? styles['featured__filters-filter_active']
                            : ''}`
                    }
                    onClick={() => getActivefilter('Hot')}
                >
                    Hot
                </div>
                <div
                    className={
                        `${styles['featured__filters-filter']} 
                         ${activeFilter === 'New'
                            ? styles['featured__filters-filter_active']
                            : ''}`
                    }
                    onClick={() => getActivefilter('New')}
                >
                    New
                </div>
            </div>
            <div
                ref={goodsRef}
                className={
                    `${styles.featured__goods} 
                     ${isShowAllOpen ? styles['featured__goods_open']
                        : styles['featured__goods_closed']}`
                }
            >
                {displayedProducts.length > 0 ? (
                    isShowAllOpen ? (
                        displayedProducts.map(product => (
                            <div className={styles['featured__goods-grid']} key={product.id}>
                                <Card
                                    id={product.id}
                                    image={product.images}
                                    title={product.title}
                                    price_new={product.price_new}
                                    price_old={product.price_old}
                                    colors={product.color}
                                    sizes={product.sizes}
                                    isInfoExist={false}
                                />
                            </div>
                        ))
                    ) : (
                        <>
                            <Swiper
                                style={{ width: `calc(100vw - 50px)` }}
                                slidesPerView={4}
                                slidesPerGroup={4}
                                spaceBetween={30}
                                speed={1000}
                                allowTouchMove={true}
                                simulateTouch={true}
                                navigation={{
                                    prevEl: prevButtonRef.current,
                                    nextEl: nextButtonRef.current,
                                }}
                                modules={[Navigation]}
                                onSwiper={(swiper) => {
                                    setTimeout(() => {
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                }}
                            >
                                {displayedProducts.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <Card
                                            id={product.id}
                                            image={product.images}
                                            title={product.title}
                                            price_new={product.price_new}
                                            price_old={product.price_old}
                                            colors={product.color}
                                            sizes={product.sizes}
                                            isInfoExist={false}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <button ref={prevButtonRef} className="custom-swiper-button-prev">
                                <AiOutlineCaretUp className={styles.button__icon} />
                            </button>
                            <button ref={nextButtonRef} className="custom-swiper-button-next">
                                <AiOutlineCaretUp className={styles.button__icon} />
                            </button>
                        </>
                    )
                ) : (
                    <p>No products available</p>
                )}
            </div>
            <div className={styles['featured__button-container']}>
                <Button
                    variant='blue'
                    className={styles.featured__btn}
                    onClick={handleToggleShow}
                >
                    {!isShowAllOpen ? 'View All' : 'Show Less'}
                </Button>
            </div>
        </section>
    );
};

export default Featured;
