const path = require('path')
const rm = require('rimraf');
let dateFormat = () => {
  let date = new Date();
  let mon = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return `${mon}${day}_${hour}${min}${sec}`;
};
let projectName = require('./package').name;

if (process.env.NODE_ENV === 'production' && projectName === 'template') {
  /* eslint-disable no-console */
  console.warn('请修改 package.json 的 name 字段来修改打包目录名称');
}

module.exports = {
  outputDir: projectName + '_' + dateFormat(),
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      rm('./' + projectName + '*', (e) => {
        if (e) {
          throw new Error(e);
        }

        if (e === null) {
          console.log('清除原有打包文件成功,开始打包');
        }

        if (e === undefined) {
          console.log('当前目录没有打包文件,开始打包 ');
        }
      });
    }
  },

  // devServer: {
  //   host: "localhost",
  //   port: 8080,
  //   https: false,
  //   open: true,//自动启动浏览器
  //   proxy: {
  //     "/api": {
  //       target: process.env.VUE_APP_BASE_API || "http://192.168.2.34:30030",//要访问的接口域名
  //       secure: false,
  //       changeOrigin: true
  //     }
  //   }
  // },

  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "~@/assets/styles/_variables.scss";`,
  //     },
  //   },
  // },


  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/_variables.scss'),
      ]
    }
  },

  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Provide path to the file with resources
  //         // 要公用的scss的路径
  //         resources: './src/assets/styles/_variables.scss'
  //       })
  //       .end()
  //   })
  // }
}