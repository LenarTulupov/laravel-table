import styles from './Benefits.module.scss'
import { BsBoxSeam } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import { IoCardOutline } from "react-icons/io5";

const Benefits = () => {
    return (
        <div className={styles.benefits}>
            <ul className={styles.benefits__list}>
                <li className={styles.benefits__item}>
                    <BsBoxSeam className={styles['benefits__item-logo']}/>
                    <h1 className={styles['benefits__item-header']}>FREE SHIPPING</h1>
                    <p className={styles['benefits__item-descr']} >Free shipping over $120</p>
                </li>
                <li className={styles.benefits__item}>
                    <GrPowerCycle className={styles['benefits__item-logo']}/>
                    <h1 className={styles['benefits__item-header']}>30 DAYS RETURN</h1>
                    <p className={styles['benefits__item-descr']} >Simply return it within 30 days</p>
                </li>
                <li className={styles.benefits__item}>
                    <IoCardOutline className={styles['benefits__item-logo']}/>
                    <h1 className={styles['benefits__item-header']}>SECURE PAYMENTS</h1>
                    <p className={styles['benefits__item-descr']}>
                        Visa/Mastercard/Paypal/Amex/Maestro/Diners/Discover
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Benefits