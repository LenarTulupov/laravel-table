import Title from '@/Components/Title/Title'
import styles from './Brand.module.scss'

const Brand = () => {
    const img = "https://www.simpleretro.com/cdn/shop/products/4_d00df529-a7a9-4787-b0ee-ea9b5eadf5a1.jpg?v=1621579844&width=1000"
    return (
        <section className={styles.brand}>
            <img className={styles.brand__img} src={img} alt="" />
            <div className={styles.brand__wrapper}>
                <Title className={styles.brand__title}>
                    Brand Story
                </Title>
                <p className={styles.brand__text}>
                    In 2015, a group of girls with different cultural backgrounds met in New York City. The love of vintage clothes connected them and sparked an idea to create a brand they wanted to wear themselves. This is how the brand Simple Retro began.
                </p>
            </div>
        </section>
    )
}

export default Brand