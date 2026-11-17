import { defineConfig } from 'vite';
// Preserve standard backdrop-filter: CSS compression currently drops it after the prefixed fallback.
export default defineConfig({root:'app',base:'./',build:{cssMinify:false,outDir:'../game',emptyOutDir:true},server:{host:'127.0.0.1',port:5193}});
