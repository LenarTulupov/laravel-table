import { FC } from "react";
import styles from "./Images.module.scss";

interface IProductImage {
  id: number;
  image_path: string;
}

<<<<<<< HEAD
interface IProduct {
  imagesArray: IProductImage[];
  handleSelectImage: (imagePath: string) => void;
=======
interface IProductColor {
  color: {
    name: string;
  };
  product_color_images: IProductImage[];
}

interface IProduct {
  imagesArray: IProductImage[];
  handleSelectImage: (imagePath: string) => void;
  // imageLoaded: boolean;
  // handleImageLoad: () => void;
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  title: string;
  selectedImage: string;
}

const Images: FC<IProduct> = ({
  imagesArray,
  handleSelectImage,
<<<<<<< HEAD
=======
  // imageLoaded,
  // handleImageLoad,
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  title,
  selectedImage,
}) => {
  return (
    <section className={styles.images}>
      <div className={styles.images__column}>
        {imagesArray.map((image) => {
<<<<<<< HEAD
          const isActiveImage = image.image_path === selectedImage;
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
          return (
            <img
              key={image.id}
              src={image.image_path}
              alt={title}
              onClick={() => handleSelectImage(image.image_path)}
<<<<<<< HEAD
              className={isActiveImage ? styles['images__column_active'] : ""}
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
            />
          )
        })}
      </div>
      <div className={styles.images__main}>
<<<<<<< HEAD
        <img 
          src={selectedImage} 
          alt={title} 
          className={styles['images__main-image']} 
        />
      </div>
=======
        <img src={selectedImage} alt={title} className={styles['images__main-image']} />
      </div>

      {/* {imagesArray.map((img: IProductImage) => (
                    <img
                        className={img.image_path === firstImage ? styles['images__column_active'] : ''}
                        key={img.id}
                        src={img.image_path}
                        alt={title}
                        onClick={() => handleSelectImage(img.image_path)}
                    />
                ))} */}
      {/* <div className={styles.images__main}>
                <img src={selectedImage} alt={title} />
                <img
                    src={firstImage}
                    alt={title} className={imageLoaded ? styles['images__main-img_active'] : styles['images__main-img']}
                    onLoad={handleImageLoad}
                />
            </div> */}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
    </section>
  );
};

export default Images;
