// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
      library: 'MyLibrary',
      libraryTarget: 'umd'
  },
  devServer: {
    open: true,
    host: "localhost",
    port: '5173'
  },
  plugins: [
      new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
    <html lang="en">
      <body>
        <div id="app"></div>
      </body>
    </html>
  `
    }),
    new ModuleFederationPlugin({
      name: 'heroMF',
      filename: 'remoteEntry.js',
      remotes: {
      },
      exposes: {
        './HeroMF': './src/main.js',
        './HeroWrapperMF': './src/components/HeroWrapper.vue'
      }
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, "css-loader"],
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  optimization: {
    sideEffects: false,
    moduleIds: 'named',
    chunkIds: 'named'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
