interface IProductColorImage {
  image_path: string
}

export interface IColor {
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

export interface IProduct {
  id: number
  title: string
  price_new: number
  price_old: number
  product_colors: IProductColor[]
  sizes: ISizes[]
}
  