import { FC, MouseEventHandler } from "react";
<<<<<<< HEAD
import { Link } from "@inertiajs/react";
import Button from "../Buttons/Button/Button";
import styles from "./Picture.module.scss";
=======
<<<<<<< HEAD
import { Link } from "@inertiajs/react";
import Button from "../Buttons/Button/Button";
import styles from "./Picture.module.scss";
=======
import styles from "./Picture.module.scss";
import { Link } from "@inertiajs/react";
import Button from "../Buttons/Button/Button";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

interface IPicture {
  image: string;
  title: string;
  isImageHovered?: boolean;
  handleMouseEnter?: MouseEventHandler<HTMLImageElement>;
  handleMouseLeave?: MouseEventHandler<HTMLImageElement>;
  className?: string;
}

const Picture: FC<IPicture> = ({
  image,
  title,
  isImageHovered,
  handleMouseEnter,
  handleMouseLeave,
  className,
}) => {
  return (
    <div
      className={styles.picture}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={image}
        alt={title}
        className={`${styles.card__img}
           ${isImageHovered ? styles.card__img_hovered : ""}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
           ${className || ''}`}
      />
      <Link href="/" className={styles.picture__text}>
        <Button variant="black" className={styles['picture__text-button']}>
          Quick View
        </Button>
<<<<<<< HEAD
=======
=======
           ${className}`}
      />
      <Link href="/" className={styles.picture__text}>
        <Button variant="black" className={styles['picture__text-button']}>Quick View</Button>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
      </Link>
    </div>
  );
};

export default Picture;
