# CLAUDE.md · Landing da Nazzan

Contexto para continuar o trabalho em outro chat. **Leia este arquivo inteiro antes de mexer em qualquer coisa** e leia o arquivo atual antes de cada edição: o Codex também trabalha nesta pasta.

*Reescrito em 22/10/2026 (Claude), com o estado real do código nesse dia. A versão anterior, com todo o histórico detalhado de 15 a 22/10, está em `C:\Meus Documentos\Downloads\Reform. Nazzan2 - arquivo\_copias\claude-md-antes-reescrita-2026-10-22\CLAUDE.md`. Consulte-a quando precisar de um valor antigo ou do porquê de uma decisão.*

---

## 0. Para retomar rápido

- **Onde paramos (22/10/2026):** a landing está completa e testada no desktop e no celular. As últimas rodadas foram de enxugar: saíram os rótulos acima das seções ("03 Projetos", "07 Orçamento" etc.), o atalho "Ver materiais ↘" de Acabamentos, o Instagram do rodapé e o "sob medida" do rodapé. O orçamento virou a seção de contato da Hofstaetter, e o rodapé ficou minimalista. A primeira foto de Ambientes, que sumia no iPhone, foi corrigida, e o usuário confirmou.
- **Nada pendente de resposta do usuário**, exceto os itens da seção 11 (pendências).
- **Para ver:** suba o servidor (seção 1) e abra http://localhost:8770/. No celular, na mesma rede: http://192.168.0.117:8770/ (IP do computador em 21/10; confira com `ipconfig`).
- **Ao terminar cada mudança, mande o link.** O usuário sempre pede.

---

## 1. O projeto

- **O que é:** a nova landing page da **Nazzan, Móveis Sob Medida**, marcenaria de alto padrão na Mooca, em São Paulo. Substitui o site antigo em WordPress (nazzan.com.br), que tinha links quebrados.
- **Objetivo:** premium, minimalista, elegante e moderno, de luxo silencioso, para médio e alto padrão. Valoriza projeto, materiais e acabamento, e usa o **prazo** como prova ("pronto na data combinada").
- **Como é feito:** HTML, CSS e JS puros, sem build. Lenis (rolagem suave) vem do unpkg; Inter Tight, do Google Fonts.
- **Para rodar:** `py -m http.server 8770` na pasta do projeto, ou o preview `nazzan` do `.claude/launch.json` (no app, `preview_start` com `name: "nazzan"`). **O servidor cai entre sessões**: se o teste der `ERR_CONNECTION_REFUSED`, suba de novo.
- **Links:** landing http://localhost:8770/ · protótipos http://localhost:8770/prototypes/… · revisão de pendências http://localhost:8770/?revisao=1

---

## 2. Regras da marca (não mudam)

- **Fonte da verdade:** DNA em `C:\Meus Documentos\Downloads\Nazzan Imóveis\projetos\nazzan\resultado\DNA.md` (v1.3); copy em `…\projetos\nazzan\landing-page\copy-landing-page-v3-compacta.md`.
- **Tipografia:** só **Inter Tight**, pesos 400 e 500. Nunca negrito, nunca serifa, mesmo que a referência use.
- **Paleta:** verde `#2A514D` (`--verde`), dourado `#D7A048` (`--ouro`, pouco: detalhe, CTA, uma palavra), creme `#FDF9F4` (`--creme`), grafite `#1C1C1C`, pinho `#3B594C`. Superfície creme mais escura: `--superficie #F4EEE4`.
- **Nome:** "sob medida" é a assinatura ("planejados" só para SEO). Exceção pedida pelo usuário: o **rodapé** não tem "sob medida" (logo "NAZZAN MÓVEIS").
- **Fábrica:** a Nazzan **não tem fábrica própria**; produz em **fábrica parceira**. Nunca escrever "fábrica própria".
- **Dados:** nunca inventar números, depoimentos, prazos, bairros. Use `[PREENCHER]`/`[VALIDAR]`; na página isso vira `data-pend`, `.pend` e `.val`, que só aparecem em `?revisao=1`.
- **Imagens geradas são conceituais.** Nunca apresentar como obra entregue.
- **Título do hero:** "Seu projeto *sob medida*, pronto na data combinada.", com "sob medida" em dourado.

