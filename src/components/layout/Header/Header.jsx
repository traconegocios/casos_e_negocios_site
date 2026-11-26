import { Link, NavLink } from 'react-router-dom';
import Container from '@/components/ui/Container/Container.jsx';
import { SITE_NAME, NAV_LINKS } from '@/constants/site.js';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link to="/" className={styles.logo}>
          {SITE_NAME}
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={styles.link}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
