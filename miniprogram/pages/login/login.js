// pages/login/login.js

var util = require('../../utils/util.js')
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
       animationData:null,
       userInfo:"",
  
  },

fadeIn:function(){

    var animation=wx.createAnimation({
      duration:500,
      timingFunction:'linear'
    })
    animation.opacity(1).step()
    this.setData({
      animationData:animation.export(),
    })
},

bindGetUserInfo: function (e) {
  if (this.data.logged) return;
   
  util.showBusy('正在登录');

  var that = this;
  var userInfo = e.detail.userInfo;
  console.log(userInfo)
  app.globalData.userInfo=userInfo

  that.setData({
    userInfo: userInfo,
  })
  var options = {
    encryptedData: e.detail.encryptedData,
    iv: e.detail.iv,
    userInfo: userInfo
  }
  that.doLogin(options);
},
doLogin: function (options) {
  var that = this;

  wx.login({
    success: function (loginResult) {
      var loginParams = {
        code: loginResult.code,
        encryptedData: options.encryptedData,
        iv: options.iv,
      }
      qcloud.requestLogin({
        loginParams, success() {
          util.showSuccess('登录成功');
          wx.getStorage({
            key: 'weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A',
            success: function(res) {
              app.globalData.openId=res.data.userinfo.openId
              wx.navigateBack({
                changed: true
              })
            },
      
          })
        },
        fail(error) {
          util.showModel('登录失败', error)
          console.log('登录失败', error)
        }
      });
    },
    fail: function (loginError) {
      util.showModel('登录失败', loginError)
      console.log('登录失败', loginError)
    },
  });
}, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})