import { useFavoriteContext } from '@/Contexts/FavoriteContext';
import Card from '@/Components/Cards/Card/Card';
import { useRecentlyViewedContext } from '@/Contexts/RecentlyViewedContext';
import { FcLike } from "react-icons/fc";
import Layout from '@/Layouts/Layout/Layout';
import styles from './Index.module.scss';

const Index = () => {
  const { favorites } = useFavoriteContext();
  const { recentlyViewed } = useRecentlyViewedContext();

  const filteredProducts = recentlyViewed.filter(recentProduct => {
    return (
      recentProduct.product_colors.length > 0 &&
      recentProduct.product_colors[0].product_color_images.length > 0
    );
  });

  return (
    <Layout>
      <main className={styles['favorite-page']}>
        <div className="container">
          <div className={styles['favorite-page__wrapper']}>
            <header className={`${styles['favorite-page__header']} ${styles.header}`}>
              <div className={styles.header__title}>saved for later</div>
            </header>
            <div className={`${styles['favorite-page__content']} ${styles.content}`}>
              {favorites.length === 0 ? (
                <div className={`${styles['content__empty-favorite']} ${styles['empty-favorite']}`}>
                  <div className={styles['empty-favorite']}>
                    <div className={styles['empty-favorite__like']}>
                      <FcLike />
                    </div>
                    <div className={styles['empty-favorite__text']}>
                      <p>YOU DON'T HAVE ANY ITEMS SAVED FOR LATER (YET)</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles['favorite-page__grid']}>
                  {favorites.map(favorite => {
                    console.log(favorite.colors);
                    return (
                      <Card
                        key={favorite.id}
                        id={favorite.id}
                        image={favorite.image}
                        title={favorite.title}
                        price_new={favorite.price_new}
                        price_old={favorite.price_old}
                        colors={favorite.colors}
                        sizes={favorite.sizes}
                      />

                    )
                  })}
                </div>
              )}
              {filteredProducts.length > 0 && (
                <section className={`${styles['favorite-page__recently-viewed']} ${styles['recently-viewed']}`}>
                  <h2 className={styles['recently-viewed__title']}>RECENTLY VIEWED ITEMS</h2>
                  <div className={styles['recently-viewed__grid']}>
                    {filteredProducts.map(product => {
                      console.log(product.product_colors);
                      return (

                        <Card
                          key={product.id}
                          id={product.id}
                          image={product.product_colors[0].product_color_images.map(img => img.image_path)}
                          title={product.title}
                          price_new={product.price_new}
                          price_old={product.price_old}
                          colors={product.product_colors}
                          sizes={product.sizes}
                        />
                      )
                    })}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;
