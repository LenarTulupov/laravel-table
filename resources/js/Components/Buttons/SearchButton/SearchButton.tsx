import { FC, ReactNode } from "react"
import styles from './SearchButton.module.scss'
import { IoSearch } from "react-icons/io5"

interface ISearchButton {
  onClick: () => void;
  className?: string;
}

const SearchButton: FC<ISearchButton> = ({ onClick, className }) => {
  return (
    <button 
      className={`${styles['search-button']} ${className || ''}`} 
      onClick={onClick}
    >
        <IoSearch />
    </button>
  )
}

export default SearchButton