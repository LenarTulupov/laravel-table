import { FC } from "react"
import { IoSearch } from "react-icons/io5"
import styles from './SearchButton.module.scss'

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