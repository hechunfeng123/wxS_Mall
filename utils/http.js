import {config} from "../config/config";
import {promisic} from "./util";


class Http {
      static async request({url,data,method='GET'}){

  const res=  await promisic(wx.request)({
         url:`${config.apiBaseUrl}${url}`,
         data,
         method,
         header:{
             appkey:config.appkey
         },
       })
       return res.data
     }
  }
        //request是函数传进，加（）就是调用了,后面括号加{}是传参数，动态类型
    // promisic(wx.request)({
    //     url:'',
    //     data:data,

    // })
//     promisic(wx.getStorage)
// promisic(wx.showModal())
  export {
    Http
  }