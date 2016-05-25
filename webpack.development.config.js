const webpack           = require('webpack');
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');
const LiveReloadPlugin  = require('webpack-livereload-plugin');
const merge             = require('webpack-merge');
const BowerWebpackPlugin = require("bower-webpack-plugin");
const NpmInstallPlugin  = require('npm-install-webpack-plugin');

const TARGET            = process.env.npm_lifecycle_event
const PATHS             = {
    app     : path.join(__dirname, './src'),
    build   : path.join(__dirname, './build')
}

const common = require('./webpack.config')

module.exports = merge(common, {
    debug: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?sourceMap!sass?sourceMap'
                )
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            },
            {
                test: /\.(gif|png|jpeg|svg)$/,
                exclude: /scss/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[path][name].[ext]',
                    'image-webpack?optimizationLevel=4&interlaced=false&progressive=true'
                ]
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname), path.resolve(__dirname, './src'),
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, './bower_components/foundation-sites/assets/scss')
        ]
    },
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
    ],
    postcss: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                'ie >= 9'
            ]
        })
    ]
});
