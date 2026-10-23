# Estudo de referências · lapidação da landing Nazzan

> 15/10/2026 · Sites: [Find](https://www.findrealestate.com/), [Springs](https://springs.estate/), [Hofstaetter](https://hofstaetterarquitetura.com.br/)
> Método: navegação em 1366×800, leitura do DOM, das folhas de estilo e dos scripts de cada site. Os valores abaixo saíram do código, não de estimativa.
> Limite: no Springs, a rolagem animada não rodou no navegador de teste, porque o painel estava oculto e a biblioteca depende de `requestAnimationFrame`. Os capítulos foram vistos posicionando a página manualmente, e as animações foram lidas direto no CSS e no JS.

---

## 1. Find · findrealestate.com

**Stack:** Next.js, CSS Modules, Lenis (rolagem suave) e GSAP dentro do bundle (o estilo inline `translate: none; rotate: none; scale: none` denuncia).

**Tipografia:**
- Instrument Sans, com Lora só nos depoimentos.
- H1 com 105px, peso 700 e espaçamento −0.02em. H2 com 54px, peso 500 e −0.04em.
- Corpo de destaque com 24px, peso 500.

**Cor:** branco e preto `#151717`. A ênfase é o **cinza `#B3B3B3`** na segunda metade da frase ("This isn't just **about real estate.**"). É o mesmo recurso que já usamos no Manifesto.

**Curva de movimento:** uma só, `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out), usada 21 vezes. Durações de 0.3, 0.7 e 0.9s.

**O que fazem bem:**

| Recurso | Como é feito |
|---|---|
| **Hero em camadas fixas** | Um bloco `sticky` de 100vh dentro de uma área de 3200px. Camadas: céu, prédio (com parallax de escala), logo "FIND" recortando a foto do prédio (`mask`), nuvens que derivam e fumaça que sobe e cobre tudo no fim. Tudo controlado pela rolagem. |
| **Título palavra por palavra** | Cada palavra fica num `div` com `overflow` escondido. O texto interno sobe de `translateY(100%)` até 0. |
| **Revelação linha a linha** | Cada linha do parágrafo recebe um véu branco (`rgba(255,255,255,.8)`) que encolhe com `scaleX(1→0)` a partir da direita, conforme a rolagem. |
| **Botão com texto que rola** | `span` com `::after { content: attr(data-text); top: 105% }`. No hover, o texto sobe e o clone entra (0.9s, expo-out). O botão estica levemente: `scaleX(1.02)` com curva elástica `cubic-bezier(.34,3.56,.64,1)` em 0.7s. |
| **Lista gigante** | "Buy / Sell / Rent" em ~120px, com uma linha de descrição à esquerda e foto no hover. |
| **Rodapé com marca gigante** | O wordmark "FIND" ocupa a largura toda no fim da página. |

---

## 2. Springs · springs.estate

**Stack:** jQuery, Locomotive Scroll v4 (`lerp: .1`, rolagem virtual por `transform`) e Keen Slider. Código próprio, sem framework.

**Tipografia:**
- Victor Serif nos títulos e TT Commons Pro no texto.
- Títulos de capítulo em **180px** ("Nature", "Design", "Interiors"), sobrepostos à foto.
- Etiquetas em **10px, caixa alta, espaçamento de 0.8px**.
- Usa `leading-trim`, que corta o espaço vazio acima e abaixo da letra para alinhar o texto com precisão.

**Cor:** verde profundo `rgb(22,45,36)` com bege `rgb(224,209,182)` e degradês animados desfocados (`filter: blur(120px)`, keyframes `grad_1…4` e `moveInCircle`). Paleta e clima muito próximos da Nazzan (verde, quente, natureza).

**Curva de movimento:** `cubic-bezier(0.25, 0.74, 0.22, 0.99)`, usada 68 vezes. Durações longas: 0.8s, 1.4s e 1.6s.

**O que fazem bem:**

| Recurso | Como é feito |
|---|---|
| **Capítulos que se empilham** | Cada seção (`.sticky--under-previous`) tem de 2400 a 8000px de altura, com uma camada `sticky` de 100vh. O capítulo seguinte nasce **embaixo** do anterior, que sobe e o revela, como uma cortina. Há pontos de encaixe (`data-scroll-snap-point`). |
| **Hero em mosaico inclinado** | Grade de fotos girada em cerca de 15°, as colunas derivando devagar, com véu verde em degradê. Título em serifa no canto inferior direito. |
| **Foto com cortina** | `.animation--image-parallax-in`: `clip-path: polygon(0 100%,100% 100%,100% 100%,0 100%)` vai até o quadro cheio em 1.6s, e a imagem interna desfaz o zoom de `scale(1.1)` para 1. |
| **Zoom de entrada** | `.animation--image-zoom`: `scale(1.2)` para 1 em 1.4s. |
| **Entrada deslizante** | `.animation--image-slide-in`: `translateY(350px) scale(.72)` para o lugar, em 1.4s. |
| **Botão com texto clonado** | Dois clones do texto com `clip-path` e `translateY(±300%)`. No hover, um sai por cima e o outro entra por baixo (0.8s). |
| **Preloader** | Logo sobre degradê verde desfocado. A logo viaja até o cabeçalho (`transform` em 1.6s com atraso de 4.8s). |
| **Cabeçalho** | Fixo, com o fundo entrando em 0.8s. Menu em "hambúrguer" com duas linhas. |

---

## 3. Hofstaetter · hofstaetterarquitetura.com.br

**Stack:** WordPress com tema próprio, **Lenis 1.1.20 (via unpkg)**, `motion.js` (4 KB) e `app.js` (3 KB). Sem jQuery e sem GSAP. É o mais próximo do nosso caso: estático, leve e legível.

**Tipografia:**
- Manrope 400 e 500.
- H1 com `clamp(52px, 5.7vw, 90px)` e espaçamento **−0.06em**. H2 com `clamp(38px, 4.5vw, 68px)` e −0.055em.
- Etiquetas em 12px com espaçamento de 1.5px e peso 500.
- Ênfase em cinza `.muted { color: #6e716a }`.

**Cor:** escuro total (`--bg: #090a09`, texto `#f2f2ed`, linha `#ffffff24`).

**Curva de movimento:** `cubic-bezier(.22, 1, .36, 1)`, 0.8s.

**O código, por inteiro:**

```js
// Lenis
new Lenis({ duration: 1.4, smoothWheel: true, wheelMultiplier: 0.8, touchMultiplier: 1,
  prevent: node => node.closest('dialog[open], [data-lenis-prevent]') });
lenis.stop();               // parado até a página carregar
// âncoras: lenis.scrollTo(target, { duration: 1.4 })

// Revelação: uma lista de seletores recebe .reveal-item
item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 65}ms`);
// variações: .reveal-side (vem da direita, 28px) e .reveal-image (scale .985)
// IntersectionObserver { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }

// Loader: no mínimo 650ms, depois some com opacity .75s e é removido
```

```css
.reveal-ready .reveal-item { opacity: 0; transform: translate3d(0,20px,0);
  transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1);
  transition-delay: var(--reveal-delay, 0ms); }
