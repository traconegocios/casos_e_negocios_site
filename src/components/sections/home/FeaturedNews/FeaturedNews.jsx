import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandBadge from '@/components/ui/BrandBadge/BrandBadge.jsx';
import CategoryLabel from '@/components/ui/CategoryLabel/CategoryLabel.jsx';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader.jsx';
import Panel from '@/components/shared/Panel/Panel.jsx';
import { articlePath } from '@/utils/slugify.js';
import styles from './FeaturedNews.module.css';

/* "Notícias destaque": grade de 4 no desktop, carrossel com pontos no mobile */
export default function FeaturedNews({ items }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 12 : track.clientWidth;
    setActiveIndex(Math.min(items.length - 1, Math.round(track.scrollLeft / step)));
  }

  function goTo(index) {
    const track = trackRef.current;
    const card = track?.children[index];
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }

  return (
    <Panel id="destaques" className={styles.section}>
      <SectionHeader title="Notícias destaque" to="/noticias" />

      <div className={styles.track} ref={trackRef} onScroll={handleScroll}>
        {items.map((item) => (
          <Link key={item.title} to={articlePath(item)} className={styles.card}>
            <div className={styles.media}>
              <BrandBadge />
              <img className="cover" src={item.image} alt="" loading="lazy" />
            </div>
            <div className={styles.body}>
              <CategoryLabel>{item.category}</CategoryLabel>
              <h3 className={styles.title}>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Destaques">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Destaque ${index + 1}`}
            className={index === activeIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </Panel>
  );
}
