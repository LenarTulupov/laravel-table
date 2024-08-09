import { ISize } from "@/types/basic.interface";
import styles from "./Sizes.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import handleSizeClick from "@/utils/selectSize";

interface ISizes {
  sizes: ISize[];
  selectedSize: ISize | null;
  setSelectedSize: Dispatch<SetStateAction<ISize | null>> 
}

const Sizes: FC<ISizes> = ({ sizes, setSelectedSize, selectedSize }) => {
  return (
    <div className={styles.sizes}>
      {sizes.map((size) => (
        <button
          key={size.id}
          className={`${styles["sizes__item"]}
             ${selectedSize && size.id === selectedSize.id ? styles.selected : ""}`}
          onClick={() => handleSizeClick(size, setSelectedSize)}
        >
          {size.name}
        </button>
      ))}
    </div>
  );
};

export default Sizes;
