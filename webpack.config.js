const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); 
const smp = new SpeedMeasurePlugin();

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin(),
    new UnusedFilesWebpackPlugin({
      patterns: 'src/**/*.*',
    }),
    new CaseSensitivePathsPlugin(),
    new DuplicatesPlugin(),
    new CircularDependencyPlugin(),
  ],
  module: {
    rules: [
      {
       test: /\.(woff|woff2|ttf|eot)$/,
       use: 'file-loader?name=fonts/[name].[ext]!static'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: (url, resourcePath, context) => {
                const relativePath = path.relative(context, resourcePath);
                return relativePath.replace('src/', '');
              },
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = smp.wrap(config);
} else {
  module.exports = config;
}
