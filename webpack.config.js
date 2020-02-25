const path = require('path')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //this tells babel to run js files
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, //? allows for search of both scss and css. $ specifies ext
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', //this is the source-map, this is dev, will add production version later,
    devServer: { //Repl for live-server w/mroe dev features. live-server used in production
        contentBase: path.join(__dirname, 'public'),
    }
}

