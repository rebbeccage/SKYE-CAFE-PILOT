import { defineConfig } from 'vite';
export default defineConfig({root:'app',base:'./',build:{outDir:'../game',emptyOutDir:true},server:{host:'127.0.0.1',port:5193}});
