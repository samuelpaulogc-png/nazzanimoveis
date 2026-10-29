# Nazzan · landing page premium

Página estática (HTML, CSS e JS puros, sem build). Base: `DNA.md` v1.3 e `copy-landing-page-v3-compacta.md`.

## Versão otimizada — 29/10/2026

A primeira tela exibe título, fotos e orçamento imediatamente. A abertura cinematográfica completa permanece em `?abertura=1`. Imagens responsivas, AVIF com fallback WebP na hero, fontes Inter Tight 400/500 locais e Lenis 1.1.20 local. As mídias das demais seções carregam conforme a aproximação.

O HTML usa `css/site-<hash>.min.css` e `js/site-<hash>.min.js`. Os fontes legíveis permanecem em `css/` e `js/`. Após editar os fontes, regenere os compactados e envie também o HTML atualizado:

```sh
npm install --prefix .preview/performance-2026-10-29/tools esbuild
node scripts/otimizar-assets.cjs
```

O site é estático e já inclui os arquivos gerados: a hospedagem não precisa executar Node.js. Não editar os compactados manualmente.

Lighthouse local com gzip: desempenho mobile 90–95 (mediana 92 em três execuções), desktop 100; acessibilidade, boas práticas e SEO 100. Transferência inicial reduzida de cerca de 10,3 MiB para 341 KiB. Esses resultados são de laboratório local; a nota pública depende de uma nova medição após o deploy.

## Ver localmente

```bash
py -m http.server 8770
```

Abrir `http://localhost:8770/`.

## Estrutura (9 seções)

1. **Hero:** galeria girada no estilo Springs, com fotos maiores. Título em três linhas com a tipografia original em Inter Tight e "sob medida" em dourado. Título, subtítulo e botão centralizados, nessa ordem, no desktop e no celular. Título original preservado: "Seu projeto sob medida, pronto na data combinada." Subtítulo curto em uma linha no desktop: "Sua casa como você sempre quis. Veja em 3D antes de fechar." No celular, o subtítulo quebra naturalmente sem reduzir a fonte. Botão "Peça seu orçamento" em cápsula no mesmo dourado de "sob medida", com texto e seta em grafite. A entrada começa pelo título, seguida do apoio e do botão. Cabeçalho com menu à esquerda, logo centralizada e acesso discreto ao orçamento no desktop.
2. **Manifesto (protótipo 09, ref.: Studio Foundry):**
   - **Abertura:** a hero fica numa camada de um palco preso. Ao rolar, ela é recortada num polígono e encolhe até a imagem central.
   - **Frases:** em volta, 6 fotos recortadas em polígonos orbitam enquanto duas frases entram e saem linha a linha. A primeira é "Móvel bonito todo mundo promete. Nós prometemos a data.", e a segunda é "Quando a marcenaria atrasa, a obra inteira para. Por isso, aqui, a data é compromisso.".
   - **Saída:** as fotos voam para fora, e a imagem central para no meio e se abre na imagem ampla.
   - **Depois:** vêm "Do projeto à montagem", que une os antigos Compromissos e o Processo em 5 etapas (Conversa e medição, Projeto 3D, Data no contrato, Produção acompanhada, Montagem caprichada), e o fecho "Só prometemos a data que conseguimos cumprir." com a pílula de orçamento.
   - **Repetição:** cada promessa aparece uma vez só; os detalhes ficam nas Dúvidas.
   - **Imagens:** todas as fotos do bloco são conceituais (`assets/img/manifesto-filme/` e `assets/img/manifesto-marcenaria-carvalho.webp`).
   - **Reserva:** a versão anterior está em `_copias/landing-antes-orbita-2026-10-17/`.
