var util = require('../../utils/util.js')
var app = getApp()
Page({
  //1.启事分享功能
  //2.
  /**
   * 页面的初始数据
   */
  data: {

    currentTab: 0,
    winHeight: 0,
    winWidth: 0,
    tabButtonlist: [{
        preicon: "icon1/prelost.png",
        icon: "icon1/lost.png",
        name: "启事"
      },
      {
        preicon: "icon1/preactivity.png",
        icon: "icon1/activity.png",
        name: "活动"
      },
      {
        preicon: "icon1/prestand.png",
        icon: "icon1/stand.png",
        name: "二手"
      },
      {
        preicon: "icon1/preexpress.png",
        icon: "icon1/express.png",
        name: "代取"
      },
      {
        preicon: "icon1/preothers.png",
        icon: "icon1/others.png",
        name: "待开发"
      }
    ],
    nlist: [],
    alist: [],
    slist: [],
    blist: [],
    nloading: false,
    aloading: false,
    sloading: false,
    bloading: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    //获取系统信息

    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
        app.globalData.winHeight = res.windowHeight,
          app.globalData.winWidth = res.windowWidth
      }
    })
    //启动页初始化
    wx.cloud.init();
    var db = wx.cloud.database();
    if (that.data.nlist.length <= 10) {
      db.collection('notice').orderBy('createTime', 'desc').limit(10).get({
        success(res) {
          console.log(res.data)
          if (res.data.length > 0) {
            that.setData({
              nlist: res.data,
              nloading: true
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

  //预览页跳转
  preview: function(e) {
    console.log(e)
    var n = e.currentTarget.dataset.tap
    var id = e.currentTarget.dataset.id
      setTimeout(() => {
        wx.navigateTo({
          url: '../preView/preView?tap=' + n + '&id=' + id,
        })
      }, 500)
  },
  //界面显示
  loadOrigincontent: function(e) {
    var that = this;
    var n = that.data.nlist;
    var a = that.data.alist;
    var s = that.data.slist;
    var b = that.data.blist;
    wx.cloud.init();
    var db = wx.cloud.database();
    switch (that.data.currentTab) {
      case 0:
        if (n.length <= 10) {
          db.collection('notice').orderBy('createTime', 'desc').limit(10).get({
            success(res) {
              if (res.data.length > 0) {
                that.setData({
                  nlist: res.data,
                  nloading: true
                })
              }
            }
          })
        }
        break;
      case 1:
        if (a.length <= 5) {
          db.collection('activity').orderBy('createTime', 'desc').limit(5).get({
            success(res) {
              if (res.data.length > 0) {
                that.setData({
                  alist: res.data,
                  aloading: true
                })
              }
            }
          })
        }
        break;
      case 2:
        if (s.length <= 10) {
          db.collection('secondhand').orderBy('createTime', 'asc').limit(10).get({
            success(res) {
              if (res.data.length > 0) {
                that.setData({
                  slist: res.data,
                  sloading: true
                })
              }
            }
          })
        };
        break;
      case 3:
        if (b.length <= 10) {
          db.collection('express').orderBy('createTime', 'asc').limit(10).get({
            success(res) {
              if (res.data.length > 0) {
                that.setData({
                  blist: res.data,
                  bloading: true
                })
              }
            }
          })
        };
        break;
      default:
        break;
    }
  },
  //滑动切换事件函数
  rollChange: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
    that.loadOrigincontent();
  },
  //点击切换事件函数
  tabbar: function(e) {
    var that = this;
    if (that.data.currentTab === e.currentTarget.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.current
      })
    }
    that.loadOrigincontent();
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
  //滚动到底部事件
  nscrolltolower: function(e) {
    var that = this;
    that.setData({
      loading: true
    })
  },
  //loadingmore
  loadingmore: function(e) {
    util.showLoading();
    wx.setNavigationBarTitle({
      title: '正在加载',
    })
    var that = this
    var current = that.data.currentTab;
    var currentnum = 0;
    var loadingnum = 0;
    var database = ''
    switch (current) {
      case 0:
        database = 'notice';
        currentnum = that.data.nlist.length;
        loadingnum = 10;
        break;
      case 1:
        database = 'activity';
        currentnum = that.data.alist.length;
        loadingnum = 5;
        break;
      case 2:
        database = 'secondhand';
        currentnum = that.data.slist.length;
        loadingnum = 10;
        break;
      case 3:
        database = 'express';
        currentnum = that.data.blist.length;
        loadingnum = 10;
        break;
      default:
        break;
    }
    wx.cloud.init();
    const db = wx.cloud.database();
    db.collection(database).orderBy('createTime', 'desc').skip(currentnum).limit(loadingnum).get({
      success(res) {
        var clength = res.data.length
        util.hideLoading();
        wx.setNavigationBarTitle({
          title: '广播站',
        })
        if (clength == 0) {
          util.showalert('已经没有更多了(oﾟ▽ﾟ)o  ')
        }
        if (clength > 0) {
          res.data = that.data.nlist.concat(res.data)
          that.setData({
            nlist: res.data,
          })
        }
      }
    })
  },
  bindrefresh: function(e) {
    util.showLoading();
    wx.setNavigationBarTitle({
      title: '正在刷新',
    })
    var that = this
    var current = that.data.currentTab;
    var num = 0;
    var database = ''
    switch (current) {
      case 0:
        database = 'notice';
        num = 10;
        break;
      case 1:
        database = 'activity';
        num = 5;
        break;
      case 2:
        database = 'secondhand';
        num = 10;
        break;
      case 3:
        database = 'express';
        num = 10;
        break;
      default:
        break;
    }
    wx.cloud.init();
    const db = wx.cloud.database();
    db.collection(database).orderBy('createTime', 'desc').limit(num).get({
      success(res) {
        if (current == 0) {
          that.setData({
            nlist: res.data
          })
        } else if (current == 1) {
          that.setData({
            alist: res.data
          })
        } else if (current == 2) {
          that.setData({
            slist: res.data
          })
        } else if (current == 3) {
          that.setData({
            blist: res.data
          })
        }
        wx.setNavigationBarTitle({
          title: '广播站',
        })
        util.hideLoading()
      }
    })
  }
})