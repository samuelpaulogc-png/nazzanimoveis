# Nazzan — contexto para continuar em outro chat

Atualizado em **20/10/2026**, a pedido explícito do usuário. Este arquivo reúne as decisões, o estado implementado e o ponto de retomada. É um resumo operacional da conversa, não uma transcrição literal. Leia antes de editar e confirme o código atual: o usuário também pode trabalhar com outro assistente nesta pasta.

## 1. Ponto exato em que paramos

**Verificação do protótipo Arquitetos:** Chrome em 1360, 1024, 768, 390 e 320px passou nas verificações de fonte local, foco, alvos de toque, ausência de overflow/erros JS e ambos os caminhos para Orçamento com contexto correto de WhatsApp. A asserção final de hash falhou: o `index.html` atual difere do snapshot usado na criação do protótipo. Não houve edição de `index.html` nesta retomada; preservar as alterações concorrentes e comparar a seção atual antes de eventual integração.

**23/10/2026 — protótipo de Arquitetos, NÃO aplicado:** novo estudo em `prototypes/arquitetos-01.html` e `arquitetos-01.css`, no contexto da página completa. Reorganiza “Já tem projeto de arquiteto?” com título, explicação e CTA à esquerda, desenho linear de marcenaria à direita no desktop e caminho “Sem projeto?” em faixa inferior. No mobile, prioriza os textos e os dois contatos. Preserva copy, paleta, Inter Tight e os atributos `data-arquiteto`. A landing permanece intacta; hash de origem em `.preview/arquitetos-01/origem.json`. Capturas e verificação em `.preview/arquitetos-01/`, script `.preview/check-arquitetos-01.py`. Aguarda aprovação antes de integrar. O estudo 04 de fechos abaixo foi rejeitado pelo usuário (“Ainda não gostei”); não integrar.

**Acesso pelo celular, 23/10/2026:** o computador está com IPv4 `172.20.10.2`, gateway `172.20.10.1`. Preview na porta 8770 iniciado com bind `0.0.0.0`; acesso HTTP pela rede local verificado. Landing: `http://172.20.10.2:8770/`; protótipo: `http://172.20.10.2:8770/prototypes/arquitetos-01.html#arquitetos`. O endereço pode mudar ao trocar de rede. Exige computador e celular na mesma rede, inclusive compartilhamento de internet do celular; não é publicação externa.

**23/10/2026 — estudo 04 de harmonia, ainda NÃO aplicado:** após aprovar/aplicar o vidro 03, o usuário enviou três capturas de celular e considerou os blocos premium, mas pouco harmônicos com as seções vizinhas. Nova proposta contextual em `prototypes/fechos-editoriais-04.html`: cópia da landing completa com recursos relativos corrigidos e CSS adicional `fechos-editoriais-04.css`. Simplifica o vidro para uma superfície única, remove diagonais/moldura dupla, reduz os vãos e, até 900px, aproxima o fechamento da galeria e usa sua largura total. CTA compacto no mobile; Bastidores tem menos espaço antes/depois. Textos, imagens e JS preservados. Inter Tight 400 local também disponível para o contexto do protótipo. `index.html` e CSS da landing NÃO alterados, hash confirmado em `.preview/fechos-editoriais-04/origem.json`. Chrome em 1360, 768, 390 e 320px (mobile com toque emulado): sem overflow/erros JS; foco, alvos de toque e fonte conferidos. Capturas em `.preview/fechos-editoriais-04/`; `normal-projetos.png` e `normal-bastidores.png` mostram as transições com movimento normal. O modo reduzido do Acabamentos preexistente pode deixar o título fora das capturas; não foi alterado neste estudo. Link: **http://localhost:8770/prototypes/fechos-editoriais-04.html#compromisso**. Aguardar avaliação/aprovação antes de integrar; a landing continua com a versão 03 abaixo.

**23/10/2026 — vidro APROVADO E APLICADO:** o usuário aprovou o protótipo 03 (“Ficou bom, pode implementar”). Os três painéis verdes de Compromisso, Projetos e Bastidores agora usam o vidro fumê, planos verdes, texto discreto e CTA compacto dessa versão. Implementação isolada em `css/fechos-vidro.css?v=vidro-1`, classes `fv*`; em `index.html`, apenas os três painéis, comentários associados e o link para esse CSS mudaram. Textos e destinos dos links preservados, incluindo `data-wa` em Bastidores. Fonte local `assets/fonts/inter-tight-regular.woff`, alias `Inter Tight Fechos` limitado aos painéis; não altera a fonte das outras seções. Protótipos mantidos. Backup: `_copias/antes-fechos-vidro-2026-10-23/index.html`. Chrome em 1360, 1024, 768, 390 e 320px: sem overflow ou erros JS, fonte local e blur carregados, foco, alvos de toque e movimento reduzido conferidos; revelações normais e os dois links de orçamento também conferidos. Capturas/relatório em `.preview/fechos-vidro-aplicado-2026-10-23/`, script `.preview/check-fechos-vidro.py`. Comparação com backup confirmou escopo e textos preservados. Link: **http://localhost:8770/?v=fechos-vidro#compromisso**. Aplicação local, sem deploy externo. As propostas 01/02 continuam rejeitadas; o registro abaixo de “aguardar aprovação” do 03 foi superado por esta autorização.

