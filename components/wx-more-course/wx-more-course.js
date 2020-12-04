// components/wx-more-course/wx-more-course.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Array,
            value: ''
        },
        display: {
            type: String,
            value: ""
        },
        displays: {
            type: String,
            value: 'none'
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
        itemClick(e){
            this.triggerEvent("itemClick",e.currentTarget.dataset.index)
        }
    }
})
