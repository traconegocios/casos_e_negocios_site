export const SITE_NAME = 'Casos e Negócios';

export const INSTAGRAM_URL = 'https://www.instagram.com/casosenegocios/';

export const NAV_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'Notícias', to: '/noticias', match: ['/noticias', '/materia'] },
  { label: 'Conteúdos', to: '/conteudos' },
  { label: 'Anuncie', to: '/anuncie' },
];

export const FOOTER_SECTIONS = [
  {
    title: 'Últimas Notícias',
    text: 'O que acabou de acontecer no mercado, atualizado todos os dias.',
    textShort: 'O que acabou de acontecer no mercado.',
    linkLabel: 'Ver todas',
    to: '/#ultimas',
  },
  {
    title: 'Destaques',
    text: 'As reportagens e casos que mais importam na semana.',
    textShort: 'As reportagens e casos da semana.',
    linkLabel: 'Ver destaques',
    to: '/#destaques',
  },
  {
    title: 'Entrevistas',
    text: 'Conversas em vídeo com quem lidera negócios e marcas.',
    textShort: 'Conversas em vídeo com quem lidera.',
    linkLabel: 'Assistir',
    to: '/#entrevistas',
  },
  {
    title: 'Instagram',
    text: 'Os últimos posts do @casosenegocios.',
    textShort: 'Os últimos posts do @casosenegocios.',
    linkLabel: 'Seguir',
    href: INSTAGRAM_URL,
  },
];

export const LEGAL_LINKS = [
  { label: 'Política de Privacidade', to: '/politica-de-privacidade' },
  { label: 'Termos de Uso', to: '/termos-de-uso' },
];

export const ABOUT_TEXT =
  'Casos e Negócios: notícias e casos sobre negócios e empreendedorismo, com foco na proximidade, mudança de comportamento e impacto digital. Canal de conteúdo da Traço Negócios.';

export const SOCIAL_LINKS = [
  { label: 'Instagram', icon: 'instagram', href: INSTAGRAM_URL },
  { label: 'X', icon: 'x', href: '#' },
  { label: 'LinkedIn', icon: 'linkedin', href: '#' },
  { label: 'YouTube', icon: 'youtube', href: '#' },
];
