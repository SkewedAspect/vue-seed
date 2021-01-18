//----------------------------------------------------------------------------------------------------------------------
// Webpack Config
//----------------------------------------------------------------------------------------------------------------------

const path = require('path');

// Plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    devtool: 'source-map',
    entry: './renderer/app.ts',
    target: 'electron-renderer',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist', 'renderer')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [ '.ts', '.tsx', '.js' ],
        alias: { vue: 'vue/dist/vue.js' }
    },
    module: {
        rules: [
            {
                test: /index\.html/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [ 'vue-style-loader', 'style-loader', 'css-loader' ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [ /\.vue$/ ] }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        writeToDisk: true
    }
};

//----------------------------------------------------------------------------------------------------------------------
