import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container/Container.jsx';

export default function NotFound() {
  return (
    <section style={{ padding: 'var(--space-8) 0' }}>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          <Link to="/">Voltar para o início</Link>
        </p>
      </Container>
    </section>
  );
}
