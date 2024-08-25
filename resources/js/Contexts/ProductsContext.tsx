import { IProduct } from "@/types/product.interface";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type TypeProductsContext = {
  products: IProduct[];
  loading: boolean
};

export const ProductsContext = createContext<TypeProductsContext>(
  {} as TypeProductsContext,
);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const storedProducts = localStorage.getItem("products");

      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
        setLoading(false);
      } else {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/products");
          const productsData = response.data.map((product: IProduct) => {
            const color = product.product_colors || [];
            const images = color.flatMap((color) =>
              (color.product_color_images || []).map((img) => img.image_path),
            );
            return { ...product, color, images };
          });

          localStorage.setItem("products", JSON.stringify(productsData));
          setProducts(productsData);
          setLoading(false);
        } catch (error) {
          console.error("Fetching problem with products ", error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
