// pages/secondhand/secondhand.js
var app = getApp();
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchtap: 0,
    data: [],
    collect: [],
    log:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.cloud.init();
    const db = wx.cloud.database();
    const openid = app.globalData.openid
    db.collection('secondhand').orderBy('createTime', 'desc').where({
      _openid: openid
    }).field({
      tag: true,
      title: true,
    }).get({
      success(res) {
        that.setData({
             data:res.data
        })
      }
    })
    db.collection('scollect').orderBy('createTime', 'desc').where({
      _openid: openid
    }).field({
      sid: true,
      stag:true,
      stitle: true,
    }).get({
      success(res) {
        that.setData({
           collect:res.data
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
    var that = this;
    wx.cloud.init();
    const db = wx.cloud.database();
    const openid = app.globalData.openid
    db.collection('scollect').orderBy('createTime', 'desc').where({
      _openid: openid
    }).field({
      sid: true,
      stag: true,
      stitle: true,
    }).get({
      success(res) {
        that.setData({
          collect: res.data
        })
      }
    })
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
  switchtap: function(e) {
    var that = this
    that.setData({
      switchtap: e.target.dataset.switchtap
    })
  },
preview:function(e){
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
},
deletes:function(e){
  var that = this;
  var id = e.target.dataset.id;
  var index = e.target.dataset.index;
  wx.cloud.init();
  const db = wx.cloud.database();
  that.setData({
    log: true
  })
  wx.showModal({
    content: '是否删除',
    confirmColor:'#f01548',
    success(res){
        if(res.confirm){
          util.showLoading();
          wx.setNavigationBarTitle({
            title: '正在删除',
          })
          db.collection('secondhand').doc(id).remove({
            success(res) {
              console.log(res)
            }
          })
          setTimeout(() => {
            wx.setNavigationBarTitle({
              title: '',
            })
            util.hideLoading();
            var d = that.data.data
            d.splice(index, 1)
            that.setData({
              data: d,
              log: false,
            })
          }, 1000)
        }else if(res.cancel){
          return;
        }
    }
  })
},
  deletesc: function (e) {
    var that = this;
    console.log(e)
    var id = e.target.dataset.id;
    var index = e.target.dataset.index;
    wx.cloud.init();
    const db = wx.cloud.database();
    that.setData({
      log: true
    })
    wx.showModal({
      content: '是否删除',
      confirmColor: '#f01548',
      success(res) {
        if (res.confirm) {
          util.showLoading();
          wx.setNavigationBarTitle({
            title: '正在删除',
          })
          db.collection('scollect').doc(id).remove({
            success(res) {
              console.log(res)
            }
          })
          setTimeout(() => {
            wx.setNavigationBarTitle({
              title: '',
            })
            util.hideLoading();
            var d = that.data.collect
            d.splice(index, 1)
            that.setData({
              collect: d,
              log: false,
            })
          }, 1000)
        } else if (res.cancel) {
          return;
        }
      }
    })
  }
})