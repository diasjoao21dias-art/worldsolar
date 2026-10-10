# World Solar — Site institucional

Site estático responsivo em português, com página inicial e página de portfólio.

## Arquivos
- `index.html`: página inicial e serviços
- `portfolio.html`: galeria filtrável de projetos
- `assets/styles.css`: layout responsivo e identidade visual
- `assets/script.js`: menu mobile, filtro de portfólio e ano automático
- `assets/favicon.svg`, `favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`: ícones do site e do celular
- `assets/worldsolar-share.jpg`: imagem de prévia para compartilhamento (Open Graph)
- Animações leves ao rolar, menu mobile acessível e ampliação de fotos no portfólio

## Antes de publicar
1. **Obrigatório antes de publicar:** troque todas as ocorrências de `https://www.seudominio.com.br/` em `index.html` e `portfolio.html` pelo domínio público real do site (incluindo as URLs `canonical`, `og:url` e `og:image`). O endereço da imagem de compartilhamento precisa ser absoluto e público.
2. Substitua as fotos ilustrativas por fotos reais da World Solar; a página de portfólio informa que as imagens são demonstrativas.
3. Confirme telefone, endereço, serviços e regiões atendidas.
4. Se tiver o logo oficial em boa resolução, substitua a marca tipográfica atual pelo arquivo original.
5. Configure Google Search Console e envie um sitemap.xml depois de definir o domínio.

## Publicação
Pode ser publicado como site estático no Render, Netlify, Vercel ou hospedagem tradicional. No Render, crie um Static Site e aponte o diretório raiz para este projeto; não é necessário comando de build nem start.

As fotos de projetos carregam do Unsplash e exigem conexão com a internet. Para desempenho e credibilidade máximos, troque-as por fotos reais otimizadas da World Solar. As animações respeitam a preferência de redução de movimento do aparelho.
