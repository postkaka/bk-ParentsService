// pages/discount-coupon/mine-coupon/mine-coupon.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的优惠券',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
          infor:[
              {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程",key:"KHMT4OER33R5KJ",id:""},
              {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程",key:"KHMT4OADA3R5KJ",id:""},
              {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/selective.png",className:"美术XXXX课程",key:"KUIY4OER33R5KJ",id:""}
          ],
          infors:[
            {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/newselective.png",className:"美术XXXX课程",key:"KHMT4OER33R5KJ",id:""},
            {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/newselective.png",className:"美术XXXX课程",key:"KHMT4OADA3R5KJ",id:""},
            {preferentialPrice:20,nominalPrice:2000,startTime:"2020-05-28",endTime:"2020-05-28",src:"../../assets/image/newselective.png",className:"美术XXXX课程",key:"KUIY4OER33R5KJ",id:""}
        ],
          display:"none",
          course:["待使用","已使用","已过期"],
          type:0,
          nub:""
    },
    itemClick(e){
        console.log(e.detail)
        this.setData({
            type: e.detail
        })
    },
    couponUseClick(e){
        console.log(e.target.dataset.index)
        if(this.data.type == 0){
            this.setData({
                nub: e.target.dataset.index,
                display:''
            })
        }
    },
    couponUsePage(e){
        console.log(e.target.dataset.index)
        if(this.data.type == 0){
            this.setData({
                nub: e.target.dataset.index
            })
            let nub = this.data.nub
            wx.navigateTo({
              url: '../favorable-course/favorable-course?id='+ JSON.stringify(this.data.infor[nub].id,),
            })
        }
    },
    closeClick(){
        this.setData({
            display:'none'
        })
    },
    copyBtn(){
        // 复制当前key
        wx.setClipboardData({
          data: 'this.data.infor[nub].key',
          success: function(res){
              wx.showToast({
                title: '复制成功',
              })
          }
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