import { useRecentlyViewedContext } from "@/Contexts/RecentlyViewedContext";
import { useProductsContext } from "@/Contexts/ProductsContext";
import Container from "@/Components/Container/Container";
import ProductsGridContainer from "@/Components/ProductsGridContainer/ProductsGridContainer";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import Card from "@/Components/Cards/Card/Card";
import { FcLike } from "react-icons/fc";
import styles from "./Index.module.scss";
import { useFavoritesContext } from "@/Contexts/FavoriteContext";

const Index = () => {
  const { favorites } = useFavoritesContext();
  const { recentlyViewed } = useRecentlyViewedContext();
  const { products } = useProductsContext();

  const favoriteProducts = favorites.map(FavId =>
    products.find(product => product.id === FavId)
  );

  const filteredProducts = recentlyViewed.filter(recentProduct => {
    return (
      recentProduct.product_colors.length > 0 &&
      recentProduct.product_colors[0].product_color_images.length > 0
    );
  });

  return (
    <GuestLayout>
      <main className={styles["favorite-page"]}>
        {favoriteProducts.length > 0 ? (
          <ProductsGridContainer>
            {favoriteProducts.map(favorite => (
              <Card
                key={favorite.id}
                id={favorite.id}
                image={favorite.images}
                title={favorite.title}
                price_new={favorite.price_new}
                price_old={favorite.price_old}
                colors={favorite.color}
                sizes={favorite.sizes}
                isInfoExist={true}
              />
            ))}
          </ProductsGridContainer>
        ) : (
          <Container>
            <div
              className={
                `${styles["favorite-page__empty-favorite"]} 
                 ${styles["empty-favorite"]}`
              }
            >
              <div className={styles["empty-favorite__like"]}>
                <FcLike />
              </div>
              <div className={styles["empty-favorite__text"]}>
                <p>YOU DON'T HAVE ANY ITEMS SAVED FOR LATER (YET)</p>
              </div>
            </div>
          </Container>
        )}
        {filteredProducts.length > 0 && (
          <section
            className={
              `${styles["favorite-page__recently-viewed"]} 
               ${styles["recently-viewed"]}`
            }
          >
            <h2 className={styles["recently-viewed__title"]}>
              RECENTLY VIEWED ITEMS
            </h2>
            <ProductsGridContainer>
              {filteredProducts.map(product => (
                <Card
                  key={product.id}
                  id={product.id}
                  image={product.product_colors[0].product_color_images.map(
                    img => img.image_path
                  )}
                  title={product.title}
                  price_new={product.price_new}
                  price_old={product.price_old}
                  colors={product.product_colors}
                  sizes={product.sizes}
                  isInfoExist={true}
                />
              ))}
            </ProductsGridContainer>
          </section>
        )}
      </main>
    </GuestLayout>
  );
};

export default Index;
