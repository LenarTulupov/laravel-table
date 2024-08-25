import Container from '@/Components/Container/Container'
import styles from './Footer.module.scss'
import { Link } from '@inertiajs/react'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__flex}>
          <div className={styles.footer__col}>
            <h1 className={styles['footer__col-title']}>ABOUT SR</h1>
            <ul className={styles['footer__col-list']}>
              <li className={styles['footer__col-item']}><Link href='/'>Press</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Our Location</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Global Sites</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Terms of Service</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Refund policy</Link></li>
            </ul>
          </div>
          <div className={styles.footer__col}>
            <h1 className={styles['footer__col-title']}>CUSTOMERS SERVICE</h1>
            <ul className={styles['footer__col-list']}>
              <li className={styles['footer__col-item']}><Link href='/'>Shipping & Tracking</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Returns & Refunds</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Payment</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Size Guide</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Privacy Policy</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Terms & Conditions</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Join Our Affiliate Program</Link></li>
              <li className={styles['footer__col-item']}><Link href='/'>Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <footer className={styles.footer__bottom}>
          <h1 className={styles['footer__bottom-title']}>© 2024 - SIMPLE RETRO POWERED BY SHOPIFY</h1>
          <div className={styles.footer__payment}>
            <img
              className={styles['footer__payment-logo']}
              src="https://www.svgrepo.com/show/266068/american-express.svg"
              alt="american express"
            />
            <img
              className={styles['footer__payment-logo']}
              src="https://www.svgrepo.com/show/452222/google-pay.svg"
              alt="google pay"
            />
            <img
              className={styles['footer__payment-logo']}
              src="https://www.svgrepo.com/show/452059/mastercard.svg"
              alt="mastercard"
            />
          </div>
        </footer>
      </Container>
    </footer>
  )
}

export default Footer