import styles from './FilterSection.module.scss'

const FilterSection = ({
  title,
  items,
  itemType,
  isSectionOpened,
  toggleSection,
  selectedValue,
  setSelectedValue
}) => {
  return (
    <section className={styles['filter-section']}>
      FilterSection
    </section>
  )
}

export default FilterSection