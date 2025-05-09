const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('css-loader');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    devtool: "eval-source-map",

    devServer: {
        watchFiles: ["./src/template.html"],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\/.html$/i,
                use: ['html-loader'],
            },

            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\csv$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
};