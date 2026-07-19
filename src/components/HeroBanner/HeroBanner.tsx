import {useState} from "react";
import hero1 from "../../assets/banners/hero-1.jpg";
import styles from "./HeroBanner.module.css";

const banners = [
  {id: 1, image: '/assets/banner1.jpg', alt: 'Mizuno R$ 350'},
  {id: 2, image: '/assets/banner2.jpg', alt: 'Novidades Feminino'},
  {id: 3, image: '/assets/banner3.jpg', alt: 'Tênis Olympikus'},
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={hero1} alt="homem agachado com foco no tênis" className={styles.bannerImage}/>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.overlay}>
          <div className={styles.priceRow}>
            <span className={styles.oldPrice}>R$ 799,00</span>
            <span className={styles.discountBadge}>20% OFF</span>
          </div>
          <h2 className={styles.currentPrice}>R$ 350,00</h2>
          <button className={styles.ctaButton}>CONFIRA</button>
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