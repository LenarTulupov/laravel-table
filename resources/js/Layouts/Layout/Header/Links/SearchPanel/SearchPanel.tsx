import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import { FC } from "react"
import styles from './SearchPanel.module.scss'
import { IoSearch } from "react-icons/io5";

interface ISearchPanel {
    searchToggle: () => void
}

const SearchPanel: FC<ISearchPanel> = ({ searchToggle }) => {
    return (
        <div className={styles['search-panel']}>
            <div className={styles['search-panel__flex']}>
                <IoSearch />
                <input className={styles['search-panel__input']} type="text" placeholder="What are you looking for?" />
            </div>
            <CloseButton onClick={searchToggle} />
        </div>
    )
}

export default SearchPanel