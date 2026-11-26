# Casos e Negócios — Site

Site em React (Vite) com componentes em `.jsx`, feito a partir das telas do Doop
(desktop 1280px e mobile 390px). O layout é responsivo: a partir de 900px de largura
vale o desktop; abaixo disso, o mobile.

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera a pasta `dist`) e `npm run preview`.

## Páginas

- `/` — Home (Últimas notícias, Notícias destaque, Entrevistas, Fique por dentro, newsletter, banner da Traço, Instagram)
- `/materia/:slug` — Página de matéria

## Estrutura

```
public/                       Arquivos servidos como estão (favicon)
src/
  assets/
    fonts/                    Fonte Grift (regular e extrabold)
    images/brand/             Logos Casos e Negócios, selo N, logo Traço
    images/instagram/         Posts do Instagram
  components/
    layout/                   Header (com busca e menu mobile), Footer
    sections/home/            Seções da Home
    sections/materia/         Conteúdo, lateral e "Mais notícias" da matéria
    shared/                   Blocos usados em mais de uma página
                              (NewsletterForm, PromoBanner, ShareButtons, Panel)
    ui/                       Peças pequenas (Button, Container, Icon, CategoryTag...)
  constants/site.js           Menu, links do rodapé, redes sociais
  data/                       Conteúdo das páginas (trocar pela API quando existir)
  hooks/                      useScrollToTop, useDocumentTitle
  layouts/MainLayout.jsx      Header + página + Footer + grafismo roxo
  pages/                      Home, Materia, NotFound
  routes/AppRoutes.jsx        Rotas
  services/api.js             Base para chamadas à API
  styles/                     CSS global, fonte e variáveis (cores, espaçamentos)
  utils/slugify.js            Gera o endereço das matérias
```

Cada componente fica na sua própria pasta, com o `.jsx` e o `.module.css` juntos.
O atalho `@/` aponta para `src/`.

## Onde mexer

- **Cores, fontes e espaçamentos:** `src/styles/variables.css`
- **Textos e imagens das páginas:** `src/data/`
- **Menu e rodapé:** `src/constants/site.js`
- **Envio da newsletter:** `handleSubmit` em `src/components/shared/NewsletterForm/NewsletterForm.jsx`

## Pendências

- O envio da newsletter e a busca ainda não estão ligados a um serviço.
- As páginas Notícias, Conteúdos, Anuncie, tags e termos ainda não existem (abrem a página 404).
- O vídeo de Entrevistas é uma capa; falta o link real do YouTube.
- As imagens das matérias vêm de `framerusercontent.com` (as mesmas do design no Doop).
