import NavLink from "@/Components/NavLink"
import styles from './Links.module.scss'
import { IoSearch } from "react-icons/io5";
import { useCartContext } from "@/Contexts/CartContext";
import { useFavoriteContext } from "@/Contexts/FavoriteContext";
import { FC } from "react";

interface ILinks {
    toggleSidebar: () => void
    searchToggle: () => void
}

const Links: FC<ILinks> = ({
    toggleSidebar, searchToggle
}) => {
    const { cart } = useCartContext();
    const { favorites } = useFavoriteContext();



    const totalCartQuantity = cart
        .reduce((total, product) => total + product.quantity, 0);

    return (
        <div className={styles.links}>
            <ul className={styles.links__list}>
                <li className={styles.links__item}>
                    <button onClick={searchToggle} className={styles.links__link}>
                        <IoSearch />
                    </button>
                </li>
                <li className={styles.links__item}>
                    <NavLink href="/dashboard" className={styles.links__link} active={false}>
                        Sign In
                    </NavLink>
                </li>
                <li className={styles.links__item}>
                    <NavLink href="/favorite" className={styles.links__link} active={false}>
                        Favorite <span>{favorites.length}</span>
                    </NavLink>
                </li>
                <li className={styles.links__item}>
                    <button
                        onClick={toggleSidebar}
                        className={styles['links__cart-button']}>
                        Cart <span>{totalCartQuantity}</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Links