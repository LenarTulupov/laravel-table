import { FC, useState } from "react";
import { useProductsContext } from "@/Contexts/ProductsContext";
import SalesTopHeader from "./SalesTopHeader/SalesTopHeader";
import NavLink from "@/Components/ui/NavLink/NavLink";
import Nav from "./Nav/Nav";
import SearchPanel from "./Links/SearchPanel/SearchPanel";
import Container from "@/Components/ui/Container/Container";
import SearchLayout from "@/Layouts/SearchLayout";
import Burger from "@/Components/Burger/Burger";
import Logo from "@/Components/ui/Logo/Logo";
import styles from "./Header.module.scss";
import HeaderActions from "./Links/HeaderActions";

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
      product.product_colors[0].color.name.toLowerCase().includes(term) ||
      product.categories[0].name.toLowerCase().includes(term)
    );
  });

  return (
    <header className={styles.header}>
      <div className={`${styles.header__columns} ${styles.columns}`}>
        <SalesTopHeader />
        {isSearchButtonActive ? (
          <Container>
            <div className={`${styles.columns__row} ${styles.row}`}>
              <Burger
                onClick={toggleBurger}
                isBurgerOpen={isBurgerOpen}
                className={styles.row__burger}
              />
              <div className={`${styles.row__logo} ${styles.logo}`}>
                <NavLink href="/" className={styles.logo__link}>
                  <Logo className={styles['logo__link-logo']} />
                </NavLink>
              </div>
              <div className={styles.row__links}>
                <Nav />
              </div>
              <HeaderActions
                toggleSidebar={toggleSidebar}
                searchToggle={searchToggle}
              />
            </div>
          </Container>
        ) : (
          <>
            <SearchPanel
              searchToggle={searchToggle}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
            <SearchLayout
              filteredProducts={filteredProducts}
              inputValue={inputValue}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
