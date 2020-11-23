// components/wx-figure/wx-figure.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
       header:{
           type: Object,
           value:{
            homeCapsule: true,
            title: '选择学员',
            fontColor: "#FFFFFF",
            headerbg: '#184571',
            hiddenBlock: false,
            slot: false,
            src:'../../assets/image/fsback.png'
           }
       },
       title1: {
           type: String,
           value:''
       },
       title2: {
           type: String,
           value:''
       },
       src:{
            type: String,
            value:''
       },
       imagedisplay: {
           type: String,
           value:'none'
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

    }
})
