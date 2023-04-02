//----------------------------------------------------------------------------------------------------------------------
// Vite Config
//----------------------------------------------------------------------------------------------------------------------

import { defineConfig } from 'vite';

// Vite Plugins
import vue from '@vitejs/plugin-vue2';

// Config
import config from './src/config';

//----------------------------------------------------------------------------------------------------------------------

/** @type {import('vite').UserConfig} */
export default defineConfig({
    root: 'src/client',
    publicDir: 'assets',
    plugins: [
        vue()
    ],

    // Remove charset warning caused by bootstrap
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) =>
                        {
                            if(atRule.name === 'charset')
                            {
                                atRule.remove();
                            }
                        }
                    }
                }
            ]
        }
    },
    server: {
        port: config.http.port + 1,
        proxy: {
            '/auth': `http://localhost:${ config.http.port }`,
            '/api': `http://localhost:${ config.http.port }`,
            '/socket.io': {
                target: `http://localhost:${ config.http.port }`,
                ws: true
            }
        },
        https: false,
        open: false
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@vue-bootstrap-components/vue-bootstrap-autocomplete':
                '@vue-bootstrap-components/vue-bootstrap-autocomplete/dist/VueBootstrapAutocomplete.umd.min.js'
        }
    },
    build: {
        outDir: '../../dist/src/client',
        emptyOutDir: true,
        cssCodeSplit: true,
        chunkSizeWarningLimit: 650,
        rollupOptions: {
            output: {
                manualChunks: {
                    bootstrap: [ 'popper.js', 'jquery', 'bootstrap' ],
                    bootstrapVue: [ 'bootstrap-vue' ]
                }
            }
        }
    }
});

//----------------------------------------------------------------------------------------------------------------------
