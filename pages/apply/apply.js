// pages/apply/apply.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header: {
		    homeCapsule: true,
		    title: '报名确认',
		    fontColor: "#FFFFFF",
		    headerbg: '#184571',
		    hiddenBlock: false,
		    slot: false,
		    src:'../../assets/image/fsback.png'
		},
		infor:{
		    src:"../../assets/image/head.png",
		    name:"冰冰",
		    data:'18241097090'
          },
        infors:{
            src:"../../assets/image/selective.png",
            name:"美术XXXXXXXX课程",
            time:"2020-05-19 (周日) 13:00—14:30",
            teacher:"李某某",
            price:"￥10000.00",
            apply:"无可用"
        },
        type:1,
        payType:1,
        apply:"../../assets/image/applybanke.png",
        weixingapply:"../../assets/image/applyweixi-1.png",
        display: "none",
        infortime:[
            {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程"},
            {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程"}
        ]
    },
    btnClick(){
        console.log("付款成功")
        this.setData({
            type:0
        })
    },
    showClick1(){
            this.setData({
                payType: 1,
                apply:"../../assets/image/applybanke.png",
                weixingapply:"../../assets/image/applyweixi-1.png"
            })
    },
    showClick2(){
        this.setData({
            payType: 2,
            apply:"../../assets/image/applybanke-1.png",
            weixingapply:"../../assets/image/applyweixi.png"
        })
},
    discountClick(){
        console.log("优惠券")
        this.setData({
        display: ""
        })
    },
    couponUsePage(){
        this.setData({
        display:"none"
        })
        wx.showToast({
        title: '领取成功',
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