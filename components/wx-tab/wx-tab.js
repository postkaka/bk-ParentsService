// components/wx-tab/wx-tab.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        course: {
            type: Array,
            value: ''
        },
        left: {
            type: String,
            value: "5"
        },
        right:{
            type: String,
            value:''
        },
        currentIndex:{
            type: String,
            value:"0"
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
          /**
     * tab点击事件
     */
    itemClick(e) {
        // 1.设置最新的index
        this.setData({
          currentIndex: e.currentTarget.dataset.index
        })
        this.triggerEvent("itemClick",e.currentTarget.dataset.index)
      }
    }
})
