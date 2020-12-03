// pages/course-content/course-content.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
		header: {
		    homeCapsule: true,
		    title: '在学课程',
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
			time:"周一 09:10~10:10",
			state:"到课迟到",
			business:"教程大纲",
			businessthing:"无",
			homework:"作业",
			homeworkthing:"无",
			remark:"课堂点评",
			remarkthing:'点评人: 任生 2020-05-27 周三'
    },
    homework:[{name:'新作业',type:1,time:"2020-05-13 周三"},{name:'123',type:1,time:"2020-05-13 周三"}],
    id:"0",
    show:"1",
    display:"none"
    },
	remarkClick(){
		wx.navigateTo({
      url: '../course-content/class-review/class-review',
    })
  },
  itemClick(e){
    let id = e.currentTarget.dataset.index
    console.log(e.currentTarget)
    wx.navigateTo({
      url: '../course-content/homework-correcting/homework-correcting?id=' + id,
    })
  },
  cirleClick(){
    this.setData({
      show:0
    })
  },
  newboxClick(){
    this.setData({
      display:''
    })
  },
  btnClick(){
    this.setData({
      display:'none'
    })
  },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      this.setData({
        id: options.id
      })
      console.log(this.data.id)
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