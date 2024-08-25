import { FC } from "react";
import styles from "./Images.module.scss";

interface IProductImage {
  id: number;
  image_path: string;
}

interface IProduct {
  imagesArray: IProductImage[];
  handleSelectImage: (imagePath: string) => void;
  title: string;
  selectedImage: string;
}

const Images: FC<IProduct> = ({
  imagesArray,
  handleSelectImage,
  title,
  selectedImage,
}) => {
  return (
    <section className={styles.images}>
      <div className={styles.images__column}>
        {imagesArray.map((image) => {
          const isActiveImage = image.image_path === selectedImage;
          return (
            <img
              key={image.id}
              src={image.image_path}
              alt={title}
              onClick={() => handleSelectImage(image.image_path)}
              className={isActiveImage ? styles['images__column_active'] : ""}
            />
          )
        })}
      </div>
      <div className={styles.images__main}>
        <img
          src={selectedImage}
          alt={title}
          className={styles['images__main-image']}
        />
      </div>
    </section>
  );
};

export default Images;
