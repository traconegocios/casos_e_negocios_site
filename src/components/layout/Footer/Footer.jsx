import Container from '@/components/ui/Container/Container.jsx';
import { SITE_NAME } from '@/constants/site.js';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <p>© {year} {SITE_NAME}. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
