// pages/discount-coupon/favorable-course/favorable-course.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '可用商品',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          items:[
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png",prices:"满2000减20",time:'周日13:00-14:30'}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png",prices:"满2000减20",time:'周日13:00-14:30'}, 
        ]
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