import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from '@inertiajs/react';
import Timer from '@/Components/ui/Timer/Timer';
import 'swiper/css';
import styles from './SalesTopHeader.module.scss';

const SalesTopHeader = () => {
    const swiperOptions = {
        slidesPerView: 1,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
        speed: 2000,
        allowTouchMove: false,
        modules: [Autoplay]
    };

    return (
        <div className={styles['sales-top-header']}>
            <Swiper {...swiperOptions} className={styles['sales-top-header__list']}>
                <SwiperSlide>
                    <Link
                        className={styles['sales-top-header__link']}
                        href="#!"
                    >
                        30% OFF ALMOST EVERYTHING!* ENDS IN <Timer />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link
                        className={styles['sales-top-header__link']}
                        href="#!"
                    >
                        DOWNLOAD THE BOOHOO APP FOR EXCLUSIVE DISCOUNTS!
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link
                        className={styles['sales-top-header__link']}
                        href="#!"
                    >
                        40% OFF MENSWEAR!*
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SalesTopHeader;
