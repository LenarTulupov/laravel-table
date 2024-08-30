import { FC } from "react"
import styles from "./Filter.module.scss"
import { IFilter } from "@/types/filter.interface";
import InputLabel from "../ui/InputLabel/InputLabel";

const Filter: FC<IFilter> = ({ id, options, handleChange, label }) => (
  <div className={styles.filter}>
    {label && <InputLabel htmlFor={id} text={label} />}
    <select id={id} onChange={handleChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Filter