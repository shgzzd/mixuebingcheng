import swiperApi from '../../api/swiper'
import goodsApi from '../../api/goods'
import goodsCategoryApi from '../../api/goods_category'

// pages/menu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerStyle: '',
    swiperList: [],
    goodsList:[]
  },
  headerStyle(){

  },
  makeHeaderStyle() {
    const { top, bottom, height } = wx.getMenuButtonBoundingClientRect()
    const menuButtonCenterPoint = top + height/2
    const headerStyle = 'margin-top: calc(' + menuButtonCenterPoint + 'px - 32rpx);'
    this.setData({
      headerStyle
    })
  },
  switchCurrentStore(){
    wx.switchTab({
      url: '/pages/store/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.makeHeaderStyle();
    this.fetchSwiperList();
    this.feachData();
  },
  fetchSwiperList() {
    swiperApi.list().then(res=>{
      this.setData({
        swiperList: res.data
      })
    })
  },
  feachData(){
    goodsApi.list().then(res => {
      this.setData({
        goodsList: res.result
      })
    })
    goodsCategoryApi.list().then(res => {
      console.log(res);
    })
  },
})