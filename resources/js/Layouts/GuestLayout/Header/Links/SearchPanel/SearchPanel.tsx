<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import { FC, useEffect, useRef, useState } from "react"
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import TextInput from "@/Components/TextInput/TextInput";
import Container from "@/Components/Container/Container";
<<<<<<< HEAD
=======
=======
import { FC, useEffect } from "react"
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import TextInput from "@/Components/TextInput/TextInput";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
import { IoSearch } from "react-icons/io5";
import styles from './SearchPanel.module.scss'


interface ISearchPanel {
    searchToggle: () => void
    inputValue: string
    setInputValue: (value: string) => void
}

const SearchPanel: FC<ISearchPanel> = ({ searchToggle, inputValue, setInputValue }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
<<<<<<< HEAD
=======
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a


    useEffect(() => {
        return () => setInputValue('');
    }, []);

    const handleClose = () => {
        setInputValue('');
        searchToggle();
    }

    return (
        <div className={styles['search-panel']}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
            <Container>
                <div className={styles['search-panel__flex']}>
                    <IoSearch />
                    <TextInput
                        ref={inputRef}
                        className={styles['search-panel__input']}
                        placeholder="What are you looking for?"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <CloseButton onClick={handleClose} />
                </div>
            </Container>
<<<<<<< HEAD
=======
=======
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
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
        </div>
    )
}

export default SearchPanel