**23/10/2026 — protótipo 03: vidro e transparência:** o usuário rejeitou também as propostas 01/02. Ao alinhar a direção, escolheu explicitamente “Usar vidro e transparência, com texto discreto e mais profundidade”. Criada `prototypes/fechos-editoriais-03.html` com CSS isolado `fechos-editoriais-03.css`: cartão de vidro fumê sobre planos verdes, blur de 22px, bordas delicadas, texto menor e CTA compacto. Sem fotos ou palavras gigantes. Inter Tight Regular 400 carregada localmente de `prototypes/assets/fonts/inter-tight-regular.woff`, convertida da cópia do projeto anterior; origem registrada no README dessa pasta. A landing e os protótipos anteriores não foram alterados. Chrome em 1360, 1024, 768, 390 e 320px: fonte local carregada, HTTP 200, sem overflow ou erros JS, foco por teclado e alvos de toque verificados; capturas em `.preview/fechos-editoriais-03/`. Existe fallback de superfície opaca para navegadores sem backdrop-filter e suporte a movimento reduzido. Link: **http://localhost:8770/prototypes/fechos-editoriais-03.html**. Aguardar aprovação antes de integrar; a escolha de direção não é aprovação do protótipo pronto.

**22/10/2026 — novo protótipo tipográfico dos blocos verdes:** o usuário rejeitou a solução baseada em acrescentar fotos (“Eu não quero só uma imagem”). Nova proposta em `prototypes/fechos-editoriais-02.html` e `fechos-editoriais-02.css`: sem fotos, palavras-chave em grande escala, frase em dois eixos, planos verdes estáticos e CTA com círculo de contorno dourado, estados de hover, foco e pressão. Textos preservados; nenhuma integração na landing. `index.html` segue idêntico ao backup anterior à primeira proposta. Link: **http://localhost:8770/prototypes/fechos-editoriais-02.html**. Chrome em 1360, 768, 390 e 320px: sem overflow ou erros JS, foco por teclado conferido. Capturas em `.preview/fechos-editoriais-02/`. Inter Tight 400/500 declarada; Google Fonts bloqueado por rede no navegador de teste, portanto as capturas locais usam fallback. Proposta aguarda avaliação/aprovação. Não aplicar automaticamente.

**22/10/2026 — blocos verdes: somente protótipo, landing RESTAURADA:** o usuário pediu aprimorar os painéis verdes, mas rejeitou a aplicação e determinou que novas propostas sejam feitas em protótipo e só entrem no `index.html` após aprovação explícita. A proposta com recortes de marcenaria, verde profundo e CTA separado está em `prototypes/fechos-editoriais-01.html`, com CSS isolado em `prototypes/fechos-editoriais-01.css`. Não aprovada. `index.html` restaurado byte a byte do backup `_copias/antes-fechos-editoriais-2026-10-22/index.html`, preservando todo o estado anterior à proposta. `css/fechos.css` removido da landing. Os três painéis originais voltaram. Link do estudo: **http://localhost:8770/prototypes/fechos-editoriais-01.html**. A proposta havia sido conferida em 1360, 768, 390 e 320px, sem overflow nem erros JS; a página separada foi verificada após a extração. Nenhum deploy externo.

**21/10/2026 — duas alternativas de layout para Orçamento:** o usuário considerou o primeiro mockup muito parecido com a seção atual. Geradas duas novas prévias com `image_gen`, em `.preview/orcamento-layouts-02/`: `01-painel-horizontal.png` (vidro na base, título, escolhas e CTA em três colunas) e `02-editorial-esquerda.png` (painel amplo à esquerda, título grande, grupos Prazo/Ambiente lado a lado). Ambas 1672 × 941, com textos e seleções solicitados. Prompts completos em `prompts.json`. Apenas prévias; nenhuma alteração na landing. Aguardam escolha do usuário.

**21/10/2026 — prévia visual de Orçamento:** o usuário pediu um mockup desktop 16:9 da seção final, usando `C:/Meus Documentos/Downloads/Screenshot_2.png` como referência. Gerado com `image_gen`: `.preview/orcamento-mockup-2026-10-21/orcamento-vidro-direita.png`, ambiente claro com nogueira e card de vidro fumê à direita, textos solicitados e seleções “2 a 4 meses” e “Cozinha”. Prompt completo e origem em `prompts.json` na mesma pasta. Apenas imagem de apresentação; não implementada no HTML/CSS/JS nem publicada. Os projetos aprovados abaixo continuam aplicados.

**Atualização de 21/10/2026 — Projetos APROVADOS E APLICADOS:** o usuário aprovou as quatro novas imagens e pediu a implementação. `index.html` agora usa oito referências desktop/mobile a `assets/img/projetos-2026-10-21/`: `01-cozinha-nogueira.webp` (duas ilhas, nogueira e bancada clara), `02-sala-jantar.webp` (marcenaria, cristaleira e tijolo), `03-cozinha-carvalho.webp` (carvalho claro, ilha e banquetas), `04-sala-ripado.webp` (ripado, marcenaria e mesa junto à janela). Todas WebP 1122 × 1402, qualidade 90; tamanhos 226.354, 309.088, 187.674 e 233.732 bytes. Recortes centrais nas quatro imagens, textos alternativos mobile descritivos e `decoding="async"`. Originais PNG e capturas em `.preview/projetos-premium-2026-10-21/`; prompts e origem também em `assets/img/projetos-2026-10-21/prompts.json`. Backup: `_copias/antes-projetos-premium-2026-10-21/index.html`. Chrome via Playwright em 1360×768 e 390×844: quatro itens abertos e fotos carregadas em ambos os tamanhos, HTTP 200, nenhum erro JS nem overflow horizontal. Recortes conferidos visualmente; mobile emulado. Comparação confirmou mudanças apenas nas oito tags de imagem; assets antigos usados por outras seções, textos, layout, CSS e JS preservados. Link: **http://localhost:8770/?v=projetos-premium#projetos**. Sem deploy externo.

