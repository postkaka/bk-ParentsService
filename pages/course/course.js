// pages/course/course.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
          title: '课程科目',
          fontColor: "#333333",
          headerbg: '#F5F5F5',
          hiddenBlock: false,
          slot: false
        },
        course:[
        {src:"../../assets/image/course/courses.png",show:["创意美术","素描"],show1:["中国舞","芭蕾舞","爵士舞","街舞"],
        show2:["合唱团","音乐剧","大师课","乐团"],show3:["尤克里里","架子鼓","古琴","钢琴","古琴"]},
        {src:"../../assets/image/course/courses-1.png",show:["英语","口才"],show1:["国学","国画"],
        show2:["硬笔书法","软笔书法"],show3:["尤克里里","托管","幼小衔接"]},
        {src:"../../assets/image/course/courses-2.png",show:["儿童体智能","儿童体适能"],show1:["轮滑","跆拳道","围棋"],
        },
        {src:"../../assets/image/course/courses-3.png",show:["机器人编程","无人机"]},
        ],
        items:[
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-1.png"}, 
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"},
            {name:"课程名称课程名称",price:"￥100000",cout:"60000",src: "../../assets/image/course-2.png"}
        ],
        currentIndex: 7,
        itemIndex: 0,
        itemIndex1: 7,
        itemIndex2: 7,
        itemIndex3: 7,
        show: false,
        display:""
    },
            /**
     * tab点击事件
     */
    itemClick(e) {
        // 1.设置最新的index
        this.setData({
          currentIndex: e.currentTarget.dataset.index,
          itemIndex: 0,
          itemIndex1: 7,
          itemIndex2: 7,
          itemIndex3: 7,
          show: true,
          display: "block",
        })
      },
    // 第一组点击
    viewClick(e) {
        // 1.设置最新的index
        this.setData({
            itemIndex: e.currentTarget.dataset.index,
            itemIndex1: 7,
            itemIndex2: 7,
            itemIndex3: 7
        })
      },
    //   第二组点击
      viewClick1(e) {
        // 1.设置最新的index
        this.setData({
            itemIndex1: e.currentTarget.dataset.index,
            itemIndex: 7,
            itemIndex2: 7,
            itemIndex3: 7
        })
      },
      //   第三组点击
      viewClick2(e) {
        // 1.设置最新的index
        this.setData({
            itemIndex2: e.currentTarget.dataset.index,
            itemIndex: 7,
            itemIndex1: 7,
            itemIndex3: 7
        })
      },
      //   第四组点击
      viewClick3(e) {
        // 1.设置最新的index
        this.setData({
            itemIndex3: e.currentTarget.dataset.index,
            itemIndex: 7,
            itemIndex1: 7,
            itemIndex2: 7
        })
      },
      //监听屏幕头部高度
      

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showToast({title: '加载中', icon: 'loading', duration: 20000});
        wx.hideToast();

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