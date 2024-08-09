import { FC, useEffect, useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CartSidebar from "@/Components/Sidebars/CartSidebar/CartSidebar";
import EditCartSidebar from "@/Components/Sidebars/EditCartSidebar/EditCartSidebar";
import styles from './GuestLayout.module.scss'

interface ILayout {
  children: ReactNode
  
}

const GuestLayout: FC<ILayout> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isEditCartSidebarOpen, setIsEditCartSidebarOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleToggleEditSidebar = (product: any = null) => {
    setSelectedProduct(product);
    setSelectedSize(product ? product.size : null);
    setIsEditCartSidebarOpen(!isEditCartSidebarOpen);
  }


  // const handleEditOrCartSidebarsOpen = () => {
  //   if(isSidebarOpen) {
  //     handleToggleSidebar()
  //   } else if(isSidebarOpen && isEditCartSidebarOpen) {
  //     handleToggleEditSidebar();
  //   }
  // }

  useEffect(() => {
    const clearStyle = document.body.style.overflow;
    if (isSidebarOpen || isEditCartSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = clearStyle;
    }

    return () => {
      document.body.style.overflow = clearStyle;
    }
  }, [isSidebarOpen, isEditCartSidebarOpen]);

  return (
    <div
      className={`${styles.layout} ${(isSidebarOpen) ? styles.blurred : ''}`}>

      <CartSidebar
        toggleSidebar={handleToggleSidebar}
        isOpen={isSidebarOpen}
        toggleEditSidebar={handleToggleEditSidebar}
        isEditOpen={isEditCartSidebarOpen}
        product={selectedProduct}
      />

      <EditCartSidebar
        toggleEditSidebar={handleToggleEditSidebar}
        isEditOpen={isEditCartSidebarOpen}
        product={selectedProduct}
        selectedSize={selectedSize}
      />
      <div className={styles.flex}>
        <Header toggleSidebar={handleToggleSidebar}/>
        <div className={styles.layout__content}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default GuestLayout;
