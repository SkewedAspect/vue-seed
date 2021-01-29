//----------------------------------------------------------------------------------------------------------------------
// Webpack Config
//----------------------------------------------------------------------------------------------------------------------

const path = require('path');
const webpack = require('webpack');

// Plugins
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    devtool: 'source-map',
    entry: './src/client/app.ts',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist', 'client')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [ '.ts', '.tsx', '.js' ],
        alias: { vue: 'vue/dist/vue.js' }
    },
    module: {
        rules: [
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
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env.VERSION': JSON.stringify(require('./package.json').version)
        }),
        new HtmlWebpackPlugin({
            title: 'Vue-Seed',
            favicon: './src/assets/images/logo.png',
            template: './src/client/index.html'
        })
    ],
    devServer: {
        writeToDisk: true
    }
};

//----------------------------------------------------------------------------------------------------------------------
