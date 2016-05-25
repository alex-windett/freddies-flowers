/**
Run file using -
    NODE_ENV=production webpack --progress --config webpack.production.config.js
*/

const webpack           = require('webpack')
const autoprefixer      = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path              = require('path')
const LiveReloadPlugin  = require('webpack-livereload-plugin')
const merge             = require('webpack-merge')
const BowerWebpackPlugin = require("bower-webpack-plugin")
const NpmInstallPlugin  = require('npm-install-webpack-plugin')

const common = require('./webpack.config')

const TARGET            = process.env.npm_lifecycle_event
const PATHS             = {
    app     : path.join(__dirname, './src'),
    build   : path.join(__dirname, './build')
}

const common = {
    entry: {
        app: './src/index.jsx',
        custom: './src/custom.js'
    },
    output: {
        filename: '[name].js?[hash]',
        path: path.join(__dirname, './build'),
        publicPath: './'
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['./src', 'node_modules', './bower_components'],
        extensions: ['', '.js', '.jsx', '.scss', '.sass'],
        alias: {
            'waypoints': 'waypoints/lib/waypoints.js'
        }
    }
}

module.exports = merge(common, {
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
                    'css!sass'
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
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname),
            path.resolve(__dirname, './src'),
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, './bower_components/foundation-sites/assets/scss')
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css?[hash]'),
        new BowerWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            waypoints: 'waypoints'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    postcss: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                'ie >= 9'
            ]
        })
    ]
})
