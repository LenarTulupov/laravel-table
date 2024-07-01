import axios from "axios";
import { FC, useEffect, useState } from "react"
import styles from './Index.module.scss'
import Card from "@/Components/Cards/Card/Card";
import Layout from "@/Layouts/Layout/Layout";
import SearchLayout from "@/Layouts/SearchLayout";
import { useSearchContext } from "@/Contexts/SearchContext";

interface IProductColorImage {
  image_path: string
}

interface IColor {
  color_id: number
  name: string
}

interface IProductColor extends IColor {
  color: {
    color_id: number
    name: string
  }
  product_color_images: IProductColorImage[]
}

interface ISizes {
  id: number
  name: string
}

interface IProduct {
  id: number
  title: string
  price_new: number
  price_old: number
  product_colors: IProductColor[]
  sizes: ISizes[]
}


const Index: FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { inputValue } = useSearchContext();

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
      <Layout>
        {inputValue.length > 0 ? (
          <SearchLayout products={filteredProducts}>
            {null}
          </SearchLayout>
        ) : (
          <div className="container">
            <div className={styles.home__row}>
              {products.map((product: IProduct) => {
                return (
                  product.product_colors.length > 0
                    && product.product_colors[0].product_color_images.length > 0 ? (
                    <Card
                      key={product.id}
                      id={product.id}
                      image={product.product_colors[0].product_color_images
                        .map(img => img.image_path)}
                      title={product.title}
                      price_new={product.price_new}
                      price_old={product.price_old}
                      colors={product.product_colors}
                      sizes={product.sizes}
                    />
                  ) : null
                );
              })}
            </div>
          </div>
        )}
      </Layout>
    </div>
  )
}

export default Index;
