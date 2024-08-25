import { usePage } from "@inertiajs/react";
import { FC, useEffect, useState } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import { useRecentlyViewedContext } from "@/Contexts/RecentlyViewedContext";
import Description from "./Description/Description";
import Rating from "./Rating/Rating";
import Images from "./Images/Images";
import PhotosReview from "./PhotosReview/PhotosReview";
import Reviews from "./Reviews/Reviews";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import UserCommentModal from "./Comment/UserCommentModal/UserCommentModal";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import Container from "@/Components/Container/Container";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
import Modal from "@/Components/Modal/Modal";
import styles from "./Index.module.scss";
<<<<<<< HEAD
=======
=======
import styles from "./Index.module.scss";
import UserCommentModal from "./Comment/UserCommentModal/UserCommentModal";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import Container from "@/Components/Container/Container";
import { useProductsContext } from "@/Contexts/ProductsContext";
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  const { productId } = usePage().props;
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const { addToRecentlyViewed } = useRecentlyViewedContext();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<ISize | null>(null);

  const formToggle = () => {
    setIsFormOpen(p => !p);
  }

  const handleOpenDescription = () => {
    setIsDescriptionOpen(p => !p);
<<<<<<< HEAD
=======
=======
  // const [firstImage, setFirstImage] = useState('');
  // const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  // const { addToRecentlyViewed } = useRecentlyViewedContext();


  // const handleImageChangeOnClick = (imagePath: string) => {
  //   setFirstImage(imagePath);
  // };

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };

  const formToggle = () => {
    setIsFormOpen(!isFormOpen);
  }

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/products/${productId}`);
  //       const productData = response.data;
  //       setProduct(productData);
  //       // setFirstImage(productData.product_colors[0].product_color_images[0].image_path);
  //       // addToRecentlyViewed(productData);
  //     } catch (error) {
  //       console.error('Error fetching product: ', error);
  //     }
  //   };

  //   fetchProduct();
  // }, [productId]);

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  // const imagesArray: IProductImage[] = product.product_colors[0].product_color_images;

  const { productId } = usePage().props;
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<ISize | null>(null)

  const handleOpenDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  };

  const handleSelectImage = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products/${productId}`,
        );
        const productData = await response.json();
        setProduct(productData);
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
        if (
          productData.product_colors.length > 0 && 
          productData.product_colors[0].product_color_images.length > 0) {
          setSelectedImage(productData.product_colors[0].product_color_images[0].image_path);
        }
        addToRecentlyViewed(productData);
<<<<<<< HEAD
=======
=======
        if (productData.product_colors.length > 0 && productData.product_colors[0].product_color_images.length > 0) {
          setSelectedImage(productData.product_colors[0].product_color_images[0].image_path);
        }
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
      } catch (error) {
        console.error("Fetching error of product: ", error);
      }
    };
    fetchProduct();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  }, [productId, addToRecentlyViewed]);

  if (!product) {
    return <SpinnerLoader />
<<<<<<< HEAD
=======
=======
  }, [productId]);

  if(!product) {
    return <SpinnerLoader/>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  }

  const imagesArray = product
    ? product.product_colors[0].product_color_images
    : [];

  const title = product ? product.title : [];
  const colorName = product ? product.product_colors[0].color.name : '';
  return (
    <>
      {isFormOpen && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
        <Modal
          onClick={formToggle}
        >
          <UserCommentModal onClick={formToggle} productId={product.id} />
        </Modal>
      )}

      <GuestLayout>
        <main className={styles["product-page"]}>
          <Container>
            <div className={`${styles['product-page__grid']} ${styles.grid}`}>
              <div className={styles.grid__content}>
                <Images
                  imagesArray={imagesArray}
                  title={title}
                  handleSelectImage={handleSelectImage}
                  selectedImage={selectedImage}
                />
                <Description
                  product={product}
                  colorName={colorName}
                  handleOpenDescription={handleOpenDescription}
                  isDescriptionOpen={isDescriptionOpen}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                />
              </div>
              <div className={styles.grid__container}>
                <div className={styles['grid__container-wrapper']}>
                  <Rating
                    reviews={product.ratings}
                    rating={product.average_rating}
                  />
                  <PhotosReview formToggle={formToggle} />
                </div>
                <Reviews reviewers={product.ratings} />
              </div>
            </div>

            {/* <div className={`${styles['product-page__grid']} ${styles.grid}`}>
<<<<<<< HEAD
=======
=======
        <>
          <div className={styles.overlay} onClick={formToggle} />
          <div className={styles.modal} >
            <UserCommentModal onClick={formToggle} />
          </div>
        </>
      )}

    <GuestLayout>
      <main className={styles["product-page"]}>
        <Container>
          <div className={`${styles['product-page__grid']} ${styles.grid}`}>
            <div className={styles.grid__content}>
              <Images
                imagesArray={imagesArray}
                title={title}
                handleSelectImage={handleSelectImage}
                selectedImage={selectedImage}
              />
              <Description
                product={product}
                colorName={colorName}
                handleOpenDescription={handleOpenDescription}
                isDescriptionOpen={isDescriptionOpen}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>
            <div className={styles.grid__container}>
              <div className={styles['grid__container-wrapper']}>
                <Rating
                  reviews={product.ratings}
                  rating={product.average_rating}
                />
                <PhotosReview formToggle={formToggle} />
              </div>
              <Reviews reviewers={product.ratings} />
            </div>
          </div>

          {/* <div className={`${styles['product-page__grid']} ${styles.grid}`}>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
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
                  <Rating
                    reviews={product.ratings}
                    rating={product.average_rating}
                  />
                  <PhotosReview formToggle={formToggle} />
                </div>
                <Reviews reviewers={product.ratings} />
              </div>
            </div> */}
<<<<<<< HEAD
          </Container>
        </main>
      </GuestLayout>
=======
<<<<<<< HEAD
          </Container>
        </main>
      </GuestLayout>
=======
        </Container>
      </main>
    </GuestLayout>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    </>
  );
};

export default Index;
