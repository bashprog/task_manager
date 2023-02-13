const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        // host: '192.168.0.41',
        port: 3001,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            // favicon: "./src/imgs/favicon.ico"
        })
    ],
    module: {
        rules: [
            //Styles
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            //Images
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[hash].[ext]',
                            // publicPath: '/'
                        },
                    },
                ]
            },
            //Typescript
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
        ]
    }
};