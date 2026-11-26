import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header/Header.jsx';
import Footer from '@/components/layout/Footer/Footer.jsx';
import useScrollToTop from '@/hooks/useScrollToTop.js';

export default function MainLayout() {
  useScrollToTop();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
