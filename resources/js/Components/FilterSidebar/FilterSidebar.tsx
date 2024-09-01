import { FC, RefObject } from 'react';
import { useFilterContext } from '@/Contexts/FilterContext';
import Button from '../ui/Buttons/Button/Button';
import CheckboxItemsList from '../CheckboxItemsList/CheckboxItemsList';
import RadioItemsList from '../RadioItemsList/RadioItemsList';
import styles from './FilterSidebar.module.scss'

interface IFilterSidebar {
  isSectionOpened: "sizes" | "colors" | "prices" | "sort" | null;
  toggleSection: (section: "sizes" | "colors" | "prices" | "sort" | null) => void;
  uniqueSizes: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  uniqueColors: string[];
  selectedColors: string[];
  onColorChange: (color: string) => void;
  prices: string[];
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
  prices,
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
              <CheckboxItemsList
                items={uniqueSizes}
                selectedItems={selectedSizes}
                onChange={onSizeChange}
                itemType="size"
              />
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
              <CheckboxItemsList
                items={uniqueColors}
                selectedItems={selectedColors}
                onChange={onColorChange}
                itemType="color"
              />
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
              <RadioItemsList
                items={prices}
                selectedItem={selectedPrice}
                onChange={onPriceChange}
                itemType="price"
              />
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