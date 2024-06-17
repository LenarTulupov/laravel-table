export interface IColorImage {
    image_path: string;
  }
  
  export interface IColor {
    color_id: number;
    color: string;
    product_color_images: IColorImage[];
  }
  
  export interface ISize {
    id: number;
    name: string;
  }