---

## 3. Como o usuário trabalha (importante)

- Fala e escreve em **português do Brasil**. Escreva as respostas em português, claras e curtas.
- **Faz pedidos pontuais e quer exatamente aquilo.** Ao ajustar um elemento, não mexa em tamanhos, textos ou outros elementos. Quando um pedido for ambíguo (ex.: "tire o sob medida de tudo"), escolha a leitura mais provável, diga qual foi e ofereça a alternativa.
- **Volta atrás com frequência:** antes de qualquer mudança visível, guarde cópia dos arquivos em `…\Reform. Nazzan2 - arquivo\_copias\<nome-descritivo-data>\` (ver seção 5).
- **Referências:** manda sites e prints e gosta que os sites sejam **estudados no código** (estrutura, CSS, JS, curvas). Ao copiar uma referência, use os valores medidos e cite-os nos comentários do CSS.
- **Não gosta de:** recortes chamativos (chevrons/setas em fotos); alinhamentos misturados; blocos repetindo a mesma promessa; botão dourado pesado no meio das seções; enfeites com "cara de IA" (ponto pulsando, traço antes do rótulo, gradientes chamativos); fotos escurecidas por véus ou sombra em texto ("cara de filtro"); layouts "simples demais" ou "sem graça"; transições que param no meio, pedem dois scrolls ou dão tranco; cópia **idêntica** de referência quando não pediu ("quase idêntico ao da referência" foi uma crítica); elementos grandes demais quando pediu minimalismo; links para o Instagram.
- **Gosta de:** fotos limpas com texto num **cartão de vidro** (glassmorphism); pílula com círculo dourado; títulos em duas cores (segunda linha apagada); números entre colchetes `[ 01 ]`; filetes finos; rolagem no ritmo do Springs; revelação em cascata de 65ms.
- **Quando recusa ("sem graça", "não gostei", "pior que a atual"):** não remende às cegas. Pergunte qual direção ou peça uma referência (com 3–4 opções curtas e concretas); quando ele escolhe, execute. Depois de duas recusas seguidas, pare e pergunte.
- **Protótipo antes de mudar seções inteiras:** para layouts novos, faça em `prototypes/` (confira antes se o nome existe), mande capturas e o link, e só leve para a landing quando ele aprovar.
- **Mostre o resultado:** capturas do desktop e do celular (via Playwright, seção 10) e o link.

---

## 4. Trabalho em paralelo com o Codex

- O usuário também usa o **Codex** nesta pasta. O contexto dele fica em **`AGENTS.md`** (última atualização 21/10, 22:33). Leia antes de mexer em imagens de Processo, Projetos e "O que definimos com você": foi o Codex que gerou e aplicou essas imagens (`image_gen`), com prompts em `prompts.json` nas pastas de `assets/img/` (os `prompts.json` foram para o arquivo na limpeza; ver seção 5).
- **O Codex usa `.preview/` para prévias.** As prévias antigas dele (puxadores, iluminação, capturas) foram movidas na limpeza para `…\Reform. Nazzan2 - arquivo\.preview\`. O `AGENTS.md` ainda cita os caminhos antigos `.preview/...`: procure lá. Em `.preview/` do projeto ficaram `orcamento-layouts-02/` e `orcamento-mockup-2026-10-21/` (mockups de orçamento do Codex, não aplicados) e dois logs em uso.
- **Nunca reverta mudanças que não foram suas**, e confira se o nome existe antes de criar arquivo (em 19/10 o Claude gravou por cima de um protótipo do Codex). Para saber o que o Codex fez: `AGENTS.md` e a sessão dele em `~/.codex/sessions/2026/10/18/rollout-2026-10-18T08-35-35-….jsonl` (enorme; leia só o fim com Python).

---

## 5. Arquivos e pastas

### No projeto (`C:\Meus Documentos\Downloads\Reform. Nazzan2\`)

```
index.html              a landing (CRLF: edite com Python, nunca com sed -i, que troca por LF)
css/styles.css          estilos gerais e das seções (tokens no :root)
css/ambientes.css       Ambientes (amb__*)
css/acabamentos.css     Acabamentos (a3__*)
js/main.js              Lenis (window.nazzanLenis), revelações [data-reveal], menu, iniciaPino(), WhatsApp, fixos
js/hero.js              abertura e galeria da hero (Codex); lista FOTOS → assets/img/hero-galeria/
js/manifesto.js         hero que encolhe + manifesto em órbita + vídeo/sequência da montagem
js/ambientes.js         Ambientes: passagem lateral, ficha, gesto (iniciado pelo main.js)
js/acabamentos.js       Acabamentos: palco preso, frases, zoom, painéis, gesto
js/transicao-galeria.js nazzanTransicaoGaleria (Web Animations, Codex), usada por Ambientes e Acabamentos
js/rodape.js            logo do rodapé que se desenha do traço ao sólido
assets/img/             só imagens em uso (ver seção 6); og-nazzan.jpg é do Open Graph
assets/video/           montagem-1920.mp4 (desktop) e montagem-quadros/ (144 WebP do celular)
assets/marca/           logos PNG (425×80), favicon, apple-touch-icon (não há vetor da marca)
prototypes/             só os protótipos do orçamento (seção 8)
AGENTS.md               contexto do Codex
README.md               documentação do Codex (desatualizada desde 19/10)
estudo-referencias.md   valores medidos no código das referências (Find, Springs, Hofstaetter, Studio Foundry, Isra, LPAS)
prompts-imagens.md      prompts antigos de imagens
.htaccess               redirects das URLs antigas (/residencias, /corporativo…) e cache
```

### No arquivo (`C:\Meus Documentos\Downloads\Reform. Nazzan2 - arquivo\`)

Em 21/10 o usuário pediu para tirar do site tudo que não é usado. Nada foi apagado: foi movido para cá, com os mesmos caminhos (~214 MB).
- `_copias\` — **cópias de segurança novas (desde 21/10)**, uma pasta por mudança, ex.: `antes-limpeza-2026-10-21`, `antes-orcamento-contato-2026-10-21`, `antes-rodape-compacto-2026-10-21`, `rodape-marca-larga-2026-10-21`, `antes-remover-rotulos-2026-10-22`, `antes-ambientes-ios-2026-10-22`, `antes-remover-ver-materiais-2026-10-22`, `claude-md-antes-reescrita-2026-10-22`. **Novas cópias vão aqui.**
- `_copias\_copias\` — **as cópias antigas (15 a 21/10)**, que estavam no projeto (ex.: `landing-antes-orbita-2026-10-17`, `antes-video-manifesto-2026-10-21`, `rodape-nogueira-recusado-2026-10-21`). Ficaram nesse subnível por causa da mudança de pasta.
- `prototypes\` — todos os protótipos antigos (manifesto-04 a 09, processo-05, projetos-01/02 e outros, acabamentos-01/02/03, ambientes-ficha/foco) e `prototypes\_copias\`.
- `.preview\` — capturas e prévias antigas (do Codex e do Claude).
- `scripts\` — scripts antigos de vídeo (ffmpeg).
- `assets\` — mídia sem uso: vídeos antigos (`ambientes.mp4`, `manifesto.mp4`, `hero-montagem.mp4` original de 28 MB, `montagem-960.mp4`), PNGs originais dos ambientes, fotos antigas da raiz de `assets/img/`, `prompts.json`/`prompts.md` das pastas de imagens.

---

## 6. A landing, seção por seção (estado em 22/10/2026)

Ordem no `index.html`: cabeçalho → **Manifesto** (com a hero dentro) → **Ambientes** → **Projetos** → **Acabamentos** → Depoimento (só em `?revisao=1`) → **Arquitetos** → **Dúvidas** → **Orçamento** → **Rodapé**. **Não há mais rótulos acima das seções** (saíram a pedido em 22/10).

**Cabeçalho e menu (Codex):** "Menu" à esquerda, logo no centro, "Solicite seu projeto" à direita. O menu é um modal de duas metades com prévia de foto por item; as prévias usam as fotos atuais de cada seção.

**Hero (ref.: Springs, `hero.js`):** galeria de fotos girada sobre degradê verde animado; abertura com a logo, a tela dividida e a logo indo ao cabeçalho (toca uma vez por sessão; `?abertura=1` força). A galeria usa miniaturas de 600px de Ambientes e Projetos (`assets/img/hero-galeria/`), e a tela dividida usa as fotos grandes dessas seções. Título centralizado, subtítulo "Sua casa como você sempre quis. Veja em 3D antes de fechar." e botão dourado. **Durante a abertura a rolagem fica travada** (lembre disso nos testes: espere ~7s).

**Manifesto (`manifesto.js`, ref.: Studio Foundry):** a hero vive numa camada do palco preso (`.m9`, trilho de 1000svh) e encolhe para um polígono; fotos em polígonos orbitam; as frases "Móvel bonito todo mundo promete. Nós prometemos a data." e "Quando a marcenaria atrasa, a obra inteira para. Por isso, aqui, a data é compromisso." entram linha a linha; no fim a imagem central abre na imagem ampla.
- **A imagem central é a montagem** (gerada no Seedance 1.5 Pro, Higgsfield): começa no ambiente vazio e, quando abre, a rolagem monta sala e cozinha (`MONTAGEM = [5.2, 7.9]`). Desktop: `<video>` `montagem-1920.mp4`, carregado como blob (o `http.server` não aceita Range). **Celular (≤720px): `<canvas>` com 144 WebP** de `assets/video/montagem-quadros/` (o vídeo não aparecia no iPhone). Sem JS ou movimento reduzido: pôster do ambiente pronto. Sem legenda.
- Depois: **"Do projeto à montagem"** (`#processo`, bloco preso em acordeão `pr__*`, ref.: Bloom) com 5 etapas e fotos de `processo-2026-10-20/` e `processo-2026-10-21/` (Codex), e o **fecho** verde "Só prometemos a *data* que conseguimos cumprir." com pílula clara.

