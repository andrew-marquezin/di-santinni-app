import {useRef} from 'react';
import database from '../../data/database.json';
import styles from './CategoriesCarousel.module.css';

export default function CategoriesCarousel() {
  const categories = database.home.categoriesCarousel;
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 170;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.carouselContainer} aria-labelledby="categories-title">
      <h2 id="categories-title" className={styles.title}>NOSSOS PRODUTOS</h2>
      <div className={styles.carouselWrapper}>
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleScroll('left')}
                aria-label="Rolar para esquerda">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 11L1.5 6L6.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </button>
        <ul className={styles.carousel} ref={carouselRef}>
          {categories.map(category => (
            <li key={category.id} className={styles.categoryItem}>
              <a href={`/categoria/${category.linkUrl}`} className={styles.categoryLink}>
                <img src={category.imageUrl} alt={category.title} className={styles.categoryImage}/>
                <div className={styles.gradientOverlay}></div>
                <span className={styles.categoryTitle}>{category.title}</span>
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
  );
};
