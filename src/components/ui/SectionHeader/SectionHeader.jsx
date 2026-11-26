import { Link } from 'react-router-dom';
import styles from './SectionHeader.module.css';

/* Título de seção + link "Ver tudo" */
export default function SectionHeader({ title, linkLabel = 'Ver tudo', to = '#', href, className = '' }) {
  return (
    <div className={`${styles.header} ${className}`.trim()}>
      <h2 className={styles.title}>{title}</h2>
      {linkLabel &&
        (href ? (
          <a className={styles.link} href={href} target="_blank" rel="noreferrer">
            {linkLabel}
          </a>
        ) : (
          <Link className={styles.link} to={to}>
            {linkLabel}
          </Link>
        ))}
    </div>
  );
}