**Ambientes (`ambientes.js`, `ambientes.css`, ref.: Springs Residences):** abertura + 5 cômodos em tela cheia (`ambientes-2026-10-18/`), uma tela por foto. A foto nova entra pela direita com `clip-path` e escala 1,12→1; a **ficha de vidro** (320px, à direita, 48px da base) troca o texto, com contador "01 / 06" e linha de progresso. Troca por gesto (um gesto = uma foto), setas e arrasto; transição com `nazzanTransicaoGaleria` (1s, `cubic-bezier(.25,0,.35,1)`). **As fotos que ainda não entraram ficam com `visibility: hidden`** além do recorte (correção do iPhone de 22/10; durante uma passagem só as duas fotos envolvidas ficam visíveis). A linha "Também fazemos projetos corporativos" saiu.

**Projetos (`pr__*` + `pj__*`):** o mesmo acordeão preso do Processo, com 4 projetos (fotos de `projetos-2026-10-21/`, do Codex) e `[Bairro] · [X] semanas` como pendência. Embaixo, painel verde "Ambientes *reais*, nada de catálogo." **só com a pílula** "Quero um projeto assim" (o link do WhatsApp saiu).

**Acabamentos (`acabamentos.js`, `acabamentos.css`, ref.: Isra Design):** palco verde preso (trilho 880svh): fileiras de fotos, "Acabamento que / se vê de perto." letra a letra, a foto do centro cresce até a tela, e os **4 materiais** (Lâmina de nogueira, Ripado em carvalho, Luz embutida, Lâmina clara) entram de lado (`INICIO = [3.5, 4.5, 5.5, 6.5]`, `PASSO = 1`), com **cartão de vidro à direita** (420px, véu .72, amostra de 104px). Depois, no creme, **"O que definimos com você"** (acordeão preso; fotos: Madeira = `acabamentos-2026-10-19/material-nogueira`, Ferragens = `definicoes-2026-10-20/02-ferragens`, Puxadores = `definicoes-2026-10-21/03-puxadores-showroom-marrom`, Iluminação = `definicoes-2026-10-20/04-iluminacao`) e o **Bastidores** num painel verde, só com a frase "Da madeira ao caminhão de entrega, cada etapa à vista." e o botão "Começar meu projeto no WhatsApp". O "04 Acabamentos", o "Ver materiais ↘" e o "Acompanhe os bastidores" saíram.

