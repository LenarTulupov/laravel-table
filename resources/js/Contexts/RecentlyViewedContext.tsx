import { IProductColor, ISize } from "@/types/product.interface";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IRecentlyViewedProduct {
    id: number
    image: string[]
    title: string
    price_new: number
    price_old: number
    product_colors: IProductColor[]
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

    useEffect(() => {
        const storedRecentlyViewed = localStorage.getItem('recentlyViewed');

        if(storedRecentlyViewed) {
            try {
                setRecentlyViewed(JSON.parse(storedRecentlyViewed));
            } catch(error) {
                console.error('Error parsing recently viewed data from localStorage: ', error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }, [recentlyViewed]);

    return (
        <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
            { children }
        </RecentlyViewedContext.Provider>
    )
}

export const useRecentlyViewedContext = () => useContext(RecentlyViewedContext);
