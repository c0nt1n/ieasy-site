# Site iEasy

Site institucional da iEasy (antiga JLC Store), feito com Astro e Tailwind CSS. É um site estático: não precisa de servidor nem banco de dados.

## Rodar no computador

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera a versão final na pasta dist/
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Produtos (nome, linha, descrição, foto, destaque) | `src/data/products.ts` |
| WhatsApp, CNPJ, razão social, Instagram, horário, garantia, quem atende, link do Google | `src/data/site.ts` |
| Depoimentos do Google | `src/data/reviews.ts` |
| Domínio do site (sitemap, Open Graph, JSON-LD) | `astro.config.mjs` (`SITE_URL`) |
| Cores e fontes | `src/styles/global.css` (bloco `@theme`) |

Campos vazios (`''`) em `site.ts` aparecem no site como **[PREENCHER: ...]**. Quando você preencher, o aviso some sozinho.

### Trocar ou adicionar a foto de um produto

1. Coloque a foto em `src/assets/produtos/` (JPG, PNG ou WebP, de preferência com fundo claro ou transparente e pelo menos 800 px).
2. Em `src/data/products.ts`, coloque o nome do arquivo no campo `image` do produto:
   ```ts
   { name: 'iPhone 17 Pro', ..., image: 'iphone-17-pro.png', featured: false },
   ```
3. Pronto. O site converte a foto para AVIF/WebP em vários tamanhos e carrega só quando ela aparece na tela.

Use apenas fotos próprias ou com direito de uso. Imagens oficiais da Apple não podem ser usadas.

### Foto de quem atende

Coloque a foto em `src/assets/equipe/` e preencha `attendantPhoto: 'nome-do-arquivo.jpg'` em `src/data/site.ts`.

### Links do WhatsApp

São gerados automaticamente a partir do número em `site.ts`:
- Botões gerais: "Oi! Vim pelo site e tenho interesse em: "
- Botão de cada produto: "Oi! Vim pelo site e tenho interesse no (nome do produto)"

## Prévia no GitHub Pages

Cada envio para a branch `main` publica o site automaticamente em **https://c0nt1n.github.io/ieasy-site/** (workflow em `.github/workflows/deploy.yml`). Use esse link para aprovações; para o domínio definitivo, siga a Cloudflare abaixo.

## Publicar na Cloudflare Pages (grátis)

1. Crie um repositório no GitHub e envie esta pasta (o `.gitignore` já exclui `node_modules` e `dist`).
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração do build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Clique em **Save and Deploy**. A cada alteração enviada ao GitHub, o site é publicado de novo.

Sem GitHub: rode `npm run build` e, em **Create → Pages → Upload assets**, arraste a pasta `dist`.

## Ligar um domínio .com.br

1. Registre o domínio em [registro.br](https://registro.br).
2. Na Cloudflare: **Add a site** com o domínio (plano Free). A Cloudflare mostra dois servidores DNS (ex.: `xxx.ns.cloudflare.com`).
3. No registro.br: **Domínio → DNS → Alterar servidores DNS** e cole os dois servidores da Cloudflare. A propagação pode levar algumas horas.
4. No projeto do Pages: **Custom domains → Set up a custom domain** e adicione `www.seudominio.com.br` e `seudominio.com.br`.
5. Atualize `SITE_URL` em `astro.config.mjs` com o domínio final e publique de novo.

## Depois de publicar

- Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie `https://seudominio.com.br/sitemap-index.xml`.
- Coloque o link do site no Perfil da Empresa no Google (Google Maps) e no Instagram.
