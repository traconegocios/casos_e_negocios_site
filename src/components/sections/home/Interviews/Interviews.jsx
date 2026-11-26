import { Link } from 'react-router-dom';
import CategoryLabel from '@/components/ui/CategoryLabel/CategoryLabel.jsx';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader.jsx';
import Panel from '@/components/shared/Panel/Panel.jsx';
import { articlePath } from '@/utils/slugify.js';
import VideoPlayer from './VideoPlayer.jsx';
import styles from './Interviews.module.css';

/* "Entrevistas": vídeo principal + outros vídeos ao lado (embaixo no mobile) */
export default function Interviews({ main, items }) {
  return (
    <Panel id="entrevistas" className={styles.section}>
      <SectionHeader title="Entrevistas" to="/conteudos" />

      <div className={styles.grid}>
        <VideoPlayer video={main} />

        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title}>
              <Link to={articlePath(item)} className={styles.item}>
                <div className={styles.thumb}>
                  <img className="cover" src={item.image} alt="" loading="lazy" />
                </div>
                <div className={styles.text}>
                  <CategoryLabel>{item.category}</CategoryLabel>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
