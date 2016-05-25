module.exports = {
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
