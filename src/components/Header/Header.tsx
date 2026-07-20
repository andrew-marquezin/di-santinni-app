import logo from '../../assets/ds-logo-2.png'
import SearchIcon from '../../assets/ds-search.svg?react';
import BagIcon from '../../assets/ds-bag.svg?react';

import styles from './Header.module.css';

export default function Header({cartItemCount = 1}) {
  return (
    <header className={styles.header}>
      <button className={styles.iconButton} aria-label="Pesquisar">
        <SearchIcon className={styles.icon}/>
      </button>
      <img src={logo} alt="di santinni"/>
      <button className={styles.iconButton} aria-label="Carrinho de compras">
        <div className={styles.bagWrapper}>
          <BagIcon className={styles.icon}/>
          {cartItemCount > 0 && (
            <span className={styles.badge}>{cartItemCount}</span>
          )}
        </div>
      </button>
    </header>
  )
}