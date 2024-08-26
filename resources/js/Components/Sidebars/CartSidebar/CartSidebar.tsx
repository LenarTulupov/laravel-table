import { FC } from "react";
import { Link } from "@inertiajs/react";
import { IProduct } from "@/types/product.interface";
import { useCartContext } from "@/Contexts/CartContext";
import CardSidebar from "../CardSidebar/CardSidebar";
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton";
import EmptyCard from "@/Components/Cards/Card/EmptyCard/EmptyCard";
import Button from "@/Components/Buttons/Button/Button";
import Price from "@/Components/Price/Price";
import styles from './CartSidebar.module.scss';

interface ICartSidebar {
  toggleSidebar: () => void;
  isOpen: boolean;
  toggleEditSidebar: (product: IProduct) => void;
  isEditOpen: boolean;
  // product: IProduct
}

const CartSidebar: FC<ICartSidebar> = ({
  toggleSidebar, isOpen, toggleEditSidebar, isEditOpen, product
}) => {
  const { cart } = useCartContext();

  const totalCartPrice = cart.reduce((total, product) =>
    total + (parseFloat(product.price_new) * product.quantity), 0);
  const totalCartPriceFixed = totalCartPrice.toFixed(2);
  const totalCartDiscount = (totalCartPrice * 0.25).toFixed(2);


  return (
    <div className={
      `${styles['cart-sidebar']} ${isOpen ? styles['cart-sidebar__open'] : ''} 
       ${isEditOpen ? styles['cart-sidebar__open-edit'] : ''}`
    }>
      {cart.length > 0 ? (
        <>
          <header className={`${styles['cart-sidebar__header']} ${styles.header}`}>
            <div className={`${styles['header__header']} ${styles['header-header']}`}>
              <h2 className={styles.header__title}>Your Cart</h2>

              <CloseButton onClick={isEditOpen ?
                () => toggleEditSidebar : toggleSidebar}
              />
            </div>
            <h3 className={styles.header__subheader}>25% OFF</h3>
            <h4 className={styles["header-sub-subheader"]}>25% OFF EVERYTHING!*</h4>
          </header>

          <div className={styles['cart-sidebar__content']}>
            {cart.map(product => (
              product.product_colors.length > 0 &&
                product.product_colors[0].product_color_images.length > 0 ? (
                <CardSidebar
                  key={`${product.id}_${product.size.id}`}
                  id={product.id}
                  image={product.product_colors[0].product_color_images.map(img =>
                    img.image_path)}
                  title={product.title}
                  price_new={product.price_new}
                  price_old={product.price_old}
                  colors={product.product_colors}
                  product={product}
                  toggleEditSidebar={() => toggleEditSidebar(product)}
                />
              ) : null
            ))}
          </div>

          <div className={`${styles['cart-sidebar__checkout']} ${styles.checkout}`}>
            <div className={`${styles.checkout__discount} ${styles.discount}`}>
              <div className={styles.discount__title}>DISCOUNT</div>
              <Price price={totalCartDiscount} className={styles.discount__price} />
            </div>
            <div className={`${styles.checkout__subtotal} ${styles.subtotal}`}>
              <div className={styles.subtotal__title}>
                SUBTOTAL (EXCLUDING DELIVERY)
              </div>
              <Price
                price={totalCartPriceFixed}
                className={styles.subtotal__price}
              />
              <div className={styles.subtotal__text}>
                *All taxes are included in product prices
              </div>
            </div>

            <div className={`${styles.checkout__buttons} ${styles.buttons}`}>
              <Button variant="gray" className={styles.buttons__gray}>
                View Cart
              </Button>
              <Button variant="black" className={styles.buttons__black}>
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <EmptyCard toggleSidebar={toggleSidebar} />
      )}
      <footer className={`${styles['cart-sidebar__footer']} ${styles.footer}`}>
        <Link href="/trends">
          <img
            src="https://media.boohoo.com/i/boohooamplience/minicart-banner-bottom-nh?qlt=default&fmt=auto"
            alt="new season trends"
            className={styles.footer__img}
          />
        </Link>
      </footer>
    </div>
  );
}

export default CartSidebar;
