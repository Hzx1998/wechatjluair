var util = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MC43MjcgNDkwLjcyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkwLjcyNyA0OTAuNzI3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTQ1My40NDMsMTYwLjIxNGwtMTE5LjctOC42Yy0yLjUtMC4yLTQuNy0xLjctNS42LTQuMWwtNDUuNi0xMTFjLTYuMy0xNS4zLTIwLjUtMjQuOC0zNy4xLTI0LjhzLTMwLjcsOS41LTM3LjEsMjQuOSAgIGwtNDUuNywxMTEuMWMtMSwyLjMtMy4xLDMuOS01LjYsNC4xbC0xMTkuNSw4LjZjLTE2LjIsMC45LTMwLDExLjUtMzUuMywyNy4xYy01LjQsMTUuOC0wLjksMzIuNCwxMS45LDQzLjNsOTIuNSw3Ni40ICAgYzEuOSwxLjYsMi44LDQuMiwyLjIsNi42bC0yOC4yLDExNS40Yy0zLjMsMTItMSwyNC40LDYuMywzNC4xYzcuNSw5LjgsMTkuMiwxNS43LDMxLjUsMTUuN2M3LjYsMCwxNS0yLjMsMjEuMS02LjRsMTAxLjEtNjIuOSAgIGMyLjEtMS4zLDQuOC0xLjMsNi45LDBsMTAyLjEsNjIuN2M2LjQsNC4zLDEzLjgsNi42LDIxLjMsNi42YzExLjUsMCwyMi45LTUuNSwzMC4zLTE0LjhjNy43LTkuNiwxMC41LTIyLjEsNy43LTM0LjZsLTI4LjMtMTE1LjcgICBjLTAuNi0yLjUsMC4zLTUuMSwyLjItNi43bDkzLjktNzYuNmMxMi42LTEwLjgsMTcuMS0yNy40LDExLjgtNDMuMkM0ODMuMzQzLDE3MS44MTQsNDY5LjQ0MywxNjEuMTE0LDQ1My40NDMsMTYwLjIxNHogICAgTTQ2MS4xNDMsMjExLjcxNGwtOTMuNyw3Ni41Yy05LjIsNy41LTEzLjQsMTkuOS0xMC41LDMxLjVsMjguMywxMTUuNWMxLjUsNi44LTEuMiwxMS41LTMsMTMuN2MtMi44LDMuNS03LDUuNy0xMS4yLDUuNyAgIGMtMi42LDAtNS4yLTAuOC04LTIuN2wtMTAyLjUtNjNjLTQuOS0zLTEwLjUtNC42LTE2LjMtNC42cy0xMS41LDEuNi0xNi40LDQuN2wtMTAxLjUsNjMuMWMtNi41LDQuMy0xNS4yLDIuNC0xOS44LTMuNiAgIGMtMS45LTIuNS0zLjktNi44LTIuMS0xMy4xbDI4LjMtMTE1LjhjMi44LTExLjUtMS4zLTIzLjgtMTAuNC0zMS4zbC05Mi4zLTc2LjNjLTcuMy02LjMtNS4zLTE0LjQtNC41LTE2LjdzNC4xLTEwLDEzLjctMTAuNSAgIGwxMTkuNy04LjZjMTEuOC0wLjksMjItOC4yLDI2LjUtMTkuMmw0NS43LTExMS4xYzMuNy05LDEyLTkuNywxNC40LTkuN2MyLjQsMCwxMC43LDAuNywxNC40LDkuN2w0NS43LDExMS4xICAgYzQuNSwxMSwxNC43LDE4LjMsMjYuNSwxOS4ybDExOS45LDguN2M5LjQsMC41LDEyLjcsOC4yLDEzLjUsMTAuNUM0NjYuMTQzLDE5Ny41MTQsNDY4LjE0MywyMDUuNjE0LDQ2MS4xNDMsMjExLjcxNHoiIGZpbGw9IiNiZmJmYmYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K',
    acollect: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ3Mi4yMDgsMjAxLjcxMmM5LjI3MS05LjAzNywxMi41NDQtMjIuMyw4LjU0NC0zNC42MTNjLTQuMDAxLTEyLjMxMy0xNC40NDUtMjEuMTE4LTI3LjI1Ny0yMi45NzlsLTExMi4wMy0xNi4yNzkgICAgYy0yLjE5OS0wLjMxOS00LjEtMS43LTUuMDg0LTMuNjk0TDI4Ni4yOCwyMi42MzJjLTUuNzI5LTExLjYxLTE3LjMzMS0xOC44MjItMzAuMjc4LTE4LjgyMmMtMTIuOTQ3LDAtMjQuNTQ5LDcuMjEyLTMwLjI3OCwxOC44MjIgICAgbC01MC4xMDEsMTAxLjUxNmMtMC45ODUsMS45OTMtMi44ODUsMy4zNzQtNS4wODUsMy42OTRMNTguNTEsMTQ0LjEyYy0xMi44MTIsMS44NjEtMjMuMjU1LDEwLjY2Ni0yNy4yNTcsMjIuOTc5ICAgIGMtNC4wMDIsMTIuMzEzLTAuNzI4LDI1LjU3Niw4LjU0NCwzNC42MTNsODEuMDY1LDc5LjAxOWMxLjU5MSwxLjU1MiwyLjMxOCwzLjc4NywxLjk0Miw1Ljk3OGwtMTkuMTM3LDExMS41NzYgICAgYy0yLjE4OCwxMi43NjEsMi45NTgsMjUuNDE0LDEzLjQzMiwzMy4wMjRjMTAuNDc0LDcuNjEyLDI0LjEwMiw4LjU5NSwzNS41NiwyLjU3MmwxMDAuMjAxLTUyLjY3OSAgICBjMS45NjgtMS4wMzUsNC4zMTctMS4wMzUsNi4yODYsMGwxMDAuMjAyLDUyLjY3OWM0Ljk4NCwyLjYyLDEwLjM3NywzLjkxNSwxNS43NDQsMy45MTRjNi45NywwLDEzLjg5Ni0yLjE4NCwxOS44MTMtNi40ODcgICAgYzEwLjQ3NC03LjYxMSwxNS42MjEtMjAuMjY1LDEzLjQzMi0zMy4wMjRsLTE5LjEzNy0xMTEuNTc2Yy0wLjM3NS0yLjE5MSwwLjM1MS00LjQyNiwxLjk0Mi01Ljk3OEw0NzIuMjA4LDIwMS43MTJ6ICAgICBNMzYyLjU3OSwyOTEuMjc2bDE5LjEzNywxMTEuNTc4YzAuNjQsMy43MzQtMS42NjUsNS44NjMtMi42ODYsNi42MDRjLTEuMDIyLDAuNzQtMy43NiwyLjI3Ny03LjExMiwwLjUxM2wtMTAwLjIwMi01Mi42NzkgICAgYy00LjkxOS0yLjU4NS0xMC4zMTUtMy44NzktMTUuNzEyLTMuODc5Yy01LjM5NywwLTEwLjc5NCwxLjI5NC0xNS43MTIsMy44NzhsLTEwMC4yMDEsNTIuNjc4ICAgIGMtMy4zNTQsMS43NjMtNi4wOTEsMC4yMjgtNy4xMTItMC41MTNjLTEuMDIxLTAuNzQxLTMuMzI3LTIuODctMi42ODYtNi42MDRsMTkuMTM3LTExMS41NzYgICAgYzEuODc5LTEwLjk1NS0xLjc1LTIyLjEyNy05LjcxMS0yOS44ODZsLTgxLjA2NS03OS4wMTljLTIuNzEzLTIuNjQ2LTIuMDk5LTUuNzIzLTEuNzA4LTYuOTIzICAgIGMwLjM4OS0xLjIwMSwxLjcwMi00LjA1Miw1LjQ1MS00LjU5NmwxMTIuMDI3LTE2LjI3OWMxMC45OTktMS41OTgsMjAuNTA0LTguNTAyLDI1LjQyNC0xOC40NzFsNTAuMTAxLTEwMS41MTYgICAgYzEuNjc3LTMuMzk3LDQuNzkzLTMuNzY0LDYuMDU2LTMuNzY0YzEuMjYxLDAsNC4zNzcsMC4zNjYsNi4wNTUsMy43NjR2MC4wMDFsNTAuMTAxLDEwMS41MTYgICAgYzQuOTE5LDkuOTY5LDE0LjQyMywxNi44NzMsMjUuNDIyLDE4LjQ3MWwxMTIuMDI5LDE2LjI3OWMzLjc0OSwwLjU0NCw1LjA2MSwzLjM5NSw1LjQ1MSw0LjU5NiAgICBjMC4zOSwxLjIwMSwxLjAwNSw0LjI3OS0xLjcwOSw2LjkyM2wtODEuMDY1LDc5LjAxOUMzNjQuMzI5LDI2OS4xNDksMzYwLjcsMjgwLjMyMSwzNjIuNTc5LDI5MS4yNzZ6IiBmaWxsPSIjZjAxNTQ4Ii8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDEzLjc4MywyMi42MjVjLTYuMDM2LTQuMzg0LTE0LjQ4MS0zLjA0Ni0xOC44NjUsMi45ODhsLTE0LjMzNywxOS43MzJjLTQuMzg0LDYuMDM0LTMuMDQ3LDE0LjQ4MSwyLjk4OCwxOC44NjUgICAgYzIuMzk5LDEuNzQxLDUuMTc2LDIuNTgsNy45MjgsMi41OGM0LjE3NywwLDguMjk1LTEuOTMxLDEwLjkzNy01LjU2N2wxNC4zMzctMTkuNzMyICAgIEM0MjEuMTU1LDM1LjQ1Niw0MTkuODE4LDI3LjAwOSw0MTMuNzgzLDIyLjYyNXoiIGZpbGw9IiNmMDE1NDgiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xMzEuMzYsNDUuMjY1bC0xNC4zMzctMTkuNzMyYy00LjM4My02LjAzMi0xMi44MjktNy4zNy0xOC44NjUtMi45ODhjLTYuMDM0LDQuMzg0LTcuMzcyLDEyLjgzMS0yLjk4OCwxOC44NjUgICAgbDE0LjMzNywxOS43MzJjMi42NDMsMy42MzksNi43NjEsNS41NjksMTAuOTM5LDUuNTY5YzIuNzUzLDAsNS41MzEtMC44MzksNy45MjctMi41ODFDMTM0LjQwNyw1OS43NDcsMTM1Ljc0NSw1MS4zLDEzMS4zNiw0NS4yNjUgICAgeiIgZmlsbD0iI2YwMTU0OCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5LjU1MiwzMDYuODI5Yy0yLjMwNS03LjA5My05LjkyNC0xMC45NzYtMTcuMDE5LTguNjcxbC0yMy4xOTcsNy41MzhjLTcuMDk1LDIuMzA1LTEwLjk3Niw5LjkyNi04LjY3MSwxNy4wMTkgICAgYzEuODU0LDUuNzA5LDcuMTQ5LDkuMzM3LDEyLjg0Miw5LjMzN2MxLjM4MywwLDIuNzktMC4yMTUsNC4xNzctMC42NjZsMjMuMTk3LTcuNTM4ICAgIEM0Ny45NzUsMzIxLjU0Myw1MS44NTcsMzEzLjkyNCw0OS41NTIsMzA2LjgyOXoiIGZpbGw9IiNmMDE1NDgiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYuMDA1LDQ1Ni43ODZjLTcuNDU5LDAtMTMuNTA2LDYuMDQ3LTEzLjUwNiwxMy41MDZ2MjQuMzkyYzAsNy40NTksNi4wNDcsMTMuNTA2LDEzLjUwNiwxMy41MDYgICAgYzcuNDU5LDAsMTMuNTA2LTYuMDQ3LDEzLjUwNi0xMy41MDZ2LTI0LjM5MkMyNjkuNTExLDQ2Mi44MzIsMjYzLjQ2NSw0NTYuNzg2LDI1Ni4wMDUsNDU2Ljc4NnoiIGZpbGw9IiNmMDE1NDgiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDIuNjY0LDMwNS43MTVsLTIzLjE5Ny03LjUzOGMtNy4wOTItMi4zMDMtMTQuNzE0LDEuNTc3LTE3LjAxOSw4LjY3MmMtMi4zMDUsNy4wOTUsMS41NzYsMTQuNzE0LDguNjcxLDE3LjAxOSAgICBsMjMuMTk3LDcuNTM4YzEuMzg3LDAuNDUsMi43OTMsMC42NjQsNC4xNzYsMC42NjRjNS42OTQsMCwxMC45ODktMy42MjksMTIuODQzLTkuMzM3ICAgIEM1MTMuNjQsMzE1LjYzOSw1MDkuNzU4LDMwOC4wMiw1MDIuNjY0LDMwNS43MTV6IiBmaWxsPSIjZjAxNTQ4Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==',
    current: 0,
    data: {},
    signup: true,
    signedup: false,
    collected: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var tap = options.tap
    var id = options.id
    var openid = app.globalData.openid
    wx.cloud.init();
    const db = wx.cloud.database();
    that.setData({
      current: tap
    })
    if (tap == 0) {

      db.collection('notice').doc(id).get({
        success(res) {
          console.log(res.data)
          that.setData({
            data: res.data
          })
          wx.setNavigationBarTitle({
            title: res.data.tag + '启事',
          })
        }
      })

    } else if (tap == 1) {
      db.collection('activity').doc(id).get({
        success(res) {
          that.setData({
            data: res.data
          })
          wx.setNavigationBarTitle({
            title: '活动详情',
          })
        },fail(err){
          console.log(err)
            util.showalert('该发布已删除')
          setTimeout(() => {
            wx.navigateBack({
              delta: 1
            })
          }, 500)
        }
      })
      db.collection('asignup').where({
        _openid: openid,
        aid: id,
      }).get({
        success(res) {
          console.log(res.data)
          if (res.data.length == 1) {
            that.setData({
              signedup: true
            })
          }
        }
      })
      db.collection('acollect').where({
        _openid: openid,
        aid: id,
      }).get({
        success(res) {
          console.log(res.data)
          if (res.data.length == 1) {
            that.setData({
              collected: true,
            })
          }
        }
      })
    } else if (tap == 2) {
      db.collection('secondhand').doc(id).get({
        success(res) {
          console.log(res.data.length)
          that.setData({
            data: res.data
          })
          wx.setNavigationBarTitle({
            title: res.data.tag + ':' + res.data.title,
          })
        },fail(err){
          util.showalert('该发布已删除')
          setTimeout(()=>{
            wx.navigateBack({
              delta: 1
            })
          },500)

        }
      })
      db.collection('scollect').where({
        _openid: openid,
        sid: id,
      }).get({
        success(res) {
          console.log(res.data)
          if (res.data.length == 1) {
            that.setData({
              collected: true,
            })
          }
        }
      })
    }
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
  //预览图片
  previewimg: function(e) {
    console.log(e)
    var urls = e.target.dataset.url;
    var current = e.target.dataset.current;
    wx.previewImage({
      current: current,
      urls: urls,
    })
  },
  //点击复制函数
  bindcopy: function(e) {
    var contact = e.target.dataset.contact
    console.log(contact)
    wx.setClipboardData({
      data: contact,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data)
          }
        })
      }
    })
    setTimeout(() => {
      util.showalert('联系方式已复制请及时取得联系｡◕ᴗ◕｡')
    }, 500)
  },
  //点击报名函数
  bindasignup: function(e) {
    var that = this
    var id = that.data.data._id
    var title = that.data.data.title
    var num = that.data.data.numofpeople
    wx.cloud.init();
    const db = wx.cloud.database();
    const _ = db.command
    if (that.data.signup == true && num > 0) {
      util.showLoading();
      db.collection('activity').doc(id).update({
        data: {
          numofpeople: _.inc(-1)
        }
      })
      db.collection('asignup').add({
        data: {
          aid: id,
          atitle: title,
        },
        success(res) {
          console.log(res)
        },
        fail: console.error,
      })
      if (num - 1 == 0) {
        db.collection('activity').doc(id).update({
          data: {
            signup: false
          }
        })
      }
      that.setData({
        signup: false
      })
      setTimeout(() => {
        util.hideLoading();
        util.showalert('报名成功')
      }, 1000)
    }
  },
  //收藏活动
  bindacollect: function(e) {
    var that = this
    var id = that.data.data._id
    var title = that.data.data.title
    util.showLoading()
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('acollect').add({
      data: {
        aid: id,
        atitle: title,
      },
      success(res) {
        console.log(res)
      },
      fail: console.error,
    })
    setTimeout(() => {
      that.setData({
        collected: true
      })
      util.hideLoading();
      util.showalert('收藏成功')
    }, 500)
  },
  //取消收藏活动
  bindcancelac: function(e) {
    var that = this
    var id = that.data.data._id
    var openid = app.globalData.openid
    util.showLoading()
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('acollect').where({
      _openid: openid,
      aid: id
    }).get({
      success(res) {
        console.log(res.data)

        db.collection('acollect').doc(res.data[0]._id).remove({
          success(res) {
            console.log(res)
          },
          fail: console.error,
        })
      }
    })

    setTimeout(() => {
      that.setData({
        collected: false
      })
      util.hideLoading();
      util.showalert('取消收藏')
    }, 500)
  },
  //收藏二手
  bindscollect: function(e) {
    var that = this
    var id = that.data.data._id
    var tag = that.data.data.tag
    var title = that.data.data.title
    util.showLoading()
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('scollect').add({
      data: {
        sid: id,
        stag: tag,
        stitle: title,
      },
      success(res) {
        console.log(res)
      },
      fail: console.error,
    })
    setTimeout(() => {
      that.setData({
        collected: true
      })
      util.hideLoading();
      util.showalert('收藏成功')
    }, 500)
  },
  bindcancelsc: function(e) {
    var that = this
    var id = that.data.data._id
    var openid = app.globalData.openid
    util.showLoading()
    wx.cloud.init()
    const db = wx.cloud.database();
    db.collection('scollect').where({
      _openid: openid,
      sid: id
    }).get({
      success(res) {
        console.log(res.data)
        db.collection('scollect').doc(res.data[0]._id).remove({
          success(res) {
            console.log(res)
          },
          fail: console.error,
        })
      }
    })
    setTimeout(() => {
      that.setData({
        collected: false
      })
      util.hideLoading();
      util.showalert('取消收藏')
    }, 500)
  }

})