**Blocos presos no celular (22/10, ≤900px):** Processo, Projetos e "O que definimos" deixaram o acordeão e usam o layout do protótipo `prototypes/processo-mobile-3.html`: título rolando, depois foto presa no alto (56svh, contador "01 / 05" em pílula de vidro e filete dourado de progresso) e a lista presa embaixo (44svh), que sobe por trás da foto. **Trava:** um gesto = um item (toque, roda e clique no nome); quem chega rolando, mesmo com arremesso, para no 1º item (de cima) ou no último (de baixo); nas pontas o gesto de saída libera. Código no `iniciaPino` do `main.js` (`freia()` corta a inércia com `overflow: hidden` no html por 80ms; links de âncora não são segurados) e no fim do bloco pr__ do `styles.css` (ordem com flex: título, foto, lista, trilho `::after` de 60svh por item). Desktop sem mudança. Cópia antes: `antes-trava-mobile-pr-2026-10-22` (em `_copias`).

**Ambientes e Acabamentos no celular (22/10, ≤720px):** **cartões que se empilham** (opção B, protótipo `prototypes/amb-acab-mobile-b.html`, escolhida pelo usuário depois de ver a A aplicada; a A, tela cheia + vidro, está em `_copias/amb-acab-celular-opcao-a-2026-10-22` e no protótipo `-a`). O motor é o `js/trava.js` (`nazzanTrava`, um gesto = um cartão, segura a rolagem, `freia()`), usado por `ambientes.js` (classe `.is-celular`) e `acabamentos.js` (classe `.a3--celular`); o desktop segue com a passagem lateral do Springs. Cada cartão (16px das bordas, raio 10px, altura 100svh − 32px − 8px por cartão, `--i` do JS) tem a foto inteira e a ficha de vidro na base; o novo sobe da base do palco e o de baixo encolhe 5% a partir do topo, deixando a borda (8px) à vista; a foto chega com 1,12 de escala. Palco de 100lvh, no creme nas duas (Acabamentos estava no verde; o usuário pediu creme como as outras seções). Ficha de Ambientes: rótulo, contador, nome, texto e "Quero minha cozinha ↗" (sem a linha de progresso). Acabamentos no celular **sem a abertura** (fileiras, letras e zoom): título parado em duas cores (grafite e apagado) no creme e os 4 materiais com a amostra de 64px. Enquanto uma galeria está presa, o cabeçalho e o botão do WhatsApp do celular saem da frente. Cópia antes de tudo: `antes-amb-acab-celular-2026-10-22` (em `_copias`).

