interface IProductColorImage {
  id: number
  image_path: string;
}

export interface IColor {
  id: number;
  name: string;
}

export interface IProductColor {
<<<<<<< HEAD
  color_id: number; 
  color: IColor;
=======
  color: IColor
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
  product_color_images: IProductColorImage[];
}

interface ISizes {
  id: number;
  name: string;
}

<<<<<<< HEAD
export interface ISize {
  id: number;
  name: string;
  abbreviation: string;
  description: string;
  created_at: string | null;
  updated_at: string | null;
  pivot?: {
    product_id: number;
    size_id: number;
  };
}

=======
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
export interface IProduct {
  id: number;
  title: string;
  price_new: string;
  price_old: string;
  product_colors: IProductColor[];
  sizes: ISizes[];
  images: string[];
<<<<<<< HEAD
  quantity: number; 
  size: ISize; 
}

// export interface IProduct { 
//   id: number;
//   title: string;
//   price_new: string;
//   price_old: string;
//   product_colors: IProductColor[];
//   sizes: ISizes[];
//   images: string[];
// }
=======
}
>>>>>>> 9368bb0208ac3e853ff7543cf79958bfde114818
