import styles from './NewArrivals.module.css'
import database from '../../data/database.json'
import ProductCard from "../ProductCard/ProductCard.tsx";

export default function NewArrivals() {
  const products = database.home.newArrivals;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>NOVIDADES</h2>
      <div className={styles.productsContainer}>
        <ul className={styles.productsList}>
          {products.map(product => (
              <ProductCard key={product.id} product={product}/>
            )
          )}
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={database.home.footer.footerImage} alt="Mulher com tênis branco"/>
      </div>
    </section>
  )
}