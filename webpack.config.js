const autoprefixer      = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path              = require('path')
const LiveReloadPlugin  = require('webpack-livereload-plugin');

const sassLoaders = [
    'css-loader',
    'postcss-loader',
    'style',
    'css',
    'sass',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './build'),
        publicPath: './'
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['./src', 'node_modules', './bower_components'],
        extensions: ['', '.js', '.scss', '.sass'],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // backup loader when not building .css file
                    'css?sourceMap!sass?sourceMap' // loaders to preprocess CSS
                )
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
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
            path.resolve(__dirname), path.resolve(__dirname, './src'),
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, './bower_components/foundation-sites/assets/scss')
        ]
    },
    devtool: "source-map", // or "inline-source-map"
    watch: true,
    plugins: [
        new ExtractTextPlugin('[name].css'),
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
}

module.exports = config
