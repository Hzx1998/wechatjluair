// pages/preView/preView.js
var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Air: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.setNavigationBarTitle({
      title: app.globalData.title,
    })
    var id = {
      Id: app.globalData.id
    }
    console.log(id.Id)
    qcloud.request({
      url: `${config.service.host}/weapp/previewAir`,
      login: true,
      data: id,
      success(result) {
        console.log(result.data.data)
        var value = result.data.data;
        var air = {
          id: value[0].id,
          openId: value[0].open_id,
          title: value[0].title,
          content: value[0].content,
          imgUrl: value[0].imageurl,
          contact_type: value[0].contact_type,
          contact_item: value[0].contact_item,
          status: value[0].status,
          variety: value[0].variety,
        }
        console.log(air)
        that.setData({
          Air: air,
          requestResult: JSON.stringify(result.data)
        })

      },
      fail(error) {

        console.log('request fail', error);
      }
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
  onShareAppMessage: function (res) {
    var that=this;
     if(res.from==='button'){
       console.log(res.target)
     }return{
       title:that.data.Air.title,
    
     }
  },
  preview: function (e) {
    var that = this;
    wx.previewImage({
      current: '',
      urls: [that.data.Air.imgUrl],
      success: function (res) { },
    })
  },
  copy: function (e) {
    var that = this;
    wx.setClipboardData({
      data: that.data.Air.contact_item,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            util.showSuccess('复制成功')
          }
        })
      }
    })
  },
  gohome: function (e) {
wx.redirectTo({
  url: '../broadcast/broadcast',
})
  }


})