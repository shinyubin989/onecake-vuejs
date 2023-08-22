const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   // devServer: {
//   //   // proxy: 'http://127.0.0.1:8080/'
//   //   proxy: {
//   //     '/api': {
//   //       target: 'http://127.0.0.1:8080',
//   //       changeOrigin: true,
//   //       secure: false,
//   //       logLevel: 'debug'
//   //     }
//   //   }
//   // }
//   // devServer: {
//   //   proxy: "http://localhost:8080"
//   // }
// })
//
module.exports = {
  devServer: {
    proxy: "http://localhost:8080"
  }
}

// module.exports = {
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer: {
//     proxy: 'http://localhost:8080'
//   }
// }

// module.exports = {
//   devServer: {
//     proxy: 'http://127.0.0.1:8080'
//   }
// }

