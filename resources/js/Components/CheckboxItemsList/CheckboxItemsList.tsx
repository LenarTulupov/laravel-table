import { FC } from "react";
import Checkbox from "../ui/Checkbox/Checkbox";
import InputLabel from "../ui/InputLabel/InputLabel";
import styles from './CheckboxItemsList.module.scss'

interface ICheckboxItemsList {
  items: string[];
  selectedItems: string | string[];
  onChange: (item: string) => void;
  itemType: string;
}

const CheckboxItemsList: FC<ICheckboxItemsList> = ({ 
  items, 
  selectedItems, 
  onChange, 
  itemType }) => {
  return (
    <>
      {items.map((item, index) => {
        const checkboxId = `${itemType}-${index}`;
        return (
          <div className={styles['section__list-group']} key={checkboxId}>
            <Checkbox
              id={checkboxId}
              checked={selectedItems.includes(item)}
              onChange={() => onChange(item)}
            />
            <InputLabel
              htmlFor={checkboxId}
            >
              {item}
            </InputLabel>
          </div>
        );
      })}
    </>
  );
};

export default CheckboxItemsList;
