import { ReactNode } from "react";
import { ProductsProvider } from "@/Contexts/ProductsContext";
import { PaginationProvider } from "@/Contexts/PaginationContext";
import { FilterProvider } from "@/Contexts/FilterContext";
import { RecentlyViewedProvider } from "@/Contexts/RecentlyViewedContext";
import { CartProvider } from "@/Contexts/CartContext";
import { FavProvider } from "@/Contexts/FavContext";
<<<<<<< HEAD

const Router = ({ children }: { children: ReactNode }) => {
  return (
    <PaginationProvider>
      <ProductsProvider>
        <FilterProvider>
          <RecentlyViewedProvider>
            <FavProvider>
              <CartProvider>
                {children}
              </CartProvider>
            </FavProvider>
          </RecentlyViewedProvider>
        </FilterProvider>
      </ProductsProvider>
    </PaginationProvider>
=======
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
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  );
};

export default Router;