3. **Ambientes (protótipo `ambientes-ficha`, desde 18/10/2026):** abertura e cinco cômodos em tela cheia. A rolagem troca as fotos por fusão, e uma ficha de vidro compacta, parada à direita, troca o texto: rótulo "Ambientes sob medida", contador (01 / 06), nome, descrição, detalhes que se abrem no hover e o link "Quero minha cozinha ↗". À esquerda fica "Role para explorar ↓". No celular, cada foto é enquadrada no móvel principal (`object-position` por cômodo). Sem índice inferior, sem cards verdes e sem tonalização verde nas imagens.
4. **Projetos (protótipo `projetos-02`, desde 18/10/2026):** o mesmo bloco do "Do projeto à montagem". Tem o rótulo e o título "Projetos entregues. / No prazo." na coluna, os quatro projetos em acordeão com `[ 01 ]` a `[ 04 ]` e a foto em meia tela com cortina. No desktop a seção fica presa (`100svh + 4 × 55svh`); no celular, vira acordeão por toque. Embaixo fica o painel verde do fecho, com "Ambientes *reais*, nada de catálogo.", o link "Receber mais projetos no WhatsApp" e a pílula "Quero um projeto assim". Os filtros e a galeria em zigue-zague saíram. O JS é o mesmo do Processo, no `main.js` (`iniciaPino`, um por `[data-pr-pino]`). Reserva em `_copias/projetos-antes-pino-2026-10-18/`.
5. **Acabamentos (protótipo `acabamentos-03`, desde 19/10/2026, ref.: Isra Design):** um palco preso por cerca de 10 telas, no verde. Três fileiras de fotos de marcenaria correm em sentidos opostos; sobre um véu com desfoque, "Acabamento que / se vê de perto." sobe letra a letra, e a foto do centro cresce até a tela inteira. Depois vêm os 4 materiais em painéis de tela cheia que entram pela direita (como as Residences do Springs), cada um com o ambiente ao fundo e um cartão de vidro à direita, com a amostra, o nome, o texto e a linha de progresso pelos quatro. Fora do palco, a seção fica no creme: "O que definimos com você" usa o mesmo bloco preso de Projetos (`pr__*`), e o Bastidores fica num painel verde com o botão "Começar meu projeto no WhatsApp" (`data-wa`) e o link "Acompanhe os bastidores ↗". CSS em `css/acabamentos.css` e JS em `js/acabamentos.js`. Reserva em `_copias/acabamentos-antes-a3-2026-10-19/`.
6. **Depoimento:** só aparece no modo de revisão até existir depoimento real.
7. **Para arquitetos.**
8. **Dúvidas.**
9. **Orçamento e rodapé.**

O antigo Processo (seção 6, com a palavra "Prazo") saiu: as etapas agora estão no Manifesto. O menu "Processo" leva a esse bloco (`#processo`).

## Movimento e interação

Padrões tirados de Find, Springs e Hofstaetter. Os detalhes estão em `estudo-referencias.md`.

- **Rolagem suave:** Lenis 1.1.20, carregado do unpkg (`duration 1.4`). Disponível desde o carregamento, é desligado quando o visitante pede movimento reduzido.
- **Hero (ref.: Springs):** na primeira visita da sessão, a logo aparece no centro sobre o degradê verde. Duas metades de fotos entram em duas rodadas e se recolhem em sentidos opostos para revelar a galeria inclinada. A logo viaja até o cabeçalho em 1,6s; o título entra primeiro por palavras, seguido do subtítulo e do botão. A sequência completa dura cerca de 5,5s após a preparação inicial. `js/hero.js` controla a abertura antes do Lenis, espera a fonte e as primeiras fotos por até 850ms e libera a página automaticamente em caso de falha. Tab, Escape ou foco nos controles encerram a abertura; movimento reduzido a desativa. Nas visitas seguintes da mesma sessão, entram apenas a galeria e os textos. Para rever a sequência completa, abrir `?abertura=1`. A copy e o layout centralizado são preservados. Sem botão de pausa nem seta para baixo. As prévias PNG são estáticas.
- **Menu (ref.: Springs; movimento refinado com Emil Design Engineering):** modal em duas metades no desktop, com a Inter Tight original nos links, degradê verde à esquerda e fotos da Nazzan à direita. Os painéis entram com fade e deslocamentos curtos de 8px/10px em 1000ms, com a curva suave da Springs já usada na página; os links sobem 6px em 650ms e aparecem em cascata com intervalos de 35ms. O fechamento usa 500ms e aguarda o término real das transições, inclusive quando a abertura é interrompida. Hover troca a foto com cortina de 900ms e zoom discreto de 1,02 para 1 em 1,2s. As fotos anteriores permanecem por baixo até a troca terminar, evitando saltos no hover rápido. Cabeçalho com X, atalho de Ambientes, logo ao centro e acesso ao orçamento. No celular, a navegação ocupa a tela inteira, com logo à esquerda e X à direita. O foco fica contido no modal; Escape e a escolha de um destino fecham o menu. A rolagem do fundo fica bloqueada, e o painel permite rolagem em telas baixas. Ações por teclado e a preferência por movimento reduzido exibem o menu imediatamente.
- **Títulos:** os de seção entram palavra por palavra, de dentro de uma máscara. O título do hero inicia sua entrada antes do subtítulo e do botão.
- **Hero e manifesto (`js/manifesto.js`, ref.: Studio Foundry, valores lidos no bundle do site):** o trilho tem 7,7 telas e fica preso. As partes, em ordem:
  - **Hero:** encolhe na primeira .7 tela, enquanto o cabeçalho some e depois volta.
  - **Fotos:** abrem do centro em 1,2 tela e giram .12 volta por tela, a .68 × o menor lado da tela.
  - **Frases:** entram em `power3.out` (stagger .08) e saem para cima em `power2.in`, com as linhas divididas pelo JS, como o SplitText.
  - **Saída:** as fotos vão a 3× o raio e a imagem central volta ao meio.
  - **Abertura:** a imagem ampla se abre em 2,15:1, até 88vh.
  - **Formas:** são `clip-path` em polígonos, a partir dos SVGs da referência.
  - **Movimento reduzido:** tudo fica parado, em sequência.
