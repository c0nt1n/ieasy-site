// Catálogo de produtos. Edite aqui para adicionar, remover ou reordenar.
//
// image: nome do arquivo dentro de src/assets/produtos/ (ex.: 'iphone-17-pro.jpg').
//        Deixe '' enquanto não houver foto: o site mostra um espaço reservado.
// featured: true destaca o produto com um selo e o coloca primeiro na linha.
//
// Página de cada produto (/produtos/nome-do-produto/):
// colors:     cores disponíveis. hex é só para a bolinha de cor; image é a foto daquela cor
//             (arquivo em src/assets/produtos/). Sem colors, a página mostra [PREENCHER].
// capacities: armazenamento (ou tamanhos). Sem capacities, a página mostra [PREENCHER].
// specs:      ficha técnica resumida (opcional).
// inBox:      o que vem na caixa (opcional).
// Cores, capacidades e ficha seguem o que a Apple divulga; confira antes de publicar.

export type Category = 'iphone' | 'macbook' | 'ipad' | 'airpods' | 'watch' | 'acessorios';

export interface Color {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  name: string;
  category: Category;
  description: string;
  image: string;
  featured: boolean;
  colors?: Color[];
  capacities?: string[];
  specs?: { label: string; value: string }[];
  inBox?: string[];
}

// Cores compartilhadas entre modelos da mesma geração
const colors18Pro: Color[] = [
  { name: 'Bordô', hex: '#5b2230' },
  { name: 'Glacial', hex: '#a9bed8' },
  { name: 'Prateado', hex: '#e3e4e6' },
  { name: 'Preto', hex: '#3a3a3c' },
];
const colors17Pro: Color[] = [
  { name: 'Laranja-cósmico', hex: '#e2702f' },
  { name: 'Azul-intenso', hex: '#2f3c58' },
  { name: 'Prateado', hex: '#e3e4e6' },
];
const iPhoneBox = ['iPhone', 'Cabo USB-C'];

/** Liga cada cor à sua foto: withImages(cores, { 'Nome da cor': 'arquivo.webp' }). */
function withImages(colors: Color[], images: Record<string, string>): Color[] {
  return colors.map((c) => (images[c.name] ? { ...c, image: images[c.name] } : c));
}

export const categories: { id: Category; name: string; tagline: string }[] = [
  { id: 'iphone', name: 'iPhone', tagline: 'Da linha Pro ao primeiro dobrável.' },
  { id: 'macbook', name: 'MacBook', tagline: 'Do dia a dia ao trabalho pesado.' },
  { id: 'ipad', name: 'iPad', tagline: 'Leve, versátil e pronto para tudo.' },
  { id: 'airpods', name: 'AirPods', tagline: 'Som sem fio para cada rotina.' },
  { id: 'watch', name: 'Apple Watch', tagline: 'Saúde e praticidade no pulso.' },
  { id: 'acessorios', name: 'Acessórios', tagline: 'Para completar o seu conjunto.' },
];

