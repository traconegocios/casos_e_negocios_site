import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CategoryTag from '@/components/ui/CategoryTag/CategoryTag.jsx';
import ShareButtons from '@/components/shared/ShareButtons/ShareButtons.jsx';
import { slugify } from '@/utils/slugify.js';
import styles from './ArticleContent.module.css';

/* Troca o marcador {strong} do texto pelo trecho em negrito */
function Paragraph({ block }) {
  if (!block.strong) return <p>{block.text}</p>;
  const [before, after] = block.text.split('{strong}');
  return (
    <p>
      {before}
      <strong>{block.strong}</strong>
      {after}
    </p>
  );
}

/* Corpo da matéria: título, autoria, imagem, texto, tags e compartilhamento */
export default function ArticleContent({ article }) {
  const { author } = article;

  return (
    <article className={styles.article}>
      <CategoryTag>{article.category}</CategoryTag>
      <h1 className={styles.title}>{article.title}</h1>

      <div className={styles.meta}>
        <img className={styles.avatar} src={author.avatar} alt={author.name} />
        <div className={styles.author}>
          <b>{author.name}</b>
          <small>
            {author.role}
            <span className="mobile-only">
              {' '}
              · {article.date} · {article.readingTime}
            </span>
          </small>
        </div>
        <span className={`${styles.divider} desktop-only`} aria-hidden="true" />
        <time className="desktop-only">{article.date}</time>
        <span className={`${styles.divider} desktop-only`} aria-hidden="true" />
        <span className="desktop-only">{article.readingTime}</span>
      </div>

      <figure className={styles.figure}>
        <img className="cover" src={article.image} alt={article.imageAlt} />
      </figure>

      <div className={styles.body}>
        {article.body.map((block, index) => (
          <Fragment key={index}>
            {block.type === 'h2' ? <h2>{block.text}</h2> : <Paragraph block={block} />}
          </Fragment>
        ))}
      </div>

      {article.alsoRead && (
        <Link className={styles.alsoRead} to={article.alsoRead.to}>
          <small>Leia também</small>
          <b>{article.alsoRead.title}</b>
        </Link>
      )}

      <ul className={styles.tags} aria-label="Assuntos">
        {article.tags.map((tag) => (
          <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>{tag}</Link>
          </li>
        ))}
      </ul>

      <ShareButtons className={styles.share} title={article.title} />
    </article>
  );
}
