import { ReactNode, createContext, useContext, useState, Dispatch, SetStateAction } from "react";

// Определяем типы для контекста
interface SearchContextType {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
}

// Создаем контекст с начальным значением undefined
const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [inputValue, setInputValue] = useState<string>('');
    return (
        <SearchContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </SearchContext.Provider>
    );
};

// Исправляем использование useContext
export const useSearchContext = (): SearchContextType => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearchContext must be used within a SearchProvider');
    }
    return context;
};

export { SearchProvider };
