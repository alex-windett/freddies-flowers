/**
Run file using -
    NODE_ENV=production webpack --progress --config webpack.production.config.js
*/
const webpack               = require('webpack')
const ExtractTextPlugin     = require('extract-text-webpack-plugin')
const LiveReloadPlugin      = require('webpack-livereload-plugin')
const BowerWebpackPlugin    = require("bower-webpack-plugin")
const merge                 = require('webpack-merge')
const config                = require('./webpack.config')

module.exports = merge(config.common, {
    module: {
        loaders: [
            config.loaders.js,
            config.loaders.css,
            config.loaders.fonts,
            config.loaders.images,
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!sass'
                )
            }
        ]
    },

    sassLoader: config.sassLoader,
    postcss: config.postCSS,
    // imageWebpackLoader: config.imageWebpackLoader,

    plugins: [
        new ExtractTextPlugin('[name].css?[hash]'),
        new BowerWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            waypoints: 'waypoints'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
})
