// pages/students-demeanour/students-demeanour.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '学员风采',
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          list:[
              {src:"../../assets/components-image/x1.png",tite1:'风采标题风采标题风采标题',tite2:'学员:李冰冰'},
              {src:"../../assets/components-image/x1.png",tite1:'风采标题风采标题风采标题',tite2:'学员:李冰冰'},
              {src:"../../assets/components-image/x1.png",tite1:'风采标题风采标题风采标题',tite2:'学员:李冰冰'},
          ]
    },
    studentsClick(){
        console.log("跳转到风采详情")
        wx.navigateTo({
          url: '../demeanour-detail/demeanour-detail',
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