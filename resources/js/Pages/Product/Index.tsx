import { usePage } from '@inertiajs/react';
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useRecentlyViewedContext } from '@/Contexts/RecentlyViewedContext';
import Layout from '@/Layouts/Layout/Layout';
import Description from './Description/Description';
import Rating from './Rating/Rating';
import Images from './Images/Images';
import PhotosReview from './PhotosReview/PhotosReview';
import Reviews from './Reviews/Reviews';
import styles from './Index.module.scss'

interface IProductColorImage {
  id: number;
  image_path: string;
}

interface IProductColor {
  color: {
    name: string;
  };
  product_color_images: IProductColorImage[];
}

interface ISize {
  id: number;
  abbreviation: string;
}

interface IProduct {
  title: string;
  price_new: number;
  price_old: number;
  sizes: ISize[];
  product_colors: IProductColor[];
}

interface IProductImage {
  id: number;
  image_path: string;
}

const Index: FC = () => {
  const { productId } = usePage().props;
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [firstImage, setFirstImage] = useState('');
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const { addToRecentlyViewed } = useRecentlyViewedContext();

  const handleOpenDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const handleImageChangeOnClick = (imagePath: string) => {
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
  const imagesArray: IProductImage[] = product.product_colors[0].product_color_images;

  console.log(product);
  return (
    <Layout>
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
              </div>
              <Reviews />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Index