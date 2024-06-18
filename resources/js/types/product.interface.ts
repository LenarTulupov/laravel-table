interface IProductColorImage {
    id: number;
    image_path: string;
  }
  
  interface IProductColor {
    color: {
      name: string;
    };
    product_color_images: IProductColorImage[];
  }
  
  interface ISize {
    id: number;
    abbreviation: string;
  }
  
  interface IProduct {
    title: string;
    price_new: number;
    price_old: number;
    sizes: ISize[];
    product_colors: IProductColor[];
  }
  
  interface IProductImage {
    id: number;
    image_path: string;
  }
  