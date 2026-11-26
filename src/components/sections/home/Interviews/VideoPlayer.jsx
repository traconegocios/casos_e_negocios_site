import seloN from '@/assets/images/brand/selo-n.svg';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './VideoPlayer.module.css';

/*
 * Capa do vídeo no estilo do YouTube. Quando houver o link real do vídeo,
 * passe `href` (abre em nova aba) ou troque por um <iframe> do YouTube.
 */
export default function VideoPlayer({ video, href = '#' }) {
  return (
    <a className={styles.player} href={href} aria-label={`Assistir: ${video.title}`}>
      <img className="cover" src={video.image} alt="" />

      <div className={styles.top}>
        <span className={styles.avatar}>
          <img src={seloN} alt="" />
        </span>
        <div>
          <b className={styles.title}>{video.title}</b>
          <small className={styles.channel}>
            {video.channel} · {video.category} · {video.views}
          </small>
        </div>
      </div>

      <span className={styles.play} aria-hidden="true">
        <Icon name="play" size={24} />
      </span>

      <div className={styles.bar} aria-hidden="true">
        <div className={styles.progress}>
          <i style={{ width: `${video.progress}%` }} />
          <u style={{ left: `${video.progress}%` }} />
        </div>
        <div className={styles.controls}>
          <Icon name="play" size={22} />
          <Icon name="next" size={22} className="desktop-only" />
          <Icon name="volume" size={22} className="desktop-only" />
          <span>
            {video.current} / {video.duration}
          </span>
          <span className={styles.spacer} />
          <Icon name="captions" size={22} className="desktop-only" />
          <span className={`${styles.hd} desktop-only`}>
            <Icon name="settings" size={22} />
            <em>HD</em>
          </span>
          <Icon name="fullscreen" size={22} />
        </div>
      </div>
    </a>
  );
}
