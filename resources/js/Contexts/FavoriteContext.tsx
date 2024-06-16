import { ReactNode, createContext, useContext, useState } from "react";

interface IFavoriteItem {
    id: number
    title: string
    price_new: number
    price_old: number
    image: string[]
    colors: Array<{
        color_id: number
        product_color_images: Array<{ image_path: string }>
    }>
    sizes: Array<{
        id: number
        name: string
    }>
}

interface IFavoriteContext {
    favorites: IFavoriteItem[]
    addToFavorite: (item: IFavoriteItem) => void
}

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

export const FavoriteProvider = ({ children }: { children: ReactNode}) => {
    const [favorites, setFavorites] = useState<IFavoriteItem[]>([]);

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