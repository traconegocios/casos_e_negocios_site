import styles from './CategoryLabel.module.css';

/* Rótulo roxo em caixa alta acima dos títulos (ex.: NOTÍCIAS) */
export default function CategoryLabel({ children, className = '' }) {
  return <span className={`${styles.label} ${className}`.trim()}>{children}</span>;
}
