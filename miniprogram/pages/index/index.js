import swiper from "../../api/swiper"

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      // {
      //   imageUrl:'../../assets/carousel/IMG_1508.JPG',
      //   type: 'url',
      //   target: 'https://www.baidu.com'
      // },
      // {
      //   imageUrl:'../../assets/carousel/IMG_1508.JPG',
      //   type: 'url',
      //   target: 'https://www.baidu.com'
      // },
      // {
      //   imageUrl:'../../assets/carousel/IMG_1508.JPG',
      //   type: 'product',
      //   target: '1'
      // },
      // {
      //   imageUrl:'../../assets/carousel/IMG_1508.JPG',
      //   type: 'url',
      //   target: 'https://www.baidu.com'
      // }
    ],
    current: 0,
    isLogin: false

  },
  onSwiperChange(e) {
    const { current } = e.detail
    this.setData({
      current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    swiper.list().then(res=>{
      // console.log(res);
      this.setData({
        swiperList: res.data
      })
    })
  },
  gotoLogin() {
  var that = this;
  console.log(that.data.i, "i")
  if (that.data.i == 1) {
    that.data.i = 2,
    that.setData({
    isLogin: true,
    })
  } 
  else {
  that.data.i = 1,
  that.setData({
    isLogin: true,
  })
 
  }
 
  },
  onMenuCardClick() {
    wx.switchTab({
      url: '/pages/store/index',
    })
  },
  onArticleClick(){
    wx.navigateTo({
      url: '/pages/web-view/index?url=http://mxbc.com/',
    })
  },

  onSwiperTab(e) {
    // console.log(e);
    const {item} = e.currentTarget.dataset
    item.type === 'url' ? wx.navigateTo({
      url: `/pages/web-view/index?url=${item.target}`,
    }):wx.navigateTo({
      url: `/pages/product/detail?id=${item.target}`,
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