const autoprefixer      = require('autoprefixer')
const path              = require('path')

var PATHS = {
    src         : path.join(__dirname, './src/'),
    build       : path.join(__dirname, './build/')
}

module.exports = config = {

    common: {
        entry: {
            app: PATHS.src + 'index.jsx',
            custom: PATHS.src + 'custom.js'
        },
        output: {
            filename: '[name].js?[hash]',
            path: PATHS.build,
            resourcesPath: './public'
        },
        resolve: {
            root: PATHS.assets,
            modulesDirectories: ['./src', 'node_modules', './bower_components'],
            extensions: ['', '.js', '.jsx', '.scss', '.sass'],
            alias: {
                'waypoints': 'waypoints/lib/waypoints.js'
            }
        }
    },

    loaders: {
        js: {
            test: /\.jsx?$/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }

        },
        css: {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        fonts: {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        },
        images: {
            test: /\.(gif|png|jpg|svg)$/i,
            exclude: /scss/,
            loaders: [
                'file?name=images/[path][name].[ext]&context=./resources/assets/src/images',
                'image-webpack'
            ]
        }
    },

    imageWebpackLoader: {
        optimizationLevel: 4,
        pregressive: true,
        interlaced: true,
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },

    sassLoader: {
        includePaths: [
            PATHS.src,
            path.resolve(__dirname),
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, PATHS.assets + 'bower_components/foundation-sites/assets/scss')
        ]
    },

    postCSS: [
        autoprefixer({
            browsers: [
                'last 2 versions',
                'ie >= 9'
            ]
        })
    ]
}