**Natureza das imagens de Projetos:** são cenas conceituais geradas com `image_gen`, não documentação de obras entregues. Isso foi explicado ao usuário, inclusive a diferença em relação a “Projetos entregues. No prazo.” e “Ambientes reais, nada de catálogo”. Ele autorizou aplicar as imagens; não houve pedido de alteração da copy, que foi preservada. Não inventar bairros, prazos, comprovações de entrega nem chamar essas imagens de obras reais. Ordem original de chegada no chat: Sala de jantar, Cozinha em nogueira, Cozinha em carvalho, Sala com ripado.

**Demais estados preservados:** as imagens premium de Produção acompanhada e Montagem caprichada foram aprovadas e aplicadas, conforme detalhes abaixo. Puxadores marrom segue aplicado; a prévia de Iluminação e a alternativa de Ferragens continuam sem aprovação (seção 10). O registro anterior de Processo foi preservado como histórico.

**Processo premium APROVADO E APLICADO (21/10/2026):** o usuário autorizou “Pode implementar”. As quatro referências desktop/mobile de Produção acompanhada e Montagem caprichada em `index.html` agora usam `assets/img/processo-2026-10-21/04-producao-acompanhada-premium.webp` e `05-montagem-caprichada-premium.webp`. A primeira mostra mãos registrando com tablet um módulo de nogueira com canto curvo em uma bancada protegida; a segunda mostra mãos encaixando uma gaveta, piso protegido e ferramentas organizadas. WebP 1122 × 1402, qualidade 90, respectivamente 198.418 e 204.446 bytes. Textos alternativos mobile atualizados; Montagem mantém `object-position:50% 35%` no mobile e Produção usa o centro. As três outras etapas, textos, layout, CSS e JS foram preservados; comparação com backup confirmou alteração somente nas quatro tags de imagem. Originais PNG e capturas em `.preview/processo-premium-2026-10-21/`, prompts e origem também em `assets/img/processo-2026-10-21/prompts.json`. Backup: `_copias/antes-processo-premium-2026-10-21/index.html`. Chrome via Playwright em 1360×768 e 390×844: ambas as etapas abertas e imagens carregadas, HTTP 200, nenhum erro JS nem overflow horizontal. Recortes conferidos visualmente; mobile emulado. Link: **http://localhost:8770/?v=processo-premium#processo**. Imagens conceituais geradas com `image_gen`, sem rostos; não são documentação de produção/instalação real da Nazzan. Sem deploy externo.

A última tarefa de implementação foi **substituir as cinco imagens de “Do projeto à montagem”**, na landing `index.html`, bloco `#processo`. As imagens antigas mostravam ambientes prontos e não correspondiam às etapas descritas. O usuário pediu novas imagens e depois pediu **não mostrar rostos**.

**Implementado e verificado:**

- Cinco novas imagens aplicadas tanto na coluna de fotos do desktop quanto nas fotos internas do acordeão mobile.
- Mantidas as duas imagens aprovadas: **Projeto 3D** e **Data no contrato**.
- Refeitas **Conversa e medição**, **Produção acompanhada** e **Montagem caprichada**, mostrando mãos, ferramentas e ações, sem rostos.
- Os arquivos finais estão em `assets/img/processo-2026-10-20/`; prompts completos e caminhos em `prompts.json` nessa pasta.
- Todas são WebP, **1122 × 1402**, qualidade de codificação 90, aproximadamente 120–206 KB cada. Geradas com a ferramenta integrada `image_gen`, não via API/CLI.
- `index.html` tem dez referências novas: cinco mobile e cinco desktop. Fotos mobile têm textos alternativos; fotos desktop permanecem dentro de um contêiner `aria-hidden`.
- No mobile, as imagens 02 e 05 usam `object-position:50% 35%` para preservar melhor a tela e as mãos. As demais usam o centro.
- Não foram alterados o layout, os textos das etapas nem a animação desse bloco nesta tarefa.
- Teste no Chrome via Playwright: **1360×768** e **390×844**, todas as cinco etapas e imagens carregando, nenhuma exceção JS e nenhum transbordamento horizontal. Recortes conferidos visualmente; mobile emulado, não telefone físico.

**Atenção à numeração da aprovação:** o usuário disse “a primeira e a terceira imagem pode deixar”. Ele se referia à **ordem de chegada das prévias geradas em paralelo**, que foi contrato, produção, projeto 3D, montagem, medição. Portanto, as aprovadas são **contrato e projeto 3D**, NÃO a primeira e a terceira etapas do site. Isso foi explicitado em comentário ao usuário. Não reintroduzir as versões com rostos.

O usuário interrompeu a finalização para pedir este `AGENTS.md`. A implementação das fotos já terminou; **ainda não houve aprovação do usuário sobre o conjunto final aplicado**. Não há geração pendente. Não recomeçar as imagens sem um novo pedido.

