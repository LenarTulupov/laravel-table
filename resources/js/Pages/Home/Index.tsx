import { useProductsContext } from "@/Contexts/ProductsContext"
import GuestLayout from "@/Layouts/GuestLayout/GuestLayout"
import Banners from "./Banners/Banners"
import Featured from "./Featured/Featured"
import Container from "@/Components/ui/Container/Container"
import Links from "./Links/Links"
import Brand from "./Brand/Brand"
import Testimonial from "./Testimonial/Testimonial"
import Partners from "./Partners/Partners"
import Benefits from "./Benefits/Benefits"
import ScrollToTopButton from "@/Components/ui/Buttons/ScrollToTopButton/ScrollToTopButton"
import useScrollVisibility from "@/hooks/useScrollVisibility"
import scrollToTop from "@/utils/scrollToTop"
import useScrollToTop from "@/hooks/useScrollToTop"
import SpinnerLoader from "@/Components/ui/SpinnerLoader/SpinnerLoader"
import styles from './Index.module.scss'

const Home = () => {
  const isScrollButtonVisible = useScrollVisibility(1000);
  useScrollToTop();
  const { products } = useProductsContext();
  const { loading } = useProductsContext();

  if (loading) {
    return <SpinnerLoader />
  }

  return (
    <main className={styles.home}>
      <GuestLayout>
        <Banners />
        <Container>
          <div className={styles.home__flex}>
            <Featured products={products} />
            <Links />
            <Brand />
            <Testimonial />
            <Partners />
            <Benefits />
          </div>
        </Container>
      </GuestLayout>
      <ScrollToTopButton
        onClick={scrollToTop}
        isVisible={isScrollButtonVisible}
        className={styles.scroll}
      />
    </main>
  )
}

export default Home