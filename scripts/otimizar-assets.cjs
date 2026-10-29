/* Gera copias compactas; o site continua estatico, sem framework ou servidor de aplicacao.
   Preparacao: npm install --prefix .preview/performance-2026-10-29/tools esbuild
   Execucao: node scripts/otimizar-assets.cjs
   Execute depois de editar os arquivos fonte em css/ e js/. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const esbuild = require(require.resolve('esbuild', { paths: [root, path.join(root, '.preview/performance-2026-10-29/tools')] }));
const css = ['styles', 'ambientes', 'acabamentos', 'fechos-vidro', 'arquitetos'].map(n => `css/${n}.css`);
const js = ['hero.js', 'vendor/lenis-1.1.20.min.js', 'transicao-galeria.js', 'trava.js', 'ambientes.js', 'main.js', 'acabamentos.js', 'manifesto.js', 'rodape.js', 'arquitetos.js'].map(n => `js/${n}`);
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/\r\n/g, '\n');
for (const [loader, sources] of [['css', css], ['js', js]]) {
  const input = sources.map(file => fs.readFileSync(path.join(root, file), 'utf8')).join(loader === 'js' ? '\n;\n' : '\n');
  const { code } = esbuild.transformSync(input, { loader, minify: true, target: 'es2020', legalComments: 'inline' });
  const hash = crypto.createHash('sha256').update(code).digest('hex').slice(0, 12);
  const output = `${loader}/site-${hash}.min.${loader}`;
  fs.writeFileSync(path.join(root, output), code);
  const pattern = loader === 'css' ? /  <link rel="stylesheet" href="css\/[^\"]+">\n/g : /<script src="(?:js\/[^\"]+|https:\/\/unpkg.com\/lenis[^\"]+)" defer><\/script>\n/g;
  let inserted = false;
  html = html.replace(pattern, () => {
    if (inserted) return '';
    inserted = true;
    return loader === 'css' ? `  <link rel="stylesheet" href="${output}">\n` : `<script src="${output}" defer></script>\n`;
  });
  if (!inserted) throw new Error(`Referencia ${loader} nao encontrada`);
  console.log(`${output}: ${Buffer.byteLength(input)} -> ${Buffer.byteLength(code)} bytes`);
}
fs.writeFileSync(path.join(root, 'index.html'), html);
