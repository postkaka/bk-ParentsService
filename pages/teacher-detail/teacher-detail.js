// pages/teacher-detail/teacher-detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '教学详情',
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          type: 1,
          stu:[
            {name:"课程名称课程名称课程名称",introduce:"课程介绍课程介绍课程介绍课程介绍课程",image:"../../assets/components-image/x1.png"},
            {name:"课程名称课程名称课程名称",introduce:"课程介绍课程介绍课程介绍课程介绍课程",image:"../../assets/components-image/x1.png"}
        ],
    },
    tabClick(){
        this.setData({
            type:1
        })

    },
    tabClicks(){
        this.setData({
            type:2
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showToast({title: '加载中', icon: 'loading', duration: 20000});
        wx.hideToast();
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