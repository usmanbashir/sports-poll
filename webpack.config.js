"use strict";

module.exports = {
  entry: "./frontend/main.jsx",
  output: {
    path: __dirname + "/public/assets",
    publicPath: "/assets/",
    filename: "scripts.js"
  },
  externals: {
    "jquery": "jQuery"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  target: "web",
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.jsx$/, 
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: []
};
