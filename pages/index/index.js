// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background:[
            "../../assets/image/figure.png",
            "../../assets/image/figure.png",
            "../../assets/image/figure.png"
        ],
        class:[
            "../../assets/image/curriculum.png",
            "../../assets/image/review.png",
            "../../assets/image/results.png",
            "../../assets/image/class.png",
            "../../assets/image/homework.png"
        ],
        course:["推荐课程","国学","美术","声乐","书法","舞蹈","口才"],
        item:[
            {name:"某某某",introduce:"曾获得XXXXXX奖",image:"../../assets/components-image/t1.png"},
            {name:"某某某",introduce:"曾获得XXXXXX奖",image:"../../assets/components-image/t2.png"},
            {name:"某某某",introduce:"曾获得XXXXXX奖",image:"../../assets/components-image/t1.png"},
            {name:"某某某",introduce:"曾获得XXXXXX奖",image:"../../assets/components-image/t2.png"}
        ],
        items:[
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"}
        ],
        stu:[
            {name:"风采标题",title:"李冰冰",introduce:"风采详情风采详情风采详情",image:"../../assets/components-image/x1.png"},
            {name:"风采标题",title:"李冰冰",introduce:"风采详情风采详情风采详情",image:"../../assets/components-image/x1.png"}
        ],
        scrollTop:0
    },
    onPageScroll: function(e){
        // console.log(e)
        this.setData({
            scrollTop: e.scrollTop
        })
        // console.log(this.data.scrollTop)
    },
    courseClick(){
        console.log("跳转到精选课程页")
        wx.switchTab({
          url: '../course/course',
        })

    },
    teacherClick(){
        console.log("跳转到教学老师页")
        wx.navigateTo({
          url: '../teacher/teacher',
        })
    },
    teachersClick(){
        console.log("跳转到教师详情页")
        wx.navigateTo({
          url: '../teacher-detail/teacher-detail',
        })  
    },
    studentClick(){
        console.log("跳转到学员风采")
        wx.navigateTo({
          url: '../students-demeanour/students-demeanour',
        })
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