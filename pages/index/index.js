// 引入用来发送请求的方法
import{ request } from "../../request/index.js";



Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList:[],
    // 导航数组
    catesList: [],
    // 楼层数据
    floorList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // var reqTask = wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/home/multidata',
    //   success: (result) => {
    //     console.log(result)
    //     this.setData({
    //       swiperList:result.data.data.banner.list
    //     })
    //   }
    // });
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  getSwiperList() {
    request({ url: "http://152.136.185.210:8000/api/n3/home/multidata" })
      .then(result => {
        this.setData({
          swiperList: result.data.data.banner.list
        })
      })
  },
  getCateList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems" })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })
  },
  getFloorList() {
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata" })
      .then(result => {
        this.setData({
          floorList: result.data.message
        })
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