import { Link } from 'react-router-dom';
import BrandBadge from '@/components/ui/BrandBadge/BrandBadge.jsx';
import CategoryLabel from '@/components/ui/CategoryLabel/CategoryLabel.jsx';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader.jsx';
import { articlePath } from '@/utils/slugify.js';
import styles from './MoreNews.module.css';

/* "Mais notícias": 3 cards no desktop, lista compacta no mobile */
export default function MoreNews({ items }) {
  return (
    <section className={styles.section} aria-label="Mais notícias">
      <SectionHeader title="Mais notícias" to="/noticias" className={styles.header} />
      <div className={styles.grid}>
        {items.map((item) => (
          <Link key={item.title} to={articlePath(item)} className={styles.card}>
            <div className={styles.media}>
              <BrandBadge className="desktop-only" />
              <img className="cover" src={item.image} alt={item.alt} loading="lazy" />
            </div>
            <div className={styles.text}>
              <CategoryLabel className={styles.label}>{item.category}</CategoryLabel>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
