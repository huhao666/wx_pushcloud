// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
// 云函数入口函数
exports.main = async(event, context) => {
  console.log(event)
  try {
    const result = await cloud.openapi.templateMessage.send({
      touser: event.openid,   //推送用户
      templateId: "PSP9DEAmBPiPVKWLW0X30dLzO3n3H78ibk4m736vWMA", 
      page: 'pages/index/index',
      data: {
        date2: {
          value: '2020 年 7 月 8 日',
        },
        thing1: {
          value: '网上交易',
        },
        amount3: {
          value: '30元',
        },
        thing1: {
          thing4: '点击详情查看',
        }
      }
    })
    return result
  } catch (error) {
    return "模板服务器错误"+error
  } 
}
