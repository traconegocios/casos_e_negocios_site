import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/brand/logo-casos-e-negocios.svg';
import Icon from '@/components/ui/Icon/Icon.jsx';
import { NAV_LINKS, SITE_NAME } from '@/constants/site.js';
import SearchBox from './SearchBox.jsx';
import styles from './Header.module.css';

function isLinkActive(link, pathname) {
  if (link.end) return pathname === link.to;
  const prefixes = link.match ?? [link.to];
  return prefixes.some((prefix) => pathname.startsWith(prefix));
}

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu mobile ao trocar de página
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logo} aria-label={`${SITE_NAME}, página inicial`}>
          <img src={logo} alt={SITE_NAME} />
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={isLinkActive(link, pathname) ? `${styles.link} ${styles.active}` : styles.link}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <SearchBox className={styles.search} />

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>

      <nav id="menu-mobile" className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-label="Menu">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={isLinkActive(link, pathname) ? `${styles.drawerLink} ${styles.active}` : styles.drawerLink}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
