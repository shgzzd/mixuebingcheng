// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  login(e) {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  goToBack(){
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})