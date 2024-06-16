import { BsCartX } from "react-icons/bs";
import styles from './EmptyCart.module.scss'
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton";
import { FC } from "react";

interface IEmptyCard {
    toggleSidebar: () => void
}

const EmptyCard: FC<IEmptyCard> = ({ toggleSidebar }) => {
    return (
        <div className={styles['empty-cart']}>
            <h1 className={styles['empty-cart__title']}>
                Your cart is empty
            </h1>
            <CloseButton onClick={toggleSidebar}/>
            <BsCartX className={styles['empty-cart__logo']}/>
        </div>
    )
}

export default EmptyCard