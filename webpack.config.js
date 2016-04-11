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
            browsers: ['last 2 versions']
        })
    ]
}

module.exports = config


// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const path              = require('path')
// const LiveReloadPlugin  = require('webpack-livereload-plugin')
// const NpmInstallPlugin = require('npm-install-webpack-plugin')
//
// // const autoprefixer      = require('autoprefixer')
// const buildPath         = './build'
// const TARGET            = process.env.npm_lifecycle_event;
//
// const PATHS = {
//   src: path.join(__dirname, './src'),
//   build: path.join(__dirname, './build'),
//   style: path.join(__dirname, '.src/scss')
// };
//
// const sassLoaders = [
//     'style-loader',
//     'css-loader',
//     'style!css!sass?includePaths[]=' +
//         path.resolve(__dirname,
//             './bower_components/foundation/scss'
//         )
// ]
//
// const config = {
//     entry: {
//         app: './src/index.js'
//     },
//     output: {
//         filename: '[name].js',
//         path: path.join(__dirname, buildPath),
//         publicPath: buildPath
//     },
//     resolve: {
//         root: path.resolve(__dirname),
//         modulesDirectories: [
//             './src',
//             './node_modules',
//             './bower_components'
//             // './bower_components/foundation-sites/scsss'
//           ],
//         extensions: ['', '.js', '.scss', '.sass']
//     },
//     module: {
//         loaders: [
//             {
//                 test: [/\.js$/, /\.es6$/],
//                 exclude: /node_modules|bower_components/,
//                 loader: "babel-loader",
//                 query: {
//                     presets: ['es2015', 'react']
//                 }
//             },
//                 test: /\.scss$/,
//                 loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2)$/,
//                 // Add the fonts to a public folder in build
//                 loader: 'file?name=/fonts/[name].[ext]'
//             },
//             {
//                 // Images are inline within the JS
//                 test: /.*\.(gif|png|jpe?g|svg)$/i,
//                 loaders: [
//                     'file?hash=sha512&digest=hex&name=[hash].[ext]',
//                     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
//                 ]
//             }
//         ]
//     },
//     // sassLoader: {
//     //     includePaths: [
//     //         path.resolve(__dirname),
//     //         path.resolve(__dirname, './src'),
//     //         path.join(__dirname, 'node_modules'),
//     //         path.join(__dirname, './bower_components'),
//     //         path.join(__dirname, './bower_components/foundation-sites/scss')
//     //
//     //     ]
//     // },
//     devtool: "inline-source-map", // or "inline-source-map"
//     watch: true
//     // plugins: [
//     //     new NpmInstallPlugin({
//     //         save: true // --save
//     //     }),
//     //     new ExtractTextPlugin('[name].css'),
//     //     // new ExtractTextPlugin('[name].css', { allChunks: false }),
//     //     new LiveReloadPlugin()
//     // ],
// }
//
// module.exports = config
