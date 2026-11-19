import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
const out=resolve(process.argv[2]||'dist/玻璃间.html');
let html=readFileSync('dist/index.html','utf8');
const js=html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
const css=html.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);
if(!js||!css)throw new Error('Build output not recognized');
let script=readFileSync(resolve('dist',js[1].replace(/^\.\//,'')),'utf8');
let style=readFileSync(resolve('dist',css[1].replace(/^\.\//,'')),'utf8').replace(/@import\s*(?:url\([^)]*\)|"[^"]*"|'[^']*')[^;]*;/g,'');
for(const name of ['items','people','shop','panels']){const data='data:image/jpeg;base64,'+readFileSync('public/ui/'+name+'.jpg').toString('base64');style=style.replaceAll('/ui/'+name+'.jpg',data);script=script.replaceAll('/ui/'+name+'.jpg',data)}
html=html.replace(js[0],()=>`<script type="module">${script.replace(/<\/script/gi,'<\\/script')}</script>`).replace(css[0],()=>`<style>${style}\n:root{font-family:Arial,"PingFang SC",sans-serif}.identity h1,.scene-caption h2,dialog h2{font-family:"Songti SC","STSong",serif}</style>`);
mkdirSync(dirname(out),{recursive:true});writeFileSync(out,html);console.log(out);
