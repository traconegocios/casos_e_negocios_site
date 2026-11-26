/*
 * Conteúdo da Home (Casos e Negócios).
 * Enquanto não há API, os dados ficam aqui. Para trocar por dados reais,
 * basta substituir estas listas pela resposta de src/services/api.js.
 */
const img = (id, ext = 'jpg') => `https://framerusercontent.com/images/${id}.${ext}?scale-down-to=1024`;

export const leadStory = {
  slug: 'sprite-antecipa-o-verao-com-ativacoes-em-oito-cidades',
  category: 'Notícias',
  date: 'Segunda-feira, 16 de novembro de 2026',
  title: 'Sprite antecipa o verão com ativações em oito cidades e aposta na cultura urbana',
  image: img('NbW5v7oQ42qPBceMQlwkGIgyA'),
};

export const latestHeadlines = [
  { category: 'Notícias', title: 'Mococa leva ações de experimentação e empreendedorismo feminino a Manaus' },
  { category: 'Notícias', title: 'Neve amplia canais de venda com entrada no TikTok Shop' },
  {
    category: 'Notícias',
    title: 'Aramco lidera crescimento de buscas durante GP de São Paulo. Bradesco e Nubank avançam',
    titleShort: 'Aramco lidera crescimento de buscas durante GP de São Paulo',
  },
  { category: 'Notícias', title: 'Suvinil elege roxo Sol da Meia-Noite como Cor do Ano 2027', desktopOnly: true },
];

export const featuredNews = [
  {
    category: 'Reportagens',
    title: 'Marcas ampliam seu papel social e ambiental e transformam impacto positivo em estratégia de negócio',
    image: img('4UchrjS8umAOPmXdg1kz8vQeb0o'),
  },
  {
    category: 'Notícias',
    title: 'IA no e-mail Marketing só dá resultado com contexto, teste e revisão',
    image: img('Xa20vRuKzo9nas4r66TnfUXKSrA', 'png'),
  },
  {
    category: 'Reportagens',
    title: 'Como preparar a operação comercial para aproveitar o potencial da inteligência artificial',
    image: img('T1GoOkrLobiaF2vla4AqQLKqNwY', 'png'),
  },
  {
    category: 'Notícias',
    title: 'Grupo Heineken traz Birra Moretti ao Brasil e começa por cantinas e pizzarias',
    image: img('UZkQgDJ3LHw9Ji6dcNX75RqH4U'),
  },
];

export const mainInterview = {
  category: 'Entrevistas',
  title: 'Da segmentação ao um para um: como a IA muda as jornadas de Marketing',
  channel: 'Casos e Negócios',
  views: '12 mil visualizações',
  current: '4:12',
  duration: '12:38',
  progress: 32,
  image: img('TtbgJ0mFTv42qGlGo5hfInDYZIM'),
};

export const interviews = [
  {
    category: 'Entrevistas',
    title: 'Marcas devem incluir direito autoral no checklist de patrocínio de eventos',
    image: img('1hIdyUv1YpKUPRYB3ThSD0RGdRk', 'jpeg'),
  },
  {
    category: 'Entrevistas',
    title: 'Schweppes amplia território de marca e aposta em novas ocasiões de consumo',
    image: img('1CbXqEU8ly26QfCgc5xqttFH4eI'),
  },
];

/* "Fique por dentro" no desktop / "Últimas notícias" no mobile */
export const stayInformed = [
  {
    category: 'Notícias',
    title: 'Michelob Ultra e Subway disputam a rotina de quem treina, do pós-treino à proteína',
    titleShort: 'Michelob Ultra e Subway disputam a rotina de quem treina',
    image: img('maBB4c28y6B1Zs3A1UHS1sUMvqs'),
  },
  {
    category: 'Reportagens',
    title: 'Britânia completa 70 anos e acelera expansão para conquistar novas gerações',
    titleShort: 'Britânia completa 70 anos e acelera expansão para novas gerações',
    image: img('KlESR7C1mMbP3fAPyNeS0l4OoCw'),
  },
  {
    category: 'Notícias',
    title: 'Flamengo lança linha de água mineral para ampliar presença na rotina dos torcedores',
    image: img('ZoVJfpDwWILp5WuYE2SuLfTFDwQ', 'png'),
    desktopOnly: true,
  },
  {
    category: 'Notícias',
    title: 'Globo e Disney unem inventário do Globoplay e Disney+ para ampliar publicidade no streaming',
    titleShort: 'Globo e Disney unem inventário do Globoplay e Disney+ para ampliar publicidade',
    image: img('YtbabMlw8DhiM0EsLDR3WgfebKM'),
  },
  {
    category: 'Notícias',
    title: 'Setor financeiro marca presença no CMO Summit 2027. Conheça palestrantes já confirmados',
    image: img('5FjC9clkY2iWd5GyaacuVfcZbJU', 'png'),
    desktopOnly: true,
  },
  {
    category: 'Notícias',
    title: 'Johnnie Walker transforma trajetória de Ney Matogrosso em narrativa de campanha',
    image: img('IyzIfEvU6YxwmrErd9Kbyy1Y', 'png'),
    desktopOnly: true,
  },
  {
    category: 'Reportagens',
    title: 'Como o KFC usa inteligência artificial para prever vendas e escolher novos pontos comerciais',
    image: img('P8CbyVcDEVpQN7bnKsWJM1LbZ2k', 'png'),
    desktopOnly: true,
  },
  {
    category: 'Negócios',
    title: 'Marketing de relacionamento: o que é e como criar vínculos que geram valor',
    image: img('v63ogPG61ugW3k3YBfNbPU8N2HU'),
  },
];

export const quickHeadlines = [
  { category: 'Notícias', title: 'Wellhub transforma 1,5 bilhão de check-ins em nova missão global' },
  {
    category: 'Notícias',
    title: 'Pizza Hut transforma espera por GTA VI em game com recompensas para consumidores',
    titleShort: 'Pizza Hut transforma espera por GTA VI em game com recompensas',
  },
  {
    category: 'Notícias',
    title: "Hellmann's convida consumidores a pesquisar qual é a maionese preferida do País",
    desktopOnly: true,
  },
  { category: 'Notícias', title: 'Consumidor paga mais para ganhar tempo e transforma cesta de compras' },
];
