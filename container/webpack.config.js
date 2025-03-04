const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
HtmlWebPackPlugin
module.exports = {
    mode: "development",
    devServer: {
        port: 1000,
    },
    plugins : [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                barchart: "barchart@http://localhost:1001/remoteEntry.js",
                linechart: "linechart@http://localhost:1002/remoteEntry.js",
            }
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html"
        })
    ]
}   