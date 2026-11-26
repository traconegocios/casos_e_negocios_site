import { Link } from 'react-router-dom';
import CategoryLabel from '@/components/ui/CategoryLabel/CategoryLabel.jsx';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader.jsx';
import NewsletterForm from '@/components/shared/NewsletterForm/NewsletterForm.jsx';
import PromoBanner from '@/components/shared/PromoBanner/PromoBanner.jsx';
import { articlePath } from '@/utils/slugify.js';
import styles from './ArticleSidebar.module.css';

/*
 * Coluna lateral da matéria. No mobile fica só a newsletter;
 * o banner da Traço aparece no fim da página (ver Materia.jsx).
 */
export default function ArticleSidebar({ related }) {
  return (
    <aside className={styles.sidebar}>
      <PromoBanner variant="sidebar" className="desktop-only" />

      <NewsletterForm headingLevel="h3" />

      <section className={`${styles.related} desktop-only`} aria-label="Relacionadas">
        <SectionHeader title="Relacionadas" to="/noticias" className={styles.header} />
        {related.map((item) => (
          <Link key={item.title} to={articlePath(item)} className={styles.item}>
            <div className={styles.thumb}>
              <img className="cover" src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div>
              <CategoryLabel className={styles.label}>{item.category}</CategoryLabel>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </aside>
  );
}
