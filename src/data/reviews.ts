// Avaliações reais de clientes (com autorização de cada um). Aparecem na esteira da seção Avaliações.
// Foto: coloque o arquivo em src/assets/avaliacoes/ e informe só o nome, ex.: 'maria.jpg'.
// Sem foto, aparecem as iniciais do nome. `product` é opcional, ex.: 'iPhone 17 Pro'.
// Exemplo: { name: 'Maria S.', text: 'Texto da avaliação', rating: 5, photo: 'maria.jpg', product: 'iPhone 17 Pro' }

// `rating` (1 a 5) é opcional: sem ele, o cartão não mostra estrelas.

export interface Review {
  name: string;
  text: string;
  rating?: number;
  photo?: string;
  product?: string;
}

// Mensagens recebidas pelo WhatsApp (outubro de 2026), com pequenos ajustes de pontuação. Notas informadas pela loja.
export const reviews: Review[] = [
  {
    name: 'Manuela V.',
    rating: 5,
    text: 'Desde o primeiro contato fui muito bem atendida, com toda atenção, cuidado e transparência. O celular chegou certinho e superou minhas expectativas! Com certeza voltarei a comprar e indicarei para outras pessoas.',
  },
  {
    name: 'Lara',
    rating: 5,
    text: 'Deu tudo certo, sim! Já está em uso e gostamos muito da compra com vocês. Tudo certinho e prazo de entrega cumprido! Foi um presente para a minha mãe e ela amou a surpresa!',
    product: 'iPhone 17e',
  },
  {
    name: 'Lucas C.',
    rating: 5,
    text: 'Chegou o celular. Bem conservado e funcionando. Top!',
  },
];
