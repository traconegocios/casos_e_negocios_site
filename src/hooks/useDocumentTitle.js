import { useEffect } from 'react';
import { SITE_NAME } from '@/constants/site.js';

/* Define o título da aba do navegador */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  }, [title]);
}
