Page({

  /**
   * 页面的初始数据
   */
  data: {
     current:0,
     data:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    var tap = options.tap
    var id = options.id
    wx.cloud.init();
    const db = wx.cloud.database();
    that.setData({
          current:tap
    })
    if (tap == 0) {
      db.collection('notice').doc(id).get({
           success(res){
              console.log(res.data)
              that.setData({
                   data:res.data
              })
           }
      })
    } else if (tap == 1) {
      db.collection('activity').doc(id).get({
        success(res) {
          console.log(res.data)
        }
      })
    } else if (tap == 2) {
      db.collection('secondhand').doc(id).get({
        success(res) {
          console.log(res.data)
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

  }
})