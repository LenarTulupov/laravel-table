import { FC } from "react";
import { usePage } from "@inertiajs/react";
import { useCartContext } from "@/Contexts/CartContext";
import NavLink from "@/Components/NavLink/NavLink";
import { FaRegFaceSmile } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import styles from "./Links.module.scss";
import { useFavoritesContext } from "@/Contexts/FavoriteContext";

interface ILinks {
  toggleSidebar: () => void;
  searchToggle: () => void;
}

const Links: FC<ILinks> = ({ toggleSidebar, searchToggle }) => {
  const { cart } = useCartContext();
  const { favorites } = useFavoritesContext();

  const { auth } = usePage().props;
  const user = auth.user;

  const totalCartQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <div className={styles.links}>
      <ul className={styles.links__list}>
        <li className={styles.links__item}>
          <button onClick={searchToggle} className={styles.links__link}>
            <IoSearch />
          </button>
        </li>
        <li className={styles.links__item}>
          {user ? (
            <NavLink href="/profile">
              <FaRegFaceSmile className={styles["links__item-logo"]} />
            </NavLink>
          ) : (
            <NavLink href="/signin" className={styles.links__link}>
              Sign In
            </NavLink>
          )}
        </li>
        <li className={styles.links__item}>
          <NavLink href="/favorite" className={styles.links__link}>
            Favorite <span>{favorites.length}</span>
          </NavLink>
        </li>
        <li className={styles.links__item}>
          <button
            onClick={toggleSidebar}
            className={styles["links__cart-button"]}
          >
            Cart <span>{totalCartQuantity}</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Links;
