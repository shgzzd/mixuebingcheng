// pages/store/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:0,
    longitude:0,
    markers: [],
    active: 1,
    storeList:[
      {"_id":"5464a29462600fa20190669907ce36e9","address":"高桥镇学院路788号","name":"蜜雪冰城（财经学院店）","opening_time":"10:00 ~ 22:00","status":"OPENING","distance":"0.25","created_time":1650462626301,"updated_time":1650545901063,"location":{"coordinates":[120.264275,30.184871],"type":"Point"}},
      {"_id":"1fee1e97626010d101283343646f60ba","address":"高桥镇藕缆桥村（联丰中路469号宁波国际文武学校）","name":"宁波市911775店","opening_time":"09:00 ~ 22:00","status":"CLOSED","distance":"2.20","created_time":1650462929469,"updated_time":1650462929469,"location":{"coordinates":[120.266911,30.185693],"type":"Point"}},
      {"_id":"bb4c2515626159f000d0dbbd38f1b42a","address":"高桥镇杨家槽路24号","name":"蜜雪冰城（高桥店）","opening_time":"09:00 ~ 22:00","status":"OPENING","distance":"2.70","created_time":1650547183998,"updated_time":1650552833763,"location":{"coordinates":[120.153917,30.273996],"type":"Point"},"phone":"18989864117"}],
      storeDetailShow: false,
      currentStore:null

  },
  gotoMenu() {
    wx.navigateTo({
      url: '/pages/menu/index',
    })
  },
  popupStoreDetail(e) {
    const {store} = e.currentTarget.dataset
    this.setData({
      storeDetailShow:true,
      currentStore: store
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getLocation({
      type:"wgs84",
      success:res=>{
        console.log('纬度',res.latitude)
        console.log('经度',res.longitude)
        that.setData({
          latitude:res.latitude,
          longitude:res.longitude
        })
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