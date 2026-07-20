import styles from './SizeFilter.module.css'
import database from "../../data/database.json";
import {useRef} from "react";

export default function SizeFilter() {
  const sizes = database.home.sizeFilter;
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const firstItem = carouselRef.current.firstElementChild as HTMLElement;
      const itemWidth = firstItem ? firstItem.clientWidth : 59;
      const gap = 8;

      const scrollAmount = (itemWidth + gap) * 2;

      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.filterContainer}>
      <h2 id="size-filter-title" className={styles.title}>COMPRE POR TAMANHO</h2>
      <div className={styles.carouselWrapper}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleScroll('left')}
                aria-label="Rolar para esquerda">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 11L1.5 6L6.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </button>
        <ul className={styles.carousel} ref={carouselRef}>
          {sizes.map(size => (
            <li key={size} className={styles.sizeItem}>
              <a href={`/tamanho/${size}`} className={styles.sizeLink}>
                <span className={styles.sizeButton}>{size}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleScroll('right')}
                aria-label="Rolar para direita">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 11L6.5 6L1.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}