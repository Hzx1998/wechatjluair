// pages/first/first.js

var util = require('../../utils/util.js')
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      openId:'',
      imgUrl: '',  
      contact:[
        {Type:'QQ',value:1},{Type:'wechat',value:2},{Type:'TEL',value:3},{Type:'email',value:4}
      ],   
      index:0,
      radioarray:[{value:1, name:"其他",checked:"true" },
                  {value:2,name:"启事"},
                  {value:3,name:"活动"},
                  {value:4,name:"二手"},
                  {value:5,name:"代取"}],
      typearray:["其他","启事","活动","二手","代取"],
      imagepath:0,
      imageflag:0,
     masgMaxlen:200,
     currentlen:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getStorage({
      key: 'weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A',
      success: function (res) {
        app.globalData.openId = res.data.userinfo.openId
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
  radioChange:function(e){
     console.log(e.detail.value)
  },

  //图片信息
  chooseimage:function(e){
      var that=this
      wx.chooseImage({
        count: 1,
        sizeType: ['original','compressed'],
        sourceType: ['album','camera'],
        success:function(res){
          var filePath=res.tempFilePaths[0]
          util.showBusy('正在上传')
     
              // 上传图片
              wx.uploadFile({
                url: config.service.uploadUrl,
                filePath: filePath,
                name: 'file',

                success: function (res) {
                  util.showSuccess('上传图片成功')
                  console.log(res)
                  res=JSON.parse(res.data)
                  console.log(res)
                  that.setData({
                    imgUrl: res.data.imgUrl,
                    imageflag: 1,
                  })
                },
                fail: function (e) {
                  util.showModel('上传图片失败')
                }
              })
        },
        fail: function (e) {
          console.error(e)
        }

      })
  },
//删除图片
  deleteimage: function (e) {
    var that=this
    wx.showModal({
         title:"提醒",
         longpress:400,
         content:"是否删除图片？",
         cancelColor:"#e6e6e6",
         confirmColor:"#f01548",
        success:function(res){
          if(res.confirm){
            that.setData({
              imageflag: 0,
            })
          }else if(res.cancel){
              console.log("cancel")
          }
        }
      
    })
  },
  //提交表单
  submit:function(e){
    if ( e.detail.value.title==''){
      util.showModel('未输入标题','请重新输入')
    } else if (e.detail.value.content == '') 
    {
      util.showModel('未输入内容', '请重新输入')
    }
    
    else{
  var that=this
  e.detail.value.openId = app.globalData.openId,
  e.detail.value.imgUrl=that.data.imgUrl,


   util.showBusy('发送中')
   qcloud.request({
     url:`${config.service.host}/weapp/addAir`,
     login:true,
     data:e.detail.value,
     success(result){
       util.showSuccess('发送成功')
       that.setData({
         requestResult: JSON.stringify(result.data)
       })
       wx.navigateBack({
         changed: true
       })
     },
     fail(error) {
       util.showModel('发送失败');
       console.log('request fail', error);
     }
   })
    }
  },
  //选择联系方式种类
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //字数统计
  getwordsnum:function(e){
          var value=e.detail.value,len=parseInt(value.length);
          if(len>this.data.noteMaxlen) return
          this.setData({
            currentlen:len
          })
  }
})