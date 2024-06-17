import { ReactNode, createContext, useContext, useState } from "react";
import { IColor, ISize } from '../types/basic.interface'

interface IRecentlyViewedProduct {
    id: number
    image: string[]
    title: string
    price_new: number
    price_old: number
    product_colors: IColor[]
    sizes: ISize[]
}

interface IRecentlyViewedContext {
    recentlyViewed: IRecentlyViewedProduct[]
    addToRecentlyViewed: (product: IRecentlyViewedProduct) => void
}


const RecentlyViewedContext = createContext<IRecentlyViewedContext>({
    recentlyViewed: [],
    addToRecentlyViewed: () => {}
});
export const RecentlyViewedProvider = ({children} : {children: ReactNode}) => {
    const [recentlyViewed, setRecentlyViewed] = useState<IRecentlyViewedProduct[]>([]);

    const addToRecentlyViewed = (product: IRecentlyViewedProduct) => {
        setRecentlyViewed((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if(existingProduct) {
                return prev;
            }
            return [...prev, product].slice(-5);
        })
    }

    return (
        <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
            { children }
        </RecentlyViewedContext.Provider>
    )
}

export const useRecentlyViewedContext = () => useContext(RecentlyViewedContext);
