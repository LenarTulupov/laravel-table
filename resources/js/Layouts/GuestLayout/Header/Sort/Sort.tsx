import styles from "./Sort.module.scss";

const Sort = ({ filteredProducts }) => {
  return (
    <div className={styles.sort}>
      <ul className={styles.sort__list}>
        <li>Size</li>
        <li>Color</li>
        <li>Price</li>
      </ul>
      <button className={styles.sort__button}>Sort</button>
    </div>
  );
};

export default Sort;
