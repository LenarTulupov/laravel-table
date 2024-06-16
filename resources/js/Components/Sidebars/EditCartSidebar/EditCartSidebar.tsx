import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styles from './EditCartSidebar.module.scss';
import CloseButton from '@/Components/Buttons/CloseButton/CloseButton';

interface IEditCartSidebar {
  isEditOpen: boolean;
  toggleEditSidebar: () => void;
  product: any;
  selectedSize: any; 
}

const EditCartSidebar: FC<IEditCartSidebar> = ({
  isEditOpen,
  toggleEditSidebar,
  product,
  selectedSize 
}) => {
  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    if (product) {
      axios.get(`http://127.0.0.1:8000/api/products/${product.id}`)
        .then(response => {
          setProductDetails(response.data);
        })
        .catch(error => {
          console.error('Ошибка при загрузке продукта: ', error);
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
        {productDetails && (
          <>
            <img
              src={productDetails.product_colors[0].product_color_images[0].image_path}
              alt={productDetails.title}
              className={styles['edit-sidebar__img']}
            />
            <div className={`${styles['edit-sidebar__parameters']} ${styles.parameters}`}>
              <div className={`${styles.parameters__colors} ${styles.colors}`}>
                <label htmlFor="colors" className={styles.colors__label}>Color:</label>
                <select id="colors" className={styles.colors__select}>
                  {productDetails.product_colors.map(color => (
                    <option key={color.id} className={styles.colors__option} value={color.id}>
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
                  {productDetails.sizes.map(size => (
                    <option key={size.id} className={styles.sizes__option} value={size.id}>
                      {size.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={`${styles.parameters__quantity} ${styles.quantity}`}>
                <label htmlFor="quantity" className={styles.quantity__label}>Quantity</label>
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
              <button 
                onClick={toggleEditSidebar}
                className={styles.update__cancel}>cancel</button>
              <button className={styles.update__update}>update</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EditCartSidebar;
