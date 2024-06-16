import styles from './ProductInfo.module.scss'

const ProductInfo = ({ handleOpenDescription, isDescriptionOpen, colorName }) => {
  return (
    <section className={styles['product-info']}>
      <button onClick={handleOpenDescription} className={`${styles['product-info__btn']} ${styles.btn}`}>
        <div className={styles['btn__title-text']}>DESCRIPTION</div>
        <div className={styles['btn__title-logo']}>+</div>
      </button>
      <div className={`${styles['product-info__list']} ${isDescriptionOpen ? styles['product-info__list_open'] : ''}`}>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Color:</div>
          <div className={styles['product-info__list-description']}>
            {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
          </div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Style:</div>
          <div className={styles['product-info__list-description']}>Casual</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Length:</div>
          <div className={styles['product-info__list-description']}>Regular</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Type:</div>
          <div className={styles['product-info__list-description']}>Basic Dresses</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Temperature:</div>
          <div className={styles['product-info__list-description']}>Spring/Fall</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Neckline:</div>
          <div className={styles['product-info__list-description']}>Round Neck</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Sleeve Length:</div>
          <div className={styles['product-info__list-description']}>Short Sleeve</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Sleeve Type:</div>
          <div className={styles['product-info__list-description']}>Puff Sleeves</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Fit Type:</div>
          <div className={styles['product-info__list-description']}>Regular Fit</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Composition:</div>
          <div className={styles['product-info__list-description']}>85% lyocell 15% polyester</div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Care Instructions:</div>
          <div className={styles['product-info__list-description']}>
            1. Wash normally and lay flat to dry
          </div>
          <div className={styles['product-info__list-description']}>
            2. It is normal for dark clothes to float slightly when washed for the first time.
          </div>
        </div>
        <div className={styles['product-info__list-item']}>
          <div className={styles['product-info__list-name']}>Lined:</div>
          <div className={styles['product-info__list-description']}>Yes</div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo