const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    // entry: ['./src/js/app.js', './src/scss/styles.scss'],
    entry: path.resolve(__dirname, 'src') + '/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "file-loader",
                    options: { outputPath: 'styles/', name: '[name].min.css'},
                    
                },
                {
                    loader: "extract-loader"
                },
                {
                    loader: "css-loader?-url"
                },
                {
                    loader: "sass-loader",
                }
            ]
        },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "file-loader" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },    
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: 'bundle.js',
    },    
    plugins: [
        new BrowserSyncPlugin({
    //         // browse to http://localhost:3000/ during development,
    //         // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['./public'] },
            files: ['./public/[name].min*.css', './public/*.html',]
          })
    ]
  };
