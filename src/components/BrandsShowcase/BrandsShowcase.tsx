import styles from './BrandsShowcase.module.css'
import database from '../../data/database.json'
import {useState} from "react";
import ProductCard from "../ProductCard/ProductCard.tsx";

export default function BrandsShowcase() {
  const {tabs} = database.home.brandShowcase
  const products = database.home.brandShowcase.items;
  const [activeFilter, setActiveFilter] = useState(tabs[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>NOSSAS MARCAS</h2>
        <div className={styles.tabsContainer}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tab} ${activeFilter === tab ? styles.active : ''}`}
              onClick={() => setActiveFilter(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={database.home.brandShowcase.activeBanner} alt="Tênis Mizuno"/>
          <div className={styles.gradientOverlay}></div>
        </div>
        <ul className={styles.productsList}>
          {products.filter(product => product.brand === activeFilter)
            .map(product => (
                <ProductCard key={product.id} product={product}/>
              )
            )}
        </ul>
      </div>
    </section>
  )
}