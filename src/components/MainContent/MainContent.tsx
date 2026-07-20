import React from 'react';
import styles from './MainContent.module.css';
import CategoriesCarousel from "../CategoriesCarousel/CategoriesCarousel.tsx";
import ProductsSection from "../ProductsSection/ProductsSection.tsx";

const MainContent: React.FC = () => {
    return (
        <div className={styles.mainContentWrapper}>
            <div className={styles.darkBackground}></div>
            <CategoriesCarousel />
            <ProductsSection />
        </div>
    );
};

export default MainContent;
