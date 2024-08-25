import { FC, useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { useFavoritesContext } from "@/Contexts/FavContext";
import FavoriteButton from "@/Components/Buttons/FavoriteButton/FavoriteButton";
import CardInfo from "./CardInfo/CardInfo";
import Picture from "@/Components/Picture/Picture";
<<<<<<< HEAD
import { IProductColor } from "@/types/product.interface";
import styles from "./Card.module.scss";

=======
import styles from "./Card.module.scss";

interface IProductColorImage {
  image_path: string;
}

interface IColor {
  color_id: number;
  color: {
    name: string;
  };
  product_color_images: IProductColorImage[];
}

>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
interface ISize {
  id: number;
  name: string;
}

interface ICard {
  id: number;
  image: string[];
  title: string;
  price_new: string;
  price_old: string;
<<<<<<< HEAD
  colors: IProductColor[];
=======
  colors: IColor[];
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  sizes: ISize[];
  isInfoExist: boolean
}

const Card: FC<ICard> = ({
  id,
  title,
  image,
  price_new,
  price_old,
  colors,
  sizes,
  isInfoExist = true
}) => {
  const [currentImage, setCurrentImage] = useState<string>(image[0]);
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState<ISize | null>(null);
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesContext();
  const [favoriteState, setFavoriteState] = useState(isFavorite(id));

  const handleMouseEnter = () => {
    if (image.length > 1) {
      setCurrentImage(image[1]);
      setIsImageHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(image[0]);
    setIsImageHovered(false);
  };

  const toggleFavorite = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };

<<<<<<< HEAD
  const handleColorClick = (colorName: string) => {
    const selectedColor = colors.find(color => color.color.name === colorName);
    if (selectedColor) {
      setSelectedColor(selectedColor);
      const newImage = selectedColor.product_color_images[0].image_path;
      setCurrentImage(newImage);
    }
=======
  const handleColorClick = (color: IColor) => {
    setSelectedColor(color);
    const newImage = color.product_color_images[0].image_path;
    setCurrentImage(newImage);
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  };

  useEffect(() => {
    setFavoriteState(isFavorite(id));
  }, [isFavorite, id]);

  return (
    <div className={styles.card}>
      <Link href={`/product/${id}`}>
        <div className={`${styles["card__img-container"]} ${styles["img-container"]}`}>
          <Picture
            image={currentImage}
            title={title}
            isImageHovered={isImageHovered}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>
      <FavoriteButton
        className={styles.favorite}
        onClick={toggleFavorite}
        isFavorite={favoriteState}
      />
      {isInfoExist &&
        <CardInfo
          title={title}
          price_new={price_new}
          price_old={price_old}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          handleColorClick={handleColorClick}
          id={id}
          sizes={sizes}
          colors={colors}
        />
      }
    </div>
  );
};

export default Card;
