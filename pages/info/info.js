// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '课程详情',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          info:{
              age:"适合3-15岁孩子",
              name:'精品少儿美术',
              price:'￥10000'
          },
          choose:1,
          catalogueitem:["美术基础体系介绍","进入绘画的世界","绘画必要的经历","线条绘制手法与光影的表现"],
          catalogueitemelse:["透视法的诞生","成角透视","三点透视"],
          catalogueone:0,
          cataloguesen:0,
          comment: {
            grade: "5.0",
            allStar: 5,
            info: [{
              id: 1,
              name: "威萌恺特",
              img: "../../assets/image/memberImg.png",
              num: 4,
              star: 5,
              time: "2020-04-05"
            }, {
              id: 1,
              name: "威萌恺特",
              img: "../../assets/image/memberImg.png",
              num: 4,
              star: 5,
              time: "2020-04-05"
            }, {
              id: 1,
              name: "威萌恺特",
              img: "../../assets/image/memberImg.png",
              num: 4,
              star: 5,
              time: "2020-04-05"
            }, {
              id: 1,
              name: "威萌恺特",
              img: "../../assets/image/memberImg.png",
              num: 4,
              star: 5,
              time: "2020-04-05"
            }]
          }
    },
    choose: function (e) {
        var that = this;
        that.setData({
          choose: e.currentTarget.id
        })
      },
    catalogueoneClick(){
          if(this.data.catalogueone == 0){
              this.setData({
                  catalogueone: 1
              })
          }else {
              this.setData({
                  catalogueone:0
              })
              console.log(0)
          }
      },
    cataloguesenClick(){
        if(this.data.cataloguesen == 0){
            this.setData({
                cataloguesen: 1
            })
        }else {
            this.setData({
                cataloguesen:0
            })
            console.log(0)
        }
    },
    applyClick(){
        wx.navigateTo({
          url: '../apply/apply',
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