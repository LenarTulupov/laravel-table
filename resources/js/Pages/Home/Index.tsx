import GuestLayout from "@/Layouts/GuestLayout/GuestLayout"
import Banners from "./Banners/Banners"
import Featured from "./Featured/Featured"
import Container from "@/Components/Container/Container"
import styles from './Index.module.scss'
import Links from "./Links/Links"
import Brand from "./Brand/Brand"
import Testimonial from "./Testimonial/Testimonial"
import Partners from "./Partners/Partners"
import Benefits from "./Benefits/Benefits"
import ScrollToTopButton from "@/Components/Buttons/ScrollToTopButton/ScrollToTopButton"
import useScrollVisibility from "@/hooks/useScrollVisibility"
import scrollToTop from "@/utils/scrollToTop"
import useScrollToTop from "@/hooks/useScrollToTop"
import { useProductsContext } from "@/Contexts/ProductsContext"
import SpinnerLoader from "@/Components/SpinnerLoader/SpinnerLoader"

const Home = () => {
  const isScrollButtonVisible = useScrollVisibility(1000);
  useScrollToTop();
  const { products } = useProductsContext();
  const { loading } = useProductsContext();


  if(loading) {
    return <SpinnerLoader/>
  }
  
  return (
    <main className={styles.home}>
      <GuestLayout>
        <Banners/>
        <Container>
          <div className={styles.home__flex}>
          <Featured products={ products }/>
          <Links/>
          <Brand/>
          <Testimonial/>
          <Partners/>
          <Benefits/>
          </div>
        </Container>
        <ScrollToTopButton 
          onClick={ scrollToTop } 
          isVisible={ isScrollButtonVisible } 
          className={styles.scroll}
        />
      </GuestLayout>
    </main>
  )
}

export default Home