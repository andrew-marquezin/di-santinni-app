import styles from './BrandsHighlight.module.css';
import database from "../../data/database.json";
import {useRef} from "react";

export default function BrandsHighlight() {
  const brands = database.home.brandHighlights;
  const carouselRef = useRef<HTMLUListElement>(null);

  return (
    <section className={styles.highlightContainer}>
      <div className={styles.carouselWrapper}>
        <ul className={styles.carousel} ref={carouselRef}>
          {brands.map(brand => (
            <li key={brand.id} className={styles.brandItem}>
              <a href={`/marca/${brand.id}`} className={styles.brandLink}>
                <img
                  src={brand.imageUrl}
                  alt={`Destaque de produtos da marca ${brand.id.replace('brand-', '')}`}
                  className={styles.brandImage}
                />
                <div className={styles.gradientOverlay}></div>
                <img
                  src={brand.logoUrl}
                  alt={`Logo da marca ${brand.id.replace('brand-', '')}`}
                  className={styles.brandLogo}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
