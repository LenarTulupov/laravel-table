import { ReactNode } from "react";
import { ProductsProvider } from "@/Contexts/ProductsContext";
import { PaginationProvider } from "@/Contexts/PaginationContext";
import { FilterProvider } from "@/Contexts/FilterContext";
import { RecentlyViewedProvider } from "@/Contexts/RecentlyViewedContext";
import { CartProvider } from "@/Contexts/CartContext";
import { FavoriteProvider } from "@/Contexts/FavoriteContext";

const Router = ({ children }: { children: ReactNode }) => {
  return (
    <PaginationProvider>
      <ProductsProvider>
        <FilterProvider>
          <RecentlyViewedProvider>
            <FavoriteProvider>
              <CartProvider>
                {children}
              </CartProvider>
            </FavoriteProvider>
          </RecentlyViewedProvider>
        </FilterProvider>
      </ProductsProvider>
    </PaginationProvider>
  );
};

export default Router;