**Depoimento:** só em `?revisao=1` (sem depoimento real).

**Arquitetos (verde, 23/10):** a opção D de `prototypes/arquitetos-opcoes.html` (A a E; D é o estudo do Codex, `prototypes/arquitetos-01.html`). Título "Já tem projeto / de arquiteto?", apoio e dois botões empilhados da mesma largura: "Sou arquiteto(a)" (círculo dourado) e "Desenvolver meu projeto" (círculo só de filete; o usuário achou "Sem projeto" cru). A faixa de baixo "Sem projeto? / Desenvolvemos com você." saiu a pedido. À direita (no celular, embaixo), o desenho técnico de uma cômoda (do Codex) que **se forma uma vez** ao aparecer: construção e cotas, corpo, lateral e base, as gavetas deslizando, a aresta dourada (`js/arquitetos.js`, Web Animations; pelo CSS a transição do traço não disparava). CSS em `css/arquitetos.css` (regras do Codex sem a fonte local + `aq-d__*`). Os botões mantêm o `data-arquiteto` da mensagem do WhatsApp. As regras antigas `.arquitetos*` do `styles.css` ficaram sem uso. Cópia antes: `antes-arquitetos-d-2026-10-23` (em `_copias`).

**Dúvidas:** "Antes de você perguntar." + FAQ em `<details>` (com pendências de prazo, garantia e regiões).

