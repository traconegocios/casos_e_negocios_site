import { Link } from 'react-router-dom';
import CategoryLabel from '@/components/ui/CategoryLabel/CategoryLabel.jsx';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader.jsx';
import NewsletterForm from '@/components/shared/NewsletterForm/NewsletterForm.jsx';
import Panel from '@/components/shared/Panel/Panel.jsx';
import { articlePath } from '@/utils/slugify.js';
import styles from './StayInformed.module.css';

function Title({ item }) {
  return (
    <>
      <span className={item.titleShort ? 'desktop-only' : undefined}>{item.title}</span>
      {item.titleShort && <span className="mobile-only">{item.titleShort}</span>}
    </>
  );
}

/*
 * Desktop: "Fique por dentro" — grade de cards + manchetes e newsletter ao lado.
 * Mobile: vira "Últimas notícias" — lista compacta, manchetes e newsletter embaixo.
 */
export default function StayInformed({ cards, headlines }) {
  return (
    <Panel id="ultimas" className={styles.section}>
      <div className={styles.main}>
        <SectionHeader
          title={
            <>
              <span className="desktop-only">Fique por dentro</span>
              <span className="mobile-only">Últimas notícias</span>
            </>
          }
          to="/noticias"
        />

        <div className={styles.cards}>
          {cards.map((item) => (
            <Link
              key={item.title}
              to={articlePath(item)}
              className={item.desktopOnly ? `${styles.card} desktop-only` : styles.card}
            >
              <div className={styles.media}>
                <img className="cover" src={item.image} alt="" loading="lazy" />
              </div>
              <div className={styles.text}>
                <CategoryLabel>{item.category}</CategoryLabel>
                <h3 className={styles.title}>
                  <Title item={item} />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <aside className={styles.aside}>
        <ul className={styles.headlines}>
          {headlines.map((item) => (
            <li key={item.title} className={item.desktopOnly ? 'desktop-only' : undefined}>
              <Link to={articlePath(item)} className={styles.headline}>
                <CategoryLabel>{item.category}</CategoryLabel>
                <h3 className={styles.headlineTitle}>
                  <Title item={item} />
                </h3>
              </Link>
            </li>
          ))}
        </ul>

        <NewsletterForm className={styles.newsletter} />
      </aside>
    </Panel>
  );
}
