import { FC, useState } from 'react';
import ColorSwitch from '../../ColorSwitch/ColorSwitch';
import { useCartContext } from '@/Contexts/CartContext';
import { useFavoriteContext } from '@/Contexts/FavoriteContext';
import FavoriteButton from '@/Components/Buttons/FavoriteButton/FavoriteButton';
import AddToCartButton from '@/Components/Buttons/AddToCartButton/AddToCartButton';
import styles from './Card.module.scss';
import { Link } from '@inertiajs/react';

interface ICard {
  id: number;
  image: string[];
  title: string;
  price_new: number;
  price_old: number;
  colors: Array<{
    color_id: number;
    product_color_images: Array<{ image_path: string }>
  }>;
  sizes: Array<{
    id: number;
    name: string;
  }>;
}

const Card: FC<ICard> = ({ id, image, title, price_new, price_old, colors, sizes }) => {
  const [currentImage, setCurrentImage] = useState(image[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const { addToCart } = useCartContext();
  const { addToFavorite } = useFavoriteContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isImageHovered, setIsImageHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (image.length > 1) {
      setCurrentImage(image[1]);
      setIsImageHovered(true);
    }
  }

  const handleMouseLeave = () => {
    setCurrentImage(image[0]);
    setIsImageHovered(false);
  }

  const handleColorClick = (color) => {
    setSelectedColor(color);
    const newImage = color.product_color_images[0].image_path;
    setCurrentImage(newImage);
  }

  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
    addToFavorite({ id, title, price_new, price_old, image, colors, sizes });
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${id}`}>
        <div className={styles['card__img-container']}>
          <img
            src={currentImage}
            alt={title}
            className={`${styles.card__img} 
          ${isImageHovered ? styles.card__img_hovered : ''}
          `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className={styles.card__title}>{title}</div>
      </Link>
      <div className={styles.card__price}>
        <div className={styles['card__price-new']}>{price_new}</div>
        <div className={styles['card__price-old']}>{price_old}</div>
      </div>
      <div className={styles.card__favorite}>
          <FavoriteButton
            onClick={handleIsFavorite}
            isFavorite={isFavorite}
          />
        </div>
      <div className={styles.card__sizes}>
        {sizes.map(size => (
          <button
            key={size.id}
            className={`${styles['card__sizes-item']} 
              ${selectedSize && size.id === selectedSize.id ? styles.selected : ''}`}
            onClick={() => handleSizeClick(size)}

          >
            {size.name}
          </button>
        ))}
      </div>

      <div className={styles['card__color-btn']}>
        <div className={styles.card__colors}>
          {colors.map((color) => (
            <ColorSwitch
              key={color.color_id}
              color={color.color_id}
              onClick={() => handleColorClick(color)}
              isSelected={color.color_id === selectedColor.color_id}
            />
          ))}
        </div>
        <AddToCartButton onClick={() => addToCart({
          id,
          title,
          price_new,
          price_old,
          product_colors: colors,
          size: selectedSize,
          quantity: 1
        })}
          disabled={!selectedSize}
        />
      </div>
    </div>
  )
}

export default Card;