**Orçamento (`ct__*`, no formato do contato da Hofstaetter, escolhido em 21/10):** fundo verde, filete em cima, padding de 105px, grade 1fr 1fr com 10% de espaço alinhada na base. À esquerda: título "Para quando / você precisa?" (`clamp(38px, 4.5vw, 68px)`, −0.055em), apoio "Conte o ambiente e a data. Retornamos em até 1 dia útil." e a **pílula de vidro** "Conversar no WhatsApp" com círculo dourado de 42px. À direita: **lista de contatos** com filetes e seta ↗ (WhatsApp, Telefone, E-mail, Endereço), que desliza 12px no hover. **Não há formulário** (saiu em 21/10; a decisão foi ir direto ao WhatsApp).

**Rodapé (minimalista, 22/10):** filete em cima; numa linha, a **logo pequena** (40px: o ícone dourado da Nazzan, redesenhado em vetor a partir do `apple-touch-icon`, + "NAZZAN" em 500 creme + "MÓVEIS" em 400 creme a 50%, em curvas SVG da Inter Tight, geradas com fontTools) e o **botão redondo de vidro** de voltar ao início; embaixo, filete com "Mooca · São Paulo" (texto, sem link) e "© 2026 Nazzan" (+ CNPJ pendente). A logo se desenha do traço ao sólido quando aparece (`rodape.js`: contorno a cada 55ms, preenchimento sobe, contorno some; no hover a peça volta a ser desenho). **Nada leva ao Instagram** (só o `sameAs` invisível do schema cita o perfil).

**WhatsApp (`main.js`):** número `5511992478221`. Todos os links `[data-wa]` (pílula do orçamento, linha WhatsApp, botão do Bastidores, botão flutuante, barra do celular) recebem a mesma mensagem: "Olá! Vim pelo site e quero um orçamento[ para <ambiente>].[ <frase do arquiteto>.]". O ambiente vem dos atalhos "Quero minha cozinha ↗" de Ambientes (`data-escolher`) ou do `?ambiente=` (o `.htaccess` manda `/corporativo` para `?ambiente=corporativo#orcamento`).

**Fixos:** botão flutuante do WhatsApp (desktop, depois de 40% da página) e barra do celular; os dois somem quando o orçamento aparece.

---

## 7. Decisões já recusadas (não repetir sem pedido)

