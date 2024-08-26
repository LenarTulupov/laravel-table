interface IProductColorImage {
  id: number
  image_path: string;
}

export interface IColor {
  id: number;
  name: string;
}

export interface IProductColor {
  color_id: number; 
  color: IColor;
  product_color_images: IProductColorImage[];
}

interface ISizes {
  id: number;
  name: string;
}

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

export interface ICategory {
  id: number;
  name: string;
  created_at: string | null;
  updated_at: string | null;
  pivot?: {
    product_id: number;
    category_id: number;
  };
}

export interface IProduct {
  id: number;
  title: string;
  price_new: string;
  price_old: string;
  product_colors: IProductColor[];
  sizes: ISizes[];
  images: string[];
  quantity: number; 
  size: ISize; 
  categories: ICategory[]
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
