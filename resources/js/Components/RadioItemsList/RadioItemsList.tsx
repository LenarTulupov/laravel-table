import { FC } from "react";
import InputLabel from "../ui/InputLabel/InputLabel";
import Radio from "../ui/Radio/Radio";
import styles from './RadioItemsList.module.scss';

interface IRadioItemsList {
  items: string[];
  selectedItem: string;
  onChange: (price: string) => void;
  itemType: string;
}

const RadioItemsList: FC<IRadioItemsList> = ({ 
  items, 
  selectedItem, 
  onChange, 
  itemType }) => {
  return (
    <>
      {items.map((price, index) => {
        const radioId = `${itemType}-${index}`;
        return (
          <div className={styles['section__list-group']} key={radioId}>
            <Radio
              id={radioId}
              checked={selectedItem === price }
              onChange={() => onChange(price)}
            />
            <InputLabel htmlFor={radioId}>{price}</InputLabel>
          </div>
        );
      })}
    </>
  );
};

export default RadioItemsList;
