import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import { MdMenu } from "react-icons/md";
import styles from './Burger.module.scss';
<<<<<<< HEAD
import Logo from '../Logo/Logo';
=======
<<<<<<< HEAD
import Logo from '../Logo/Logo';
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a

interface IBurger {
  onClick: () => void;
  isBurgerOpen: boolean;
  className?: string
}

const Burger: FC<IBurger> = ({ onClick, isBurgerOpen, className }) => {
  return (
    <div className={`${styles.burger} ${className}`}>
      <button className={styles.burger__button} onClick={onClick}>
        <MdMenu className={styles['burger__button-icon']} />
      </button>
      <div
        className={`
          ${styles.burger__sidebar} 
          ${isBurgerOpen
            ? styles.burger__sidebar_open
            : ''}`}>
        <CloseButton onClick={onClick} className={styles['burger__sidebar-close']} />
        <nav className={styles.burger__navigation}>
          <ul className={styles['burger__navigation-list']}>
            <li className={styles['burger__navigation-item']}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
              <NavLink href="/" className={styles['burger__navigation-link']}>
                <Logo className={styles['burger__navigation-logo']} />
              </NavLink>
            </li>
            <li className={styles['burger__navigation-item']}>
<<<<<<< HEAD
=======
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
              <NavLink href='/all' className={styles['burger__navigation-link']}>
                All Clothing
              </NavLink>
            </li>
            <li className={styles['burger__navigation-item']}>
              <NavLink href='/new' className={styles['burger__navigation-link']}>
                New In
              </NavLink>
            </li>
            <li className={styles['burger__navigation-item']}>
              <NavLink href='/trends' className={styles['burger__navigation-link']}>
                Trends
              </NavLink>
            </li>
            <li className={styles['burger__navigation-item']}>
              <NavLink href='/dresses' className={styles['burger__navigation-link']}>
                Dresses
              </NavLink>
            </li>
            <li className={styles['burger__navigation-item']}>
              <NavLink href='/summer' className={styles['burger__navigation-link']}>
                Summer
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Burger;
