import Button from '@/components/ui/Button/Button.jsx';
import Container from '@/components/ui/Container/Container.jsx';
import useDocumentTitle from '@/hooks/useDocumentTitle.js';
import styles from './NotFound.module.css';

export default function NotFound() {
  useDocumentTitle('Página não encontrada');

  return (
    <Container as="section" className={styles.notFound}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Página não encontrada</h1>
      <p className={styles.text}>O endereço pode ter mudado ou esta página ainda não existe.</p>
      <Button to="/" variant="primary">
        Voltar para o início
      </Button>
    </Container>
  );
}
