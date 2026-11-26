/*
 * Matérias. Por enquanto existe uma matéria completa (a do layout);
 * qualquer outro endereço /materia/:slug mostra essa mesma matéria.
 */
const img = (id, ext = 'jpg', size = 1024) =>
  `https://framerusercontent.com/images/${id}.${ext}?scale-down-to=${size}`;

export const articles = [
  {
    slug: 'propaganda-enganosa-e-precos-abusivos-levam-41-dos-consumidores-a-abandonarem-marcas',
    category: 'Notícias',
    title: 'Propaganda enganosa e preços abusivos levam 41% dos consumidores a abandonarem marcas',
    author: {
      name: 'Giovanna Rodrigues',
      role: 'Repórter',
      avatar: img('9sRdjSfhsRpOR0ruU2MDQuvV8c', 'jpeg', 512),
    },
    date: '24 de nov. de 2026',
    readingTime: 'Leitura de 2 min',
    image: img('5PHxSFKgTg7jUuzxPeqLQjJ31KQ'),
    imageAlt: 'Consumidora compara produtos na gôndola do supermercado',
    /* Corpo da matéria em blocos: { type: 'p' | 'h2', text, strong? } */
    body: [
      {
        type: 'p',
        text: 'Quatro em cada dez consumidores brasileiros (41%) deixaram de comprar de uma marca no último ano, de acordo com levantamento da HSR Specialist Researchers em parceria com a CX Brain. Entre os principais fatores de rejeição aparecem a propaganda enganosa (68%), os preços abusivos (67%) e as falhas no atendimento que não escuta ou resolve problemas (38%).',
      },
      {
        type: 'p',
        text: 'A cautela financeira orienta toda a jornada de compra. Dos entrevistados, 79% pesquisam antes de fechar negócio, 76% mudaram hábitos de consumo com foco em custo-benefício e 63% afirmam que o cenário econômico interfere nos planos. Valéria Rodrigues, CEO e sócia da HSR, afirma que a seletividade funciona como proteção contra experiências frustrantes e exige das marcas o cumprimento rigoroso das promessas de entrega e pós-venda.',
      },
      { type: 'h2', text: 'Quatro perfis orientam a decisão de compra' },
      {
        type: 'p',
        text: 'O mapeamento divide os consumidores brasileiros em quatro grupos com gatilhos distintos de conversão e fidelidade. Na liderança aparecem os equilibristas (31%), que priorizam o orçamento familiar, preços competitivos e condições claras de pagamento, sendo que 81% deles vivem preocupados em fazer o dinheiro render até o fim do mês. Logo depois surgem os invisíveis (24%), menos propensos a registrar reclamações formais, com 79% desconfiando de promessas exageradas e 83% exigindo suporte humano para solucionar impasses.',
      },
      {
        type: 'p',
        text: 'Na sequência estão os acelerados (23%), grupo que busca praticidade e resolução rápida via canais digitais, onde 58% concentram compras sem sair de casa e 32% já utilizam o WhatsApp para fechar pedidos. Fechando a segmentação aparecem os seletivos (22%), que valorizam autonomia e previsibilidade, com 90% dispostos a pagar mais caro para evitar transtornos.',
      },
      { type: 'h2', text: 'IA avança na rotina, mas suporte humano segue decisivo' },
      {
        type: 'p',
        text: 'Embora 53% dos consumidores utilizem ferramentas de inteligência artificial com frequência no trabalho e na organização pessoal, 76% preferem falar com um atendente humano quando enfrentam algum problema com as empresas. Para Valéria Rodrigues, o desafio das organizações está em equilibrar a automação para ganhar agilidade sem criar barreiras de acesso ao suporte humano nos momentos críticos.',
      },
      {
        type: 'p',
        text: 'A gestão do tempo também ganha peso nas expectativas do público, já que 83% priorizam autonomia sobre a própria rotina e 80% buscam maior sensação de controle e segurança. Nesse contexto, estratégias de aquisição baseadas exclusivamente em apelo promocional perdem espaço para operações que sustentam transparência, consistência de entrega e eficiência no relacionamento.',
      },
      {
        type: 'p',
        text: 'Apresentado no CONAREC 2026, em São Paulo, o estudo {strong} ouviu 782 brasileiros das classes A, B e C, com idades entre 18 e 61 anos, em entrevistas on-line, além de 143 entrevistas exploratórias conduzidas com apoio de inteligência artificial.',
        strong: '"Brasil em Transição, decifrando o consumidor no seu casulo"',
      },
    ],
    alsoRead: { title: 'Black Friday 2026: consumidores exigem ofertas reais', to: '#' },
    tags: ['Comportamento do Consumidor', 'Atendimento ao Consumidor', 'CX'],
  },
];

export const relatedArticles = [
  {
    category: 'Notícias',
    title: 'Grupo Boticário organiza assets de IA para gerar aumento de 32% no número de clientes na Beauty Week',
    image: img('qkipMrLc5bmJL9bcEqlz54ayg', 'png', 512),
    alt: 'Loja O Boticário',
  },
  {
    category: 'Notícias',
    title: 'NIVEA transforma dicas de consumidores em loja com 100 formas de usar latinha azul',
    image: img('4C18Ge1rDh3u5yC2rd0ShsbXH78', 'jpg', 512),
    alt: 'Loja NIVEA com latinhas azuis',
  },
  {
    category: 'Notícias',
    title: 'Cheetos cria jogo de tabuleiro para desafiar consumidores e ativar campanha com creators',
    image: img('CGkG7KPko0YqCCOkYTjZVLI', 'png', 512),
    alt: 'Jogo de tabuleiro Cheetos',
  },
];

export const moreNews = [
  {
    category: 'Notícias',
    title: 'Dengo e FARM Rio renovam collab de Natal com kit de chocolate e cerâmica inspirado no caju',
    image: img('qA6MCBvUElgXkjnlAdOefei3VWA', 'jpg', 512),
    alt: 'Kit de Natal Dengo e FARM Rio',
  },
  {
    category: 'Notícias',
    title: 'Casas Bahia aposta em live com João Gomes para maximizar Black Friday',
    image: img('7uvi9qDjILFh3kvl3cXGrJ3oOVc', 'png', 512),
    alt: 'Live da Casas Bahia com João Gomes',
  },
  {
    category: 'Notícias',
    title: 'Época Cosméticos abre outlet com descontos de até 80% e prevê cinco lojas para 2027',
    image: img('nEBUQxVqsBSwhN5cwXQP4ocD8ZM', 'jpg', 512),
    alt: 'Outlet da Época Cosméticos',
  },
];

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug) ?? articles[0];
}
