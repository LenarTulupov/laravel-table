import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import 'swiper/css';
import styles from './SalesTopHeader.module.scss';
import { Link } from '@inertiajs/react';

const SalesTopHeader = () => {
    const calculateTimeRemaining = () => {
        const currentTime: Date = new Date();
        const nextInterval: Date = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            Math.floor(currentTime.getHours() / 3) * 3 + 3
        );
        if (nextInterval.getTime() - currentTime.getTime() < 0) {
            nextInterval.setHours(nextInterval.getHours() + 3);
        }
        return Math.floor((nextInterval.getTime() - currentTime.getTime()) / 1000);
    }
    const [timeRemaining, setTimeRemaining] = useState<number>(calculateTimeRemaining());

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

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    }

    useEffect(() => {
        const Interval = setInterval(() => {
            setTimeRemaining(prevTime => {
                if (prevTime <= 1) {
                    return calculateTimeRemaining();
                }
                return prevTime - 1;
            })
        }, 1000);
        return () => clearInterval(Interval);
    }, []);

    return (
        <div className={styles['sales-top-header']}>
            <Swiper {...swiperOptions} className={styles['sales-top-header__list']}>
                <SwiperSlide>
                    <Link
                        className={styles['sales-top-header__link']}
                        href="#!"
                    >
                        30% OFF ALMOST EVERYTHING!* ENDS IN
                        <span>{formatTime(timeRemaining)}</span>
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
