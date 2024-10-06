const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'J.A.T.E'
      }),
      new WebpackPwaManifest({
        name: 'J.A.T.E. the text editor',
        short_name: 'J.A.T.E.',
        description: 'The magical text editor that does wonders.',
        background_color:'#280137',
        theme_color:'B40AF7',
        start_url:'/',
        public_path:'/',
        icons:[
          {
            src: path.resolve('./src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './Develop/client/src/src-sw.js',
        swDest: 'sw.js',
      })
    ],

    module: {
      rules: [
        
      ],
    },
  };
};
