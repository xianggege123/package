//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
   
   getMessages:function(nu,cb){
          wx.request({
            url: 'http://api.jisuapi.com/express/query', 
            data: {
              x: '',
              y: ''
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              console.log(res.data),
              cb(res.data)

            }
          })
   },

  globalData: {
    userInfo: null
  }
})
