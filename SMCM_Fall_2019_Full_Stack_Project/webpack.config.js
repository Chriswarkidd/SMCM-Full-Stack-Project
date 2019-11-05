const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        index: './wwwroot/js/exampleReactComponent.jsx',
        login: './wwwroot/js/loginPage.jsx',
        account: './wwwroot/js/accountPage.jsx'},
    output: {
        path: path.resolve(__dirname, './wwwroot/js/dist'),
        filename: '[name]-bundle.js',
        publicPath: 'dist/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};