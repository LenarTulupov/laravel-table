import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import '../Featured/Featured-swiper-buttons.css'

import styles from './Testimonial.module.scss'
import Stars from './Stars/Stars';
import Title from '@/Components/Title/Title';
import { AiOutlineCaretUp } from 'react-icons/ai';
import { useRef } from 'react';
<<<<<<< HEAD
import Container from '@/Components/Container/Container';
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

const Testimonial = () => {
    const img = 'https://cdn.shopify.com/s/files/1/1276/0919/files/Photo_shared_by_o_on_May_29_2024_tagging_abneris_leon23._May_be_an_image_of_1_person_sundress_and_dress._1.jpg?v=1717583154';
    const img2 = 'https://cdn.shopify.com/s/files/1/1276/0919/files/Photo_by_-_Everlinet____on_April_18_2024._May_be_an_image_of_1_person_cloak_headdress_and_headscarf..jpg?v=1717637297';
    const img3 = 'https://cdn.shopify.com/s/files/1/1276/0919/files/Photo_by_REI_FUJITA_____fashion_styling_on_May_28_2024._May_be_an_image_of_1_person_slingback_shoes_and_headscarf..jpg?v=1717583508';
    const img4 = 'https://cdn.shopify.com/s/files/1/1276/0919/files/136956_4518168264776_3a9c89ef_53bd_453b_8b46_b52d3b2b5479.webp?v=1717581640';
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    return (
        <section className={styles.testimonial}>
            <Title className={styles.testimonial__title}>Testimonial</Title>
            <div>
                <Swiper
<<<<<<< HEAD
                    slidesPerView={1}
                    slidesPerGroup={1}
=======
                    style={{ width: `calc(100vw - 50px)` }}
                    slidesPerView={2}
                    slidesPerGroup={2}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
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
<<<<<<< HEAD
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                    }}
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                >
                    <SwiperSlide>
                        <div className={styles.testimonial__item}>

                            <img
                                src={img}
                                alt=""
                                className={styles.testimonial__img}
                            />
                            <div className={styles['testimonial__item-reviewer']}>
                                <div className={styles['testimonial__item-text']} >
                                    “ This is my dream dress! I’m absolutely obsessed with it and fits like a dream, making me feel so good!”
                                </div>
<<<<<<< HEAD
                                <Stars />
=======
                                <Stars/>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                <div className={styles.testimonial__name}>abneris_leon</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial__item}>

                            <img
                                src={img2}
                                alt=""
                                className={styles.testimonial__img}
                            />
                            <div className={styles['testimonial__item-reviewer']}>
                                <div className={styles['testimonial__item-text']} >
                                    “ The dress's intricate details and playful puff sleeves resonate with my dream style, effortlessly merging into my daily wardrobe.”
                                </div>
<<<<<<< HEAD
                                <Stars />
=======
                                <Stars/>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                <div className={styles.testimonial__name}>everlinet</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial__item}>

                            <img
                                src={img3}
                                alt=""
                                className={styles.testimonial__img}
                            />
                            <div className={styles['testimonial__item-reviewer']}>
                                <div className={styles['testimonial__item-text']} >
                                    “ Love this fit! The lace is even more beautiful than I imagined, I paired it with yellow skirt and felt both stylish. I am ready for summer! ”
                                </div>
<<<<<<< HEAD
                                <Stars />
=======
                                <Stars/>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                <div className={styles.testimonial__name}>itsreireii
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial__item}>

                            <img
                                src={img4}
                                alt=""
                                className={styles.testimonial__img}
                            />
                            <div className={styles['testimonial__item-reviewer']}>
                                <div className={styles['testimonial__item-text']} >
                                    “ The material is great comfortable. It's form-fitting but extremely flattering, and the double layer is absolutely perfect. All-in-all, I'm so pleased with it and would definitely recommend. ”
                                </div>
<<<<<<< HEAD
                                <Stars />
=======
                                <Stars/>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                                <div className={styles.testimonial__name}>Thenikkirossi</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <button ref={prevButtonRef} className="custom-swiper-button-prev">
<<<<<<< HEAD
                        {/* Ваш компонент для кнопки "Назад" */}
                        <AiOutlineCaretUp className={styles.button__icon} />
                    </button>
                    <button ref={nextButtonRef} className="custom-swiper-button-next">
                        {/* Ваш компонент для кнопки "Вперед" */}
                        <AiOutlineCaretUp className={styles.button__icon} />
                    </button>
=======
                            {/* Ваш компонент для кнопки "Назад" */}
                            <AiOutlineCaretUp className={styles.button__icon}/>
                        </button>
                        <button ref={nextButtonRef} className="custom-swiper-button-next">
                            {/* Ваш компонент для кнопки "Вперед" */}
                            <AiOutlineCaretUp className={styles.button__icon}/>
                        </button>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial