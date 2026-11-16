import {cpSync,mkdirSync} from 'node:fs';
mkdirSync('dist',{recursive:true});cpSync('index.html','dist/index.html');cpSync('game','dist/game',{recursive:true});