export const products: Product[] = [
  // iPhone
  {
    name: 'iPhone 18 Pro Max',
    category: 'iphone',
    description: 'A maior tela da linha Pro, para quem quer o máximo.',
    image: '',
    featured: true,
    colors: withImages(colors18Pro, {
      Bordô: 'iphone-18-pro-max-bordo.webp',
      Glacial: 'iphone-18-pro-max-glacial.webp',
      Prateado: 'iphone-18-pro-max-prateado.webp',
      Preto: 'iphone-18-pro-max-preto.webp',
    }),
    capacities: ['256 GB', '512 GB', '1 TB', '2 TB'],
    specs: [
      { label: 'Tela', value: '6,9" Super Retina XDR, ProMotion até 120 Hz' },
      { label: 'Chip', value: 'A20 Pro (2 nm)' },
      { label: 'Câmeras', value: 'Três de 48 MP, principal com abertura variável' },
      { label: 'Câmera frontal', value: '18 MP com Center Stage' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone 18 Pro',
    category: 'iphone',
    description: 'Recursos Pro em um tamanho mais compacto.',
    image: '',
    featured: true,
    colors: withImages(colors18Pro, {
      Bordô: 'iphone-18-pro-bordo.webp',
      Glacial: 'iphone-18-pro-glacial.webp',
      Prateado: 'iphone-18-pro-prateado.webp',
      Preto: 'iphone-18-pro-preto.webp',
    }),
    capacities: ['256 GB', '512 GB', '1 TB', '2 TB'],
    specs: [
      { label: 'Tela', value: '6,3" Super Retina XDR, ProMotion até 120 Hz' },
      { label: 'Chip', value: 'A20 Pro (2 nm)' },
      { label: 'Câmeras', value: 'Três de 48 MP, principal com abertura variável' },
      { label: 'Câmera frontal', value: '18 MP com Center Stage' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone Duo',
    category: 'iphone',
    description: 'O primeiro iPhone dobrável: 7,6" aberto e 5,4" fechado.',
    image: '',
    featured: true,
    colors: [
      { name: 'Branco-estrela', hex: '#e7e3de', image: 'iphone-duo-branco-estrela.webp' },
      { name: 'Céu noturno', hex: '#2a2e36', image: 'iphone-duo-ceu-noturno.webp' },
    ],
    capacities: ['256 GB', '512 GB', '1 TB', '2 TB'],
    specs: [
      { label: 'Telas', value: '7,6" dobrável por dentro e 5,4" por fora, até 120 Hz' },
      { label: 'Chip', value: 'A20 Pro (2 nm)' },
      { label: 'Câmeras', value: 'Principal e ultra-angular de 48 MP' },
      { label: 'Estrutura', value: 'Titânio, resistência IP68' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone 17 Pro Max',
    category: 'iphone',
    description: 'Tela grande e câmeras Pro da geração 17.',
    image: '',
    featured: false,
    colors: withImages(colors17Pro, {
      'Laranja-cósmico': 'iphone-17-pro-max-laranja-cosmico.webp',
      'Azul-intenso': 'iphone-17-pro-max-azul-intenso.webp',
      Prateado: 'iphone-17-pro-max-prateado.webp',
    }),
    capacities: ['256 GB', '512 GB', '1 TB', '2 TB'],
    specs: [
      { label: 'Tela', value: '6,9", ProMotion até 120 Hz' },
      { label: 'Chip', value: 'A19 Pro' },
      { label: 'Câmeras', value: 'Três de 48 MP: principal, ultra-angular e teleobjetiva' },
      { label: 'Estrutura', value: 'Alumínio unibody' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone 17 Pro',
    category: 'iphone',
    description: 'Desempenho Pro com ótimo equilíbrio de tamanho.',
    image: '',
    featured: false,
    colors: withImages(colors17Pro, {
      'Laranja-cósmico': 'iphone-17-pro-laranja-cosmico.webp',
      'Azul-intenso': 'iphone-17-pro-azul-intenso.webp',
      Prateado: 'iphone-17-pro-prateado.webp',
    }),
    capacities: ['256 GB', '512 GB', '1 TB'],
    specs: [
      { label: 'Tela', value: '6,3", ProMotion até 120 Hz' },
      { label: 'Chip', value: 'A19 Pro' },
      { label: 'Câmeras', value: 'Três de 48 MP: principal, ultra-angular e teleobjetiva' },
      { label: 'Estrutura', value: 'Alumínio unibody' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone 17',
    category: 'iphone',
    description: 'O iPhone completo para o dia a dia.',
    image: '',
    featured: false,
    colors: [
      { name: 'Lavanda', hex: '#d9cdea', image: 'iphone-17-lavanda.webp' },
      { name: 'Sálvia', hex: '#bcd19c', image: 'iphone-17-salvia.webp' },
      { name: 'Azul-névoa', hex: '#a9c6ea', image: 'iphone-17-azul-nevoa.webp' },
      { name: 'Branco', hex: '#f4f4f1', image: 'iphone-17-branco.webp' },
      { name: 'Preto', hex: '#3d3d3f', image: 'iphone-17-preto.webp' },
    ],
    capacities: ['256 GB', '512 GB'],
    specs: [
      { label: 'Tela', value: '6,3", ProMotion até 120 Hz' },
      { label: 'Chip', value: 'A19' },
      { label: 'Câmeras', value: 'Fusion 48 MP e ultra-angular 48 MP' },
      { label: 'Câmera frontal', value: '18 MP com Center Stage' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone Air',
    category: 'iphone',
    description: 'Design ultrafino e leve.',
    image: '',
    featured: false,
    colors: [
      { name: 'Azul-céu', hex: '#b9d1ec', image: 'iphone-air-azul-ceu.webp' },
      { name: 'Dourado-claro', hex: '#e3d5bd', image: 'iphone-air-dourado-claro.webp' },
      { name: 'Branco-nuvem', hex: '#f2f1ec', image: 'iphone-air-branco-nuvem.webp' },
      { name: 'Preto-espacial', hex: '#2a2a2c', image: 'iphone-air-preto-espacial.webp' },
    ],
    capacities: ['256 GB', '512 GB', '1 TB'],
    specs: [
      { label: 'Tela', value: '6,5", ProMotion até 120 Hz' },
      { label: 'Chip', value: 'A19 Pro' },
      { label: 'Câmera', value: 'Fusion 48 MP' },
      { label: 'Espessura', value: '5,6 mm' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone 17e',
    category: 'iphone',
    description: 'A porta de entrada para a linha 17.',
    image: '',
    featured: false,
    colors: [
      { name: 'Branco', hex: '#f4f4f1', image: 'iphone-17e-branco.webp' },
      { name: 'Rosa-pálido', hex: '#f6d6dc', image: 'iphone-17e-rosa-palido.webp' },
      { name: 'Preto', hex: '#3a3b3a', image: 'iphone-17e-preto.webp' },
    ],
    capacities: ['256 GB', '512 GB'],
    specs: [
      { label: 'Tela', value: '6,1" Super Retina XDR' },
      { label: 'Chip', value: 'A19' },
      { label: 'Câmera', value: '48 MP' },
      { label: 'Câmera frontal', value: '12 MP' },
    ],
    inBox: iPhoneBox,
  },
  {
    name: 'iPhone 16',
    category: 'iphone',
    description: 'Uma escolha segura com excelente custo-benefício.',
    image: '',
    featured: false,
    colors: [
      { name: 'Ultramarino', hex: '#8196ec', image: 'iphone-16-ultramarino.webp' },
      { name: 'Verde-acetinado', hex: '#a3d0ca', image: 'iphone-16-verde-acetinado.webp' },
      { name: 'Rosa', hex: '#f2a6d1', image: 'iphone-16-rosa.webp' },
      { name: 'Branco', hex: '#f4f4f1', image: 'iphone-16-branco.webp' },
      { name: 'Preto', hex: '#3d3e40', image: 'iphone-16-preto.webp' },
    ],
    capacities: ['128 GB', '256 GB'],
    specs: [
      { label: 'Tela', value: '6,1" Super Retina XDR' },
      { label: 'Chip', value: 'A18' },
      { label: 'Câmeras', value: 'Fusion 48 MP e ultra-angular 12 MP' },
    ],
    inBox: iPhoneBox,
  },

  // MacBook
  {
    name: 'MacBook Neo',
    category: 'macbook',
    description: 'A nova opção de MacBook para a rotina.',
    image: '',
    featured: true,
    colors: [
      { name: 'Prateado', hex: '#e3e4e6', image: 'macbook-neo-prateado.webp' },
      { name: 'Blush', hex: '#e8c6c8', image: 'macbook-neo-blush.webp' },
      { name: 'Amarelo-cítrico', hex: '#ece7a0', image: 'macbook-neo-amarelo-citrico.webp' },
      { name: 'Índigo', hex: '#6b7790', image: 'macbook-neo-indigo.webp' },
    ],
    capacities: ['256 GB', '512 GB com Touch ID'],
    specs: [
      { label: 'Tela', value: '13" Liquid Retina, 2408 x 1506, até 500 nits' },
      { label: 'Chip', value: 'A18 Pro: CPU de 6 núcleos e GPU de 5 núcleos' },
      { label: 'Memória', value: '8 GB' },
      { label: 'Bateria', value: 'Até 16 horas de vídeo' },
      { label: 'Peso', value: '1,23 kg' },
    ],
    inBox: ['MacBook Neo', 'Adaptador de energia USB-C de 20 W', 'Cabo USB-C'],
  },
  {
    name: 'MacBook Air M5',
    category: 'macbook',
    description: 'Fino e silencioso, com chip M5. Telas de 13" e 15".',
    image: '',
    featured: false,
    colors: [
      { name: 'Azul-céu', hex: '#c5d8e6', image: 'macbook-air-m5-azul-ceu.webp' },
      { name: 'Prateado', hex: '#e3e4e6', image: 'macbook-air-m5-prateado.webp' },
      { name: 'Estelar', hex: '#e3dccf', image: 'macbook-air-m5-estelar.webp' },
      { name: 'Meia-noite', hex: '#2e3642', image: 'macbook-air-m5-meia-noite.webp' },
    ],
    capacities: ['13" · 512 GB', '13" · 1 TB', '15" · 512 GB', '15" · 1 TB'],
    specs: [
      { label: 'Tela', value: '13" (2560 x 1664) ou 15" (2880 x 1864) Liquid Retina, 500 nits' },
      { label: 'Chip', value: 'M5: CPU de 10 núcleos, GPU de 8 ou 10 núcleos' },
      { label: 'Memória', value: '16 GB ou 24 GB' },
      { label: 'Conexões', value: 'MagSafe 3, duas Thunderbolt 4, fone 3,5 mm, Wi-Fi 7' },
      { label: 'Bateria', value: 'Até 18 horas de vídeo' },
    ],
  },
  {
    name: 'MacBook Pro',
    category: 'macbook',
    description: 'Novo chip M6 no 14", além de M5, M5 Pro e M5 Max. Telas de 14" e 16".',
    image: '',
    featured: false,
    colors: [
      { name: 'Preto-espacial', hex: '#2e2e31', image: 'macbook-pro-preto-espacial.webp' },
      { name: 'Prateado', hex: '#e3e4e6', image: 'macbook-pro-prateado.webp' },
    ],
    capacities: ['14" · M6', '14" · M5', '14" · M5 Pro', '14" · M5 Max', '16" · M5 Pro', '16" · M5 Max'],
    specs: [
      { label: 'Tela', value: '14,2" ou 16,2" Liquid Retina XDR' },
      { label: 'Chip', value: 'M6 (CPU e GPU de 12 núcleos), M5, M5 Pro ou M5 Max' },
      { label: 'Memória', value: 'M6: 16 GB, até 32 GB. M5 Max: até 128 GB' },
      { label: 'Bateria', value: 'Até 24 horas no 14" com M6' },
      { label: 'Conexões', value: 'MagSafe 3, Thunderbolt, HDMI, leitor SDXC e fone 3,5 mm' },
    ],
  },

  // iPad
  {
    name: 'iPad 11 (A16)',
    category: 'ipad',
    description: 'Tela de 11" e chip A16 para estudo, trabalho e lazer.',
    image: '',
    featured: false,
    colors: [
      { name: 'Azul', hex: '#8fb4e3', image: 'ipad-11-a16-azul.webp' },
      { name: 'Rosa', hex: '#e8607e', image: 'ipad-11-a16-rosa.webp' },
      { name: 'Amarelo', hex: '#ecd463', image: 'ipad-11-a16-amarelo.webp' },
      { name: 'Prateado', hex: '#e3e4e6', image: 'ipad-11-a16-prateado.webp' },
    ],
    capacities: ['128 GB', '256 GB', '512 GB'],
    specs: [
      { label: 'Tela', value: '11" Liquid Retina, 2360 x 1640' },
      { label: 'Chip', value: 'A16' },
      { label: 'Câmeras', value: '12 MP atrás e 12 MP na frente, na horizontal, com Center Stage' },
      { label: 'Desbloqueio', value: 'Touch ID no botão superior' },
      { label: 'Conexões', value: 'USB-C, Wi-Fi 6 ou Wi-Fi + Cellular (5G)' },
    ],
  },

  // AirPods
  {
    name: 'AirPods Pro 3',
    category: 'airpods',
    description: 'Cancelamento de ruído e ajuste in-ear.',
    image: '',
    featured: true,
    colors: [{ name: 'Branco', hex: '#f4f4f1', image: 'airpods-pro-3.webp' }],
    specs: [
      { label: 'Chip', value: 'H2' },
      { label: 'Cancelamento de ruído', value: 'Ativo, com modo Transparência' },
      { label: 'Bateria', value: 'Até 8 horas com cancelamento de ruído' },
      { label: 'Saúde', value: 'Sensor de batimentos para treinos' },
      { label: 'Resistência', value: 'IP57 nos fones e no estojo' },
      { label: 'Ponteiras', value: '5 tamanhos, de XXS a L' },
    ],
  },
  {
    name: 'AirPods 5',
    category: 'airpods',
    description: 'A nova geração dos AirPods, com cancelamento de ruído nas duas versões.',
    image: '',
    featured: false,
    colors: [{ name: 'Branco', hex: '#f4f4f1', image: 'airpods-4.webp' }],
    capacities: ['Estojo padrão', 'Estojo com recarga sem fio'],
    specs: [
      { label: 'Chip', value: 'H2' },
      { label: 'Cancelamento de ruído', value: 'Ativo nas duas versões' },
      { label: 'Resistência', value: 'IP57' },
      { label: 'Recursos', value: 'Tradução ao vivo, inclusive em português' },
    ],
  },
  {
    name: 'AirPods 4',
    category: 'airpods',
    description: 'Conforto e praticidade para o dia todo.',
    image: '',
    featured: false,
    colors: [{ name: 'Branco', hex: '#f4f4f1', image: 'airpods-4.webp' }],
    capacities: ['Sem cancelamento de ruído', 'Com cancelamento de ruído'],
    specs: [
      { label: 'Chip', value: 'H2' },
      { label: 'Formato', value: 'Aberto, sem ponteiras' },
      { label: 'Recarga', value: 'Estojo USB-C' },
    ],
  },
  {
    name: 'AirPods Max 2',
    category: 'airpods',
    description: 'Fone over-ear com chip H2.',
    image: '',
    featured: false,
    colors: [
      { name: 'Meia-noite', hex: '#2f3442', image: 'airpods-max-2-meia-noite.webp' },
      { name: 'Estelar', hex: '#e8e0d2', image: 'airpods-max-2-estelar.webp' },
      { name: 'Azul', hex: '#a9c3e3', image: 'airpods-max-2-azul.webp' },
      { name: 'Roxo', hex: '#cfc3e6', image: 'airpods-max-2-roxo.webp' },
      { name: 'Laranja', hex: '#f4a77a', image: 'airpods-max-2-laranja.webp' },
    ],
    specs: [
      { label: 'Chip', value: 'H2' },
      { label: 'Cancelamento de ruído', value: 'Ativo, 1,5x mais eficaz que a geração anterior' },
      { label: 'Bateria', value: 'Até 20 horas com cancelamento de ruído' },
      { label: 'Conexão', value: 'USB-C, com áudio lossless pelo cabo' },
      { label: 'Recursos', value: 'Áudio Adaptativo e Detecção de Conversa' },
    ],
  },

  // Apple Watch
  { name: 'Apple Watch Series 12', category: 'watch', description: 'O relógio completo para saúde e rotina.', image: '', featured: false },
  {
    name: 'Apple Watch Ultra 4',
    category: 'watch',
    description: 'Robusto, para esporte e aventura.',
    image: '',
    featured: true,
    colors: [
      { name: 'Titânio natural', hex: '#c9c2b6', image: 'apple-watch-ultra-4-titanio-natural.webp' },
      { name: 'Titânio preto', hex: '#2c2c2e', image: 'apple-watch-ultra-4-titanio-preto.webp' },
    ],
    capacities: ['49 mm'],
    specs: [
      { label: 'Chip', value: 'S11' },
      { label: 'Tela', value: 'Até 3000 nits de brilho' },
      { label: 'Bateria', value: 'Até 50 horas (até 84 horas no modo Pouca Energia)' },
      { label: 'Resistência', value: 'WR100 e IP6X, para mergulho recreativo até 40 m' },
      { label: 'Caixa', value: 'Titânio, com GPS + Celular' },
    ],
  },
  {
    name: 'Apple Watch SE 3',
    category: 'watch',
    description: 'O essencial do Apple Watch.',
    image: '',
    featured: false,
    colors: [
      { name: 'Meia-noite', hex: '#2b2f38', image: 'apple-watch-se-3-meia-noite.webp' },
      { name: 'Estelar', hex: '#e6dfd3', image: 'apple-watch-se-3-estelar.webp' },
    ],
    capacities: ['40 mm', '44 mm'],
    specs: [
      { label: 'Chip', value: 'S10' },
      { label: 'Tela', value: 'Sempre ativa' },
      { label: 'Bateria', value: 'Até 18 horas (até 32 horas no modo Pouca Energia)' },
      { label: 'Conexão', value: 'GPS ou GPS + Celular (5G)' },
    ],
  },

  // Acessórios
  { name: 'AirTag (kit com 4)', category: 'acessorios', description: 'Encontre chaves, malas e bolsas pelo iPhone.', image: '', featured: false, colors: [{ name: 'Branco', hex: '#f4f4f1' }] },
];

export function productsBy(category: Category) {
  return products
    .filter((p) => p.category === category)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function slug(text: string) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Endereço da página do produto, já com o caminho base do site. */
export function productPath(p: Product) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/produtos/${slug(p.name)}/`;
}
