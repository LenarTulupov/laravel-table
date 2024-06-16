import WhiteBgButton from '@/Components/Buttons/WhiteBgButton/WhiteBgButton'
import styles from './PhotosReview.module.scss'

const PhotosReview = () => {
    return (
        <section className={styles['photos-review']}>
            <div className={styles['photos-review__grid']}>
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
                <img src="https://i.redd.it/iuajaus83u6b1.jpg" alt="" />
            </div>
            <button>
                <WhiteBgButton text='Write a review' />
            </button>
        </section>
    )
}

export default PhotosReview