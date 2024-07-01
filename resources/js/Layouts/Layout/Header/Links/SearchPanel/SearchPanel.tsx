import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import { FC, useState } from "react"
import styles from './SearchPanel.module.scss'
import { IoSearch } from "react-icons/io5";
import { useSearchContext } from "@/Contexts/SearchContext";
import TextInput from "@/Components/TextInput";

interface ISearchPanel {
    searchToggle: () => void
}

const SearchPanel: FC<ISearchPanel> = ({ searchToggle }) => {
    const { inputValue, setInputValue } = useSearchContext();
    return (
        <div className={styles['search-panel']}>
            <div className={styles['search-panel__flex']}>
                <IoSearch />
                <TextInput
                    className={styles['search-panel__input']}
                    placeholder="What are you looking for?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <CloseButton onClick={searchToggle} />
        </div>
    )
}

export default SearchPanel