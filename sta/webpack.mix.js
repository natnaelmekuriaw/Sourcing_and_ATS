const mix = require('laravel-mix');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const CaseSensetivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins:[
        new VuetifyLoaderPlugin(),
        new CaseSensetivePathsPlugin(),
    ]
}

mix.webpackConfig(webpackConfig);

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
