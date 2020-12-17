// pages/order/orederItem/orderItem.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的订单',
            fontColor: "#FFFFFF",
            headerbg: '#184571',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fsback.png'
          },
          info:{
            classname:"测试班级",
            name:"冰冰",
            time:"2020-03-16 09:10",
            src:"../../../assets/image/head.png"
          },
          type:0,
          orders:{
            name:"测试名称",
            type:"已报名",
            image:"../../../assets/image/selective.png", 
            className:"美术XXXXXXXX课程",
            classNameNumber:"48",
            classPrice:"10000.00",
            discountsPrice:"0.00",
            goodsPrice:"0.00",
            payType:"微信",
            orderId:'13738299289482398'}
    },
    belowClick(){
        if(this.data.type == 0){
            this.setData({
                type: 1
            })
        } else {
            this.setData({
                type: 0
            })
        }
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