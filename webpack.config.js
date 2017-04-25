let webpack=require('webpack');

module.exports={
    entry: [
       'script!jquery/dist/jquery.js',
        'script!foundation-sites/dist/js/foundation.js',
        './public/index.js'
    ],
    externals:{
      jquery:'jQuery'
    },
    plugins:[
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
        loaders: [{
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
   devtool:'cheap-module-eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
    historyApiFallback: true,
        contentBase: './'
}
};