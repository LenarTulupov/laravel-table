import styles from './Partners.module.scss'

const Partners = () => {
    const img1 = "https://cdn.shopify.com/s/files/1/1276/0919/files/ELLE_0df4e1bc-336e-4fb3-bd11-2969a10e477e.png?v=1717056498";
    const img2 = "https://cdn.shopify.com/s/files/1/1276/0919/files/WWD-LOGO_7d72f520-cd43-402e-ab7e-3121dab1a012.png?v=1717056498";
    const img3 = "https://cdn.shopify.com/s/files/1/1276/0919/files/VOGUE_a5b332b3-2396-4b30-af03-e188fa1ba6f3.png?v=1717056497";
    const img4 = "https://cdn.shopify.com/s/files/1/1276/0919/files/LOFFICIEL_a0471508-305d-4b47-9901-a0c8f0eebf03.png?v=1717056498";
    const img5 = "https://cdn.shopify.com/s/files/1/1276/0919/files/FORBES_e4728b02-d612-4627-be0d-45377f99022a.png?v=1717056497";
  return (
    <section className={styles.partners}>
        <img src={img1} alt="elle" className={styles.partners__img} />
        <img src={img2} alt="wwd" className={styles.partners__img} />
        <img src={img3} alt="vogue" className={styles.partners__img} />
        <img src={img4} alt="l'officiel" className={styles.partners__img} />
        <img src={img5} alt="forbes" className={styles.partners__img} />
    </section>
  )
}

export default Partners