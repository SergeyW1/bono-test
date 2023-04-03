const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isDev) => !isDev ? {} : {
	devServer: {
		open: true,
		hot: true,
		port: 8080,
	}
};

module.exports = ({ develop }) => ({
	mode: develop ? 'development' : 'production',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'main.[contenthash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: './styles/main.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
				type: 'asset/inline'
			},
			{
				test: /\.html$/i,
				loader: 'html-loader'
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				]
			},
		]
	},
	...devServer(develop),
});