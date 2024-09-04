import { forwardRef } from "react";
import { AiOutlineCaretUp } from "react-icons/ai";
import Button from "../Button/Button";
import styles from './ScrollToTopButton.module.scss'

interface IScrollToTopButton {
  onClick: () => void;
  isVisible?: boolean;
  className?: string;
}

const ScrollToTopButton = 
  forwardRef<HTMLButtonElement, IScrollToTopButton>(
    ({ onClick, isVisible, className }, ref) => {
  // if(!isVisible) {
  //   return null;
  // }
  return (
    <Button 
      variant="black" 
      ref={ref} 
      onClick={onClick} 
      className={`${styles.button} ${isVisible ? styles.button_visible : ''} ${className}`}
    >
      <AiOutlineCaretUp className={styles.button__icon}/>
    </Button>
  )
})

export default ScrollToTopButton