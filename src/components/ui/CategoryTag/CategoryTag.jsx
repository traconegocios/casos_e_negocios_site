import styles from './CategoryTag.module.css';

/* Etiqueta roxa com corte diagonal (ex.: ÚLTIMAS NOTÍCIAS, NOTÍCIAS) */
export default function CategoryTag({ as: Tag = 'span', size = 'md', className = '', children }) {
  return <Tag className={`${styles.tag} ${styles[size]} ${className}`.trim()}>{children}</Tag>;
}
