import seloN from '@/assets/images/brand/selo-n.svg';
import Button from '@/components/ui/Button/Button.jsx';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader.jsx';
import Panel from '@/components/shared/Panel/Panel.jsx';
import { INSTAGRAM_URL } from '@/constants/site.js';
import styles from './InstagramFeed.module.css';

/* Perfil do Instagram com os últimos posts */
export default function InstagramFeed({ profile, posts }) {
  return (
    <Panel id="instagram" className={styles.section}>
      <SectionHeader title="Instagram" linkLabel="Ver perfil" href={INSTAGRAM_URL} />

      <div className={styles.box}>
        <div className={styles.profile}>
          <span className={styles.avatar}>
            <img src={seloN} alt="Casos e Negócios" />
          </span>
          <div>
            <b className={styles.handle}>{profile.handle}</b>
            <small className={styles.stats}>
              {profile.followers} · {profile.posts}
              <span className="desktop-only"> · {profile.note}</span>
            </small>
          </div>
          <Button variant="primary" href={INSTAGRAM_URL} className={`${styles.follow} desktop-only`}>
            Seguir no Instagram
          </Button>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <a key={post.alt} className={styles.post} href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <img className="cover" src={post.image} alt={post.alt} loading="lazy" />
            </a>
          ))}
        </div>

        <Button variant="primary" block href={INSTAGRAM_URL} className={`${styles.followMobile} mobile-only`}>
          Seguir no Instagram
        </Button>
      </div>
    </Panel>
  );
}
