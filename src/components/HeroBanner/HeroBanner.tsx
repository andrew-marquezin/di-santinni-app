import {useState} from "react";
import database from "../../data/database.json"
import styles from "./HeroBanner.module.css";

const banners = database.home.heroBanners

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={banners[currentSlide].imageUrl} alt="homem agachado com foco no tênis"
             className={styles.bannerImage}/>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.overlay}>
          <div className={styles.priceRow}>
            <span className={styles.oldPrice}>R$ 799,00</span>
            <span className={styles.discountBadge}>20% OFF</span>
          </div>
          <h2 className={styles.currentPrice}>R$ 350,00</h2>
          <a href={banners[currentSlide].linkUrl}>
            <button className={styles.ctaButton}>CONFIRA</button>
          </a>
        </div>
        <div className={styles.paginationDots}>
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              aria-label={`Ir para slide ${index + 1}`}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}