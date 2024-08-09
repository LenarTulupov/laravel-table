import { FC } from "react";
import styles from "./Images.module.scss";

interface IProductImage {
  id: number;
  image_path: string;
}

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
  title: string;
  selectedImage: string;
}

const Images: FC<IProduct> = ({
  imagesArray,
  handleSelectImage,
  // imageLoaded,
  // handleImageLoad,
  title,
  selectedImage,
}) => {
  return (
    <section className={styles.images}>
      <div className={styles.images__column}>
        {imagesArray.map((image) => {
          return (
            <img
              key={image.id}
              src={image.image_path}
              alt={title}
              onClick={() => handleSelectImage(image.image_path)}
            />
          )
        })}
      </div>
      <div className={styles.images__main}>
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
    </section>
  );
};

export default Images;
