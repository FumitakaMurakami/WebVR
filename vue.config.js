const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            '@': path.join(__dirname, '/src/frontend') // 1. @の参照先の変更
          }
        }
    },
    outputDir: 'src/resources/static', // 2. 出力先
    pages: {
        index: {
            entry: 'src/frontend/main.ts', // エントリーポイント
            template: 'public/index.html', //3. index.htmlテンプレート
            filename: 'index.html' // 省略可
        }
    }
}