
var util = require('../../utils/util.js')
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    openId:'',
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    winHeight: 0,
    winWidth: 0,
    flag:0,
    tabbarlist: [{ preicon: "../../images/icon/broadcast.png", icon: "../../images/icon/sbroadcast.png", name: "广播站" },
    { preicon: "../../images/icon/first.png", icon: "../../images/icon/sfirst.png", name: "发布" },
    { preicon: "../../images/icon/mine.png", icon: "../../images/icon/smine.png", name: "我的" }]
  },


  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    //获取系统信息
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    })
    wx.getStorage({
      key: 'weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A',
      success: function (res) {
        app.globalData.openId = res.data.userinfo.openId
        app.globalData.userInfo = res.data.userinfo
      }
    })
    that.setData({
      openId: app.globalData.openId,
      userInfo: app.globalData.userInfo
    })
 
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
    this.setData({
      flag: 0
    })
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

  },
 
  tabbarA: function (e) {
    wx.redirectTo({
      url: '../broadcast/broadcast',
    })
  },
  tabbarB: function (e) {

    var that = this;

    wx.navigateTo({
      url: '../first/first',
      success: function (e) {
        that.setData({
          flag: 1
        })
      },
    })

  },
  jlatest: function (e) {
    var that = this;
  
      wx.navigateTo({
        url: '../latest/latest',
      })
    
  },
  jcomplete: function (e) {
    var that = this;
  
      wx.navigateTo({
        url: '../complete/complete',
      })
  
  },


  jsettingcollage:function(e){
  
    var that = this;

    wx.navigateTo({
      url: '../setting/setting',
    
    })
    app.globalData.setting = 1

  },
  jsettingswitch:function(e){
  
    var that = this;
    wx.navigateTo({
      url: '../setting/setting',
    })
    app.globalData.setting = 2
   
  },



})

