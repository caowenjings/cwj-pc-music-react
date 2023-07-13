/** 不暴露的情况下修改webpack配置 */
const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    //自定义的别名
    alias: {
      '@': resolve('src')
    }
  }
};
