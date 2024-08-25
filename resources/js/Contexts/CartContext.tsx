<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
  import { ReactNode, createContext, useContext, useEffect, useState } from "react";

  interface IProduct {
    id: number;
    title: string;
    price_new: string;
    price_old: string;
    product_colors: {
      color_id: number;
      color: {
        name: string;
      };
      product_color_images: {
        image_path: string;
      }[];
    }[];
    size: {
      id: number;
      name: string;
    };
    quantity: number;
  }

  interface ICartContext {
    cart: IProduct[];
    addToCart: (product: IProduct) => void;
    removeFromCart: (product: IProduct) => void;
    getProductQuantity: (productId: number, sizeId: number) => number;
  }

  export const CartContext = createContext<ICartContext>({} as ICartContext);

  export const CartProvider = ({ children } : { children: ReactNode }) => {
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if(storedCart) {
        try {
          setCart(JSON.parse(storedCart));
        } catch(error) {
          console.error('Error parsing cart data from localStorage: ', error)
        }
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const addToCart = (product: IProduct) => {
      const existingProductIndex = cart.findIndex(
        item => item.id === product.id && item.size.id === product.size.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
      }
    }

    const removeFromCart = (product: IProduct) => {
      setCart(prevCart => prevCart.filter(
        cartItem => !(cartItem.id === product.id && cartItem.size.id === product.size.id)
      ));
    }

    const getProductQuantity = (productId: number, sizeId: number) => {
      const product = cart.find(item => item.id === productId && item.size.id === sizeId);
      return product ? product.quantity : 0;
    }

    return (
      <CartContext.Provider value={{cart, addToCart, removeFromCart, getProductQuantity}}>
        {children}
      </CartContext.Provider>
    )
  }

  export const useCartContext = () => useContext(CartContext);
<<<<<<< HEAD
=======
=======
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface IProduct {
  id: number;
  title: string;
  price_new: number;
  price_old: number;
  product_colors: Array<{
    color_id: number;
    color: {
      name: string
    }
    product_color_images: Array<{ image_path: string }>
  }>;
  size: {
    id: number;
    name: string;
  };
  quantity: number;
}

interface ICartContext {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  getProductQuantity: (productId: number, sizeId: number) => number;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children } : { children: ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if(storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch(error) {
        console.error('Error parsing cart data from localStorage: ', error)
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  const addToCart = (product: IProduct) => {
    const existingProductIndex = cart.findIndex(
      item => item.id === product.id && item.size.id === product.size.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  }

  const removeFromCart = (product: IProduct) => {
    setCart(prevCart => prevCart.filter(
      cartItem => !(cartItem.id === product.id && cartItem.size.id === product.size.id)
    ));
  }

  const getProductQuantity = (productId: number, sizeId: number) => {
    const product = cart.find(item => item.id === productId && item.size.id === sizeId);
    return product ? product.quantity : 0;
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, getProductQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext);
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
>>>>>>> 134ff02aacae05d81f153a9ea133d4feb5145c3a
