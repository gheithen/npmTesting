"use strict";

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'wwwroot/js'),
    entry: {

        client: './client'
    },
    output: {
        path: path.join(__dirname, 'wwwroot/build'),
        filename: '[name].bundle.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            // Transform JSX in .jsx files
            //{ test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }

            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|svg)/,
                loader: "file-loader"
            }
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    },
    //externals: {
    //    // Use external version of React (from CDN for client-side, or
    //    // bundled with ReactJS.NET for server-side)
    //    react: 'React'
    //},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
}
