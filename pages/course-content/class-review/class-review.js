// pages/course-content/class-review/class-review.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
		header: {
		    homeCapsule: true,
		    title: '课堂点评',
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
		 classinfor: {
		 	name:"测试班级",
		 	time:"2020-03-16 09:10 周一",
		 	message:"很好"
		 },
         display: "none",
         currentIndex: 0,
         type:["测试班级1","测试班级2"]
    },
    bgClick(){
        this.setData({
            display: ""
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