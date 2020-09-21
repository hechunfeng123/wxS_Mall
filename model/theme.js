//业务对象，theme，banner，spu，sku,address,user
//定义业务对象
import {Http} from "../utils/http";

class Theme{
  //定于静态方法
  //多层次的函数调用，只要有一层是异步的，那么所有都要是异步
  // 回调 promise async await
  //只有一个promise 才能用async await
    //加了a'sync一点返回一个promisic
  static async getHomeLocationA(){
    return  await Http.request({
          url: `theme/by/names`,
          data: {
              names: 't-1'
          }
      })
    //   wx.request({
    //   //模板字符串 ES6
    //   // url: 'http://se.7yue.pro/v1/theme/by/names',
    //   url:`theme/by/names`,
    //   method:'GET',
    //   data:{
    //     names:'t-1'
    //   },
    //   header:{
    //     appkey:config.appkey
    //   },
    //   success:res=>{
    //     callback(res.data)
    //     // this.setData({
    //     //   topTheme:res.data[0]
    //     // })
    //   }
    // })
  }
}
export{
    Theme
}