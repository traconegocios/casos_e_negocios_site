import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header/Header.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';
import useScrollToTop from '@/hooks/useScrollToTop.js';
import styles from './MainLayout.module.css';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
