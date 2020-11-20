// pages/hour/hour.js
let  shows 
Page({

    /**
     * 页面的初始数据
     */
    data: {
        header:{
            title: '我的课时',
            fontColor: "#333333",
            headerbg: '#F5F5F5',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fback.png'
          },
        type: 1,
        list:[
            {show:2,name:"12",time:'12',consume:'0.00',gatedate:"0",evaluate:'0',correct:'0',leave:'0',impose:'0'},
            {show:2,name:"测试",time:'12',consume:'2.00',gatedate:"0",evaluate:'0',correct:'0',leave:'0',impose:'0'}
        ],
        btn: "展开",
        btnsrc:'../../assets/image/red-below.png',
        feel:{
            type:"所有课程",
            residue:"10",
            expirytime:"180"
        }
           
    },
    tabClick(){
        this.setData({
            type:1
        })

    },
    tabClicks(){
        this.setData({
            type:2
        })

    },
    btnClick(e){
      let indexs = e.currentTarget.dataset.index
         if(this.data.list[indexs].show == 1){
            var param = {};
            var string = "list["+indexs+"].show";
            param[string] = '2';
            this.setData(param);
            this.setData({
                btn: "展开",
                btnsrc: "../../assets/image/red-below.png", 
            })
        } else {
            var param = {};
            var string = "list["+indexs+"].show";
            param[string] = '1';
            this.setData(param);
            this.setData({  
                btn: "收起",
                btnsrc:'../../assets/image/pack.png',
            })
        }
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