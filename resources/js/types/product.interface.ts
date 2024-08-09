interface IProductColorImage {
  id: number
  image_path: string;
}

export interface IColor {
  id: number;
  name: string;
}

export interface IProductColor {
  color: IColor
  product_color_images: IProductColorImage[];
}

interface ISizes {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  title: string;
  price_new: string;
  price_old: string;
  product_colors: IProductColor[];
  sizes: ISizes[];
  images: string[];
}
