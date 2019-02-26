var util = require("../../utils/util")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    addimgIcon: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6Izk5OTk5OTsiIGQ9Ik01MTIsMGgtNDB2MTZoMjR2MzJoMTZWMHogTTQzMiwwaC00MHYxNmg0MFYweiBNMzUyLDBoLTQwdjE2aDQwVjB6IE0yNzIsMGgtNDB2MTZoNDBWMHogTTE5MiwwaC00MCAgdjE2aDQwVjB6IE0xMTIsMEg3MnYxNmg0MFYweiBNMzIsMEgwdjE2aDMyVjB6IE0xNiw0OEgwdjQwaDE2VjQ4eiBNMTYsMTI4SDB2NDBoMTZWMTI4eiBNMTYsMjA4SDB2NDBoMTZWMjA4eiBNMTYsMjg4SDB2NDBoMTZWMjg4eiAgIE0xNiwzNjhIMHY0MGgxNlYzNjh6IE0xNiw0NDhIMHY0MGgxNlY0NDh6IE01Niw0OTZIMTZ2MTZoNDBWNDk2eiBNMTM2LDQ5Nkg5NnYxNmg0MFY0OTZ6IE0yMTYsNDk2aC00MHYxNmg0MFY0OTZ6IE0yOTYsNDk2aC00MHYxNiAgaDQwVjQ5NnogTTM3Niw0OTZoLTQwdjE2aDQwVjQ5NnogTTQ1Niw0OTZoLTQwdjE2aDQwVjQ5NnogTTUxMiw0ODhoLTE2djhsMCwwdjE2aDE2VjQ4OHogTTUxMiw0MDhoLTE2djQwaDE2VjQwOHogTTUxMiwzMjhoLTE2djQwICBoMTZWMzI4eiBNNTEyLDI0OGgtMTZ2NDBoMTZWMjQ4eiBNNTEyLDE2OGgtMTZ2NDBoMTZWMTY4eiBNNTEyLDg4aC0xNnY0MGgxNlY4OHoiLz4KPGc+Cgk8cmVjdCB4PSIyNDQiIHk9IjE3NS45NzYiIHN0eWxlPSJmaWxsOiNFMjFCMUI7IiB3aWR0aD0iMjQiIGhlaWdodD0iMTYwLjA4Ii8+Cgk8cmVjdCB4PSIxNzUuOTc2IiB5PSIyNDQiIHN0eWxlPSJmaWxsOiNFMjFCMUI7IiB3aWR0aD0iMTYwLjA4IiBoZWlnaHQ9IjI0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
    type: ["启事", "活动", "二手", "代取"],
    contact: [{
      value: '微信',
      name: '微信',
      checked: 'true'
    }, {
      value: 'QQ',
      name: 'QQ'
    }, {
      value: '电话',
      name: '电话'
    }],
    noticetag: [{
      value: '寻物',
      name: '寻物'
    }, {
      value: '招领',
      name: '招领'
    }, {
      value: '一卡通',
      name: '一卡通'
    }, {
      value: '其他',
      name: '其他'
    }],
    goodstag: [{
      value: '旧书',
      name: '旧书'
    }, {
      value: '美妆',
      name: '美妆'
    }, {
      value: '生活用品',
      name: '生活用品'
    }, {
      value: '电子产品',
      name: '电子产品'
    }, {
      value: '其他',
      name: '其他'
    }],
    checked: false,
    nvalue: {
      title: '',
      tag: '',
      description: '',
      contactway: '',
      contact: ''
    },
    avalue: {
      title: '',
      society: '',
      description: '',

      numofpeople: '',
    },
    svalue: {
      title: '',
      price: '',
      tag: '',
      description: '',
      contactway: '',
      contact: ''
    },
    bvalue: {
      stand: '',
      destination: '',
      contactway: '',
      contact: ''
    },
    asignup: false,
    maxlength: 256,
    currentlength: 0,
    index: 0,
    winHeight: '',
    winWidth: '',
    switchtap: 0,
    tempFilespath: [],
    nimg: 0,
    tlock: false
  },
  bindswitch: function(e) {
    var that = this;
    if (that.data.switchtap == e.currentTarget.dataset.type) {
      return false;
    } else {
      that.setData({
        tempFilespath: [],
        nimg: 0,
        currentlength: 0,
        switchtap: e.currentTarget.dataset.type
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      winHeight: app.globalData.winHeight,
      winWidth: app.globalData.winWidth
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
  //图片操作
  //添加图片
  bindaddimg: function(e) {
    var that = this;
    var temp = that.data.tempFilespath
    wx.chooseImage({
      count: 3 - temp.length,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var num = that.data.nimg
        temp = temp.concat(res.tempFilePaths)
        that.setData({
          tempFilespath: temp,
          nimg: that.data.nimg + res.tempFilePaths.length,
        })

      },
    })
  },
  bindaddposter: function(e) {
    var that = this;
    var temp = that.data.tempFilespath
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var num = that.data.nimg
        temp = temp.concat(res.tempFilePaths)
        that.setData({
          tempFilespath: temp,
          nimg: that.data.nimg + 1,
        })

      },
    })
  },
  //长按删除图片
  deleteimg: function(e) {
    var that = this;
    that.setData({
      tlock: true //实现加锁防止触发点击事件
    })
    wx.showModal({
      content: '是否删除图片',
      confirmColor: '#f01548',
      cancelColor: '#bfbfbf',
      success(res) {
        if (res.confirm) {
          that.setData({
            nimg: that.data.nimg - 1
          })
          var num = that.data.nimg
          var temp = that.data.tempFilespath
          temp.splice(num, 1)
          that.setData({
            tempFilespath: temp
          })
        }
      }
    })
    if (this.data.tlock) {
      //开锁
      setTimeout(() => {
        this.setData({
          tlock: false
        });
      }, 500); //延时开锁
    }
  },

  //点击预览
  viewimg: function(e) {
    if (this.data.tlock) { //检查锁
      return
    } else {
      var that = this;
      var current = e.target.dataset.url
      var temp = that.data.tempFilespath
      console.log(temp)
      console.log(current)
      wx.previewImage({
        current: current,
        urls: temp
      })
    }
  },
  //计数器
  inputnum: function(e) {
    var that = this;
    that.setData({
      currentlength: e.detail.value.length
    })
  },


  //启事提交

  nSubmit(e) {
    //纠错系统
    var value = e.detail.value;
    if (value.title == '') {
      util.showModal("请添加标题");
      return
    } else if (value.tag == '') {
      util.showModal("请选择种类标签")
      return
    } else if (value.contact == '') {
      util.showModal("请输入联系方式")
      return
    }
    //获取openid
    var openid = app.globalData.openid;
    //开始动画
    util.showLoading();
    //上传至数据库
    const db = wx.cloud.database()
    const _ = db.command
    setTimeout(() => {
      db.collection('notice').add({
        data: {
          title: value.title,
          tag: value.tag,
          seenum: 0,
          description: value.description,
          fileID: [],
          contactway: value.contactway,
          contact: value.contact,
          createTime: db.serverDate()
        },
        success: res => {
          var _id = res._id
          //上传图片
          var length = this.data.tempFilespath.length
          if (length > 0) {
            for (var i = 0; i < length; ++i) {
              var temp = this.data.tempFilespath[i];
              var cloudPath = openid + temp;
              cloudPath = util.stringset(cloudPath)
              cloudPath = './notice' + cloudPath
              wx.cloud.init();
              wx.cloud.uploadFile({
                cloudPath: cloudPath,
                filePath: temp,
                success: res => {
                  db.collection('notice').doc(_id).update({
                    data: {
                      fileID: _.push(res.fileID)
                    }
                  })
                },
                fail: err => {
                  console.log(err)
                }
              })
            }
          }
        },
        fail: console.error
      })
    }, 2000)


    //结束动画
    setTimeout(() => {
      util.hideLoading();
      this.setData({
        currentlength: 0,
        nvalue: {},
        nimg: 0,
        checked: false,
        tempFilespath: [],
      })
      util.showalert('发布成功')
    }, 2500)
  },

  //活动提交
  //活动允许报名
  allowsignup: function(e) {
    console.log(e)
    var that = this
    that.setData({
      asignup: e.detail.value
    })
  },
  aSubmit(e) {
    //纠错系统
    var value = e.detail.value;
    if (value.title == '') {
      util.showModal("请添加活动名称");
      return
    } else if (value.description == '') {
      util.showModal("请输入活动详情")
      return
    } else if (value.society == '') {
      util.showModal("请输入社团或组织名称")
      return
    } else if (this.data.asignup == true && value.numofpeople == '') {
      util.showModal("请设置名额")
      return
    } else if (this.data.nimg == 0) {
      util.showModal("请添加海报")
      return
    }
    //获取openid
    var openid = app.globalData.openid
    //开始动画
    util.showLoading();
    //上传至数据库
    const db = wx.cloud.database()
    const _ = db.command
    setTimeout(() => {
      db.collection('activity').add({
        data: {
          title: value.title,
          society: value.society,
          description: value.description,
          signup: this.data.asignup,
          numofpeople: new Number(value.numofpeople),
          fileID: [],
          createTime: db.serverDate()
        },
        success: res => {
          var _id = res._id
          //上传图片
          var length = this.data.tempFilespath.length
          if (length > 0) {
            var temp = this.data.tempFilespath[0]
            var cloudPath = openid + temp;
            cloudPath = util.stringset(cloudPath)
            cloudPath = './activity' + cloudPath
            wx.cloud.init();
            wx.cloud.uploadFile({
              cloudPath: cloudPath,
              filePath: temp,
              success: res => {
                db.collection('activity').doc(_id).update({
                  data: {
                    fileID: _.push(res.fileID)
                  }
                })
              },
              fail: console.error
            })
          }
        },
        fail: console.error
      })
    }, 2000)
    //结束动画复位
    setTimeout(() => {
      util.hideLoading();
      this.setData({
        currentlength: 0,
        avalue: {},
        tempFilespath: [],
        nimg: 0,
      })
      util.showalert('发布成功')
    }, 2500)
  },

  //二手发布
  sSubmit(e) {
    var value = e.detail.value;
    if (value.title == '') {
      util.showModal("请添加物品名称");
      return
    } else if (value.price == '') {
      util.showModal("请添加物品价格")
      return
    } else if (value.tag == '') {
      util.showModal("请选择物品标签")
      return
    } else if (this.data.nimg == 0) {
      util.showModal('请添加至少一张图片')
      return
    } else if (value.contact == '') {
      util.showModal('请添加联系方式')
      return
    }
    //获取openid
    var openid = app.globalData.openid
    //开始动画
    util.showLoading();

    //上传至数据库
    const db = wx.cloud.database()
    const _ = db.command
    setTimeout(() => {
      db.collection('secondhand').add({
        data: {
          title: value.title,
          price: value.price,
          tag: value.tag,
          description: value.description,
          fileID: [],
          contactway: value.contactway,
          contact: value.contact,
          createTime: db.serverDate()
        },
        success: res => {
          var _id = res._id
          //上传图片
          var length = this.data.tempFilespath.length
          if (length > 0) {
            for (var i = 0; i < length; ++i) {
              var temp = this.data.tempFilespath[i];
              var cloudPath = openid + temp;
              cloudPath = util.stringset(cloudPath)
              cloudPath = './secondhand' + cloudPath
              wx.cloud.init();
              wx.cloud.uploadFile({
                cloudPath: cloudPath,
                filePath: temp,
                success: res => {
                  db.collection('secondhand').doc(_id).update({
                    data: {
                      fileID: _.push(res.fileID)
                    }
                  })
                },
                fail: err => {
                  console.log(err)
                }
              })
            }
          }

        },
        fail: console.error
      })
    }, 2000)
    setTimeout(() => {
      util.hideLoading();
      this.setData({
        currentlength: 0,
        svalue: {},
        checked: false,
        tempFilespath: [],
      })
      util.showalert('发布成功')
    }, 2500)
  },

  //代取发布
  bSubmit(e) {
    var value = e.detail.value
    if (value.stand == '') {
      util.showModal("请添加快递点");
      return
    } else if (value.destination == '') {
      util.showModal("请添加收货点");
      return
    } else if (value.contact == '') {
      util.showModal("请添加联系方式")
      return
    }
    //获取openid
    var openid = app.globalData.openid
    //开始动画
    util.showLoading();
    //上传至数据库
    setTimeout(() => {
      const db = wx.cloud.database()
      db.collection('express').add({
        data: {
          stand: value.stand,
          destination: value.destination,
          contactway: value.contactway,
          contact: value.contact,
          createTime: db.serverDate()
        },
        success: res => {
          console.log(res)
        },
        fail: console.error
      })
    }, 1000)
    setTimeout(() => {
      util.hideLoading();
      this.setData({
        bvalue: {},
      })
      util.showalert('发布成功')
    }, 1500)
  }


})