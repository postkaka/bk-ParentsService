// pages/hour/classhour/classhour.js
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
        first:"购买课时",
        last:"剩余课时",
        bylistdisplay:"",
        listheight:"462",
        infor:{
            src:"../../assets/image/head.png",
            name:"测试班级 学员: 冰冰",
            data:'2020-03-16'
          },
        timelist:{},
        list: {
            shoppingtime: "12.00",
            consumetime:"2.00",
            checktime:'2.00',
            rolltime:'0.00',
            customtime:'0.00',
            residuetime:'11.00'
        },
        freelist: {
            shoppingtime: "10.00",
            consumetime:"0.00",
            checktime:'0.00',
            rolltime:'0.00',
            customtime:'0.00',
            residuetime:'10.00'
        },
        buys: [],
        buyitem1: [{
            src:"../../assets/image/time1.png",
            buy:"+",
            type: "购买课时",
            time:"2020-04-27 周一",
            quantity:'12'
        }],
       buyitem2: [
        {
            src:"../../assets/image/time2.png",
            buy:"+",
            type: "测试班级",
            type2:"自定义加课时",
            time:"2020-03-30 周一",
            quantity:'3',
            quantity2:"08:05~09:05"
        }
       ],
       buyitem3: [
        {
            src:"../../assets/image/time3.png",
            buy:"+",
            type: "测试班级",
            type2:"出勤",
            time:"2020-03-30 周一",
            quantity:'10',
            quantity2:"14:18"
        }
       ],
       buyitem4: [ {
        src:"../../assets/image/time4.png",
        buy:"+",
        type: "测试班级",
        type2:"出勤",
        time:"2020-03-30 周一",
        quantity:'10',
        quantity2:"14:18"
    }],
    buyitem5: [ {
        src:"../../assets/image/time4.png",
        buy:"+",
        type: "报名新增",
        time:"2020-03-30 周一",
        quantity:'10',
    }],
       
        display: "none",
        type:["全部","出勤","忘记考勤","请假","未到","自定义减课时","自定义加课时","转入课时","转出课时"],
        currentIndex: 0,
        miantype:"选择类型"
    },
    tabClick(){
        this.setData({
            display: ''
        })
    },
    cancelClick(){
        this.setData({
            display:"none"
        })
    },
    confirmClick(e){
        let a = this.data.type[this.data.currentIndex]
        // console.log(a)
        this.setData({
            display:"none",
            miantype:a
        })
    },
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
        if(options.type != 0){
            let newList = this.data.buyitem5
            let buys = this.data.buys;
            let newLists = this.data.freelist
            let timelist = this.data.timelist
            timelist = newLists
            buys.push(...newList);
            this.setData({
                buys: buys,
                first:"赠送课时总计",
                bylistdisplay:"none",
                listheight:"398",
                last:"剩余赠送课时:",
                timelist: timelist

            })
        }else {
            let newLists = this.data.list
            let timelist = this.data.timelist
            timelist = newLists
            let newList = this.data.buyitem1
            let buys = this.data.buys;
            buys.push(...newList);
            this.setData({
                buys: buys,
                timelist: timelist
            })
        }
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