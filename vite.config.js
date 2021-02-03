const path = require('path')

export default function () {
  return {
    alias: {
      // 键必须以斜线开始和结束
      '/@/': path.resolve(__dirname, './src')
    },
    // 打包后的跟路径
    base: './',
    outDir: 'dist',
    // 输出的静态资源的文件夹名称
    assetsDir: 'assets',
    // 端口
    port: 80
  }
}