- **Do projeto à montagem (ref.: Bloom):** no desktop (a partir de 901px) o bloco fica preso num trilho de `100svh + 5 × 55svh`. A rolagem enche a linha dourada da etapa aberta; quando ela completa, a seguinte abre sozinha e a foto da direita troca com cortina. O clique leva a rolagem (Lenis) até a etapa, e as setas do teclado andam entre elas. Se o texto da etapa aberta passar do pé da tela, a coluna sobe só o que falta. No celular, vira acordeão por toque, com a foto dentro da etapa.
- **Fotos:** entram com uma cortina de baixo para cima (`clip-path`).
- **Botões e navegação:** no hover com mouse, o texto sai por cima e uma cópia entra por baixo em 500ms, com a curva suave existente e sem alterar a cor ou a opacidade dos textos, incluindo os CTAs com ícones, o rótulo Menu, o atalho e os links do menu aberto. O efeito usa apenas transform e pode ser interrompido ao sair com o mouse. Os ícones permanecem no lugar, e as cópias ficam ocultas para leitores de tela. Teclado, toque e movimento reduzido mantêm o texto estático. Os links secundários são pílulas com círculo e seta.
- **Ambientes (protótipo `ambientes-ficha`):** a seção fica presa durante seis telas de rolagem; as fotos trocam por fusão de 600ms com a curva `--ease`, e a ficha troca o texto sem transição. Arrasto lateral e as setas do teclado (com Home e End, só enquanto a seção está presa na tela) também trocam o ambiente, sincronizando a posição da página. Não há troca automática por tempo. Movimento reduzido troca imediatamente. Os painéis inativos ficam fora da navegação e da árvore de acessibilidade. Sem JavaScript, os seis ambientes aparecem em sequência vertical. Código em `js/ambientes.js`, inicializado por `main.js`, e estilos em `css/ambientes.css` (classes `amb__*`).
- **Acabamentos (`js/acabamentos.js`, ref.: Isra Design):** a linha do tempo conta em alturas do palco (100svh):
  - frases de 0 a 2, com o desfoque de 10px a 0;
  - foto do centro de 2,5 a 3,5;
  - fileiras somem de 3,5 a 4;
  - painéis em 3,5, 4,5, 5,5 e 6,5 (uma tela cada, como no Springs), entrando pela direita (`clip-path` + escala de 1,2 a 1,0);
  - linha de progresso do cartão de 3,5 a 7,5; trilho de 880svh;
  - encaixe por material depois de 250ms parado, em 1s com `cubic-bezier(.25, 0, .35, 1)`.

  O atalho "Ver materiais" rola com o Lenis da página (`window.nazzanLenis`) até o 1º painel, passando na frente do tratamento de âncoras do `main.js`. Com movimento reduzido, tudo fica parado, em sequência.
