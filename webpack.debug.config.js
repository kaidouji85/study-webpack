var createDebugEntry = require("./create-debug-entry");

module.exports = {
    entry: createDebugEntry('src_debug'),
    output: {
        path: './debug',
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};