import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Checkbox from "@/Components/Checkbox/Checkbox";
import Radio from "@/Components/Radio/Radio";
import InputLabel from "@/Components/InputLabel/InputLabel";
import Button from "@/Components/Buttons/Button/Button";
import { useFilterContext } from "@/Contexts/FilterContext";
import styles from "./FilterLayout.module.scss";
import useResetFilters from "@/hooks/useResetFilters";
<<<<<<< HEAD
import Container from "@/Components/Container/Container";
import FilterSidebar from "@/Components/FilterSidebar/FilterSidebar";
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton";
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

interface IFilterLayout {
  uniqueSizes: string[];
  uniqueColors: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  selectedColors: string[];
  onColorChange: (color: string) => void;
  selectedPrice: string;
  onPriceChange: (price: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  children: ReactNode;
}

type OpenSection = "sizes" | "colors" | "prices" | "sort" | null;

const FilterLayout: FC<IFilterLayout> = ({
  uniqueSizes,
  uniqueColors,
  selectedSizes,
  onSizeChange,
  selectedColors,
  onColorChange,
  selectedPrice,
  onPriceChange,
  selectedSort,
  onSortChange,
  children,
}) => {
  const [isSectionOpened, setIsSectionOpened] = useState<OpenSection>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
<<<<<<< HEAD
=======
  useResetFilters();

  const { resetFilters } = useFilterContext();
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818

  const toggleSection = (section: OpenSection) => {
    setIsSectionOpened((prevSection) =>
      prevSection === section ? null : section,
    );
  };

  const isAnyFilterSelected =
    selectedSizes.length > 0 ||
    selectedColors.length > 0 ||
    selectedPrice !== '' ||
    selectedSort !== '';

  const price = [
    "0 - 5",
    "5 - 10",
    "10 - 20",
    "20 - 30",
    "30 - 50",
    "50 - 250",
  ];
  const sort = [
    "We recommend",
    "Newest in",
    "Price (Low to High)",
    "Price (High to Low)",
  ];

  useEffect(() => {
    if (isSectionOpened === "sort" && selectRef.current) {
      selectRef.current.focus();
    }
  }, [isSectionOpened]);

  return (
    <>
      <header className={styles["filter-layout"]}>
<<<<<<< HEAD
        <FilterSidebar 
        isSectionOpened={isSectionOpened}
        toggleSection={toggleSection}
        uniqueSizes={uniqueSizes}
        selectedSizes={selectedSizes}
        onSizeChange={onSizeChange}
        uniqueColors={uniqueColors}
        selectedColors={selectedColors}
        onColorChange={onColorChange}
        price={price}
        selectedPrice={selectedPrice}
        onPriceChange={onPriceChange}
        isAnyFilterSelected={isAnyFilterSelected}
        selectRef={selectRef}
        selectedSort={selectedSort}
        onSortChange={onSortChange}
        sort={sort}
        />
=======
        <div className={styles["filter-layout__center"]}>
          <section
            className={`${styles["filter-layout__section"]} ${styles.section}`}
          >
            <button
              className={`${styles.section__button}
                                        ${
                                          isSectionOpened === "sizes"
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
                                            ${
                                              isSectionOpened === "sizes"
                                                ? styles.section__list_active
                                                : ""
                                            }`}
              >
                {uniqueSizes.map((size, index) => {
                  const checkboxId = `size-${index}`;
                  return (
                    <div className={styles["section__list-group"]}>
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
                                        ${
                                          isSectionOpened === "colors"
                                            ? styles.section__button_active
                                            : ""
                                        }`}
              onClick={() => toggleSection("colors")}
            >
              Color
            </button>
            {isSectionOpened === "colors" && (
              <ul
                className={`${styles.section__list} ${styles.section__list_active}`}
              >
                {uniqueColors.map((color, index) => {
                  const checkboxId = `color-${index}`;
                  return (
                    <div className={styles["section__list-group"]}>
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
                                        ${
                                          isSectionOpened === "prices"
                                            ? styles.section__button_active
                                            : ""
                                        }`}
              onClick={() => toggleSection("prices")}
            >
              Price
            </button>
            {isSectionOpened === "prices" && (
              <ul
                className={`${styles.section__list} ${styles.section__list_active}`}
              >
                {price.map((priceElement, index) => {
                  const radioId = `priceElement-${index}`;
                  return (
                    <div className={styles["section__list-group"]}>
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
                                        ${
                                          isSectionOpened === "sort"
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
                className={styles["section__select"]}
                defaultValue={sort[0]}
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
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
      </header>
      <div>{children}</div>
    </>
  );
};

export default FilterLayout;
