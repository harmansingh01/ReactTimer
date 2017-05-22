var webpack = require('webpack');

module.exports = {
    entry: [
       'script-loader!jquery/dist/jquery.js',
        'script-loader!foundation-sites/dist/js/foundation.js',
        './public/index.js'
    ],
    externals: {
      jquery:'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$':'jquery',
        'jQuery':'jquery'
      })
    ],
    output:{
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.less$/,
                include: /public\/styles/,
                // exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};