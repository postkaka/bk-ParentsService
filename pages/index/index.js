// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        background:[
            "../../assets/image/figure-1.png",
            "../../assets/image/figure-1.png",
            "../../assets/image/figure-1.png"
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
            {name:"某某某",introduce:"毕业于xxxxx学校，曾获得XXXXXX奖",image:"../../assets/components-image/t1.png"},
            {name:"某某某",introduce:"毕业于xxxxx学校，曾获得XXXXXX奖",image:"../../assets/components-image/t2.png"},
            {name:"某某某",introduce:"毕业于xxxxx学校，曾获得XXXXXX奖",image:"../../assets/components-image/t1.png"},
            {name:"某某某",introduce:"毕业于xxxxx学校，曾获得XXXXXX奖",image:"../../assets/components-image/t2.png"}
        ],
        items:[
            "../../assets/image/course-1.png",
            "../../assets/image/course-2.png",
            "../../assets/image/course-1.png",
            "../../assets/image/course-2.png"
        ],
        currentIndex: 0
    },
    /**
     * tab点击事件
     */
    itemClick(e) {
        // 1.设置最新的index
        this.setData({
          currentIndex: e.currentTarget.dataset.index
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