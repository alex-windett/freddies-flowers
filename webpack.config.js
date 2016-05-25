const autoprefixer      = require('autoprefixer')
const path              = require('path')

module.exports = config = {

    PATHS: {
        root    : path.join(__dirname),
        app     : path.join(__dirname, './src'),
        build   : path.join(__dirname, './build')
    },

    common: {
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
            root: path.join(__dirname),
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
            test: /\.(gif|png|jpeg|svg)$/,
            exclude: /scss/,
            loaders: [
                'file?hash=sha512&digest=hex&name=images/[path][name].[ext]',
                'image-webpack?optimizationLevel=4&interlaced=false&progressive=true'
            ]
        }
    },

    sassLoader: {
        includePaths: [
            path.resolve(__dirname),
            path.resolve(__dirname, './src'),
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, './bower_components/foundation-sites/assets/scss')
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
