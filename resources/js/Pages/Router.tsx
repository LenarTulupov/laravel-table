import { ReactNode } from "react";
import { ProductsProvider } from "@/Contexts/ProductsContext";
import { PaginationProvider } from "@/Contexts/PaginationContext";
import { FilterProvider } from "@/Contexts/FilterContext";
import { RecentlyViewedProvider } from "@/Contexts/RecentlyViewedContext";
import { CartProvider } from "@/Contexts/CartContext";
import { FavProvider } from "@/Contexts/FavContext";
import { FavoriteProvider } from "@/Contexts/FavoriteContext";
// import { SearchProvider } from "@/Contexts/SearchContext";

const Router = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsProvider>
      <PaginationProvider>
        <FilterProvider>
          <RecentlyViewedProvider>
            <FavProvider>
              <FavoriteProvider>
                <CartProvider>
                  {/* <SearchProvider> */}
                    {children}
                  {/* </SearchProvider> */}
                </CartProvider>
              </FavoriteProvider>
            </FavProvider>
          </RecentlyViewedProvider>
        </FilterProvider>
      </PaginationProvider>
    </ProductsProvider>
  );
};

export default Router;
