const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "examples/src/index.html"),
	filename: "./index.html"
});
module.exports = {
	entry: path.join(__dirname, "examples/src/index.js"),
	output: {
		path: path.join(__dirname, "examples/build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|build)/,
				loader: require.resolve('babel-loader')
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [htmlWebpackPlugin],
	resolve: {
		extensions: [".js", ".jsx"]
	},
	devServer: {
		port: 3001
	}
};