"use strict";

let path = require("path");
let webpack = require("webpack");

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: "jQuery"
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },

    resolve: {
        modules: [ __dirname, 'node_modules', "app" ],
        alias: {
            MainComponent : path.resolve( __dirname , "app/components/main.jsx" ),
            Search : path.resolve(__dirname, "app/components/search.jsx"),
            Buttons : path.resolve(__dirname, "app/components//contactAddEditButtons.jsx"),
            Add : path.resolve(__dirname, "app/components/add.jsx"),
            FoundClients : path.resolve(__dirname, "app/components/foundClients.jsx"),
            Edit : path.resolve(__dirname, "app/components/edit.jsx"),
            Client : path.resolve(__dirname, "app/components/client.jsx"),
            Reducers : path.resolve(__dirname, "app/redux/reducers/reducers.jsx"),
            Actions : path.resolve(__dirname, "app/redux/actions/actions.jsx"),
            Store : path.resolve(__dirname, "app/redux/store/storeConfigure.jsx"),
            
        },
        extensions: [ ".js", ".jsx", ]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }

            }
        ]
    },

    devtool: "cheap-eval-source-map"
}
