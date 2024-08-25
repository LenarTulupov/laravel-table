import { FC, useState } from "react";
import { Link } from "@inertiajs/react";
import { useProductsContext } from "@/Contexts/ProductsContext";
import SalesTopHeader from "./SalesTopHeader/SalesTopHeader";
import Nav from "./Nav/Nav";
import Links from "./Links/Links";
import SearchPanel from "./Links/SearchPanel/SearchPanel";
import Container from "@/Components/Container/Container";
import SearchLayout from "@/Layouts/SearchLayout";
import Burger from "@/Components/Burger/Burger";
import Logo from "@/Components/Logo/Logo";
import styles from "./Header.module.scss";

interface IHeader {
  toggleSidebar: () => void;
}

const Header: FC<IHeader> = ({ toggleSidebar }) => {
  const [isSearchButtonActive, setIsSearchButtonActive] = useState<boolean>(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const { products } = useProductsContext();

  const toggleBurger = () => {
    setIsBurgerOpen(p => !p)
  }

  const searchToggle = () => {
    setIsSearchButtonActive(p => !p);
  };

  const filteredProducts = products.filter(product => {
    const searchTerms = inputValue.toLowerCase().split(' ').filter(term => term);

    return searchTerms.every(term =>
      product.title.toLowerCase().includes(term) ||
      product.color[0].color.name.toLowerCase().includes(term) ||
      product.categories[0].name.toLowerCase().includes(term)
    );
  });

  return (
    <header className={styles.header}>
      <div className={`${styles.header__columns} ${styles.columns}`}>
        <SalesTopHeader />
<<<<<<< HEAD
        {isSearchButtonActive ? (
          <Container>
=======
<<<<<<< HEAD
        {isSearchButtonActive ? (
          <Container>
=======
        <Container>
          {isSearchButtonActive ? (
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
            <div className={`${styles.columns__row} ${styles.row}`}>
              <Burger
                onClick={toggleBurger}
                isBurgerOpen={isBurgerOpen}
                className={styles.row__burger}
              />
              <div className={`${styles.row__logo} ${styles.logo}`}>
                <Link href="/" className={styles.logo__link}>
                  <Logo className={styles['logo__link-logo']} />
                </Link>
              </div>
              <div className={styles.row__links}>
                <Nav />
              </div>
              <Links
                toggleSidebar={toggleSidebar}
                searchToggle={searchToggle}
              />
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
          </Container>
        ) : (
          <>
            <SearchPanel
              searchToggle={searchToggle}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
            <SearchLayout filteredProducts={filteredProducts} inputValue={inputValue} />
          </>
        )}
<<<<<<< HEAD
=======
=======
          ) : (
            <>
              <SearchPanel
                searchToggle={searchToggle}
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
              <SearchLayout filteredProducts={filteredProducts} inputValue={inputValue} />
            </>
          )}
        </Container>
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
      </div>
    </header>
  );
};

export default Header;
