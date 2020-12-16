// components/wx-discount-coupon/wx-discount-coupon.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        infor:{
           type: Object,
           value:{
            preferentialPrice:20,
            nominalPrice:2000,
            startTime:"2020-05-28",
            endTime:"2020-05-28",
            src:"../../assets/image/selective.png",
            className:"美术XXXX课程"
           }
        },
        nub:{
            type:String,
            value:1
        },
        color:{
            type:String,
            value:""
        },
        blackcolor:{
            type:String,
            value:""
        },
        colors:{
            type:String,
            value:"#194670"
        },
        show:{
            type:String,
            value:""
        },
        otherShow:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        couponUseClick(e){
            console.log("使用券码")
            console.log(e)
            this.triggerEvent("couponUseClick")
        },
        couponUsePage(){
            console.log("去使用")
            this.triggerEvent("couponUsePage")
        }
    }
})
