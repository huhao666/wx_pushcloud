// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  await db.collection('myData').add({
    data: {
      description: event
    }
  })
  return "哈哈哈，成功"
  // {
  //   sum: event.a + event.b
  // }
}