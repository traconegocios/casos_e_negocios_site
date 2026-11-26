import { Link } from 'react-router-dom';
import CategoryLabel from '@/components/ui/CategoryLabel/CategoryLabel.jsx';
import CategoryTag from '@/components/ui/CategoryTag/CategoryTag.jsx';
import Icon from '@/components/ui/Icon/Icon.jsx';
import Panel from '@/components/shared/Panel/Panel.jsx';
import { articlePath } from '@/utils/slugify.js';
import styles from './LatestNews.module.css';

/* Faixa "Últimas notícias": matéria principal + lista lateral de manchetes */
export default function LatestNews({ lead, headlines }) {
  return (
    <Panel className={styles.section} aria-label="Últimas notícias">
      <div className={styles.ribbon}>
        <CategoryTag size="lg">Últimas notícias</CategoryTag>
      </div>

      <div className={styles.grid}>
        <Link to={articlePath(lead)} className={styles.lead}>
          <img className="cover" src={lead.image} alt="" />
          <div className={styles.caption}>
            <p className={styles.meta}>
              <span className={styles.metaItem}>
                <Icon name="calendar" size={13} className="desktop-only" />
                {lead.date}
              </span>
              <span className={styles.metaItem}>
                <Icon name="pencil" size={13} className="desktop-only" />
                <span className="mobile-only" aria-hidden="true">
                  ·
                </span>
                {lead.category}
              </span>
            </p>
            <h1 className={styles.leadTitle}>{lead.title}</h1>
          </div>
        </Link>

        <ul className={styles.headlines}>
          {headlines.map((item) => (
            <li key={item.title} className={item.desktopOnly ? 'desktop-only' : undefined}>
              <Link to={articlePath(item)} className={styles.headline}>
                <CategoryLabel>{item.category}</CategoryLabel>
                <h3 className={styles.headlineTitle}>
                  <span className={item.titleShort ? 'desktop-only' : undefined}>{item.title}</span>
                  {item.titleShort && <span className="mobile-only">{item.titleShort}</span>}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
