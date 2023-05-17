// import Sequelize from 'sequelize'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Sequelize = require('sequelize')
// new Sequelize('数据库名','用户名','密码',{配置信息})
// 2.使用sequelize模块配置和数据库的连接信息：创建连接数据库的对象
export const mysql_Sequelize = new Sequelize('chatgptwebsql', 'root', '123456', {
  host: '127.0.0.1', // 数据库服务器的IP地址或域名
  port: 3308, // 数据库使用的端口号。MySQL数据库的默认端口号是3306
  dialect: 'mysql', // 数据库的类型
  pool: { // 数据库连接池：放若干个数据库的连接对象，提高数据库的访问效率
    max: 20, // 数据库连接池中连接对象的最大个数
    min: 3, // 数据库连接池中连接对象的最少个数
    idle: 20000, // 等待延迟的时间，单位是毫秒
  },
  define: {
    charset: 'utf8', // 处理Mysql中中文字符问题
  },
})
// 3.导出数据库的连接对象
// module.exports = mysql_Sequelize
