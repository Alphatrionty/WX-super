import { request } from "../../request/index.js";
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单数据
    leftMenuList:[],
    // 右侧商品数据
    rightContent:[],
    // 被点击的左侧菜单
    currentIndex:0
  },
  // 接口的返回数据
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
   * 1 先判断一下本地存储中有没有旧的数据
   * 2 没用旧数据 直接发送请求
   * 3 有旧数据 同时旧数据没有过期 使用本地的旧数据
   */
    this.getCates();
  },

  // 获取分类数据
  getCates() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/categories"
    }).then(res => {
      this.Cates=res.data.message;

      // 构造左侧菜单数据
      let leftMenuList=this.Cates.map(v=>v.cat_name);
      // 构造右侧的商品数据
      let rightContent=this.Cates[0].children;

      this.setData({
        leftMenuList,
        rightContent
      })
    })
  },
  // 左侧菜单的点击事件
  handleItemTap(e){
    // 获取被点击标题上的索引
    // 给data中的currentIndex赋值
    // 根据不同 的索引渲染右侧的商品内容
    const {index}=e.currentTarget.dataset;
    
    let rightContent=this.Cates[index].children;
      this.setData({
        currentIndex:index,
        rightContent
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