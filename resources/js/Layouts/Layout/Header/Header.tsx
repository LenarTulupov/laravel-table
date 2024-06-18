import SalesTopHeader from "./SalesTopHeader/SalesTopHeader"
import Nav from "./Nav/Nav"
import Links from "./Links/Links"
import { Link } from "@inertiajs/react"
import { FC, useState } from "react"
import SearchPanel from "./Links/SearchPanel/SearchPanel"
import styles from './Header.module.scss'

interface IHeader {
  toggleSidebar: () => void
}

const Header: FC<IHeader> = ({ toggleSidebar }) => {
  const [isSearchButtonActive, setIsSearchButtonActive] = useState<boolean>(true);

  const searchToggle = () => {
    setIsSearchButtonActive(!isSearchButtonActive);
}
  return (
    <header className={styles.header}>
      <div className={`${styles.header__columns} ${styles.columns}`}>
        <SalesTopHeader />
        <div className="container">
          {isSearchButtonActive ? (
            <div className={`${styles.columns__row} ${styles.row}`}>
              <div className={`${styles.row__logo} ${styles.logo}`}>
                <Link href="/" className={styles.logo__link}>
                  CrazyShop
                </Link>
              </div>
              <div className="row__links">
                <Nav />
              </div>
              <Links
                toggleSidebar={toggleSidebar}
                searchToggle={searchToggle}
              />
            </div>
          ) : (
            <SearchPanel searchToggle={searchToggle}/>
          )}
        </div>
      </div>

    </header>
  )
}

export default Header