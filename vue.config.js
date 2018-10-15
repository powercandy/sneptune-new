module.exports = {
  // 基本路径
  baseUrl: './',
  // 输出路径
  outputDir: 'dist',
  // 资源目录
  assetsDir: './',
  // 是否使用包含运行时编译器的Vue构建版本
  runtimeCompiler: false,
  // 生产环境是否生成sourceMap文件
  productionSourceMap: false,
  // 是否为Bable, TypeScript使用thread-loader
  parallel: false,
  css: {
    // 启用css modules for all css, false时，需要以.module.css后缀才被认为是css modules
    modules: false,
    // 是否使用css分离插件ExtractTextPlugin
    extract: true,
    // 是否开启css source maps
    sourceMap: false,
    // css 预设器配置项
    loaderOptions: {}
  },
  // eslint-loader是否在保存的时候检查
  lintOnSave: true,
  // webapck配置
  configureWebpack: () => {},
  // 开发服务配置
  devServer: {
    // 启动时打开浏览器
    open: true,
    // 打开时的路径
    openPage: '/',
    // 主机名
    host: '0.0.0.0',
    // 服务端口
    port: 8090,
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:8363',
        secure: false,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }

}
