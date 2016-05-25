/**
Run file using -
    webpack --progress --config webpack.development.config.js
*/
const webpack               = require('webpack')
const ExtractTextPlugin     = require('extract-text-webpack-plugin')
const LiveReloadPlugin      = require('webpack-livereload-plugin')
const BowerWebpackPlugin    = require("bower-webpack-plugin")
const NpmInstallPlugin      = require('npm-install-webpack-plugin')
const merge                 = require('webpack-merge')
const config                = require('./webpack.config');

module.exports = merge(config.common, {
    debug: true,
    module: {
        // preLoaders: [
        //   {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
        // ],
        loaders: [
            config.loaders.js,
            config.loaders.css,
            config.loaders.fonts,
            config.loaders.images,
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                )
            },

        ]
    },

    sassLoader: config.sassLoader,
    postcss: config.postCSS,

    devtool: "source-map",
    watch: true,
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BowerWebpackPlugin(),
        new NpmInstallPlugin({
            save: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            waypoints: 'waypoints'
        }),
        new LiveReloadPlugin()
    ]
});
