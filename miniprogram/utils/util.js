/*发布检错系统*/
var showModal=(content)=> {
  wx.showModal({
    content: content,
    showCancel: false,
    confirmColor: '#f01548',
    success: function(res) {
           if(res.confirm){
             return
           }
    },
  })
}
var showLoading=()=>{
      wx.showNavigationBarLoading();
}
var hideLoading=()=>{
      wx.hideNavigationBarLoading();
}
var stringset=(string)=>{
  string = string.replace("-", "")
  string = string.replace("\/\/", "")
  string = string.replace("\/", "")
  string = string.replace(":", "")
  return string;
}
var showalert=(title)=>{
  wx.showToast({
    icon:'none',
    title:title,
  })
}
module.exports = {showModal,showLoading,hideLoading,stringset,showalert}