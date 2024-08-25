import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import styles from './Banners.module.scss'

import 'swiper/css/effect-fade';
import 'swiper/css';
import { Link } from '@inertiajs/react';

const Banners = () => {
    const imgSrc = 'https://www.simpleretro.com/cdn/shop/files/1_1bf00b30-faa1-468f-a94f-1d0a0760abe5.jpg?v=1718269095&width=1800'
    const imgSrc2 = 'https://www.simpleretro.com/cdn/shop/files/1_2b29963b-7ac3-4b3f-8746-f3d3777a61e5.jpg?v=1719395567&width=1800'
    const imgSrc3 = 'https://www.simpleretro.com/cdn/shop/files/1_266086b2-0ed3-422a-a435-222250eb4e7f.jpg?v=1716368025&width=1800'
    const imgSrc4 = 'https://www.simpleretro.com/cdn/shop/files/2_c5cffb4b-9132-48e8-ba60-ace668b8ab21.jpg?v=1720001900&width=1800'
    const imgArr = [imgSrc, imgSrc2, imgSrc3, imgSrc4];
    return (
        <Link href='/all' className={styles.banners}>
            <Swiper
                slidesPerView={1}
                speed={2000}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                allowTouchMove={false}
                simulateTouch={false}
                modules={[Autoplay, EffectFade]}
            >
                {imgArr.map((el, index) => {
                    return <SwiperSlide key={index}>
                        <img src={el} alt="banner" />
                    </SwiperSlide>
                })}
            </Swiper>
        </Link>
    )
}

export default Banners