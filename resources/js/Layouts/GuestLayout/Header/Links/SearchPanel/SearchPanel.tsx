<<<<<<< HEAD
import { FC, useEffect, useRef, useState } from "react"
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import TextInput from "@/Components/TextInput/TextInput";
import Container from "@/Components/Container/Container";
=======
import { FC, useEffect } from "react"
import CloseButton from "@/Components/Buttons/CloseButton/CloseButton"
import TextInput from "@/Components/TextInput/TextInput";
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
import { IoSearch } from "react-icons/io5";
import styles from './SearchPanel.module.scss'


interface ISearchPanel {
    searchToggle: () => void
    inputValue: string
    setInputValue: (value: string) => void
}

const SearchPanel: FC<ISearchPanel> = ({ searchToggle, inputValue, setInputValue }) => {
<<<<<<< HEAD
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818


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
        </div>
    )
}

export default SearchPanel