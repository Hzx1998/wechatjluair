// pages/express/express.js
var util = require('../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.cloud.init();
    const db = wx.cloud.database();
    const openid = app.globalData.openid;
    db.collection('express').orderBy('createTime', 'desc').where({
      _openid: openid
    }).field({
      stand: true,
    }).get({
      success(res) {
        console.log(res.data)
        that.setData({
          data: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //删除
  deleteexpress: function(e) {

    var that = this;
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    wx.cloud.init();
    const db = wx.cloud.database();
    wx.showModal({
      content: '是否删除',
      confirmColor: '#f01548',
      success(res) {
        if (res.confirm) {
          util.showLoading();
          wx.setNavigationBarTitle({
            title: '正在删除',
          })
          db.collection('express').doc(id).remove({
            success(res) {
              console.log(res)
            }
          })
          setTimeout(() => {
            var d = that.data.data
            d.splice(index, 1)
            that.setData({
              data: d
            })
            util.hideLoading();
            wx.setNavigationBarTitle({
              title: '',
            })
            util.showalert('删除成功')
          }, 1000)
        } else if (res.cancel) {
          return;
        }
      }
    })
  }
})