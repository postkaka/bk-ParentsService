// pages/teacher/teacher.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '教学教师',
            headerbg: '#f40',
            hiddenBlock: false,
            slot: false
          },
          items:[
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t1.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t2.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t1.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t2.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t1.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t2.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t1.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t2.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t1.png"}, 
            {name:"某某某",cout:"曾获得XXXX奖",src: "../../assets/image/teacher/t2.png"}, 
           
           
           
        ],
    },
    teachersClick(){
        console.log("进入教学详情")
        wx.navigateTo({
          url: '../teacher-detail/teacher-detail',
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