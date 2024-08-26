import { FC, RefObject } from 'react';
import Button from '../Buttons/Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import InputLabel from '../InputLabel/InputLabel';
import Radio from '../Radio/Radio';
import styles from './FilterSidebar.module.scss'
import { useFilterContext } from '@/Contexts/FilterContext';

interface IFilterSidebar {
  isSectionOpened: "sizes" | "colors" | "prices" | "sort" | null;
  toggleSection: (section: "sizes" | "colors" | "prices" | "sort" | null) => void;
  uniqueSizes: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  uniqueColors: string[];
  selectedColors: string[];
  onColorChange: (color: string) => void;
  price: string[];
  selectedPrice: string;
  onPriceChange: (price: string) => void;
  isAnyFilterSelected: boolean;
  selectRef: RefObject<HTMLSelectElement>;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  sort: string[];
}

const FilterSidebar: FC<IFilterSidebar> = ({
  isSectionOpened,
  toggleSection,
  uniqueSizes,
  selectedSizes,
  onSizeChange,
  uniqueColors,
  selectedColors,
  onColorChange,
  price,
  selectedPrice,
  onPriceChange,
  isAnyFilterSelected,
  selectRef,
  selectedSort,
  onSortChange,
  sort
}) => {
  const { resetFilters } = useFilterContext();

  return (
    <>
      <div className={styles["filter-layout__center"]}>
        <section
          className={`${styles["filter-layout__section"]} ${styles.section}`}
        >
          <button
            className={`${styles.section__button}
              ${isSectionOpened === "sizes"
                ? styles.section__button_active
                : ""
              }`}
            onClick={() => toggleSection("sizes")}
          >
            Size
          </button>
          {isSectionOpened === "sizes" && (
            <ul
              className={`${styles.section__list}
              ${isSectionOpened === "sizes"
                  ? styles.section__list_active
                  : ""
                } 
              ${isAnyFilterSelected ? styles['section__list_selected'] : ''}`}
              
            >
              {uniqueSizes.map((size, index) => {
                const checkboxId = `size-${index}`;
                return (
                  <div className={styles["section__list-group"]} key={checkboxId}>
                    <Checkbox
                      id={checkboxId}
                      checked={selectedSizes.includes(size)}
                      onChange={() => onSizeChange(size)}
                    />
                    <InputLabel
                      htmlFor={checkboxId}
                      key={index}
                      className={styles.section__item}
                    >
                      {size}
                    </InputLabel>
                  </div>
                );
              })}
            </ul>
          )}
        </section>
        <section
          className={`${styles["filter-layout__section"]} ${styles.section}`}
        >
          <button
            className={`${styles.section__button}
              ${isSectionOpened === "colors"
                ? styles.section__button_active
                : ""
              }`}
            onClick={() => toggleSection("colors")}
          >
            Color
          </button>
          {isSectionOpened === "colors" && (
            <ul
              className={
                `${styles.section__list} 
                 ${styles.section__list_active} 
                 ${styles['section__list_active-colors']}
                 ${isAnyFilterSelected ? styles['section__list_selected'] : ''}`
              }
            >
              {uniqueColors.map((color, index) => {
                const checkboxId = `color-${index}`;
                return (
                  <div className={styles["section__list-group"]} key={checkboxId}>
                    <Checkbox
                      id={checkboxId}
                      checked={selectedColors.includes(color)}
                      onChange={() => onColorChange(color)}
                    />
                    <InputLabel
                      key={index}
                      className={styles.section__item}
                      htmlFor={checkboxId}
                    >
                      {color}
                    </InputLabel>
                  </div>
                );
              })}
            </ul>
          )}
        </section>
        <section
          className={`${styles["filter-layout__section"]} ${styles.section}`}
        >
          <button
            className={`${styles.section__button}
              ${isSectionOpened === "prices"
                ? styles.section__button_active
                : ""
              }`}
            onClick={() => toggleSection("prices")}
          >
            Price
          </button>
          {isSectionOpened === "prices" && (
            <ul
              className={
                `${styles.section__list} 
                 ${styles.section__list_active}
                 ${isAnyFilterSelected ? styles['section__list_selected'] : ''}
              `}
            >
              {price.map((priceElement, index) => {
                const radioId = `priceElement-${index}`;
                return (
                  <div className={styles["section__list-group"]} key={radioId}>
                    <Radio
                      id={radioId}
                      name="price"
                      checked={selectedPrice === priceElement}
                      onChange={() => onPriceChange(priceElement)}
                    />
                    <InputLabel
                      className={styles.section__item}
                      key={index}
                      htmlFor={radioId}
                    >
                      {priceElement}
                    </InputLabel>
                  </div>
                );
              })}
            </ul>
          )}
        </section>
        {isAnyFilterSelected && (
          <Button
            variant="black"
            onClick={resetFilters}
            className={styles['reset-button']}
          >
            Reset Filters
          </Button>
        )}
      </div>
      <div className={styles["filter-layout__end"]}>
        <section
          className={`${styles["filter-layout__section"]} ${styles.section}`}
        >
          <button
            className={`${styles.section__button}
                                        ${isSectionOpened === "sort"
                ? styles.section__button_active
                : ""
              }`}
            onClick={() => toggleSection("sort")}
          >
            Sort
          </button>
          {isSectionOpened === "sort" && (
            <select
              id="sort"
              ref={selectRef}
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              size={sort.length}
              className={
                `${styles["section__select"]} 
                 ${isAnyFilterSelected ? styles['section__select_selected'] : ''}`
              }
            >
              {sort.map((sortElement, index) => (
                <option
                  value={sortElement} 
                  key={index}
                  className={styles["section__option"]}
                >
                  {sortElement}
                </option>
              ))}
            </select>
          )}
        </section>
      </div>
    </>
  )
}

export default FilterSidebar