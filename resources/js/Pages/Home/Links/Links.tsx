import CardButton from '@/Components/ui/Buttons/CardButton/CardButton'
import styles from './Links.module.scss'
import { Link } from '@inertiajs/react'

const Links = () => {
    return (
        <section className={styles.links}>
            <Link href="/dresses" className={styles.links__link}>
                <img
                    className={styles.links__img}
                    src="https://media.boohoo.com/i/boohoo/hzz01590_bronze_xl/female-bronze-molly-smith-bronze-metallic-foil-strappy-cowl-mini-dress/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt=""
                />
                <CardButton className={styles.links__btn}>Dresses</CardButton>
            </Link>
            <Link href="/summer" className={styles.links__link}>
                <img
                    className={styles.links__img}
                    src="https://media.boohoo.com/i/boohoo/gzz41136_multi_xl/female-multi-3-pack-multi-stripe-bikini-set-&-skirt?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt=""
                />
                <CardButton className={styles.links__btn}>SWIMWEAR</CardButton>
            </Link>
            <Link href="/jackets" className={styles.links__link}>
                <img
                    className={styles.links__img}
                    src="https://media.boohoo.com/i/boohoo/gzz55640_black_xl/female-black-borg-trim-oversized-aviator-jacket?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt=""
                />
                <CardButton className={styles.links__btn}>COATS & JACKETS</CardButton>
            </Link>
            <Link href="/" className={styles.links__link}>
                <img
                    className={styles.links__img}
                    src="https://media.boohoo.com/i/boohoo/bpp05097_black_xl/female-black-playboy-embroidered-low-rise-straight-leg-trouser?w=675&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" alt=""
                />
                <CardButton className={styles.links__btn}>TROUSERS</CardButton>
            </Link>
        </section>
    )
}

export default Links