.glass { background: linear-gradient(135deg,#ffffff19,#ffffff08); border: 1px solid #ffffff38;
  box-shadow: inset 0 1px 0 #ffffff18, 0 8px 30px #0000000f; backdrop-filter: blur(20px); }
.pill { display: inline-flex; gap: 30px; border-radius: 50px; padding: 8px 8px 8px 24px; }   /* texto + círculo com seta */
.project { flex: 0 0 64%; height: 560px; scroll-snap-align: start; border-radius: 5px; }
.project:hover > img { transform: scale(1.035); }
.image-ribbon-track { animation: ribbon-scroll 65s linear infinite; }   /* faixa de fotos com botão Pausar */
--content-inset: max(4.5%, calc((100% - 1280px) / 2));
```

**O que fazem bem:**

| Recurso | Como é feito |
|---|---|
| **Hero calmo** | Foto em 100svh (de 800 a 1150px de altura), véu duplo (lateral e vertical), título embaixo à esquerda, botão em pílula e uma barra de metadados no rodapé do hero (10px). |
| **Carrossel de projetos** | Rolagem nativa com `scroll-snap`, cards em 64% da largura, contador "01 / 08", setas anterior e próxima, teclado e legenda em vidro sobre a foto. Clique abre `<dialog>` com a imagem. |
| **Processo** | Uma foto grande com 4 cards de vidro (`.glass`) sobrepostos na base, numerados de 01 a 04. |
| **Faixa de imagens** | Marquee contínuo de 65s, com botão Pausar e Retomar (acessível). |
| **Contato em tabela** | Linhas com etiqueta, valor e seta. |
| **Rodapé** | Wordmark "HOFSTAETTER ARQUITETURA" em largura total. |

---

## 4. O que os três têm em comum (o "feeling")

1. **Uma única curva, longa e suave.** Expo-out ou equivalente, de 0.8 a 1.6s. Nada de entrada rápida ou elástica (o elástico só aparece num toque de 1.02 no botão do Find).
2. **Rolagem suave com peso.** Lenis ou Locomotive, entre 1.2 e 1.4s. É o que dá a sensação de "caro" antes de qualquer animação.
3. **Foto que entra, não que aparece.** Cortina com `clip-path`, ou zoom de 1.1 a 1.2 que se desfaz. Nunca um simples fade.
4. **Texto revelado por linha ou palavra,** com máscara (`overflow: hidden`). O título "nasce" de baixo.
5. **Hierarquia por tamanho e cor, não por peso.** Títulos em peso regular com espaçamento muito negativo (−0.04 a −0.06em). A ênfase vem do cinza, não do negrito.
6. **Etiquetas minúsculas** (10 a 12px) em caixa alta espaçada, contra títulos enormes. O contraste de escala é o luxo.
7. **Botão que reage com delicadeza:** texto que rola e pílula com círculo e seta.
8. **Momentos-capítulo:** Find e Springs têm seções fixas que se transformam com a rolagem. O Hofstaetter prova que dá para chegar perto disso sem nada pesado.
9. **Fechamento com a marca em tamanho total** no rodapé.

---

## 5. O que trazer para a Nazzan

O DNA continua mandando: Inter Tight regular, verde, creme, grafite e dourado em pouca quantidade. Das referências vem o **comportamento**, não a identidade.

| # | Onde | Mudança | Origem | Peso |
|---|---|---|---|---|
| 1 | Página toda | **Lenis 1.1.20** (`duration 1.4`, `wheelMultiplier .8`), parado até carregar; âncoras com `lenis.scrollTo`; desligado com `prefers-reduced-motion` | Hofstaetter | leve |
| 2 | Página toda | **Uma curva só**, `--ease: cubic-bezier(.22,1,.36,1)`; revelação de 0.8s com atraso em cascata de 65ms (índice % 4) | Hofstaetter / Find | leve |
| 3 | Abertura | **Loader** de no mínimo 650ms: monograma dourado se desenhando (`stroke-dashoffset`) sobre grafite, saindo em 0.75s | Hofstaetter + Springs | leve |
| 4 | Hero | Título **linha por linha com máscara** (sobe de 100%); foto com zoom de 1.1 a 1 em 1.6s; barra de metadados mais fina | Find + Springs + Hofstaetter | leve |
| 5 | Manifesto | Frase revelada **linha a linha pela rolagem**: cada linha passa de cinza a grafite conforme desce (versão do véu do Find, sem GSAP) | Find | médio |
| 6 | Fotos (Ambientes, Projetos, Acabamentos) | **Cortina com `clip-path`** de baixo para cima em 1.6s, com a imagem interna saindo de `scale(1.1)` | Springs | leve |
| 7 | Botões | **Texto que rola** no hover (`data-text` e `::after`); links secundários viram **pílula com círculo e seta** | Find + Hofstaetter | leve |
| 8 | Ambientes | Trilho vira **carrossel com `scroll-snap`**, cards maiores (cerca de 40% no desktop), contador "01 / 05" e setas, como no Hofstaetter | Hofstaetter | médio |
| 9 | Projetos para Acabamentos | **Capítulo que sobe sobre o anterior**: Acabamentos (grafite) desliza por cima de Projetos com `position: sticky`, no estilo cortina do Springs, só com CSS | Springs | médio |
| 10 | Processo | Mantém a imagem fixa que troca por etapa e ganha **cortina entre as imagens**; a legenda da etapa fica em vidro sobre a foto | Springs + Hofstaetter | leve |
| 11 | Entre Projetos e Acabamentos | **Faixa de fotos em movimento** (65s) com botão Pausar, usando as fotos e os recortes que já temos | Hofstaetter | leve |
| 12 | Rodapé | **"NAZZAN" em largura total** no fim, em creme a 10% sobre o verde | Find + Hofstaetter | leve |
| 13 | Etiquetas | Rótulos de seção em 11px, caixa alta, espaçamento 0.14em (já é a regra do DNA), com mais contraste de escala contra os títulos | Springs | leve |

**O que fica de fora, e por quê:**
- **Rolagem virtual do Springs (Locomotive):** sequestra a rolagem, pesa no celular e quebra a barra nativa. O Lenis dá o mesmo peso sem esses custos.
- **Hero de nuvens do Find e mosaico inclinado do Springs:** exigem fotografia própria em camadas, com recortes, céu e fumaça. Com as fotos de hoje, ficariam improvisados. Voltam para a mesa quando houver ensaio fotográfico real.
- **Serifa (Victor Serif, Lora):** o DNA v1.3 fixa a Inter Tight como família única.
- **Vidro em tudo:** fica só onde há foto por trás (Processo), para não virar efeito de template.
- **GSAP:** tudo da lista acima sai com CSS, `IntersectionObserver` e um laço de `requestAnimationFrame` curto. Isso mantém a página estática, sem build e leve como hoje.

---

# Segunda rodada (17/10/2026) · Archidomo, Elicyon e Azimute

Estudo para o protótipo 07 do Manifesto. Tudo foi lido no código, com o DOM, o CSS e os bundles de JS. Os valores vêm de lá. Junto vale o resumo do curso de landing premium guardado na memória: três níveis de texto, respiro, módulos que se repetem e movimento contido.

## 6. Archidomo · archidomo.fr

**Pilha:** Nuxt + Sanity, GSAP com ScrollTrigger e SplitText, e Lenis (`lerp .1`, `syncTouchLerp .075`). O `html` usa `font-size: calc(1000 / 1920 * 1vw)`, então 1rem equivale a 10px numa tela de 1920 e tudo escala com a largura.

**Tipografia:** Canela Light para títulos (128, 96, 64 e 40px a 1920), Maison Neue 400 para o texto (36, 24 e 20px) e Maison Neue Mono maiúscula de 13 a 16px para as anotações.

**Seção "Notre agence"** (a equivalente ao nosso manifesto):
- **Respiro enorme:** `padding: 21.8rem 0 26rem` e 18.5rem entre o cabeçalho e o conteúdo.
- **Composição editorial com deslocamentos:** o título fica a `margin-left: 17.8rem`. O texto fica a 47.5rem e tem **recuo só na primeira linha** (`text-indent: 31.5rem`, feito com um espaçador inline).
- **Anotações em cruz:** um "+" fino de 16px com texto mono maiúsculo de 2 a 4 linhas, solto na margem.
- **Círculo decorativo:** stroke de 1px em `#d8d8d8`, com 98rem, vazando pela direita, atrás do texto.
- **Imagens:** uma principal centralizada (máx. 126rem). Abaixo, duas menores e de larguras diferentes (61.2rem e 77.1rem) **sobem por cima da principal** (`margin-top: -10.8rem`). Uma delas tem borda de 1px `#ddd`.

**Movimento** (bundles):
- **Texto:** o SplitText quebra em linhas e letras. As linhas entram com `clip-path: polygon(-20% -20%, 120% -20%, 120% -20%, -20% -20%)` e `y: 120%`, e abrem para baixo. As letras do título sobem de `y: 100%`.
- **Troca de imagem:** wipe com `clipPath` em polygon, `1.2s power3.inOut`. A imagem que sai sobe `y -10%`, e a que entra vai de `scale 1.2` a `1` em `2s power3.out`.
- **Paralaxe em scrub:** cada imagem tem velocidade e alcance próprios (`innerY` de ±12 a ±25).
- **Placeholders:** LQIP desfocado em base64, com fade de opacidade de `.25s`.
- **Curvas** (variáveis do CSS):
  - `--power2-out: cubic-bezier(.215,.61,.355,1)`
  - `--power3-out: cubic-bezier(.165,.84,.44,1)`
  - `--power3-in-out: cubic-bezier(.76,0,.24,1)`

## 7. Elicyon · elicyon.com

**Pilha:** Next.js + Tailwind, GSAP (com Flip nas transições de página) e Lenis. O fundo é `#F4F2EE`. Usa duas fontes: a display própria "Elicyon" (400) e a Antique Legacy para texto e rótulos (14px, maiúsculas, `letter-spacing .15em`).

**Frase-manifesto** ("Our STUDIO SCULPTS SPACES that reflect your vision…"):
- A seção fica presa num `pin-spacer` de cerca de 3,2 telas.
- A frase tem 48px e mistura palavras em maiúsculas e minúsculas.
- **Cada linha tem um recuo próprio**, aplicado com `translate3d` nas linhas (53, 20, 0, 30, 65, 132 e 211px). Isso forma uma margem esquerda "em escada".
- **Palavras que acendem com a rolagem:** `.statement-word.fade-word`. As que ainda não chegaram ficam em cinza claro.
- **Cinco fotos em retrato** (cerca de 160×384) ficam numa grade de 6/12 colunas atrás do texto, com 200% de altura. Cada uma tem um deslocamento próprio (`translate y` de 100 a 400px) e todas sobem em velocidades diferentes.

**Outros padrões:**
- **Mídia:** entra com `opacity + scale`, em `1.4s power4.out`.
- **Menu:** `clip-path: inset(0 0 100% 0)` até `inset(0)` em `.7s power4.inOut`. Os itens sobem `yPercent 100` com stagger de `.08`.
- **Carrossel de cards empilhados:** o card atual fica em `scale .9`, com `.75s cubic-bezier(.4,0,.2,1)`.
- **Cabeçalho:** some ao descer e volta ao subir.
- **Curvas:**
  - `cubic-bezier(.77,0,.175,1)` (in-out-quart)
  - "expo-out" `cubic-bezier(.16,1.08,.38,.98)`

## 8. Azimute Residencial · azimuteresidencial.com.br

**Pilha:** JS puro, como a nossa landing, com GSAP + ScrollTrigger servidos do próprio domínio. O CSS é dividido em arquivos por capítulo. Usa Instrument Serif com DM Sans, e o papel é `#F3F0E9`, com tinta `#262825`, apagado `#68665e`, cobre `#87654c` e linha `#534d432d`.

**Abertura de capítulo** (`.chapter-label`): "01 / O PROJETO" à esquerda e o local à direita, sobre um **filete de 1px** (`border-top`), em `.75rem` com `letter-spacing .13em`.

**Título do Projeto:**
- Grade `1.8fr 1fr`, com `gap 9%` e alinhada pela base.
- O título tem `clamp(5rem, 10vw, 13rem)` e `line-height .9`.
- A primeira linha fica em maiúsculas, menor (`.77em`). A segunda fica **recuada 6vw**, em itálico e na cor cobre.
- À direita, a descrição de no máximo 320 a 430px: o primeiro parágrafo é maior e mais escuro, o resto vai a 14px em cinza, e no fim há uma **linha de assinatura** com filete.

**Jornada de fotos fixada** (`.photo-journey.journey-scroll`):
- **Trilho:** `100svh + n × 54svh` (o nosso Processo usa 55svh).
- **Palco:** em 21:9, com `max-height: calc(100svh - 365px)` e um filete interno de 1px.
- **Legenda abaixo:** título, contador "01 / 08", barras de progresso segmentadas (uma por imagem, 2px, `scaleX` da esquerda), a dica "Role para descobrir a próxima imagem" e botões ← →.
- **Troca:** `clipPath inset(0 100% 0 0)` até `inset(0)`, com `opacity .16` a `1`, em `.85s power2.inOut`. **A direção muda** quando se volta: aí a entrada é pela esquerda.
- **No celular** (`journey-linear`), as fotos viram uma lista com o título embaixo.

**Outros padrões:**
- **Revelação:** `opacity 0, y 32` em `1.25s power2.out` (`start: top 94%`, uma vez só).
- **Paralaxe das fotos:** `scale 1.055` com `yPercent -2` a `2`, em `scrub .7`.
- **Essência:** quadro fixo com filete, uma barra de progresso de 2px no pé (`scaleX(var(--essence-progress))`) e a assinatura com um traço em degradê.
- **Botão "Animações":** pausa todo o movimento, como recurso de acessibilidade.

## 9. O que trazer para o protótipo 07

**O que os três têm em comum:**
- respiro muito grande;
- composição editorial com deslocamentos e recuos;
- rótulos pequenos em maiúsculas sobre filetes;
- imagens grandes, entrando com cortina e escala;
- uma interação fixada, bem resolvida, por seção.

**Como fica na Nazzan:**
- **Fonte:** só Inter Tight 400/500. A serifa e o itálico das referências viram **contraste de cor e tamanho**.
- **Hierarquia (curso):** a frase é o N1, as declarações e as etapas são o N2, o apoio é o N3, e há um nível de rótulos.
- **Capítulo** no padrão do Azimute (filete com rótulo dos dois lados) e **frase em escada** no padrão do Elicyon, com as pílulas aprovadas no protótipo 03.
- **Descrição à direita, alinhada pela base** (Azimute), com recuo na primeira linha (Archidomo) e linha de assinatura.
- **Imagens:** uma ampla e duas menores sobrepostas, com paralaxe em velocidades diferentes, anotação em "+" e um círculo fino ao fundo (Archidomo).
- **"Do projeto à montagem" como jornada fixada** (Azimute): palco 21:9, contador, barras segmentadas, dica e setas, com wipe lateral que muda de direção.
- **Fecho** com filete, a frase N2 e a pílula de orçamento.
- **Movimento:** três gestos só, sem GSAP:
  - linha em máscara (`translateY(110%)` → 0, `power3.out`);
  - cortina de imagem (`power3.inOut` + escala 1.2 → 1);
  - wipe lateral da jornada (`.85s`).

## 10. Elicyon a fundo · linhas do tempo do bundle (`pages/index-*.js`)

Depois que o usuário recusou o protótipo 07, ele pediu para usar só Elicyon e Azimute, com o Elicyon dando o clima. O que o código mostra:

**Frase-manifesto:**
- **Fixação:** `ScrollTrigger` com `pin` e `scrub`, de `start: "top top"` até `end: clientHeight × 2.8` (× 2.2 no tablet).
- **Palavras que somem:** as da primeira parte ("Our STUDIO SCULPTS SPACES that reflect your vision") têm a classe `.fade-word`. Elas **somem** (`opacity 0`, `duration .5`, `stagger { amount: 1, from: "random" }`). A frase começa inteira e se edita sozinha.
- **Linhas que ficam:** depois, `"-=0.2"`, cada linha que sobra vai para um novo `x` (0, 0, −50, −450 com y 55, 161, −152, 429 com y −55) em `.8s power2.out`. O bloco inteiro sobe `y −20%`.
- **Fotos:** começam em `y` 100, 200, 100, 400 e 300px e vão, em scrub linear, a `y` −260%, −400%, −300%, −320% e −440% da própria altura. Ficam numa grade de 12 colunas com 4 linhas e 200% de altura.

**Projetos:**
- **Painéis:** ficam presos por 3 telas, empilhados (z 3, 2, 1).
- **Palavra gigante:** o título da categoria tem `11vw`, uma caixa por letra e `justify-between`. A 2ª letra de cada trio começa no pé (`calc(100vh − 11vw − 32px)`), a 3ª no meio, e todas vão a `y: 0%` (linear).
- **Sequência por painel:** depois das letras vem a legenda (`opacity 1`, `power2.out`, `">-40%"`), e o painel sai com `clipPath: inset(0 0 100% 0)`, revelando o seguinte.

**Detalhes:**
- **Botão de texto:** maiúsculas com filete `::after`. No hover, o filete vai a `scaleX(0)` com `origin-right` em 300ms.
- **Títulos de seção:** `reveal-line`, com overflow escondido e o texto subindo de `translate(0, 100%)`.

**No protótipo 08** (`prototypes/manifesto-08.html`), as duas linhas do tempo foram reproduzidas em JS puro. Na Nazzan, "Móvel bonito todo mundo promete." some e "Nós prometemos a data." vai para o centro. As cinco etapas são painéis com as palavras MEDIÇÃO, PROJETO, CONTRATO, PRODUÇÃO e MONTAGEM, com as barras do Azimute.

## 11. Studio Foundry · studio-foundry.sujen.co (vídeo do usuário, 17/10/2026)

**Pilha:** Astro, GSAP com SplitText, Lenis e um `webgl.js` para a imagem central. O fundo é `#F3F0EC`, e as frases usam Geist 500, a cerca de 2,6vw, com `line-height 1.2`.

**Intro** (classe `Wf` no bundle):
- **Palco:** um `sticky` de 100vh dentro de um trilho de `(copyIn final + 1 + EXIT_VH + 1) × 100vh`, que dá 600vh com duas frases.
- **Constantes:** `SLOTS 7`, `RADIUS_RATIO .68`, `EXIT_VH 1`, `EXIT_RADIUS 3`, `COPY_STEP_VH 2`, `TURNS .12`, `SPREAD_VH 1.2`.
- **Configuração por posição:** cada uma tem `{angle, radiusScale, speedScale, sizeVh}`:
  - 0: `.35, .9, .92, 28vh`. É a imagem central, em WebGL.
  - 1: `1.25, 1.1, 1.1, 15`
  - 2: `2.1, .92, .9, 18`
  - 3: `3.05, 1.12, 1.15, 14`
  - 4: `3.95, .88, .95, 20`
  - 5: `4.75, 1.05, 1.08, 16`
  - 6: `5.65, 1.15, .85, 17`
- **Órbita:** com `e` = telas rolando desde o topo, cada foto calcula:
  - `n = smoothstep(e, slot × .025, + 1.2)` (escala e opacidade);
  - ângulo = `angle + e × .12 × speedScale × 2π`;
  - raio = `.68 × min(vw, vh) × radiusScale × n × mix(1, 3, saída)`.

  A posição 0 faz `mix(1, 0, saída)` e volta ao centro. A saída é `smoothstep(e, s − 1, s)`.
- **Frases:** o SplitText quebra em linhas com máscara. Cada frase `i` entra em `1 + 2i − .5` (`yPercent 120 → 0`, `autoAlpha`, `.45`, stagger `.08`, `power3.out`) e sai em `+ .4` (`yPercent −120`, `.3`, stagger `.05`, `power2.in`). A linha do tempo fica pausada, com `tl.time(e)`.
- **Formas:** 7 SVGs (`/svgs/shape-0X.svg`) aplicados como `mask: url() center / contain`. São polígonos de linhas retas, como fachadas recortadas.

**No protótipo 09** (`prototypes/manifesto-09.html`), tudo foi feito em JS puro:
- **Formas:** viram `clip-path: polygon()`, com os pontos dos SVGs encaixados num quadrado.
- **Imagem central:** em vez de WebGL, muda de forma interpolando 24 pontos (01 → 04 → 06 → 01). Na saída, vira um retângulo em tela cheia, no papel da "imagem ampla".
- **Frases:** a primeira é "Móvel bonito … a data.", com as pílulas. A segunda é "Quando a marcenaria atrasa… a data é compromisso.".

## 12. Isra Design e Hofstaetter, de novo · para Acabamentos (18/10/2026)

**Isra Design** ([isradesign.com/en](https://isradesign.com/en/)): WordPress com Bricks, GSAP 3.13 (ScrollTrigger, ScrollSmoother, SplitText) montado pelo Motion.page. Fundo preto, texto `#f5f5f5`, cinza `#9e9e9e`, fonte Neue Haas 500.
- **Revelações** (`scrub: false`, `start: "top 95%"`, `once: true`): filetes `.div-top-award` com largura de 0 a 100%; títulos com `yPercent` de 102 a 0; linhas do SplitText com `yPercent` de 100 a 0, `stagger .05` e `duration .8`.
- **Valores ("Core values"):** tela inteira com uma foto à esquerda que se abre na largura (`.imagine-lat1`), uma frase grande por cima e, à direita, uma lista pequena (rótulo de 13,7px, nome de 13,7px em claro e texto de 12,3px em cinza).
- **Botão "Discover the project":** o círculo (`.bg-abs-fill`, 8,1vw) cresce até 100% da pílula em .3s, com uma segunda camada .1s depois. A seta sai para a direita (escala .5, transparência 0) e a nova entra pela esquerda. O botão encolhe para .95.
- **Cabeçalho:** a barra vira uma pílula de vidro (`rgba(0,0,0,.4)`, borda `rgba(255,255,255,.22)`) ao rolar.
- **Projetos:** a foto do centro cresce até 100vw, e um `backdrop-filter` vai de 10px a 0 durante a troca.

**Hofstaetter** (complemento ao item 3):
- **Vidro** (`.glass`): degradê de 135° de branco 9,8% a 3%, borda branca de 22%, `inset 0 1px 0` branco de 9,4%, sombra `0 8px 30px` de 6% e desfoque de 20px. Aparece no menu, nas pílulas, nos botões redondos de seta (49px) e nas fichas sobre as fotos dos projetos (cantos de 12px).
- **Cena do processo** (`.process-scene`): uma foto de 1211×611 com cantos de 10px e um degradê para preto de 33% embaixo. Por cima, quatro cartões em grade de 4 colunas com 12px de espaço, a 25px das bordas. Cada cartão tem cantos de 14px, `padding 24px 20px` e fundo `rgba(17,19,13,.33)` com vidro. O número fica num círculo de 30px com borda de 25%; o título tem 18px, peso 500 e −0,4px; o texto, 14px com entrelinha de 1,7. No celular, a foto fica atrás, com 220px de respiro em cima, e os cartões empilham com fundo de 77%.
- **Faixa de foto** (`.feature`): 700px de altura, sombra em degradê da esquerda e conteúdo a 4,5% da borda.

**Aproveitado no `acabamentos-01`:**
- **Da Isra:** os filetes que se desenham, as fotos das amostras abrindo de lado e o botão com o círculo que se enche.
- **Da Hofstaetter:** os valores do vidro nas etiquetas e a cena do processo para "O que definimos com você", com a foto `07-banho-travertino`.

## 13. LPAS · lpas.com (19/10/2026, para Acabamentos)

**Stack:** site em Vite (`main-*.js`, 100 KB), com GSAP, Lenis (`lenisSmooth`), Swup para a troca de páginas e um preloader. A fonte é a Aeonik 400. O fundo é branco, o texto `#111` e o cinza `#747474`.

**Grade:** colunas nomeadas, de 12 (a partir de 768px) a 20 (a partir de 1280px), com margens `minmax(3–4rem, 1fr)` e áreas `left`/`right`.

**Abertura (`.blockIntroGeneral`):**
- **Frase:** de 56px (`font-XXL`), na largura de 2 até −8 nas 20 colunas, com 6rem embaixo.
- **Embaixo:** um "slogan" de 14px à esquerda ("Listen. Plan. Analyze. Shape.") e o texto de 16px nas colunas 7 a −5.
- **Botão de seta:** por último.

**Mosaico (`.blockProjectsHighlight`):**
- **Linhas:** uma foto grande (`imageCard[data-large]`, 621×443, foto de 1,6:1) e duas pequenas (305×246), alternando o lado (`layoutOne` e `layoutFour`), com 1rem entre elas.
- **Pequenas:** a partir de 992px ficam `position: sticky` (com `top` de cerca de 407px numa tela de 768), então param enquanto a grande passa e terminam alinhadas pela base.
- **Legenda:** título de 16px e local de 12px em cinza.

**Movimento:**
- **Fotos** (`[data-imageanimate]`): `clip-path: inset(40% 0 0)`, transparência de .2 e a foto de dentro em `scale 1.5`. Ao entrar, ficam com `inset(0)`, transparência 1 e `scale 1`, em 1,2s com `cubic-bezier(.14,.83,.4,1)`.
- **Textos** (`[data-fadeinanimation="fadeInUp"]`): sobem 30px em .6s ease-out. O IntersectionObserver dá 100ms de atraso por item que entra no mesmo lote.
- **Paralaxe** (`[data-animate-parallax--image]`): até −10% (multiplicador 150, limiar .25), só a partir de 1024px.
- **Botão de seta** (`.buttonArrow`): círculo cinza de 29px que se alarga até 3,7rem no hover. A seta 1 vai para `translate(75%)` em .3s e a seta 2 entra de `translate(-50%)` com .3s de atraso.
- **Hero:** as fotos trocam com `clip-path` de baixo para cima.

**Onde está:** o protótipo do Claude feito com ela foi recusado e está em `prototypes/_copias/acabamentos-02-claude-lpas/`. O `prototypes/acabamentos-02.html` é o estudo do Codex.

**Por que ela serve para Acabamentos:** a Studio Foundry já está no Manifesto, o acordeão da Bloom já aparece duas vezes (Processo e Projetos) e a Isra já está no `acabamentos-01`. A LPAS traz um ritmo novo, de mostruário editorial, que combina com materiais vistos de perto.

## 14. Isra Design · a seção da imagem que cresce (19/10/2026, para Acabamentos)

**Estrutura** (`.trigger-img-switch`, palco de 1366×768 com fundo `#070707`):
- **Fileiras** (`.top-switch`, `.mid-switch` e `.bottom-switch`): fotos de 546×307 (40% da largura, 16:9), com 16px entre elas. A do meio tem 3 fotos, e a do centro é `.center-proj`.
- **Véu** (`.tranzitie-backdrop`): `rgba(0,0,0,.45)`, com `backdrop-filter`. Por cima, as frases `.step-into1` ("Step into a world of") e `.step-into2` ("high-end interior design."), em 41px e peso 500, uma sobre a outra.
- **Painéis** (`.proiect1` a `.proiect3`): projetos em tela cheia, com véu de 25%. Cada um tem uma coluna larga à esquerda (título em cima e dados embaixo), um quadrado claro de 273px no centro e uma coluna estreita à direita (texto e link).

**Linha do tempo** (GSAP, `scrub .6`, `pin` até `bottom -900%`):
- **Antes de prender** (entre `top 110%` e `bottom`): as fileiras de cima e de baixo vão a `xPercent −30` e `+30`, e o conjunto sobe de −50vh a 0.
- **0:** as letras da frase 1 sobem de `yPercent 105` a 0, com `stagger .03`.
- **1:** a frase 1 sai para −105, a frase 2 entra, e o desfoque do véu vai de 10px a 0 (1 → 3).
- **2:** a frase 2 sai.
- **2,5:** a fileira do meio vai a 100vh de altura e a foto do centro a 100vw.
- **3,5:** as fileiras somem (`autoAlpha 1 → 0` em .5).
- **4:** o painel 1 aparece.
- **5 e 7:** os painéis 2 e 3 sobem (`y 100vh → 0`) enquanto o fundo de cada um desce (`−100vh → 0`). Assim a janela sobe e a foto fica parada.

**Aproveitado no `acabamentos-03`:** a linha do tempo inteira, com 4 painéis. A frase é "Acabamento que / se vê de perto.", e a foto que cresce é a mesma do 1º painel, para a passagem não ter corte. No quadrado do centro de cada painel fica a amostra do material. Depois do palco vêm "O que definimos com você", como a lista de prêmios da Isra (filete que se desenha e miniatura que se abre no hover), e o Bastidores com o botão do círculo que se enche.

## 15. Springs · Residences (vídeo do usuário, 19/10/2026)

**Estrutura:** `.l-residences` é um bloco preso (`sticky--full-height`) de 6 telas. Ele tem um slide de fundo e três slides (`.l-residences__slide`) empilhados em `position: absolute`. O cartão verde (`.l-residences__caption`) fica embaixo à direita.

**Passagem lateral** (plugin de paralaxe do Springs, guiado pela rolagem, sem tempo fixo). Cada slide tem três pontos:
- **Entrada:** `clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)` com `scale(1.2)`. A foto está fechada na borda direita.
- **Uma tela depois:** `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` com `scale(1.1)`. A borda esquerda varreu da direita para a esquerda.
- **Mais uma tela:** a mesma foto inteira, já em `scale(1.0)`.

O slide seguinte começa uma tela depois.

**Linha de progresso:** `.l-residences__caption__line` tem 228×1,5px, com fundo `rgba(224,209,182,.2)`. Dentro dela, `.js-residences-progress-line` recebe `width: (100 × progresso)%`, com o progresso contínuo de 0 a 1 ao longo do bloco (padrão `residencesSlide`, de `parallax--200-0` a `parallax--400-0`). O conteúdo do cartão troca a cada terço (`contentAnimation("open", n)`).

**Aplicado na landing:**
- **Ambientes:** as fotos deixaram de se fundir e passaram a entrar pela direita, com escala de 1,2 a 1,0. A ficha ganhou a linha de progresso pelos 6 ambientes, que no celular também aparece.
- **Acabamentos:** os painéis deixaram de subir e passaram a entrar pela direita, com a foto de 1,2 a 1,0. O filete do cartão virou a linha de progresso pelos 4 materiais.

**Encaixe:** no vídeo, se a rolagem para no meio da passagem, a foto termina de entrar sozinha em cerca de 1,2s, desacelerando no fim. Na landing, isso virou um encaixe de 1,1s com o Lenis depois de 150ms parado (até a metade volta, depois da metade avança).

**Código do encaixe (lido em 19/10/2026):**
- **Rolagem:** o Springs usa o Locomotive Scroll com `lerp .1` e `multiplier 1`.
- **Pontos:** ficam em `data-scroll-snap-point`. Na Residences são 100%, 200%, 300% e 400% da tela, um por slide.
- **Função `snapToSection`:** roda 250ms depois do último movimento da roda (com debounce). Escolhe o ponto mais perto de onde a rolagem ia parar e, descendo, só avança se já passou da metade da tela (`s/2`). Depois chama `scrollTo(ponto)`, que por padrão leva 1000ms com `cubic-bezier(.25, 0, .35, 1)`.
- **Poços de gravidade** (`data-scroll-gravity-well`): freiam a rolagem perto de certos pontos. A Residences não usa.
