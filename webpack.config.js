const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'SXIntro.bundle.js',
		library: 'SXIntro',
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader'
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['babel-preset-env']
					}
				}
			}

		]
	}
};
