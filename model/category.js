const { Http } = require("../utils/http");

class Category{
  static async getGridGategory(){
    return await Http.request({
      url:`category/grid/all`
    })
  }
}
export{
  Category
}