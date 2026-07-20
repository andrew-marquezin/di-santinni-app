import {useState} from "react"
import styles from './ProductCard.module.css'

interface IProductProps {
  product: {
    id: string,
    brand: string,
    name: string,
    imageUrl: string,
    isFavorite: boolean,
    discountPercent?: number,
    pricing: {
      oldPrice?: string,
      currentPrice: string,
      clubPrice: string,
      installments: {
        count: number,
        value: string,
        hasInterest: boolean
      }
    }
  }
}

export default function ProductCard(props: IProductProps) {
  const {product} = props;
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        {product.discountPercent && (
          <span className={styles.discountBadge}>-{product.discountPercent}%</span>
        )}
        <button
          className={styles.favoriteBtn}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Favoritar"
        >
          <svg width="24" height="24" fill={isFavorite ? "var(--primary-red)" : "none"}
               stroke={isFavorite ? "var(--primary-red)" : "#555"} strokeWidth="2" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <a href={`/produto/${product.id}`} className={styles.productLink}>
        <div className={styles.imageWrapper}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.productImage}
          />
        </div>
        <div className={styles.info}>
          <span className={styles.brand}>{product.brand}</span>
          <h3 className={styles.title}>{product.name}</h3>

          <div className={styles.priceBox}>
            {product.pricing.oldPrice && (
              <s className={styles.oldPrice}>R$ {product.pricing.oldPrice}</s>
            )}
            <p className={styles.currentPrice}>R$ {product.pricing.currentPrice}</p>
            {product.pricing.clubPrice && (
              <span className={styles.clubInfo}><span className={styles.yellow}>R$ {product.pricing.clubPrice}</span> no Clube</span>
            )}
            {product.pricing.installments && (
              <p className={styles.installments}>
                ou <b>{product.pricing.installments.count}x de
                R$ {product.pricing.installments.value}</b> {product.pricing.installments.hasInterest ?
                <span>com juros</span> : <span>sem juros</span>}</p>
            )}
          </div>
        </div>
      </a>
      <button className={styles.buyButton}>COMPRAR AGORA</button>
    </li>
  )
}