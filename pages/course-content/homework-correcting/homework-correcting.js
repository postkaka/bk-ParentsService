// pages/course-content/homework-correcting/homework-correcting.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header: {
		    homeCapsule: true,
		    title: '我的课时',
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
        correct:{
            item:'很好',
            time:'2020-05-20 09:42',
            number: 5,
            submittime:"2020-05-20 16:11",
            submit:'136',
            particulars:'121',
            classname:'测试班级',
            name:'124',
            type: 1,
            lasttime:"2020-05-19 周二"
        },
        id:0,
        click:1,
        compile:'编辑'
    },
    compileClick(){
        if(this.data.click == 1){
            this.setData({
                click: 0,
                compile:"提交"
            })
        }else{
            this.setData({
                click: 1,
                compile:"编辑"
            })
        }
      
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id : options.id
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