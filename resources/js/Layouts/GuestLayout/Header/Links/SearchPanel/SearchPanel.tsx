import { FC, useEffect } from "react"
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import TextInput from "@/Components/TextInput/TextInput";
import { IoSearch } from "react-icons/io5";
import styles from './SearchPanel.module.scss'


interface ISearchPanel {
    searchToggle: () => void
    inputValue: string
    setInputValue: (value: string) => void
}

const SearchPanel: FC<ISearchPanel> = ({ searchToggle, inputValue, setInputValue }) => {


    useEffect(() => {
        return () => setInputValue('');
    }, []);

    const handleClose = () => {
        setInputValue('');
        searchToggle();
    }

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
            <CloseButton onClick={handleClose} />
        </div>
    )
}

export default SearchPanel