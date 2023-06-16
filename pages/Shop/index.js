import Navbar from '../../components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/Products.module.css'
import ProductsGrid from '../../components/Productspage/productsgrid'

const Products = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.banner}>
          <p className={styles.bannertext}>Modern Art</p>
          <h1 className={styles.bannerheading}>Art Gallery Shop</h1>
          <p className={styles.bannertext}>Cut from light and fluid mushroom.</p>
        </div>
        <ProductsGrid />
      </div>
      <Footer />
    </>
  )
}

export default Products

