import { FC } from 'react';
import NavLink from '../NavLink/NavLink';
import CloseButton from '../Buttons/CloseButton/CloseButton';
import { MdMenu } from "react-icons/md";
import styles from './Burger.module.scss';

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
