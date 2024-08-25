import { FC, useEffect, useState } from 'react';
import { IColor, IProduct, IProductColor, ISize } from '@/types/product.interface';
import axios from 'axios';
import CloseButton from '@/Components/Buttons/CloseButton/CloseButton';
import Button from '@/Components/Buttons/Button/Button';
import styles from './EditCartSidebar.module.scss';
// import SpinnerLoader from '@/Components/SpinnerLoader/SpinnerLoader';

interface IProductDetails {
  id: number;
  title: string;
  product_colors: IProductColor[];
  sizes: ISize[];
}

interface IEditCartSidebar {
  isEditOpen: boolean;
  toggleEditSidebar: () => void;
  product: IProduct | null;
  selectedSize: ISize | null;
}

const EditCartSidebar: FC<IEditCartSidebar> = ({
  isEditOpen,
  toggleEditSidebar,
  product,
  selectedSize
}) => {
  const [productDetails, setProductDetails] = useState<IProductDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (product) {
      axios.get(`http://127.0.0.1:8000/api/products/${product.id}`)
        .then(response => {
          setProductDetails(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Ошибка при загрузке продукта: ', error);
          setLoading(false);
        });
    }
  }, [product]);

  return (
    <div className={`${styles['edit-sidebar']} 
      ${isEditOpen ? styles['edit-sidebar__open'] : ''}`}
    >
      <div className={`${styles['edit-sidebar__edit']} ${styles.edit}`}>
        <div className={styles.edit__title}>EDIT PRODUCT</div>
        <CloseButton onClick={toggleEditSidebar} />
      </div>
      <div className={styles['edit-sidebar__content']}>

        {loading ? (
          <div>Loading...</div>
        ) : (
          productDetails && (
            <>
              <img
                src={
                  productDetails.product_colors[0].product_color_images[0].image_path
                }
                alt={productDetails.title}
                className={styles['edit-sidebar__img']}
              />
              <div className={`${styles['edit-sidebar__parameters']} ${styles.parameters}`}>
                <div className={`${styles.parameters__colors} ${styles.colors}`}>
                  <label htmlFor="colors" className={styles.colors__label}>
                    Color:
                  </label>
                  <select id="colors" className={styles.colors__select}>
                    {productDetails.product_colors.map((color) => (
                      <option
                        key={color.color.id}
                        className={styles.colors__option}
                        value={color.color.id}
                      >
                        {color.color.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.parameters__sizes} ${styles.sizes}`}>
                  <label htmlFor="sizes" className={styles.sizes__label}>Size:</label>
                  <select
                    id="sizes"
                    className={styles.sizes__select}
                    defaultValue={selectedSize ? selectedSize.id : ''}
                  >
                    {productDetails.sizes.map((size) => (
                      <option
                        key={size.id}
                        className={styles.sizes__option}
                        value={size.id}
                      >
                        {size.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.parameters__quantity} ${styles.quantity}`}>
                  <label htmlFor="quantity" className={styles.quantity__label}>
                    Quantity
                  </label>
                  <select id="quantity" className={styles.quantity__select}>
                    <option className={styles.quantity__option} value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className={`${styles['edit-sidebar__update']} ${styles.update}`}>
                <Button
                  variant='white'
                  className={styles.update__cancel}
                  onClick={toggleEditSidebar}
                >
                  cancel
                </Button>
                <Button
                  variant='white'
                  className={styles.update__update}
                >
                  update
                </Button>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default EditCartSidebar;
