import seloN from '@/assets/images/brand/selo-n.svg';
import styles from './BrandBadge.module.css';

/* Selo "N" da Casos e Negócios sobre as imagens dos cards */
export default function BrandBadge({ className = '' }) {
  return <img className={`${styles.badge} ${className}`.trim()} src={seloN} alt="" aria-hidden="true" />;
}
