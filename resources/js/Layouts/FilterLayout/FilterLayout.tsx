import { FC, useEffect, useRef, useState } from "react";
import FilterSidebar from "@/Components/FilterSidebar/FilterSidebar";
import { IFilterLayout, OpenSection } from "@/types/filter-layout.interface";
import styles from "./FilterLayout.module.scss";

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

  const prices = [
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
        <FilterSidebar
          isSectionOpened={isSectionOpened}
          toggleSection={toggleSection}
          uniqueSizes={uniqueSizes}
          selectedSizes={selectedSizes}
          onSizeChange={onSizeChange}
          uniqueColors={uniqueColors}
          selectedColors={selectedColors}
          onColorChange={onColorChange}
          prices={prices}
          selectedPrice={selectedPrice}
          onPriceChange={onPriceChange}
          isAnyFilterSelected={isAnyFilterSelected}
          selectRef={selectRef}
          selectedSort={selectedSort}
          onSortChange={onSortChange}
          sort={sort}
        />
      </header>
      <div>{children}</div>
    </>
  );
};

export default FilterLayout;
