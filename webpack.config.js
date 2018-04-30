const webpack = require('webpack')
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',

    entry: {
        'dist/vue-package-starter': './src/index.js',
        'dev/vue-package-starter': './dev/index.js'
    },

    output: {
        filename: '[name].js',
        library: "VuePackageStarter",
        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /^(?!.*\.{test,min}\.js$).*\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    },
    
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new VueLoaderPlugin()
    ],

    performance: { 
        hints: false
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    }
}
