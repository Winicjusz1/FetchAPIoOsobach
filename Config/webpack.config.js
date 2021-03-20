const path = require('path');
// import path from 'path';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|gif|jpeg)$/,
                use: 'file-loader'
            },



        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}