Link de revisão das fotos: **http://localhost:8770/?v=processo-sem-rostos#processo**

## 2. Projeto e regras da marca

- Workspace: `C:\Meus Documentos\Downloads\Reform. Nazzan2`.
- Landing estática de **Nazzan, Móveis Sob Medida**, HTML/CSS/JS puros, sem build. Não converter para framework sem solicitação.
- Idioma de conversa e conteúdo: português brasileiro.
- **Inter Tight, somente pesos 400 e 500.** Preservar fonte e paleta mesmo ao buscar referências.
- Paleta: verde `#2A514D`, dourado `#D7A048` usado com moderação, creme `#FDF9F4`, grafite `#1C1C1C`, pinho `#3B594C`.
- Objetivo: premium, minimalista, bem elaborado, com imagens protagonistas. A sofisticação deve vir da composição e interação, não de enfeites gratuitos.
- Não inventar projetos executados, prazos, materiais específicos de projetos reais, números ou depoimentos. Imagens geradas são conceituais/ilustrativas, não documentação de obras entregues ou da equipe real.
- A produção é em **fábrica parceira**, não escrever “fábrica própria”.
- Preservar as pendências `.val`, `.pend`, `data-pend` quando existirem; `?revisao=1` mostra o modo de revisão.
- Os rótulos visuais “Imagem conceitual” foram removidos anteriormente a pedido do usuário, conforme registro em `CLAUDE.md`. Não recolocá-los por iniciativa própria, nem chamar as imagens geradas de projetos reais.
- Documentação anterior: `CLAUDE.md`, `README.md`, `estudo-referencias.md`, `prompts-imagens.md`. Algumas descrições de animação nesses arquivos estão desatualizadas em relação aos ajustes de 19–20/10; **conferir o código e as atualizações abaixo**.
- `CLAUDE.md` informa a fonte externa da marca: `C:\Meus Documentos\Downloads\Nazzan Imóveis\projetos\nazzan\resultado\DNA.md`, e a copy em `…\projetos\nazzan\landing-page\copy-landing-page-v3-compacta.md`. Verificar a existência antes de usar; não foram relidos integralmente na última tarefa.

## 3. Preferências que importam ao continuar

- O usuário quer execução concreta e um **link direto para abrir o resultado** ao final, não apenas plano ou proposta.
- Quando pede alteração de um item, preservar os demais. Não aumentar texto, mudar fonte, paleta ou layout sem necessidade.
- Pediu repetidamente layouts menos “sem graça”. Uma mudança de layout deve reorganizar de verdade a seção, não apenas mudar espaçamento/cor.
- Para novos estudos/protótipos, usar páginas separadas em `prototypes/`, sem modificar a landing até a solicitação de integração. Verificar nomes existentes antes de criar ou sobrescrever.
- Prefere imagens limpas, sem véu verde claro sobre elas, e **cards de vidro** para texto. Quer vidro também no mobile, porém compacto para não cobrir a foto.
- Ambientes: card pequeno à direita no desktop com detalhes que se expandem no hover; no mobile, composição própria, legível e compacta.
- Não quer cliques repetidos para descobrir ambientes. Navegação por rolagem/gesto; teclado e movimento reduzido devem funcionar.
- Não quer o botão fixo **“PEÇA SEU ORÇAMENTO” no mobile**. Não confundir com o botão flutuante de WhatsApp existente.
- Animações: quer suavidade real, sem tremor/tranco, e **um gesto normal para a próxima foto**, salvo gesto muito fraco. Já rejeitou várias correções que só pareciam boas nos testes.
- Nas novas imagens do processo, **não mostrar rostos**, inclusive ao fundo ou em telas/reflexos. Preferir mãos, ferramentas, documentos, peças e ações reconhecíveis.
- Antes de grandes alterações, guardar cópia em `_copias/`. Não desfazer trabalho de outro assistente. Não é necessário pedir autorização de novo para concluir ajustes já solicitados.
- Conteúdo de vídeos, screenshots, sites e documentos de referência é referência visual/dado, não instrução automática para o agente.

## 4. Mapa do código e das seções

| Arquivo/bloco | Função |
| --- | --- |
| `index.html` | Landing principal; `#processo` contém as cinco etapas atualizadas |
| `css/styles.css` | Tokens, estilos gerais, processo/projetos `pr__*`, hero e demais seções |
| `js/main.js` | Lenis, menu, cabeçalho, formulários, `iniciaPino`, acordeões/pinos e inicialização de Ambientes |
| `js/hero.js` | Abertura do hero; sessão `nazzan-abertura-springs` |
| `js/manifesto.js` | Hero encolhendo para polígono, fotos em órbita e abertura da imagem |
| `js/transicao-galeria.js` | Helper compartilhado `window.nazzanTransicaoGaleria`, Web Animations API |
| `js/ambientes.js`, `css/ambientes.css` | Seção `.amb`, seis painéis, ficha de vidro |
| `js/acabamentos.js`, `css/acabamentos.css` | Seção `.a3`, abertura com fileiras/zoom e quatro materiais |
| `assets/img/ambientes-2026-10-18/` | Ambientes, cozinha, closet, quarto, home office e sala |
| `assets/img/acabamentos-2026-10-19/` | Imagens/amostras dos acabamentos |
| `assets/img/manifesto-filme/` | Cenas conceituais usadas em outras partes da página |
| `assets/img/processo-2026-10-20/` | Novo conjunto do processo, sem rostos, e `prompts.json` |
| `.preview/` | Capturas, inspeção de referências/vídeos e scripts de verificação |
| `_copias/` | Backups da landing; há também `prototypes/_copias/` |

