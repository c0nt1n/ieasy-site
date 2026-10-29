// Catálogo de produtos. Edite aqui para adicionar, remover ou reordenar.
//
// image: nome do arquivo dentro de src/assets/produtos/ (ex.: 'iphone-17-pro.jpg').
//        Deixe '' enquanto não houver foto: o site mostra um espaço reservado.
// featured: true destaca o produto com um selo e o coloca primeiro na linha.

export type Category = 'iphone' | 'macbook' | 'ipad' | 'airpods' | 'watch' | 'acessorios';

export interface Product {
  name: string;
  category: Category;
  description: string;
  image: string;
  featured: boolean;
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
  { name: 'iPhone 18 Pro Max', category: 'iphone', description: 'A maior tela da linha Pro, para quem quer o máximo.', image: '', featured: true },
  { name: 'iPhone 18 Pro', category: 'iphone', description: 'Recursos Pro em um tamanho mais compacto.', image: '', featured: true },
  { name: 'iPhone Duo', category: 'iphone', description: 'O primeiro iPhone dobrável: 7,6" aberto e 5,4" fechado.', image: '', featured: true },
  { name: 'iPhone 17 Pro Max', category: 'iphone', description: 'Tela grande e câmeras Pro da geração 17.', image: '', featured: false },
  { name: 'iPhone 17 Pro', category: 'iphone', description: 'Desempenho Pro com ótimo equilíbrio de tamanho.', image: '', featured: false },
  { name: 'iPhone 17', category: 'iphone', description: 'O iPhone completo para o dia a dia.', image: '', featured: false },
  { name: 'iPhone Air', category: 'iphone', description: 'Design ultrafino e leve.', image: '', featured: false },
  { name: 'iPhone 17e', category: 'iphone', description: 'A porta de entrada para a linha 17.', image: '', featured: false },
  { name: 'iPhone 16', category: 'iphone', description: 'Uma escolha segura com excelente custo-benefício.', image: '', featured: false },

  // MacBook
  { name: 'MacBook Neo', category: 'macbook', description: 'A nova opção de MacBook para a rotina.', image: '', featured: true },
  { name: 'MacBook Air M5', category: 'macbook', description: 'Fino e silencioso, com chip M5. Telas de 13" e 15".', image: '', featured: false },
  { name: 'MacBook Pro', category: 'macbook', description: 'Chips M5, M5 Pro ou M5 Max. Telas de 14" e 16".', image: '', featured: false },

  // iPad
  { name: 'iPad 11 (A16)', category: 'ipad', description: 'Tela de 11" e chip A16 para estudo, trabalho e lazer.', image: '', featured: false },

  // AirPods
  { name: 'AirPods Pro 3', category: 'airpods', description: 'Cancelamento de ruído e ajuste in-ear.', image: '', featured: true },
  { name: 'AirPods 4', category: 'airpods', description: 'Conforto e praticidade para o dia todo.', image: '', featured: false },
  { name: 'AirPods 5', category: 'airpods', description: 'A nova geração dos AirPods.', image: '', featured: false },
  { name: 'AirPods Max 2', category: 'airpods', description: 'Fone over-ear com chip H2.', image: '', featured: false },

  // Apple Watch
  { name: 'Apple Watch Series 12', category: 'watch', description: 'O relógio completo para saúde e rotina.', image: '', featured: false },
  { name: 'Apple Watch Ultra 4', category: 'watch', description: 'Robusto, para esporte e aventura.', image: '', featured: true },
  { name: 'Apple Watch SE 3', category: 'watch', description: 'O essencial do Apple Watch.', image: '', featured: false },

  // Acessórios
  { name: 'AirTag (kit com 4)', category: 'acessorios', description: 'Encontre chaves, malas e bolsas pelo iPhone.', image: '', featured: false },
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
