// pages/hour/classfind/classfind.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header: {
            homeCapsule: true,
            title: '我的课时',
            fontColor: "#FFFFFF",
            headerbg: '#184571',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fsback.png'
        },
        infor:{
            src:"../../assets/image/head.png",
            name:"测试班级 学员: 冰冰",
            data:'2020-03-16'
          },
        classes:[{name:"测试班级",techer:"任生"},{name:"测试班级1",techer:"测试老师1"}]
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