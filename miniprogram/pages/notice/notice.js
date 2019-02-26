const app = getApp();
const util = require('../../utils/util.js')
// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    log: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.cloud.init();
    const db = wx.cloud.database();
    const openid = app.globalData.openid;
    db.collection('notice').orderBy('createTime', 'desc').where({
      _openid: openid
    }).field({
      title: true,
      tag: true,
      fileID: true,
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
  //删除启事
  deletenotice: function(e) {
    var that = this
    //上锁
    that.setData({
      log: true
    })
   //展示窗口
    wx.showModal({
      confirmColor: '#f01548',
      cancelColor: '#e6e6e6',
      content: '是否删除',
      success(res) {
        if (res.confirm) {
          util.showLoading();
          wx.setNavigationBarTitle({
            title: '正在删除',
          })
       
          var list = e.target.dataset.fileid
          var id = e.target.dataset.id
          console.log(list)
          wx.cloud.init();
          const db = wx.cloud.database();
          wx.cloud.deleteFile({
            fileList: list,
            success(res) {
              console.log(res.fileList)
            },
            fail: function(e) {
              console.log(e)
            }
          })
          //删除 
          const openid = app.globalData.openid;
          db.collection('notice').doc(id).remove({
            success(res) {
              console.log()
            }
          })
          //收尾
          setTimeout(() => {
            util.hideLoading()
            var index = e.target.dataset.index
            var d = that.data.data
            d.splice(index, 1)
            that.setData({
              data: d,
               log: false
            })
            wx.setNavigationBarTitle({
              title: '',
            })
            util.showalert('删除成功')
          }, 1000)

        }
        if (res.cancel) {
          return
        }
      }
    })
  },
  preview: function(e) {
    var n = e.currentTarget.dataset.tap
    var id = e.currentTarget.dataset.id
    var that = this;
    if (!that.data.log) {
      setTimeout(() => {
        wx.navigateTo({
          url: '../preView/preView?tap=' + n + '&id=' + id,
        })
      }, 500)
    }
  }
})