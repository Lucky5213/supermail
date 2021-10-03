module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 给相关的路径起别名    @对应的就是src
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  }
}