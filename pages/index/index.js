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
            {src:"../../assets/image/curriculum.png",url:''},
            {src:"../../assets/image/review.png",url:''},
            {src:"../../assets/image/results.png",url:''},
            {src:"../../assets/image/class.png",url:'hour/hour'},
            {src:"../../assets/image/homework.png",url:''}
        ],
        course:["推荐课程","查看更多"],
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
            {name:"风采标题",title:"李冰冰",introduce:"风采详情风采详情风采详情风采详情风采详情风采详情风采详情风采详情风采详情",image:"../../assets/components-image/x1.png"},
            {name:"风采标题",title:"李冰冰",introduce:"风采详情风采详情风采详情",image:"../../assets/components-image/x1.png"}
        ],
        isFiexd:false,
        tabScrollTop:0
    },
    scrollPosition(e) {
      wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
        // console.log(rect.top)
        if(rect.top < 0 ){
          this.setData({
            showTabControl: true
          })
        }else {
          this.setData({
            showTabControl: false
          })
        }
      }).exec()
    },
    //监听推荐的图片加载完成
  // loadover(){
  //   //获取某个控件距离顶部的高度
  //   this.createSelectorQuery().select('.tab-control').boundingClientRect(rect =>{
  //     this.data.showTabControl=rect.top;
  //   }).exec();
  // },
  
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
    classitemClick(e){
        let id = e.currentTarget.dataset.id
      if(id == 3){
        wx.navigateTo({
            url: '../hour/hour',
          })
      }else if(id == 4){
          wx.navigateTo({
            url: '../hour/homework/homework?type=1',
          })
      }else if(id == 1){
          wx.navigateTo({
            url: '../course-content/class-review/class-review',
          })
      }else if(id == 2){
        wx.navigateTo({
          url: '../grade/grade',
        })
      }else {
        wx.navigateTo({
          url: '../timetable/timetable',
        })
      }
    },
    discountClick(){
      console.log("跳转优惠礼券")
      wx.navigateTo({
        url: '../discount-coupon/discount-coupon',
      })
    },
    itemClick(e){
      wx.navigateTo({
        url: '../info/info?id='+ e.detail,
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