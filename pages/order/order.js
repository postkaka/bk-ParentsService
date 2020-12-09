// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的订单',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        course:["全部订单","待付款","已报名","已失效"],
        orders:[
            {name:"测试名称",type:"待付款",image:"../../assets/image/selective.png",className:"美术XXXXXXXX课程",
        classNameNumber:"48",classPrice:"10000.00",studentName:"冰冰"}
        ],
        nub:0
    },
    itemClick(e){
        console.log(e.detail)
        this.setData({
            nub:e.detail
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