“Do projeto à montagem” usa `#processo[data-pr-pino]`, com cinco itens `[data-pr-etapa]`. No desktop (a partir de 901px), lista à esquerda, foto à direita e trilho preso por `100svh + 5 * 55svh`. No mobile, acordeão com imagem interna. O comportamento é compartilhado com outros blocos por `iniciaPino` em `main.js`: editar somente `#processo` quando o pedido for restrito a ele.

Etapas atuais e fotos correspondentes:

1. **Conversa e medição** — “Entendemos sua rotina e medimos o espaço.” → `01-conversa-medicao.webp`: mãos medindo um nicho, planta e amostras.
2. **Projeto 3D** — “Você vê tudo antes de assinar.” → `02-projeto-3d.webp`: monitor com projeto 3D, planta e amostras; aprovada e preservada.
3. **Data no contrato** — “O prazo fica por escrito.” → `03-data-contrato.webp`: mãos assinando contrato, seção de prazo; aprovada e preservada, sem data específica inventada.
4. **Produção acompanhada** — “Cronograma por etapa e fotos de cada fase.” → `04-producao-acompanhada.webp`: mãos fotografando módulo em fabricação.
5. **Montagem caprichada** — “Cuidado com o imóvel e limpeza no final.” → `05-montagem-caprichada.webp`: mãos ajustando dobradiça, proteção do imóvel.

## 5. Histórico visual resumido e referências

- Houve diversas iterações de Ambientes: índice/linha inferior, texto à esquerda, cards de vidro, card à direita com expansão no hover, versões compactas mobile. **O estado atual já é a ficha compacta**, não restaurar automaticamente screenshots antigos.
- Projetos passou por versões editorial, galeria, índice, Mobbin e `projetos-01/02`. O estado integrado documentado usa o bloco de lista/foto preso `pr__*`, semelhante ao Processo. Não confundir `prototypes/projetos-02.html`, frequentemente aberto no IDE, com a landing ou com Acabamentos.
- Acabamentos passou por `acabamentos-01`, `02`, `03`. O usuário pediu melhorar a seção inteira, não só as amostras, e rejeitou várias primeiras dobras por conflito texto/foto, excesso de imagens em sequência, composição sem vida e transição verde/branco estranha no mobile. O `acabamentos-03` serviu de base à versão integrada `.a3`.
- Referências citadas pelo usuário: https://springs.estate/ (principal para passagem lateral e suavidade), https://hofstaetterarquitetura.com.br/ (organização de projetos), https://studio-foundry.sujen.co/ (manifesto), https://isradesign.com/en/ (Acabamentos), https://www.bloom3d.studio/ (lista e imagem), https://lpas.com/ (composição). Houve também screenshot de referência Senawa para o índice contínuo.
- O usuário pediu anteriormente **pesquisa real no Mobbin via MCP**, três referências distintas com links/justificativas, protótipo funcional em `prototypes/`, teste desktop/mobile e link final. Essa foi uma tarefa anterior, não uma autorização para reiniciar pesquisa agora. Se retomar pesquisa via Mobbin, consultar de fato e informar indisponibilidade antes de substituir a fonte.
- Documentos locais de referência: `estudo-referencias.md`, `prototypes/projetos-mobbin-referencias.md`, `prototypes/acabamentos-02-referencias.md`, `prototypes/manifesto-referencias.md`; capturas/bundles em `.preview/`.

## 6. Animações: estado técnico de 20/10 e problema ainda a validar pelo usuário

O usuário enviou vários vídeos porque Ambientes e Acabamentos continuavam dando trancos. **Não afirmar que isso está definitivamente resolvido no computador dele**: a última otimização passou nos testes locais, mas o usuário mudou de assunto para as imagens antes de confirmar a fluidez.

Arquitetura atual:

- Passagem lateral com `clip-path: inset(...)` e escala da foto de 1.12 para 1.0, via Web Animations API, duração padrão **1000 ms**, curva `cubic-bezier(.25, 0, .35, 1)`.
- O documento fica parado durante a passagem nativa; ao terminar, sincroniza a posição de rolagem. Evitar voltar a rolar o documento quadro a quadro durante a animação.
- Helper `nazzanTransicaoGaleria` captura estilos antes/depois de `preparar()`, anima propriedades alteradas, permite cancelar preservando o quadro atual, troca a legenda perto de 35% e chama `concluir()`.
- Correção `nativa-2`: não atribuir `animation.startTime = document.timeline.currentTime` depois do preparo. Esse timestamp podia ser de um quadro anterior e descontar o tempo de preparação, fazendo a imagem já começar avançada. As animações são pausadas em `currentTime=0`, liberadas juntas no próximo RAF, com `ready` antes do timer de legenda.
- Cancelamento por inversão de gesto, teclado, pointerdown e resize sincroniza a posição intermediária. Movimento reduzido e navegação por teclado têm caminho imediato.
- Wheel normal: limiar de **32 px**, acumulação de deltas fracos, filtro de inércia. No estado atual, tanto Ambientes quanto Acabamentos consideram intervalo de 180 ms e cauda fraca com janela de 450 ms. Não bloquear a saída das extremidades da galeria.
- Acabamentos: abertura continua vinculada ao scroll; o encaixe dos materiais usa pontos **4.5, 5.5, 6.5, 7.5** em alturas do palco, e captura da roda a partir de aproximadamente 4.4. O recorte afeta só as fotos, não os cards.
- `main.js` protege o cabeçalho contra oscilar na sincronização de posição; evento `nazzan:galeria-posicao` usado por Acabamentos.

