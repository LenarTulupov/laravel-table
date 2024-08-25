import { FC } from "react"
import styles from './Logo.module.scss'

interface ILogo {
    className?: string
}

const Logo:FC<ILogo> = ({ className }) => {

  return (
<<<<<<< HEAD
    <img 
      className={`${styles.logo} ${className || ''}`} 
      src="https://www.simpleretro.com/cdn/shop/files/logo_a14d6374-58ac-47e7-9748-42c8ae3465ad.png?v=1614738688&width=280" 
      alt="logo" 
    />
=======
    <img className={`${styles.logo} ${className}`} src="https://www.simpleretro.com/cdn/shop/files/logo_a14d6374-58ac-47e7-9748-42c8ae3465ad.png?v=1614738688&width=280" alt="logo" />
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  )
}

export default Logo