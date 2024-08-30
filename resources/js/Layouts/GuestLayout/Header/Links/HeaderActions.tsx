import { FC } from "react";
import { usePage } from "@inertiajs/react";
import { useCartContext } from "@/Contexts/CartContext";
import { useFavoritesContext } from "@/Contexts/FavoriteContext";
import NavLink from "@/Components/ui/NavLink/NavLink";
import SearchButton from "@/Components/ui/Buttons/SearchButton/SearchButton";
import CartButton from "@/Components/ui/Buttons/CartButton/CartButton";
import { FaRegFaceSmile } from "react-icons/fa6";
import styles from "./HeaderActions.module.scss";

interface IHeaderActions {
  toggleSidebar: () => void;
  searchToggle: () => void;
}

const HeaderActions: FC<IHeaderActions> = ({ toggleSidebar, searchToggle }) => {
  const { cart } = useCartContext();
  const { favorites } = useFavoritesContext();

  const { auth } = usePage().props;
  const user = auth.user;

  const totalCartQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <div className={styles['header-actions']}>
      <SearchButton
        onClick={searchToggle}
        className={styles['header-actions__search-button']}
      />
      <ul className={styles['header-actions__list']}>
        <li className={styles['header-actions__item']}>
          {user ? (
            <NavLink href="/profile">
              <FaRegFaceSmile className={styles['header-actions__item-logo']} />
            </NavLink>
          ) : (
            <NavLink href="/signin" className={styles['header-actions__link']}>
              Sign In
            </NavLink>
          )}
        </li>
        <li className={styles['header-actions__item']}>
          <NavLink href="/favorite" className={styles['header-actions__link']}>
            Favorite <span>{favorites.length}</span>
          </NavLink>
        </li>
      </ul>
      <CartButton
        onClick={toggleSidebar}
        className={styles['header-actions__cart-button']}
      >
        Cart <span>{totalCartQuantity}</span>
      </CartButton>
    </div>
  );
};

export default HeaderActions;
