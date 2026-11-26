# Casos & Negócios — Site

Site em React (Vite), com componentes em `.jsx`.

## Como rodar

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera a pasta `dist`) e `npm run preview`.

## Estrutura

```
public/                 Arquivos servidos como estão (favicon etc.)
src/
  assets/               Imagens, ícones e fontes
  components/
    layout/             Header, Footer
    sections/           Seções de página (hero, listas, destaques...)
    ui/                 Componentes reutilizáveis (Button, Container...)
  constants/            Textos e configurações fixas do site
  hooks/                Hooks personalizados
  layouts/              Layouts que envolvem as páginas
  pages/                Uma pasta por página (Home, Materia, NotFound)
  routes/               Definição das rotas
  services/             Chamadas a APIs
  styles/               CSS global e variáveis
  utils/                Funções auxiliares
  App.jsx
  main.jsx
```

Cada componente fica na sua própria pasta, com o `.jsx` e o `.module.css` juntos.
O atalho `@/` aponta para `src/` (ex.: `import Button from '@/components/ui/Button/Button.jsx'`).

## Rotas

- `/` — Página inicial
- `/materia/:slug` — Página de matéria
