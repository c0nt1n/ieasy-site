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
  { name: 'iPhone Duo', category: 'iphone', description: 'O primeiro iPhone dobrável: 7,6" aberto e 5,4" fechado.', image: '', featured: true },
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
      { name: 'Azul-céu', hex: '#cfe0ee' },
      { name: 'Dourado-claro', hex: '#eadfc6' },
      { name: 'Branco-nuvem', hex: '#f2f1ec' },
      { name: 'Preto-espacial', hex: '#2a2a2c' },
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
  { name: 'iPhone 17e', category: 'iphone', description: 'A porta de entrada para a linha 17.', image: '', featured: false, inBox: iPhoneBox },
  {
    name: 'iPhone 16',
    category: 'iphone',
    description: 'Uma escolha segura com excelente custo-benefício.',
    image: '',
    featured: false,
    colors: [
      { name: 'Ultramarino', hex: '#6f7fd9' },
      { name: 'Verde-acetinado', hex: '#b5d1c4' },
      { name: 'Rosa', hex: '#f1c8d5' },
      { name: 'Branco', hex: '#f4f4f1' },
      { name: 'Preto', hex: '#2f3033' },
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
  { name: 'MacBook Neo', category: 'macbook', description: 'A nova opção de MacBook para a rotina.', image: '', featured: true },
  { name: 'MacBook Air M5', category: 'macbook', description: 'Fino e silencioso, com chip M5. Telas de 13" e 15".', image: '', featured: false },
  { name: 'MacBook Pro', category: 'macbook', description: 'Chips M5, M5 Pro ou M5 Max. Telas de 14" e 16".', image: '', featured: false },

  // iPad
  { name: 'iPad 11 (A16)', category: 'ipad', description: 'Tela de 11" e chip A16 para estudo, trabalho e lazer.', image: '', featured: false },

  // AirPods
  { name: 'AirPods Pro 3', category: 'airpods', description: 'Cancelamento de ruído e ajuste in-ear.', image: '', featured: true, colors: [{ name: 'Branco', hex: '#f4f4f1' }] },
  { name: 'AirPods 4', category: 'airpods', description: 'Conforto e praticidade para o dia todo.', image: '', featured: false, colors: [{ name: 'Branco', hex: '#f4f4f1' }] },
  { name: 'AirPods 5', category: 'airpods', description: 'A nova geração dos AirPods.', image: '', featured: false },
  { name: 'AirPods Max 2', category: 'airpods', description: 'Fone over-ear com chip H2.', image: '', featured: false },

  // Apple Watch
  { name: 'Apple Watch Series 12', category: 'watch', description: 'O relógio completo para saúde e rotina.', image: '', featured: false },
  { name: 'Apple Watch Ultra 4', category: 'watch', description: 'Robusto, para esporte e aventura.', image: '', featured: true },
  { name: 'Apple Watch SE 3', category: 'watch', description: 'O essencial do Apple Watch.', image: '', featured: false },

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
