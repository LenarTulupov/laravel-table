import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IColor, ISize } from '../types/basic.interface'

interface IFavoriteItem {
    id: number
    title: string
    price_new: number
    price_old: number
    image: string[]
    colors: IColor[]
    sizes: ISize[]
}

interface IFavoriteContext {
    favorites: IFavoriteItem[]
    addToFavorite: (item: IFavoriteItem) => void
}

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

export const FavoriteProvider = ({ children }: { children: ReactNode}) => {
    const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);

    useEffect(() => {
        const storedFavorite = localStorage.getItem('favorites');
        if(storedFavorite) {
            try {
                setFavorites(JSON.parse(storedFavorite));
            } catch(error) {
                console.error('Error parsing favorites data from localStorage: ', error)
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    const addToFavorite = (item: IFavoriteItem) => {
        setFavorites(prevFavorites => [...prevFavorites, item]);
    }
    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorite }}>
            { children }
        </FavoriteContext.Provider>
    )
}

export const useFavoriteContext = () => useContext(FavoriteContext);