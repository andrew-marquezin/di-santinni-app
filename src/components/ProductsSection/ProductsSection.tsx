import {useState} from "react";
import styles from './ProductsSection.module.css'
import database from '../../data/database.json'
import ProductCard from "../ProductCard/ProductCard.tsx";

export default function ProductsSection() {
  const tabs = database.home.productsSection.tabs;
  const products = database.home.productsSection.items;
  const [activeFilter, setActiveFilter] = useState(tabs[0]);

  return (
    <section className={styles.container}>
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
      <div>
        <ul className={styles.productsList}>
          {products.filter(product => product.gender === activeFilter)
            .map(product => (
                <ProductCard key={product.id} product={product} size="small" />
              )
            )}
        </ul>
      </div>
    </section>
  )
}