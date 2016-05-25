const webpack           = require('webpack')
const autoprefixer      = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path              = require('path')
const LiveReloadPlugin  = require('webpack-livereload-plugin')
const merge             = require('webpack-merge')
const BowerWebpackPlugin = require("bower-webpack-plugin")
const NpmInstallPlugin  = require('npm-install-webpack-plugin')

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

module.exports = common
