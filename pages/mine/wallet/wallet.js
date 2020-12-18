// pages/mine/wallet/wallet.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的钱包',
            fontColor: "#FFFFFF",
            headerbg: '#184571',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fsback.png'
          },
          balance:"10199.90",
          give:"0.00",
          wallet:[
              {time:"2020-06-10 16:14:16",type:"充值",price:'5000.00'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'8000.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'8000.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'23000.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'1.00'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'8000.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'1.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'1.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'1.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'0.01'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'0.01'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'0.01'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"充值",price:'2300.00'},
              {time:"2020-06-10 16:14:16",type:"消费",price:'8000.00'}
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