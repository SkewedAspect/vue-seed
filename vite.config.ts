//----------------------------------------------------------------------------------------------------------------------
// Vite Config
//----------------------------------------------------------------------------------------------------------------------

import path from 'path';
import { defineConfig } from 'vite';

// Vite Plugins
import { createVuePlugin } from 'vite-plugin-vue2';

// Package
import { version } from './package.json';

//----------------------------------------------------------------------------------------------------------------------

export default defineConfig({
    root: 'src/client',
    publicDir: 'assets',
    plugins: [
        createVuePlugin()
    ],
    server: {
        port: 8082
    },
    resolve: {
        alias: [
            {
                find: /~(.+)/,
                replacement: path.join(process.cwd(), 'node_modules/$1')
            },
            {
                find: 'bootstrap-vue$',
                replacement: 'bootstrap-vue/src/index.js'
            },
            {
                find: 'vue',
                replacement: 'vue/dist/vue.esm.js'
            }
        ]
    },
    define: {
        APP_VERSION: JSON.stringify(version)
    },
    build: {
        outDir: '../../dist/client',
        emptyOutDir: true,
        chunkSizeWarningLimit: 600,
        cssCodeSplit: true
    }
});

//----------------------------------------------------------------------------------------------------------------------
