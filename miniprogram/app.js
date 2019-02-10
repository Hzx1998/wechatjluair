App({
  globalData: {
    openid: '',
    userInfo: {},
    winHeight: '',
    winWidth: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    wx.cloud.init();
    wx.cloud.callFunction({
      name: 'getopenid',
      complete(res) {
        getApp().globalData.openid = res.result.openid
      },
      fail: console.error
    })
    wx.getSetting({
      
      success(res) {
        if (res.authSetting['scope.userInfo'] || getApp().globalData.userInfo==null) {
          wx.getUserInfo({
            success: function(res) {
              getApp().globalData.userInfo = res.userInfo
            }
          })
        } else {
          wx.redirectTo({
            url: '/pages/login/login',
          })
        }
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    var pages = getCurrentPages();
    if (pages.length == 0) {
      return
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})