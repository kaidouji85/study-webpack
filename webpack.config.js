module.exports = {
    entry: "./src/entry.js",
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        contentBase: "./build",
    }
};