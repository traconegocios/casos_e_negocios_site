import { useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './SearchBox.module.css';

/* Campo "Procurar". A busca ainda não tem página de resultados. */
export default function SearchBox({ className = '' }) {
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: levar para a página de resultados quando ela existir.
  }

  return (
    <form className={`${styles.search} ${className}`.trim()} role="search" onSubmit={handleSubmit}>
      <Icon name="search" size={17} className={styles.icon} />
      <label className="sr-only" htmlFor="busca">
        Procurar
      </label>
      <input
        id="busca"
        className={styles.input}
        type="search"
        placeholder="Procurar"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </form>
  );
}
