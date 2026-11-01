# Site iEasy

Site institucional da iEasy, feito com Astro e Tailwind CSS. É um site estático: não precisa de servidor nem banco de dados.

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

Cada envio para a branch `main` publica uma prévia em **https://c0nt1n.github.io/ieasy-site/** (workflow em `.github/workflows/deploy.yml`).

## Site oficial na Hostinger (ieasyoficial.com)

O mesmo workflow monta o site para `https://ieasyoficial.com` e envia a pasta `dist` por FTP para a hospedagem da Hostinger. Configuração feita uma vez:

1. **hPanel → Sites → Adicionar site** com o domínio `ieasyoficial.com` (site vazio, sem construtor).
2. **hPanel → Arquivos → Contas FTP**: anote o servidor (IP ou `ftp.ieasyoficial.com`), o usuário e a senha, e veja a pasta de envio (normalmente `public_html`).
3. **GitHub → Settings → Secrets and variables → Actions**:
   - aba **Variables**: `FTP_SERVER` e `FTP_USERNAME` (e `FTP_DIR` só se a pasta não for `public_html/`);
   - aba **Secrets**: `FTP_PASSWORD`.
4. **GitHub → Actions → Publicar o site → Run workflow** para o primeiro envio.
5. **hPanel → Segurança → SSL**: confirme que o certificado gratuito está ativo. O `public/.htaccess` leva tudo para `https://ieasyoficial.com` (sem www).

Depois disso, cada envio para a `main` atualiza o site oficial sozinho.

## Depois de publicar

- Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie `https://ieasyoficial.com/sitemap-index.xml`.
- Coloque o link do site no Perfil da Empresa no Google (Google Maps) e no Instagram.
