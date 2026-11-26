import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Volta ao topo ao trocar de página; com #âncora, rola até a seção */
export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}
