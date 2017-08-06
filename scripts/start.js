const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;
const HOST = process.env.HOST || 'localhost';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');



const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler);

const clearConsole = () => {
	console.log('\033c');
}

devServer.listen(DEFAULT_PORT, HOST, err => {
	if (err) {
		return console.log(err);
	}
	clearConsole();
});