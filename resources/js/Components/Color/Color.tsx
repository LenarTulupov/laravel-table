import styles from "./Color.module.scss";
import styles2 from "../../../css/colors.module.scss";
import { FC } from "react";

interface IColor {
  colors: { color_id: number; color: { name: string } }[];
  handleColorClick: (colorName: string) => void;
  className?: string;
}

const Color: FC<IColor> = ({ colors, handleColorClick, className }) => {
  return (
<<<<<<< HEAD
    <div className={`${styles.color} ${className || ''}`}>
=======
    <div className={`${styles.color} ${className}`}>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
      {colors.map(({ color_id, color }) => {
        const colorName = color.name;
        return (
          <div
            className={`${styles["color-block"]} ${styles2[`color-${colorName}`]}`}
            key={color_id}
            onClick={() => handleColorClick(colorName)}
          />
        );
      })}
    </div>
  );
};

export default Color;
