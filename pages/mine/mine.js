// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        item:[
            {src:'../../assets/image/pay.png',title:"待付款"},
            {src:'../../assets/image/after.png',title:"已报名"},
            {src:'../../assets/image/after.png',title:"退课/售后"}
        ]
    },
    // 点击跳转登陆页面
    landingClick(e){
        wx.navigateTo({
          url: '../landing/landing',
        })
    },
    informationClick(){
        wx.navigateTo({
          url: '../mine/minepage/information/information',
        })
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