// components/cart-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(){
      wx.navigateTo({
        url: '/pages/check/index',
      })
    },
  }
})