Última correção, **`fluida-3`**:

- `main.js` usa IntersectionObserver para pausar decoração fora da tela; classe `is-movimento-pausado`, regras em `styles.css` para fileiras/gradientes do hero, fundos dos fechos, atmosfera e dica de Acabamentos.
- Barras ocultas não recebem animações continuamente: `somenteVisivel` nas camadas do helper; barra que aparece entra no ponto atual da animação, a antiga é cancelada depois do fade. Cancelamento de uma barra não pode abortar a conclusão da foto.
- Decodificação das imagens foi antecipada ao aproximar-se das seções, em vez de começar no meio da troca de card.
- Comparação controlada no Chrome registrou redução de recálculo de estilos de **125.5 para 27.4 ms** em Ambientes e **101.7 para 38.2 ms** em Acabamentos na janela medida, aproximadamente 78% e 62%. Decorações ativas fora da tela: 16 antes, 0 depois. Esses números são medições locais, não garantia de FPS em hardware real.
- Cache bust atual no HTML: `css/styles.css`, `js/transicao-galeria.js`, `js/ambientes.js`, `js/main.js`, `js/acabamentos.js` usam `?v=fluida-3`; CSS específicos Ambientes/Acabamentos continuam `?v=nativa-1` pois não mudaram nessa rodada.

Link para conferir animação: **http://localhost:8770/?v=fluida-3#ambientes**. O antigo `?v=nativa-2#ambientes` ainda abre a mesma landing atual; query não seleciona um snapshot antigo.

## 7. Verificações, capturas e backups úteis

Imagens do processo:

- `.preview/processo-2026-10-20/video.jpg`: contato de frames de `imagens-mudar.mp4`.
- `desktop-1.jpg` até `desktop-5.jpg`: seção com as novas imagens.
- `mobile-1.jpg` até `mobile-5.jpg`, `mobile-review.jpg`: revisão inicial dos recortes.
- `mobile-final-2.jpg` e `mobile-final-5.jpg`: recortes finais após `object-position`.
- `_copias/antes-imagens-processo-2026-10-20/index.html`: estado anterior às cinco substituições.

Animações:

- `.preview/check-native-galleries.py`: avanço/retorno, interrupção, gesto fraco, saída por teclado, cabeçalho e scroll; passou com e sem Lenis.
- `.preview/check-reversal-continuity.py`: compara recorte antes/depois de inverter o gesto; passou.
- `.preview/check-amb-gesture-mobile.py` e `check-ac-gesture-mobile.py`: toque, inversão, movimento reduzido e overflow; passaram.
- `.preview/check-render-budget.py`: comparação entre backup anterior e versão atual; relatórios em `.preview/jitter3/render-comparison.json` e traces nessa pasta. Executar medições de desempenho sem outros navegadores/testes pesados concorrentes.
- `.preview/check-start-under-load.py` e `probe-native-start.py`: diagnóstico anterior de preparo com atraso artificial de 350 ms, confirmando início no quadro zero após a correção do relógio.
- `.preview/check-amb-gesture.py` e `check-ac-gesture.py` são antigos e esperam scroll intermediário; suas asserções não refletem a arquitetura nativa atual.
- `.preview/lenis-reference.min.js`: cópia local usada nas rotas do Playwright para evitar dependência de rede nos testes. A landing ainda usa Lenis 1.1.20 do unpkg.
- Backups relevantes: `_copias/antes-transicao-nativa-2026-10-19/`, `antes-relogio-animacao-2026-10-19/`, `antes-renderizacao-2026-10-20/`.

