import axios from "axios";
import { ChangeEvent, FC, useEffect, useState } from "react"
import styles from './Index.module.scss'
import Card from "@/Components/Cards/Card/Card";
import SearchLayout from "@/Layouts/SearchLayout";
import { useSearchContext } from "@/Contexts/SearchContext";
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout";
import Filter from "@/Components/Filter/Filter";
import Filters from "./Filters/Filters";

const Index: FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { inputValue } = useSearchContext();
  const [filterProducts, setFilterProducts] = useState(products);

  const filteredProducts = products.filter(product => {
    const value = product.title.toLowerCase();
    const isExist = value.includes(inputValue.toLowerCase())

    const colorFilter = product.product_colors.some(color => {
      return color.color.name.toLowerCase().includes(inputValue);
    });

    return isExist || colorFilter;
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('У вас проблемы вывода продуктов: ', error)
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (

    <div>
      <GuestLayout>
        <Filters products={products} setFilterProducts={setFilterProducts} className={styles.filters}/>
        {inputValue.length > 0 ? (
          <SearchLayout products={filteredProducts}>
            {null}
          </SearchLayout>
        ) : (
          <div className="container">
            <div className={styles.home__row}>
              {filterProducts.map((product: IProduct) => {
                const colorArray = product.product_colors;
                const imagesArray = colorArray[0].product_color_images;
                return (
                  colorArray.length > 0 && imagesArray.length > 0 ? (
                    <Card
                      key={product.id}
                      id={product.id}
                      image={imagesArray.map(img => img.image_path)}
                      title={product.title}
                      price_new={product.price_new}
                      price_old={product.price_old}
                      colors={colorArray}
                      sizes={product.sizes}
                    />
                  ) : null
                );
              })}
            </div>
          </div>
        )}
      </GuestLayout>
    </div>
  )
}

export default Index;
