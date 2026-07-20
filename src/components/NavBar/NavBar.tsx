import React, {useState} from 'react';
import styles from './NavBar.module.css';
import HomeIcon from '../icons/HomeIcon';
import BagIcon from '../icons/BagIcon';
import DSPIcon from '../icons/DSPIcon';
import CardIcon from '../icons/CardIcon';
import ProfileIcon from '../icons/ProfileIcon';

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    {id: 'home', label: 'Início', Icon: HomeIcon},
    {id: 'bag', label: 'Sacola', Icon: BagIcon},
    {id: 'plus', label: 'Clube DS', Icon: DSPIcon},
    {id: 'card', label: 'Pagamentos', Icon: CardIcon},
    {id: 'profile', label: 'Perfil', Icon: ProfileIcon},
  ];

  return (
    <nav className={styles.navBar}>
      {navItems.map(({id, Icon}) => (
        <a
          key={id}
          href="#"
          className={`${styles.navItem} ${activeItem === id ? styles.active : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveItem(id);
          }}
        >
          <Icon color={activeItem === id ? 'var(--primary-red)' : '#0C0C0C'}/>
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
