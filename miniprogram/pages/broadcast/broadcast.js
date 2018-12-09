
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
     currentTab:0,
     winHeight:0,
     winWidth:0,
     tabButtonlist: [{ preicon: "icon1/prelost.png", icon: "icon1/lost.png", name: "启事" }, 
                     { preicon: "icon1/preactivity.png", icon: "icon1/activity.png", name: "活动" },
                     { preicon: "icon1/prestand.png", icon: "icon1/stand.png", name: "二手" }, 
                     { preicon: "icon1/preexpress.png", icon: "icon1/express.png", name: "代取" },
                     { preicon: "icon1/preothers.png",icon:"icon1/others.png",name:"待开发"}],
     tabbarlist:[{preicon:"../../images/icon/broadcast.png",icon:"../../images/icon/sbroadcast.png",name:"广播站"},
       { preicon: "../../images/icon/first.png", icon: "../../images/icon/sfirst.png", name: "发布" },
       { preicon: "../../images/icon/mine.png", icon: "../../images/icon/smine.png", name: "我的" }
                ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    //获取系统信息
    wx.cloud.init();
    wx.cloud.callFunction({
      name: 'test',
      complete: res => {
        console.log('callFunction test result: ',res)
      }
    })

    var that = this;
   
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
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
    
  },

  //滑动切换事件函数
  rollChange:function(e){
    var that=this;
    that.setData({currentTab:e.detail.current});
  },
  //点击切换事件函数
  tabbar:function(e){
      console.log(e)
      var that=this;
      if(that.data.currentTab===e.currentTarget.dataset.current)
      {
        return false;
      }else{
        that.setData({
          currentTab:e.currentTarget.dataset.current
        })
      }
  },

})