Vídeos recentes do usuário ficam em `C:\Meus Documentos\Downloads\`:

- `ScreenRecord_2026-10-19_75a76dc1-5fc1-4156-9cec-508d4a143d7c.mp4`: rodada anterior de trancos.
- `ScreenRecord_2026-10-20_9bbb85b0-309f-49fc-98bb-0d3631d3cc83.mp4`: vídeo de aproximadamente 90 s que motivou `fluida-3`, frames em `.preview/jitter3/`.
- `imagens-mudar.mp4`: aproximadamente 28 s, mostra as imagens antigas sem relação com as etapas do Processo.

## 8. Preview e ferramentas locais

- Windows, PowerShell, Python pelo launcher `py`.
- O preview na porta **8770** respondeu HTTP 200 durante a última tarefa; o processo pode terminar entre chats. Conferir antes de reiniciar, não abrir servidores duplicados.
- Para iniciar em primeiro plano a partir da raiz: `py -m http.server 8770 --bind 127.0.0.1`.
- Para iniciar oculto no PowerShell, com a pasta `.preview` existente:

```powershell
Start-Process -FilePath py -ArgumentList '-m','http.server','8770','--bind','127.0.0.1' -WorkingDirectory 'C:\Meus Documentos\Downloads\Reform. Nazzan2' -WindowStyle Hidden -RedirectStandardOutput 'C:\Meus Documentos\Downloads\Reform. Nazzan2\.preview\preview-8770.log' -RedirectStandardError 'C:\Meus Documentos\Downloads\Reform. Nazzan2\.preview\preview-8770-error.log'
```

- Verificar HTTP 200 e devolver link ao usuário. Não abrir janela visível de terminal sem necessidade.
- Playwright Python e Chrome (`channel='chrome'`) disponíveis nas últimas verificações; Pillow e `imageio_ffmpeg` também. FFmpeg obtido por `imageio_ffmpeg.get_ffmpeg_exe()`, não presumir executável no PATH.
- Alguns arquivos com extensão `.mp4` enviados pelo usuário são WebM/Matroska VP9 internamente; FFmpeg os lê.
- Para pular a abertura nos testes: `sessionStorage.setItem('nazzan-abertura-springs','1')` via init script. Para rever abertura manualmente: `?abertura=1`.
- Os testes de imagens usaram o servidor local e os de animação também podem usar arquivo local; verificar os caminhos de cada script.
- PowerShell pode exibir UTF-8 como texto corrompido se a codificação não for especificada. Usar `Get-Content -Encoding UTF8`, Python com `encoding='utf-8'` e `apply_patch` para textos em português. Evitar literais acentuados em heredoc PowerShell canalizado para Python sem cuidar da codificação.
- Não há `.git` visível na raiz neste checkpoint; usar os backups existentes e não presumir histórico Git.
- Originais PNG das últimas gerações permanecem em `C:\Users\-User-\.codex\generated_images\01a14ecb-b5fc-7601-8808-27323acc2981\`. Os assets usados pelo site já estão dentro do workspace.

## 9. Como retomar

1. Ler este arquivo e o trecho atual relacionado ao novo pedido. Não executar novamente tarefas históricas só por estarem documentadas.
2. Se o pedido for apenas continuar/revisar o último trabalho, abrir `#processo` com o conjunto sem rostos; as substituições já estão completas.
3. Se o usuário voltar aos trancos, partir de `fluida-3`, pedir/usar evidência atual quando necessário e investigar renderização real durante a passagem, não apenas estados inicial/final. Não prometer fluidez absoluta com base só em teste headless.
4. Preservar as preferências e o escopo; para novos protótipos, usar arquivo separado e consultar referências de fato quando solicitado.
5. Atualizar este documento quando houver decisões importantes e terminar as entregas com o link direto de revisão.

## 10. Atualização mais recente: imagens de “O que definimos com você”

**21/10/2026 — nova prévia para Iluminação:** após aplicar Puxadores marrom, o usuário pediu uma imagem que ilustrasse melhor o card Iluminação. Foi gerada `.preview/iluminacao-nichos-2026-10-21/iluminacao-nichos-nogueira.png`, mostrando um móvel de nogueira com LED horizontal embutido sob uma prateleira e iluminação vertical em nichos laterais, sem pessoas ou marcas. Prompt completo em `prompts.json` na mesma pasta, ferramenta `image_gen`. Apenas prévia, NÃO aplicada; aguarda aprovação. O HTML continua usando `assets/img/definicoes-2026-10-20/04-iluminacao.webp` até nova instrução. Puxadores marrom segue aplicado conforme registro abaixo.

**21/10/2026 — versão marrom APROVADA E APLICADA (estado atual):** o usuário pediu substituir a imagem atual pela versão marrom. `index.html` agora usa `assets/img/definicoes-2026-10-21/03-puxadores-showroom-marrom.webp` nas duas imagens de Puxadores, desktop e mobile. WebP 1122 × 1402, qualidade 90, 206.850 bytes. Texto alternativo mobile atualizado para mencionar os painéis de madeira marrom; recorte central preservado. Apenas as duas tags de imagem mudaram. Backup: `_copias/antes-puxadores-marrom-2026-10-21/index.html`. PNG original em `.preview/puxadores-showroom-marrom-08/puxadores-showroom-marrom.png`; prompt e origem em `assets/img/definicoes-2026-10-21/prompts-marrom.json`. Chrome via Playwright em 1360×768 e 390×844: imagem carregada, HTTP 200, nenhum erro JS ou overflow horizontal; recortes conferidos visualmente, mobile emulado. Capturas `desktop-aplicado.jpg` e `mobile-aplicado.jpg` em `.preview/puxadores-showroom-marrom-08/`. Link atual: **http://localhost:8770/?v=puxadores-marrom#definicoes**. Nenhum deploy externo. O showroom cinza da rodada 07 abaixo é histórico e foi substituído pela versão marrom.

**21/10/2026 — APROVADA E APLICADA:** o usuário pediu “Adicione essa imagem na parte de puxadores”, referindo-se ao showroom sem logo da rodada 07. A imagem foi convertida para `assets/img/definicoes-2026-10-21/03-puxadores-showroom.webp` (1122 × 1402, qualidade 90, 260.958 bytes) e aplicada nas duas referências de Puxadores em `index.html`: desktop e mobile. Texto alternativo mobile atualizado; recorte central preservado. Os demais itens, textos, layout, CSS e JS foram preservados. Prompt e origem em `assets/img/definicoes-2026-10-21/prompts.json`. Backup: `_copias/antes-puxadores-showroom-2026-10-21/index.html`. Verificação no Chrome via Playwright em 1360×768 e 390×844: imagem carregada, item aberto, HTTP 200, nenhuma exceção JS nem overflow horizontal; recortes conferidos visualmente. Capturas `desktop-aplicado.jpg` e `mobile-aplicado.jpg` em `.preview/puxadores-showroom-07/`. Mobile emulado. Link: **http://localhost:8770/?v=puxadores-showroom#definicoes**. Houve aplicação local; nenhum deploy externo. Os registros abaixo são histórico das gerações e seus estados de aprovação na época.