- **Rodapé:** marca em nogueira; foto de ambiente em cada letra; marca larga de ponta a ponta "quase idêntica à referência"; linha/preenchimento fracos (ele quis creme cheio, depois logo pequena).
- **Orçamento:** formulário; cartão de vidro sobre foto de ponta a ponta (gostou do vidro, não do layout); cena com 3 cartões numerados sobre a foto ("pior que a atual"); escolhas de prazo/ambiente em pílulas (saíram para ficar igual à Hofstaetter).
- **Acabamentos (protótipos antigos):** acabamentos-01 ("detestei"), versão LPAS do Claude ("detestei"); véus escuros sobre as fotos; cartão creme.
- **Em geral:** rótulos "Imagem conceitual"; rótulos de seção; link do Instagram; efeito de capítulo (seção subindo por cima da outra).

---

## 8. Protótipos

- **Em `prototypes/` (orçamento, 21/10):** `orcamento-opcoes.html` (4 layouts com vidro: A cartão à direita, B barra de reserva, C vidro sobre a borda, D passo a passo), `orcamento-hofstaetter.html` (cena com cartões; recusado) e `orcamento-contato.html` (o aprovado, já na landing). Usam `orcamento-opcoes.js`. Podem ser apagados ou arquivados se o usuário quiser.
- **Antigos:** no arquivo (seção 5). Os aprovados já estão na landing (manifesto-09, processo-05, projetos-02, acabamentos-03, ambientes-ficha); os outros ficaram como histórico.

---

## 9. Referências estudadas (valores em `estudo-referencias.md`)

