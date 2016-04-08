const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path              = require('path')
const LiveReloadPlugin  = require('webpack-livereload-plugin')

// const autoprefixer      = require('autoprefixer')
const buildPath         = './build'

const sassLoaders = [
    'style-loader',
    'css-loader',
    'style!css!sass?includePaths[]=' +
        path.resolve(__dirname,
            './bower_components/foundation/scss'
        )
]

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, buildPath),
        publicPath: buildPath
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: [
            './src',
            './node_modules',
            './bower_components'
          ],
        extensions: ['', '.js', '.scss', '.sass']
    },
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules|bower_components/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // Load SCSS
            {
                test: /\.scss$/,
                loader: "style!css!autoprefixer!sass"
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") },
            },
            // Load plain-ol' vanilla CSS
            {
                test: /\.scss$/,
                loader: "style!css"
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                // Add the fonts to a public folder in build
                loader: 'file?name=/fonts/[name].[ext]'
            },
            {
                // Images are inline within the JS
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname),
            path.resolve(__dirname, './src'),
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, './bower_components')
        ]
    },
    devtool: "inline-source-map", // or "inline-source-map"
    watch: true,
    plugins: [
        new ExtractTextPlugin('[name].css'),
        // new ExtractTextPlugin('[name].css', { allChunks: false }),
        new LiveReloadPlugin()
    ],
}

module.exports = config