- **Sem efeito de capítulo:** desde 19/10/2026, Acabamentos não sobe mais por cima de Projetos (saíram o `data-capitulo`, o véu e o bloco do `main.js`).
- **Atmosfera (ref.: Springs):** degradês verdes e dourados se movem devagar no fundo das seções escuras e do rodapé.
- **Rodapé:** "NAZZAN" em largura total.

Lenis 1.1.20 e as fontes Inter Tight são servidos localmente desde 29/10/2026.

## Modo de revisão

A página abre na **versão limpa**. Para ver o que falta, abra `?revisao=1`:

- **Contorno dourado tracejado:** dado a preencher. Na versão limpa, ele some junto com a linha inteira.
- **Etiqueta "validar":** promessa que precisa de confirmação. Na versão limpa, o texto aparece normalmente.
- **Legendas "Foto a produzir":** espaços sem foto real.

No HTML: `data-pend` marca o que fica escondido até ser preenchido, `.pend` é o dado em si e `.val` é a etiqueta de validação.

## Variações por ambiente (Anexo A da copy)

O parâmetro `?ambiente=` aceita `cozinha`, `closet`, `quarto`, `home-office`, `sala`, `casa-completa` e `corporativo`. Ele altera:

- o título do hero;
- o primeiro card de Ambientes;
- o ambiente marcado no formulário;
- a mensagem do WhatsApp.

## Formulário

Enquanto `CONFIG.formEndpoint` (em `js/main.js`) estiver vazio, o envio abre o WhatsApp com o resumo do pedido. Para receber por e-mail ou CRM, preencha o endpoint (POST em JSON).

## Antes de publicar

1. **Imagens.** As fotos atuais vêm do site antigo e têm só 720 a 1400px. Algumas parecem render ou banco de imagem. A seção Projetos diz "Ambientes reais, nada de catálogo", então ela precisa de fotos reais de obras entregues: pelo menos 2400px no hero e 1400px nas demais, em WebP.
2. **Imagens conceituais:** abertura, cozinha, closet, quarto, home office e sala usam imagens geradas em `assets/img/ambientes-2026-10-18/`, identificadas como conceituais. Os PNG originais e os prompts estão na mesma pasta. Não são registros de obras entregues. `prompts-imagens.md` mantém os estudos anteriores e a sugestão de ferragem.
3. **Dados a preencher:** ambientes entregues, garantia, prazo médio, semanas e bairro por projeto, horário, razão social e CNPJ, regiões e depoimento.
4. **Validar:** data no contrato, fotos por WhatsApp, projeto 3D incluso no orçamento, ferragens com fechamento suave.
5. **Política de Privacidade:** publicar a página e transformar a menção do formulário em link.
6. **Fonte:** hospedar a Inter Tight no próprio servidor (hoje vem do Google Fonts).
7. **Redirecionamentos:** subir o `.htaccess` (servidor Apache). Ele leva `/sobre`, `/projetos`, `/portfolio`, `/contato`, `/interiores`, `/residencias` e `/corporativo` para as seções certas.

## Galeria de Ambientes

A ficha fica à direita, a 5vw da borda e 48px da base, com 320px de largura, vidro escuro (desfoque de 20px), borda clara de 25% e cantos de 12px. O nome do cômodo tem 32px; a descrição, 14px; os detalhes, 14px e 12px. No desktop com mouse, a ficha começa compacta e cresce para cima no hover ou no foco, em 250ms, revelando os detalhes e o link. No celular, a ficha vira uma faixa na base, com o nome à esquerda, o contador à direita e a descrição embaixo; o rótulo, os detalhes, o link e a dica de rolagem ficam ocultos, e a sombra preta da base é mais forte.

Desde 18/10/2026, a abertura usa uma imagem fixa, seguida pelos cinco cômodos da galeria. As seis imagens são conceituais, geradas com `image_gen`, e as versões WebP pesam cerca de 1,4 MB no total. Não há camada verde sobre as fotos: apenas um degradê preto na base para leitura dos textos. A referência de composição e navegação é [Senawa](https://senawastudio.com/).

O vídeo antigo e `scripts/video-ambientes.py` permanecem arquivados no projeto, sem carregamento na landing. A versão com o índice inferior (Senawa) está em `_copias/ambientes-antes-ficha-2026-10-18/`, com o protótipo da ficha; a anterior a ela, em `_copias/ambientes-antes-senawa-2026-10-18/`.
