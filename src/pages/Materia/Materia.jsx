import { Link, useParams } from 'react-router-dom';
import ArticleContent from '@/components/sections/materia/ArticleContent/ArticleContent.jsx';
import ArticleSidebar from '@/components/sections/materia/ArticleSidebar/ArticleSidebar.jsx';
import MoreNews from '@/components/sections/materia/MoreNews/MoreNews.jsx';
import PromoBanner from '@/components/shared/PromoBanner/PromoBanner.jsx';
import Container from '@/components/ui/Container/Container.jsx';
import useDocumentTitle from '@/hooks/useDocumentTitle.js';
import { getArticle, moreNews, relatedArticles } from '@/data/articles.js';
import styles from './Materia.module.css';

export default function Materia() {
  const { slug } = useParams();
  const article = getArticle(slug);
  useDocumentTitle(article.title);

  return (
    <Container className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Você está em">
        <Link to="/">Home</Link> / <Link to="/noticias">{article.category}</Link>
        <span className="desktop-only">
          {' '}
          / <b>{article.title}</b>
        </span>
      </nav>

      <div className={styles.grid}>
        <ArticleContent article={article} />
        <ArticleSidebar related={relatedArticles} />
      </div>

      <MoreNews items={moreNews} />

      <PromoBanner className={`${styles.promo} mobile-only`} />
    </Container>
  );
}
