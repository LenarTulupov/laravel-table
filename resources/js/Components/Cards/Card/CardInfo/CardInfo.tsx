<<<<<<< HEAD
import { Dispatch, FC, SetStateAction } from "react";
=======
import AddToCartButton from "@/Components/Buttons/AddToCartButton/AddToCartButton";
import FavoriteButton from "@/Components/Buttons/FavoriteButton/FavoriteButton";
import { FC } from "react";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
import styles from "./CardInfo.module.scss";
import { useCartContext } from "@/Contexts/CartContext";
import Price from "../../../Price/Price";
import Sizes from "../../../Sizes/Sizes";
import Color from "@/Components/Color/Color";
import Button from "@/Components/Buttons/Button/Button";
import { Link } from "@inertiajs/react";
import { ISize } from "@/types/basic.interface";
<<<<<<< HEAD
import { IProductColor } from "@/types/product.interface";
=======
import { IColor } from "@/types/product.interface";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

interface ICardInfo {
  title: string;
  price_new: string;
  price_old: string;
<<<<<<< HEAD
  selectedSize: ISize | null;
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>;
  handleColorClick: (colorName: string) => void;
  id: number;
  sizes: ISize[];
  colors: IProductColor[];
=======
  selectedSize: {
    id: number;
    name: string;
  };
  handleColorClick: () => void;
  id: number;
  sizes: ISize[];
  colors: IColor[];
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
}

const CardInfo: FC<ICardInfo> = ({
  title,
  price_new,
  price_old,
  selectedSize,
  setSelectedSize,
  handleColorClick,
  id,
  sizes,
  colors,
}) => {
  const { addToCart } = useCartContext();
<<<<<<< HEAD

  const transformedColors = colors.map(color => ({
    color_id: color.color.id,
    color: {
      name: color.color.name
    }
  }));
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  return (
    <section className={styles["card-info"]}>
      <Link href={`/product/${id}`}>
        <div className={styles["card-info__title"]}>{title}</div>
      </Link>
<<<<<<< HEAD
      <div className={`${styles["card-info__wrapper"]} ${styles.wrapper}`}>
        <div className={styles['wrapper__price']}>
          <Price price={price_new} />
          <Price price={price_old} className={styles['wrapper__price_old']} />
        </div>
        <Color
          colors={transformedColors}
          handleColorClick={handleColorClick}
          className={styles.wrapper__color}
        />
      </div>
      <div className={styles['card-info__sizes']}>
=======
      <div className={styles["card-info__price-color"]}>
        <Price price_new={price_new} price_old={price_old} />
        <Color
          colors={colors}
          handleColorClick={handleColorClick}
          className={styles["card-info__color"]}
        />
      </div>
      <div style={{ minHeight: "59px" }}>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
        <Sizes
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      </div>

      <Button
        variant="black"
        className={styles["card-info__btn"]}
        onClick={() => {
          if (selectedSize) {
            addToCart({
              id,
              title,
              price_new,
              price_old,
              product_colors: colors,
              size: selectedSize,
              quantity: 1,
            });
          }
        }}
        disabled={!selectedSize}
      >
        Add To Card
      </Button>
    </section>
  );
};

export default CardInfo;
