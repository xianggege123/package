//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    id:null,
    expressage:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  GET:function(){ 
    var thispage=this 

    wx.request({
      url: 'https://way.jd.com/showapi/order_path?com=auto&nu=' + this.data.id +'&appkey=14d9f4aa350c6f1231c5cb6cd0207d33', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        //console.log(res.data.result.showapi_res_body.data)
        thispage.setData({ expressage: res.data.result.showapi_res_body.data}),
          console.log(thispage.data.expressage)
      }
    })
  },

  getvalue:function(e){
     // console.log(e.detail.value)
    this.setData({ id: e.detail.value})
    //console.log(this.data.id)

  }
  ,

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
