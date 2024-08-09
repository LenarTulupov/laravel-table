import AddToCartButton from "@/Components/Buttons/AddToCartButton/AddToCartButton";
import FavoriteButton from "@/Components/Buttons/FavoriteButton/FavoriteButton";
import { FC } from "react";
import styles from "./CardInfo.module.scss";
import { useCartContext } from "@/Contexts/CartContext";
import Price from "../../../Price/Price";
import Sizes from "../../../Sizes/Sizes";
import Color from "@/Components/Color/Color";
import Button from "@/Components/Buttons/Button/Button";
import { Link } from "@inertiajs/react";
import { ISize } from "@/types/basic.interface";
import { IColor } from "@/types/product.interface";

interface ICardInfo {
  title: string;
  price_new: string;
  price_old: string;
  selectedSize: {
    id: number;
    name: string;
  };
  handleColorClick: () => void;
  id: number;
  sizes: ISize[];
  colors: IColor[];
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
  return (
    <section className={styles["card-info"]}>
      <Link href={`/product/${id}`}>
        <div className={styles["card-info__title"]}>{title}</div>
      </Link>
      <div className={styles["card-info__price-color"]}>
        <Price price_new={price_new} price_old={price_old} />
        <Color
          colors={colors}
          handleColorClick={handleColorClick}
          className={styles["card-info__color"]}
        />
      </div>
      <div style={{ minHeight: "59px" }}>
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
