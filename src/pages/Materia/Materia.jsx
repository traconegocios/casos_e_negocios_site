import { useParams } from 'react-router-dom';
import Container from '@/components/ui/Container/Container.jsx';
import styles from './Materia.module.css';

export default function Materia() {
  const { slug } = useParams();

  return (
    <article className={styles.materia}>
      <Container>
        <h1>Matéria</h1>
        <p>Conteúdo da matéria &quot;{slug}&quot; em construção.</p>
      </Container>
    </article>
  );
}