| Site | Usado em |
|---|---|
| [Springs](https://springs.estate/) | Hero (galeria girada, abertura dividida), passagem lateral de Ambientes/Acabamentos, ritmo de uma tela por foto, curva `cubic-bezier(.25,0,.35,1)` |
| [Hofstaetter](https://hofstaetterarquitetura.com.br/) | Lenis (`duration 1.4`), revelação em cascata de 65ms, vidro (degradê branco 9,8%→3%, borda 22%, blur 20px), pílula com círculo; **seção de contato** (orçamento) e **rodapé** (filete, botão de vidro de 49px, barra de baixo) lidos no código em 21/10 |
| [Find](https://www.findrealestate.com/) | Frase em duas cores, revelação linha a linha |
| [Studio Foundry](https://studio-foundry.sujen.co/) | Manifesto em órbita |
| [Bloom](https://www.bloom3d.studio/) | Acordeão preso com foto em meia tela (Processo, Projetos, "O que definimos") |
| [Isra Design](https://isradesign.com/en/) | Acabamentos (imagem que cresce até a tela) |
| [Stanzza](https://stanzza.design/awards) | Números entre colchetes |
| Mobbin (MCP) | Referências de rodapé (Cosmos, Popcorn, FLORA), 21/10 |

---

## 10. Ferramentas e armadilhas

- **Teste com Playwright + Chrome real (o jeito confiável):** `from playwright.sync_api import sync_playwright`; `p.chromium.launch(channel="chrome", headless=True)`. Viewports usadas: 1366×768, 1920×1080, 1024, e celular 390×844 (`is_mobile=True, has_touch=True`). Espere ~7,5s pela abertura da hero antes de rolar; role com `nazzanLenis.scrollTo(y, {immediate:true, force:true})`. Capture erros (`pageerror`, console `error`), respostas ≥400 e imagens quebradas. Junte as capturas com PIL e mande ao usuário com `SendUserFile`.
- **O painel do navegador do app costuma ficar oculto** (altura 0): `requestAnimationFrame`, IntersectionObserver e capturas congelam. Use o Playwright em vez dele.
- **WebKit do Playwright não instala** (download dá tempo esgotado); bugs do Safari não dá para reproduzir aqui. No iPhone, desconfie de `clip-path` com `will-change`/escala e de vídeo controlado por script.
- **CRLF:** `index.html`, `css/ambientes.css`, `css/acabamentos.css`, `js/ambientes.js`, `js/acabamentos.js` e `js/manifesto.js` usam CRLF (os outros, LF). Edite com Python lendo e gravando com `newline=""`; o `sed -i` do Git Bash troca tudo por LF. Use `py -I` para scripts que não precisam de pacotes do usuário; **com `-I` o fontTools (instalado com `--user`) não carrega**.
- **A pasta temporária (scratchpad) pode sumir entre sessões:** recrie com `mkdir -p` e não dependa de scripts guardados nela.
- **Versões nos links:** ao mudar CSS/JS, troque o `?v=` no `index.html` para furar o cache.
- **Vidro (`backdrop-filter`):** some se um **ancestral** tiver `opacity` < 1, `filter`, `clip-path` ou `mask`. Nunca anime isso num ancestral; esmaeça só o conteúdo de dentro.
- **`data-reveal` no pé da página:** o IntersectionObserver usa margem de −8% embaixo; um elemento nos últimos 8% da última tela nunca aparece (foi o caso da barra do rodapé). Não use `data-reveal` ali.
- **Transições sobrescritas:** se uma regra trocar o `transition` de um `[data-reveal]`, declare de novo o `transition-delay: var(--reveal-delay)` só para opacity/transform.
- **Galerias presas:** nunca role a página a cada quadro para animar troca de foto; anime as camadas com `nazzanTransicaoGaleria` e acerte a rolagem no fim.
- **Links de âncora:** o `main.js` intercepta `a[href^="#"]` e rola com o Lenis.
- **Lenis:** precisa de `html.lenis { scroll-behavior: auto !important }`; as classes `lenis-smooth`/`lenis-stopped` são postas pela biblioteca (não apague o CSS delas numa limpeza).
- **ffmpeg:** use o do `imageio-ffmpeg` (`py -c "import imageio_ffmpeg as i; print(i.get_ffmpeg_exe())"`).
- **Higgsfield (MCP):** plano free, poucos créditos (sobravam 22 em 21/10). Seedance 2.0 std/1080p pede plano pago; o 1.5 Pro em 1080p e 12s custou 36. Upload por `curl` (o Python é barrado pela Cloudflare, erro 1010).
- **Letras em SVG:** a Inter Tight 400 e 500 (TTF do Google Fonts) viram curvas com fontTools (`SVGPathPen`), com `pathLength="1"` para animar o traço. O ícone da marca está em vetor no rodapé (`.rodape__letra--icone`).
- **Limpeza de CSS:** a abordagem segura é remover regras cujas classes não aparecem em nenhum lugar do HTML nem do JS (cuidado com palavras comuns que batem por acaso, como `form` e `ficha`).

---

## 11. Pendências

- **Dados reais para preencher:** CNPJ e razão social, horário, garantia, prazo médio, regiões atendidas, bairro e semanas de cada projeto, depoimentos.
- **Promessas para validar com a Nazzan:** data no contrato, fotos por WhatsApp durante a produção, projeto 3D incluso, itens dos cômodos, "retornamos em até 1 dia útil".
- **Fotos reais:** obras entregues, equipe e bastidores. Hoje todas as imagens são conceituais, e a seção Projetos diz "Projetos entregues. No prazo." e "Ambientes reais": combinar com o usuário quando houver fotos.
- **Do Codex, sem aprovação (ver `AGENTS.md`):** prévias de Iluminação e alternativas de Ferragens/Puxadores (hoje no arquivo, `.preview\`).
- **Antes de publicar:** hospedar Lenis e Inter Tight no próprio servidor; publicar a Política de Privacidade (e decidir o aviso de cookies); subir o `.htaccess`; o servidor real precisa aceitar Range (vídeo da montagem); conferir o `og-nazzan.jpg`.
- **Documentação:** o `README.md` está desatualizado desde 19/10 (não descreve orçamento, rodapé, vídeo da montagem nem a limpeza).
- **Opcional:** apagar o `id="material-nogueira"` sem uso; tirar o Instagram do `sameAs` do schema, se o usuário quiser; arquivar os protótipos de orçamento.
