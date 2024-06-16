import { ReactNode, createContext, useContext, useState } from "react";

interface IRecentlyViewedProduct {
    id: number
    image: string[]
    title: string
    price_new: string
    price_old: string
    colors: Array<{
        color_id: number
        product_color_images: Array<{ image_path: string }>
    }>
    sizes: Array<{
        id: number
        name: string
    }>
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
