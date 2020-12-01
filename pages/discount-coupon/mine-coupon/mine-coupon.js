// pages/discount-coupon/mine-coupon/mine-coupon.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的优惠券',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          infor:[
              {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程"},
              {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程"},
              {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程"}
          ],
          display:"none",
          course:["待使用","已使用","已过期"]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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