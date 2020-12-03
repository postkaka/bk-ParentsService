// pages/timetable/timetable.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '课程表',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        type:0,
        class:{name:'没有课程'},
        date:"",
        nowdate:'',
        classitem:{
            name:"美术XXX课程",
            time:"2020-11-19 周二 09:10~10:10"
        },
        lastday:0,
        pack:1,
        packsrc:'../../assets/image/back.png',
        class:[
            {
                name:"美术XXX课程",
                time:"2020-11-19 周二 09:10~10:10"
            },
            {
                name:"美术XXX课程",
                time:"2020-11-19 周二 09:10~10:10"
            },
            {
                name:"美术XXX课程",
                time:"2020-11-19 周二 09:10~10:10"
            },
        ]
    },
    nowdata(e){
        this.setData({
            nowdate: e.detail,
            date: e.detail
        })
    },
    nowSelect(e){
        this.setData({
            date: e.detail
        })
        let now =(new Date(this.data.nowdate)).getTime();
        let date =(new Date(this.data.date)).getTime();
        if(date < now){
            console.log("这是昨天")
            this.setData({
                lastday: 1
            })
        }else{
            this.setData({
                lastday:0
            })
        }
    },
    toggleType(){
       if(this.data.type == 0){
           this.setData({
               type: 1
           })
       }else{
           this.setData({
               type: 0
           })
       }
    },
    pickClick(){
      if(this.data.pack ==1 ){
        this.setData({
            pack: 0,
            packsrc: "../../assets/image/below.png" 
        })
      }else {
          this.setData({
              pack: 1,
              packsrc: "../../assets/image/back.png"
          })
      }
    },
    classClick(){
        wx.navigateTo({
          url: '../course-content/course-content?id=1',
        })
    },
    firstClassClick(){
        wx.navigateTo({
          url: '../course-content/course-content?id=0',
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