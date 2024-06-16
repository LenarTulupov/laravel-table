import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecentlyViewedContext } from '@/Contexts/RecentlyViewedContext';
import Description from './Description/Description';
import Rating from './Rating/Rating';
import Images from './Images/Images';
import styles from './Index.module.scss'
import PhotosReview from './PhotosReview/PhotosReview';
import Reviews from './Reviews/Reviews';

const Index = () => {
  const { productId } = usePage().props;
  const [product, setProduct] = useState(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [firstImage, setFirstImage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);

  const { addToRecentlyViewed } = useRecentlyViewedContext();

  const handleOpenDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleImageChangeOnClick = (imagePath) => {
    setFirstImage(imagePath);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
        const productData = response.data;
        setProduct(productData);
        setFirstImage(productData.product_colors[0].product_color_images[0].image_path);
        addToRecentlyViewed(productData);
      } catch (error) {
        console.error('Error fetching product: ', error);
      }
    };
    fetchProduct();
  }, [productId, addToRecentlyViewed]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const colorName = product.product_colors[0].color.name;
  const imagesArray = product.product_colors[0].product_color_images;

  return (
    <main className={styles['product-page']}>
      <div className="container">
        <div className={`${styles['product-page__grid']} ${styles.grid}`}>
          <div className={styles.grid__content}>
            <Images
              imagesArray={imagesArray}
              firstImage={firstImage}
              handleImageChangeOnClick={handleImageChangeOnClick}
              imageLoaded={imageLoaded}
              handleImageLoad={handleImageLoad}
            />
            <Description
              product={product}
              colorName={colorName}
              handleOpenDescription={handleOpenDescription}
              isDescriptionOpen={isDescriptionOpen}
            />
          </div>
          <div className={styles.grid__container}>
            <div className={styles['grid__container-wrapper']}>
              <Rating />
              <PhotosReview />
              {/* <FeedbackRatings/> */}
            </div>
            <Reviews />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Index