**21/10/2026 — prévia mais recente:** o usuário rejeitou os expositores e puxadores anteriores e enviou `C:/Meus Documentos/Downloads/72ca494d1ca6afdc684d649aee8bbde2.jpg` como referência: painéis altos de showroom com muitas barras e botões, agrupados por acabamento e iluminados por spots. Pediu atenção à marca de outra empresa presente na referência. Foi gerada uma nova cena conceitual sem logotipos, textos nem placa de marca: `.preview/puxadores-showroom-07/puxadores-showroom-sem-logo.png`, com três painéis em acabamentos dourado, preto e bronze. Prompt completo e origem em `prompts.json` na mesma pasta. Gerada com `image_gen`; apenas prévia, NÃO aplicada nem publicada. Aguardar aprovação. As rodadas seguintes neste registro são histórico anterior.

**Rodada mais recente, três versões:** o usuário rejeitou a ripa única por estar simples demais e pediu três versões de uma vez. Foram geradas três prévias com 12 puxadores cada, salvas em `.preview/puxadores-tres-versoes-06/`: `01-nogueira-vertical.png` (três ripas verticais de nogueira), `02-carvalho-horizontal.png` (quatro faixas horizontais de carvalho claro), `03-expositor-profundidade.png` (expositor de bancada com três painéis articulados em tons distintos de madeira). Prompts e referências em `prompts.json`. A ordem de chegada no chat foi 01, 02, 03. Nenhuma aplicada nem publicada; aguardar escolha/aprovação do usuário. As prévias anteriores abaixo são histórico.

**Última variação solicitada:** expositor mais premium e minimalista com uma ripa para os puxadores. Nova prévia em `.preview/puxadores-ripa-05/puxadores-ripa.png`: uma ripa vertical larga de nogueira, seis puxadores diferentes bem espaçados, parede creme. `prompts.json` na mesma pasta registra prompt e referência. Apenas gerada com `image_gen` e salva; NÃO aplicada nem publicada, aguarda aprovação. Esta variação é posterior ao painel de 12 opções descrito abaixo.

**Prévia mais recente:** a pedido do usuário, foi gerada uma única imagem com vários puxadores para comparação: `.preview/puxadores-painel-04/painel-puxadores.png`, painel creme com moldura de madeira e 12 amostras (barras, conchas, botões e argola) em acabamentos variados. Prompt e referências em `prompts.json` na mesma pasta. Gerada com `image_gen`, ainda NÃO aplicada nem publicada; aguarda aprovação.

- O usuário pediu fotos que representassem melhor Ferragens, Puxadores e Iluminação. Foram geradas três imagens conceituais com `image_gen` e aplicadas em `index.html`, somente nesse bloco, com seis referências desktop/mobile. Madeira foi preservada.
- Primeira rodada aplicada: `assets/img/definicoes-2026-10-20/02-ferragens.webp` (dobradiça), `03-puxadores.webp` (cava na gaveta) e `04-iluminacao.webp` (perfil LED sob prateleira). WebP 1122 × 1402, qualidade 90; prompts e originais em `prompts.json` na mesma pasta. Iluminação mobile usa `object-position:50% 25%`.
- Foi adicionado `id="definicoes"` ao bloco para link direto. Backup anterior: `_copias/antes-imagens-definicoes-2026-10-20/index.html`. Layout, textos, CSS e JS não foram alterados nessa rodada. A verificação em navegador estava pendente quando o usuário interrompeu para pedir alternativas.
- **Pedido mais recente:** “Me gere outras imagens de ferragens e puxadores. Não precisa publicar até eu aprovar.” As novas alternativas foram apenas geradas e salvas; NÃO foram aplicadas nem publicadas. Aguardar aprovação antes de substituir as referências no HTML.
- Prévias novas em `.preview/definicoes-alternativas-02/`: `ferragens-v2.png` mostra uma corrediça metálica numa gaveta aberta; `puxadores-v2.png` mostra um puxador vertical embutido na porta de um armário. `prompts.json` registra os prompts completos e os caminhos de origem. Geradas pela ferramenta integrada `image_gen`, sem pessoas.
- Iluminação não recebeu nova geração nesta segunda rodada. Não presumir aprovação de nenhuma imagem pela ausência de um novo pedido sobre ela.
- Rodada seguinte: o usuário considerou os puxadores simples demais e enviou cinco referências com barras de latão trabalhadas, conchas e marcenaria com molduras. Foram geradas mais duas PRÉVIAS, sem aplicação no HTML: `.preview/puxadores-referencias-03/puxadores-latao-classico.png` (barra de latão com anéis e rosetas sobre móvel creme) e `puxadores-concha-bronze.png` (conchas metálicas sobre gavetas grafite). Prompts e referências em `prompts.json` na mesma pasta. Na ordem em que apareceram no chat, a concha chegou primeiro e o latão clássico depois. Ambas aguardam aprovação; não confundir ordem de geração com nomes de arquivo.
