// pages/hour/homework/homework.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的课时',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        type: 1,
        list: [
            {type:"0",name:"新作业",homeworktypedisplay:'',homeworktype:'必做',classname:'测试班级',time:'2020-05-22',week:'周五',overtime:'超时'},
            {type:"1",name:"124",homeworktypedisplay:'',homeworktype:'必做',classname:'测试班级',time:'2020-05-22',week:'周五',overtime:'超时', qualityitem:'5'}
        ],
        unfinished: [
            {type:"1",name:"124",homeworktypedisplay:'',homeworktype:'必做',classname:'测试班级',time:'2020-05-22',week:'周五',overtime:'超时', qualityitem:'5'}
        ]
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
        this.setData({
            type: options.type
        })
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