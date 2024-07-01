import { Link } from '@inertiajs/react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <div className={`${styles['not-found__flex']} ${styles.flex}`}>
        <img
          // src="https://www.boohoo.com/dw/image/v2/BBVC_PRD/on/demandware.static/-/Library-Sites-boohoo-content-global-sfra/default/dw39d6935c/images/error/ERRORPAGE_683x901.jpg?sw=1366&q=65"
          src="https://burst.shopifycdn.com/photos/high-fashion-model-in-red.jpg?width=1850&format=pjpg&exif=0&iptc=0"
          alt=""
          className={styles.flex__img}
        />
        {/* <div className="center"> */}

        <div className={`${styles.flex__content} ${styles.content}`}>
          <h1 className={styles.content__title}>oh no</h1>
          <h2 className={styles.content__subtitle}>page not found.</h2>
          <p className={styles.content__description}>
            There could be a problem with the URL or the page no longer exists.
          </p>
          <Link href="/" className={styles.content__button}>go to homapage</Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default NotFound