import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/*
 * Botão do site. Vira <Link> com `to`, <a> com `href` ou <button>.
 * Variantes: light (branco), primary (roxo).
 */
export default function Button({ variant = 'light', block = false, to, href, className = '', children, ...props }) {
  const classes = [styles.button, styles[variant], block && styles.block, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
