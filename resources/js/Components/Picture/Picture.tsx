import { FC, MouseEventHandler } from "react";
import styles from "./Picture.module.scss";
import { Link } from "@inertiajs/react";
import Button from "../Buttons/Button/Button";

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
           ${className}`}
      />
      <Link href="/" className={styles.picture__text}>
        <Button variant="black" className={styles['picture__text-button']}>Quick View</Button>
      </Link>
    </div>
  );
};

export default Picture;
