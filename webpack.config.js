
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'client-dist'),
        //compress: true,
        port: 8080
    }
}