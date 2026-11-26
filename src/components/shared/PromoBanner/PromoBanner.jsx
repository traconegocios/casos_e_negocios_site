import logoTraco from '@/assets/images/brand/logo-traco-negocios.svg';
import styles from './PromoBanner.module.css';

/*
 * Banner "Solicite um diagnóstico gratuito" da Traço Negócios.
 * variant="wide"    → faixa horizontal (desktop) que empilha no mobile
 * variant="sidebar" → card vertical da coluna lateral da matéria
 */
export default function PromoBanner({ variant = 'wide', href = '#', className = '' }) {
  const isSidebar = variant === 'sidebar';

  return (
    <a className={`${styles.banner} ${styles[variant]} ${className}`.trim()} href={href}>
      <img className={styles.logo} src={logoTraco} alt="Traço Negócios" />
      {!isSidebar && <span className={styles.divider} aria-hidden="true" />}
      <div className={styles.text}>
        <h2 className={styles.title}>Solicite um diagnóstico gratuito do seu marketing</h2>
        {isSidebar && <p className={styles.description}>Descubra onde sua marca pode crescer com uma análise feita pela Traço.</p>}
      </div>
      <span className={styles.cta}>Quero meu diagnóstico</span>
    </a>
  );
}
