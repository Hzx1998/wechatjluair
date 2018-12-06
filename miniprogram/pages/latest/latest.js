// pages/latest/latest.js

var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  deleteAir: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var openid = e.currentTarget.dataset.openId;
    console.log(e.currentTarget.dataset)
    wx.showModal({
      title: '',
      content: '是否标记为已完成？',
      confirmColor: '#f01548',
      success: function (res) {
        if (res.confirm) {
          util.showBusy('标记中');
          var Id = {
            id: id,
          }
          console.log(Id)
          qcloud.request({
            url: `${config.service.host}/weapp/changeAir`,
            login: true,
            data: Id,
            success(result) {
              var openId = {
                openid: app.globalData.openId
              }
              qcloud.request({
                url: `${config.service.host}/weapp/showLatest`,
                login: true,
                data: openId,
                success(result) {

                  var len = result.data.data.length;

                  var airlist = [];
                  var value = result.data.data;
                  for (var i = 0; i < len; i++) {
                    var air = {
                      id: value[i].id,
                      openId: value[i].open_id,
                      title: value[i].title,
                      content: value[i].content,
                      imgUrl: value[i].imageurl,
                      contact_type: value[i].contact_type,
                      contact_item: value[i].contact_item,
                      status: value[i].status,
                      variety: value[i].variety,
                    }

                    airlist.push(air)

                  }

                  that.setData({
                    list: airlist,
                    requestResult: JSON.stringify(result.data)
                  })
                   util.showSuccess('标记成功');
                },
                fail(error) {

                  console.log('request fail', error);
                }
              })
            },
            fail(error) {

              console.log('request fail', error);
            }
          })
        } else if (res.cancel) {

        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A',
      success: function (res) {
        app.globalData.openId = res.data.userinfo.openId
        app.globalData.userInfo = res.data.userinfo
      }
    })
    var openId = {
      openid: app.globalData.openId
    }

    qcloud.request({
      url: `${config.service.host}/weapp/showLatest`,
      login: true,
      data: openId,
      success(result) {

        var len = result.data.data.length;

        var airlist = [];
        var value = result.data.data;
        for (var i = 0; i < len; i++) {
          var air = {
            id: value[i].id,
            openId: value[i].open_id,
            title: value[i].title,
            content: value[i].content,
            imgUrl: value[i].imageurl,
            contact_type: value[i].contact_type,
            contact_item: value[i].contact_item,
            status: value[i].status,
            variety: value[i].variety,
          }

          airlist.push(air)

        }

        that.setData({
          list: airlist,
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
  onShareAppMessage: function () {

  }
})