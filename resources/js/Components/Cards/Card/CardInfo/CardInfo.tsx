import { Dispatch, FC, SetStateAction } from "react";
import styles from "./CardInfo.module.scss";
import { useCartContext } from "@/Contexts/CartContext";
import Price from "../../../Price/Price";
import Sizes from "../../../Sizes/Sizes";
import Color from "@/Components/Color/Color";
import Button from "@/Components/ui/Buttons/Button/Button";
import { Link } from "@inertiajs/react";
import { ISize } from "@/types/basic.interface";
import { IProductColor } from "@/types/product.interface";

interface ICardInfo {
  title: string;
  price_new: string;
  price_old: string;
  selectedSize: ISize | null;
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>;
  handleColorClick: (colorName: string) => void;
  id: number;
  sizes: ISize[];
  colors: IProductColor[];
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

  const transformedColors = colors.map(color => ({
    color_id: color.color.id,
    color: {
      name: color.color.name
    }
  }));
  return (
    <section className={styles["card-info"]}>
      <Link href={`/product/${id}`}>
        <div className={styles["card-info__title"]}>{title}</div>
      </Link>
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
